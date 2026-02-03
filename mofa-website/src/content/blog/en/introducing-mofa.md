---
title: "MoFA Development Framework: A Compositional AI Agent Building Platform"
description: "MoFA is a software framework for building AI agents through composition, enabling ordinary people to create extraordinary AI applications"
date: 2025-06-09
author: MoFA Team
tags: [Architecture, AI Framework, Dora-RS, Agent, Compositional AI]
---

MoFA (**M**odular **F**ramework for **A**gent) is a software framework for building AI agents through composition. Using MoFA, AI agents can be built from templates and composed by stacking to form more powerful Super Agents.

## 🎯 Design Philosophy

MoFA's unique design philosophy includes:

- **Ordinary People Doing Extraordinary Things**: AI should not be the exclusive domain of elites and giants. MoFA enables everyone to harness and develop AI, turning the impossible into possible, allowing ordinary people to create the extraordinary.

- **Composition AI**: Inspired by Unix philosophy, MoFA takes "composition" as its core principle. You can build agents, connect agents, and integrate tools like building blocks, making AI simple, flexible, and powerful.

- **Everything Agent**: Unlike most software, in MoFA's world, agents are the applications of the AI era. Not just large language models, they can be code, scripts, APIs, or even MoFA itself. MoFA is not just a framework, but an Agent ecosystem.

- **Data Flow**: While most agent frameworks rely on complex workflows (WorkFlow), MoFA chooses a more intuitive and powerful data flow (Data Flow) approach. This enables agents to be freely composed, decomposed, and reused.

## 🏗️ Technical Architecture

<img src="https://github.com/RelevantStudy/mofasearch/blob/main/hackathons/docs/images/image-20250310010710778.png" alt="MoFA Technical Architecture" style="zoom:67%;" />

MoFA and Dora-RS form a layered architecture, constituting the technology stack from底层通信 to上层智能体:

```
┌─────────────────────────────────────┐
│           MoFA Layer                │  ← AI Agent Development Framework
│  Agent Templates + Composition Logic│     (Python-based)
├─────────────────────────────────────┤
│           Dora Layer                │  ← Dataflow Engine
│  Real-time Communication + Cross-lang│     (Rust Core)
└─────────────────────────────────────┘
```

## 🚀 Quick Start

### Environment Preparation

#### Python Environment
```bash
# Install UV package manager to accelerate mofa installation
pip install uv
```

**Notes**:
- Keep local Python environment clean; avoid multiple Python versions to prevent conflicts between Dora-rs runtime and Mofa installation environments
- If using Anaconda/Miniconda, ensure Mofa is installed in the `Base` environment
- Requires Python environment >= 3.10
- Currently tested on WSL (Ubuntu 22.04) and macOS; Windows not yet supported

#### Rust Environment
```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Dora runtime
cargo install dora-cli

# Verify installation
dora --version
```

### Install MoFA

```bash
# Clone repository
git clone https://github.com/mofa-org/mofa.git
cd mofa/python

# Install dependencies
uv pip install -e . && pip install -e .
```

### Hello World Example

```bash
cd mofa/python/examples/hello_world

# Start Dora service
dora up

# Build and run dataflow
dora build hello_world_dataflow.yml
dora start hello_world_dataflow.yml

# Test in another terminal
terminal-input
> hello
# Output: hello
```

## 💡 Create Your First App in 5 Minutes

### 1. Create Agent Project
```bash
mofa new-agent my-llm-agent
cd my-llm-agent
```

### 2. Configure Environment Variables
Create `.env.secret` file:
```plaintext
LLM_API_KEY=your_api_key_here
LLM_API_BASE=https://api.openai.com/v1
LLM_MODEL=gpt-3.5-turbo
```

### 3. Implement Agent Logic
Edit `my_llm_agent/main.py`:
```python
from mofa.agent_build.base.base_agent import MofaAgent, run_agent
from openai import OpenAI
import os
from dotenv import load_dotenv

@run_agent
def run(agent: MofaAgent):
    try:
        load_dotenv('.env.secret')

        client = OpenAI(
            api_key=os.getenv('LLM_API_KEY'),
            base_url=os.getenv('LLM_API_BASE')
        )

        user_input = agent.receive_parameter('query')

        response = client.chat.completions.create(
            model=os.getenv('LLM_MODEL', 'gpt-3.5-turbo'),
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant."},
                {"role": "user", "content": user_input}
            ]
        )

        agent.send_output(
            agent_output_name='llm_result',
            agent_result=response.choices[0].message.content
        )

    except Exception as e:
        agent.logger.error(f"Error: {str(e)}")
        agent.send_output('llm_result', f"Error: {str(e)}")

def main():
    agent = MofaAgent(agent_name='my-llm-agent')
    run(agent=agent)

if __name__ == "__main__":
    main()
```

### 4. Create Dataflow Configuration
Create `my_llm_dataflow.yml`:
```yaml
nodes:
  - id: terminal-input
    build: pip install -e ../../node-hub/terminal-input
    path: dynamic
    outputs: data
    inputs:
      agent_response: my-llm-agent/llm_result

  - id: my-llm-agent
    build: pip install -e . ../../agent-hub/my-llm-agent
    path: my-llm-agent
    outputs: llm_result
    inputs:
      query: terminal-input/data
    env:
      IS_DATAFLOW_END: true
      WRITE_LOG: true
```

### 5. Run and Test
```bash
dora up
dora build my_llm_dataflow.yml
dora start my_llm_dataflow.yml

# Test in new terminal
terminal-input
> Hello, please introduce yourself
```

## 🔧 Build Custom Agent

### Create Using Template
```bash
mofa new-agent your_agent_name
```

### Core Code Example
```python
from mofa.agent_build.base.base_agent import MofaAgent, run_agent

@run_agent
def run(agent: MofaAgent):
    try:
        # Receive single agent input
        task = agent.receive_parameter('task')

        # Receive multiple agent inputs
        receive_datas = agent.receive_parameter(['example_one','example_two'])
        # Result similar to {'example_one':'example_one_data','example_two':'example_two_data'}

        # Processing logic - add your logic here
        result = process_task(task)

        # Send output - ensure your output is serializable (string, etc.)
        agent.send_output(
            agent_output_name='agent_result',
            agent_result=result
        )

    except Exception as e:
        agent.logger.error(f"Error: {str(e)}")


def process_task(data: str) -> str:
    """Example processing function"""
    return f"Processed: {data}"

def main():
    agent = MofaAgent(agent_name='my-new-agent')
    run(agent=agent)

if __name__ == "__main__":
    main()
```

---

Start your agent development journey today!
