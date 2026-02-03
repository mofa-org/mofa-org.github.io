---
title: Build Your First MoFA Agent in 6 Minutes
description: Quickly build a MoFA agent application based on large language models
order: 2
---


This guide will walk you through quickly building a MoFA agent based on large language models, implementing a complete development workflow from environment configuration to interactive testing through standardized processes.

## 0. Reference File Structure

```tree
.
└── mofa/
    ├── dataflows/                     # Dataflow configuration directory
    │   └── qwen_agent/                # Agent dataflow directory
    │       ├── logs/                  # Runtime logs directory
    │       ├── out/                   # Output files directory
    │       ├── my_llm_dataflow.yml    # Dataflow configuration
    │       └── .env.secret            # Environment variables configuration
    ├── node-hub/                      # Node hub directory
    │   ├── terminal-input/            # Terminal input node
    │   │   ├── README.md
    │   │   ├── pyproject.toml
    │   │   ├── terminal_input/        # Core code
    │   │   │   ├── __init__.py
    │   │   │   └── main.py
    │   │   └── tests/                 # Test directory
    │   │       └── test.py
    │   └── qwen_agent/                # Qwen agent node
    │       ├── README.md
    │       ├── pyproject.toml
    │       ├── qwen_agent/            # Core code
    │       │   ├── __init__.py
    │       │   ├── configs/           # Configuration directory
    │       │   │   └── agent.yml
    │       │   └── main.py            # Logic entry point
    │       └── tests/                 # Test directory
    │            └── test_main.py
    └── README.md                      # Framework documentation
```
## 1. Environment Variables Configuration (1 minute)

Create an environment variables file `.env.secret` in the example directory
(must be at the same level as the dataflow configuration file `dataflow.yml`, in this example: `mofa/dataflows/qwen_agent`)

Write the following configuration to `.env.secret`, replacing `LLM_API_KEY`, `LLM_API_BASE`, and `LLM_MODEL` with actual model parameters:
```plaintext
# Qwen API key
LLM_API_KEY=your_api_key_here
# Qwen model identifier (e.g., qwen-turbo, qwen-plus, etc., configure according to server support)
LLM_MODEL=qwen-turbo
# API endpoint base path
LLM_API_BASE=https://dashscope.aliyuncs.com/compatible-mode/v1
```
## 2. Initialize Agent Project (1 minute)

Use MoFA CLI to quickly create an agent project skeleton:
```bash
# Execute in node-hub directory (in this example: mofa/node-hub)
mofa new-agent qwen_agent
cd qwen_agent
```

The generated project structure follows MoFA standards, including core modules and configuration directories:
```tree
.
├── README.md                  # Project documentation
├── qwen_agent                 # Core code directory
│   ├── __init__.py            # Package identifier file
│   ├── configs                # Configuration files directory
│   │   └── agent.yml          # Agent configuration definition
│   └── main.py                # Core logic entry point
├── pyproject.toml             # Project dependencies and build configuration
└── tests                      # Unit test directory
    └── test_main.py           # Core functionality test cases
```


## 3. Configure Project Metadata (1 minute)

Modify `pyproject.toml` in the `qwen_agent` project
(in this example: `mofa/node-hub/qwen_agent/pyproject.toml`), configuring project metadata and dependencies:

```toml
[tool.poetry]
name = "qwen_agent"
version = "0.1.0"
authors = [
    "youremail@gmail.com",
]
description = "Qwen large language model agent based on MoFA framework"
license = "MIT"
homepage = "https://github.com/your-org/qwen_agent"
readme = "README.md"
packages = [{ include = "qwen_agent" }]

[tool.poetry.dependencies]
python = ">=3.10,<3.12"         # Compatible Python version range
dashscope = "1.20.0"            # Qwen API client dependency
python-dotenv = "*"             # Environment variable loading tool

[tool.poetry.scripts]
qwen_agent = "qwen_agent.main:main"  # Define executable entry

[build-system]
requires = ["poetry-core>=1.8.0"]    # Build system dependencies
build-backend = "poetry.core.masonry.api"  # Build backend specification
```


## 4. Implement Agent Core Logic (2 minutes)

Edit `main.py` in the `qwen_agent` module
(in this example: `mofa/node-hub/qwen_agent/qwen_agent/main.py`), implementing LLM calls and dataflow interaction logic:

```python
import os
from dotenv import load_dotenv
from mofa.agent_build.base.base_agent import MofaAgent, run_agent

def call_qwen_directly(user_input: str) -> str:
    """Call Qwen API to get generation results"""
    from dashscope import Generation
    try:
        response = Generation.call(
            model=os.getenv('LLM_MODEL', 'qwen-turbo'),
            api_key=os.getenv('LLM_API_KEY'),
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant."},
                {"role": "user", "content": user_input}
            ]
        )
        return response.output.text
    except Exception as e:
        return f"API call failed: {str(e)}"


@run_agent
def run(agent: MofaAgent):
    load_dotenv('.env.secret')
    user_input = agent.receive_parameter('query')

    if not user_input or str(user_input).strip() == "":
        return

    agent.write_log(f"Received input: {user_input}")
    agent.write_log("Forwarding to Qwen model for processing...")

    llm_result = call_qwen_directly(user_input)
    agent.write_log(f"Qwen model returned result: {llm_result}")

    agent.send_output('llm_result', llm_result)


def main():
    agent = MofaAgent(agent_name='my_llm_agent')
    run(agent=agent)

if __name__ == "__main__":
    main()
```


## 5. Define Dataflow Configuration (1 minute)

Create `my_llm_dataflow.yml` in the `dataflows/qwen_agent` directory
(same level as `.env.secret`, in this example: `mofa/dataflows/qwen_agent/my_llm_dataflow.yml`), configuring data interaction relationships between nodes:

```yaml
nodes:
  - id: terminal-input                 # Terminal input node ID
    build: pip install ../../node-hub/terminal-input  # Build command
    path: dynamic                      # Dynamic node identifier
    outputs:
      - data                           # Output port definition
    inputs:
      agent_response: qwen_agent/llm_result  # Input mapping: receive agent output

  - id: qwen_agent                     # Agent node ID
    build: pip install ../../node-hub/qwen_agent  # Build command
    path: qwen_agent                   # Agent package path
    outputs:
      - llm_result                     # Output port definition
    inputs:
      query: terminal-input/data       # Input mapping: receive terminal input
    env:                               # Environment variables configuration
      IS_DATAFLOW_END: true            # Mark as dataflow endpoint
      WRITE_LOG: true                  # Enable log output
```


## 6. Run and Test

Switch to the dataflow configuration directory (in this example: `mofa/dataflows/qwen_agent`), and execute the start command:

```bash
# Install dependencies and start dataflow
mofa run my_llm_dataflow.yml
```

Interaction test example:
```
(nodehub) root@user:~/mofa/dataflows/my_llm_agent# mofa run my_llm_dataflow.yml
Cleaning up existing dora processes...
Installing base requirements...
Starting dataflow with name: 22738b7e7d9c4197bc8ca1e65c294578
Starting terminal-input process...
You can now interact directly with the agents. Type 'exit' to quit.
 Send Your Task :  hi
-------------llm_result---------------
Hello! How can I assist you today? 😊
---------------------------------------
 Send Your Task :
```
