---
title: 基于Dora的Hello World
description: 使用Dora-RS框架构建Hello World智能体
order: 2
---



## 步骤1：安装开发和运行环境


## 步骤2：获取智能体模版

1. 前往 [MoFA Agent Hub](https://github.com/mofa-org/mofa/tree/main/agent-hub)。
2. 选择 [Hello World](https://github.com/mofa-org/mofa/tree/main/agent-hub/hello-world) 等模版。
3. 将模版复制到你的开发目录。
4. 查看仓库中的模版说明。

## 步骤3：配置文件设置

### 配置文件概述

创建或编辑 `reasoner_agent.yml` 文件：

```yaml
AGENT:
  ROLE: 知识助手
  BACKSTORY: <你的背景描述>
  TASK: null  # 特定任务

RAG:
  RAG_ENABLE: false
  MODULE_PATH: null
  RAG_MODEL_NAME: text-embedding-3-small
  COLLECTION_NAME: mofa
  IS_UPLOAD_FILE: true
  CHROMA_PATH: ./data/output/chroma_store
  FILES_PATH:
    - ./data/output/arxiv_papers
  ENCODING: utf-8
  CHUNK_SIZE: 256
  RAG_SEARCH_NUM: 2

WEB:
  WEB_ENABLE: false
  SERPER_API_KEY: <你的Serper API密钥>
  SEARCH_NUM: 20
  SEARCH_ENGINE_TIMEOUT: 5

MODEL:
  MODEL_API_KEY: <你的模型API密钥>
  MODEL_NAME: gpt-4o-mini
  MODEL_MAX_TOKENS: 2048

ENV:
  PROXY_URL: null
  AGENT_TYPE: reasoner

LOG:
  LOG_PATH: ./data/output/log/log.md
  LOG_TYPE: markdown
  LOG_STEP_NAME: reasoner_result
  CHECK_LOG_PROMPT: true
```

### 配置详情

#### 1. AGENT模块

- **ROLE**：助手角色名称。
- **BACKSTORY**：助手的背景描述。
- **TASK**：特定任务（默认为 `null`）。

#### 2. RAG模块

- **RAG_ENABLE**：启用（`true`）或禁用（`false`）RAG。
- **其他参数**：配置知识检索增强功能。

#### 3. WEB模块

- **WEB_ENABLE**：启用（`true`）或禁用（`false`）网络搜索。
- **SERPER_API_KEY**：Serper搜索API密钥。

#### 4. MODEL模块

- **MODEL_API_KEY**：模型服务的API密钥。
- **MODEL_NAME**：要使用的模型名称（例如 `gpt-4o-mini`）。
- **MODEL_MAX_TOKENS**：模型可生成的最大令牌数。

#### 5. ENV模块

- **PROXY_URL**：代理服务器URL（如不需要代理则设为 `null`）。
- **AGENT_TYPE**：智能体类型，例如 `reasoner`。

#### 6. LOG模块

- **LOG_PATH**：日志文件路径。
- **LOG_TYPE**：日志格式（例如 `markdown`）。
- **LOG_STEP_NAME**：日志步骤名称。
- **CHECK_LOG_PROMPT**：启用日志提示检查（`true` 或 `false`）。

## 步骤4：配置Dora Operator

创建 `reasoner_agent.py` 脚本：

```python
import os
from dora import DoraStatus
import pyarrow as pa
from mofa.kernel.utils.util import load_agent_config, create_agent_output
from mofa.run.run_agent import run_dspy_or_crewai_agent
from mofa.utils.files.dir import get_relative_path
from mofa.utils.log.agent import record_agent_result_log


class Operator:
    """
    Dora-rs Operator，用于处理INPUT事件、加载配置、运行智能体、记录结果和发送输出。
    """

    def on_event(self, dora_event, send_output) -> DoraStatus:
        if dora_event.get("type") == "INPUT":
            agent_inputs = ['data', 'task']
            event_id = dora_event.get("id")

            if event_id in agent_inputs:
                task = dora_event["value"][0].as_py()

                yaml_file_path = get_relative_path(
                    current_file=__file__,
                    sibling_directory_name='configs',
                    target_file_name='reasoner_agent.yml'
                )

                inputs = load_agent_config(yaml_file_path)
                inputs["task"] = task

                agent_result = run_dspy_or_crewai_agent(agent_config=inputs)

                log_step_name = inputs.get('log_step_name', "Step_one")
                record_agent_result_log(
                    agent_config=inputs,
                    agent_result={f"1, {log_step_name}": {task: agent_result}}
                )

                output_data = create_agent_output(
                    agent_name='keyword_results',
                    agent_result=agent_result,
                    dataflow_status=os.getenv('IS_DATAFLOW_END', True)
                )

                send_output(
                    "reasoner_result",
                    pa.array([output_data]),
                    dora_event.get('metadata', {})
                )

                print('reasoner_results:', agent_result)

        return DoraStatus.CONTINUE
```

## 步骤5：配置Dora数据流

创建或编辑 `reasoner_dataflow.yml` 文件：

```yaml
nodes:

  - id: terminal-input
    build: pip install -e ../../../node-hub/terminal-input
    path: dynamic
    outputs:
      - data
    inputs:
      reasoner_results: reasoner-agent/reasoner_results

  - id: reasoner-agent
    operator:
      python: scripts/reasoner_agent.py
      inputs:
        task: terminal-input/data
      outputs:
        - reasoner_results
```

### 节点说明

- **terminal-input**：
  - **功能**：处理初始输入。
  - **操作**：安装 `terminal-input` 模块。
  - **输出**：生成 `data`，传递给 `reasoner-agent`。
  - **输入**：接收 `reasoner_results`。
- **reasoner-agent**：
  - **功能**：处理任务并生成结果。
  - **操作**：运行 `reasoner_agent.py` 脚本。
  - **输入**：从 `terminal-input` 接收 `data` 作为 `task`。
  - **输出**：生成 `reasoner_results`，发送回 `terminal-input`。

## 步骤6：运行Dora数据流

### 使用Dora-RS CLI启动数据流

1. 启动协调器

```bash
dora up
```

2. 构建数据流

```bash
dora build reasoner_dataflow.yml
```

3. 启动数据流并自动附加

```bash
dora start reasoner_dataflow.yml --attach
```

4. 在另一个终端中，向智能体输入任务

```bash
terminal-input
```

然后输入你的查询与智能体交互。

## 总结

本"Hello World"示例演示了：
- 如何使用模版设置基本MoFA智能体
- 配置文件结构和参数
- 与Dora-RS数据流集成
- 运行和与智能体交互

这为构建更复杂的智能体和理解MoFA框架奠定了基础。
