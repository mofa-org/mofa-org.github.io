---
title: "MoFA 开发框架：组合式 AI 智能体构建平台"
description: "MoFA 是一个以组合的方式构建 AI 智能体的软件框架，让平凡人也能创造非凡的 AI 应用"
date: 2025-06-09
author: MoFA Team
tags: [架构, AI框架, Dora-RS, 智能体, 组合式AI]
---

MoFA（**M**odular **F**ramework for **A**gent）是一个以组合的方式构建AI智能体的软件框架。使用MoFA，AI智能体可以通过模版方式构建，堆叠的方式组合，形成更强大的超级智能体（Super Agent）。

## 🎯 设计理念

MoFA 独特的设计理念是：

- **平凡人做非凡事**：AI 不该是精英和巨头的专属领地。MoFA 让每个人都能驾驭和发展 AI，把不可能变成可能，让平凡人也能创造非凡。

- **Composition AI**：受 Unix 哲学启发，MoFA 以"组合"作为核心原则。你可以像搭积木一样，构建智能体、连接智能体、集成工具，让 AI 变得简单、灵活、强大。

- **Everything Agent**：与绝大多数软件不同，在 MoFA 的世界里，智能体（Agent）就是 AI 时代的应用（Application）。不仅是大语言模型，它可以是代码、脚本、API，甚至是 MoFA 本身。MoFA 不是一个框架，而是一个 Agent 生态。

- **Data Flow**：大多数智能体框架依赖复杂的工作流（WorkFlow），而 MoFA 选择更直观、更强大的数据流（Data Flow）。这种方式让智能体能自由组合、拆解和重用。

## 🏗️ 技术架构

<img src="https://github.com/RelevantStudy/mofasearch/blob/main/hackathons/docs/images/image-20250310010710778.png" alt="MoFA技术架构图" style="zoom:67%;" />

MoFA 与 Dora-RS 形成分层架构，构成从底层通信到上层智能体的技术栈：

```
┌─────────────────────────────────────┐
│           MoFA 层                   │  ← AI智能体开发框架
│  智能体模板 + 组合逻辑 + 核心服务    │     (Python为主)
├─────────────────────────────────────┤
│           Dora 层                   │  ← 数据流引擎  
│  实时通信 + 跨语言 + 运行时管理     │     (Rust核心)
└─────────────────────────────────────┘
```

## 🚀 快速开始

### 环境准备

#### Python 环境
```bash
# 安装 UV 包管理器加速 mofa 安装
pip install uv
```

**注意事项**：
- 本地python环境要纯净，不要多个python版本，否则容易导致Dora-rs运行环境和Mofa安装环境的冲突
- 如果使用 Anaconda/Miniconda，务必将 Mofa 安装到 `Base` 环境下
- 要求 python 环境 >= 3.10
- 目前已在 WSL（Ubuntu 22.04）和 macOS 上测试，Windows 暂不支持

#### Rust 环境
```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 安装 Dora 运行时
cargo install dora-cli

# 验证安装
dora --version
```

### 安装 MoFA

```bash
# 克隆仓库
git clone https://github.com/moxin-org/mofa.git
cd mofa/python

# 安装依赖
uv pip install -e . && pip install -e . 
```

### Hello World 示例

```bash
cd mofa/python/examples/hello_world

# 启动 Dora 服务
dora up

# 构建并运行数据流
dora build hello_world_dataflow.yml
dora start hello_world_dataflow.yml

# 在另一个终端测试
terminal-input
> hello
# 输出: hello
```

## 💡 5分钟创建第一个应用

### 1. 创建 Agent 项目
```bash
mofa new-agent my-llm-agent
cd my-llm-agent
```

### 2. 配置环境变量
创建 `.env.secret` 文件：
```plaintext
LLM_API_KEY=your_api_key_here
LLM_API_BASE=https://api.openai.com/v1
LLM_MODEL=gpt-3.5-turbo
```

### 3. 实现 Agent 逻辑
编辑 `my_llm_agent/main.py`：
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

### 4. 创建数据流配置
创建 `my_llm_dataflow.yml`：
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

### 5. 运行和测试
```bash
dora up
dora build my_llm_dataflow.yml
dora start my_llm_dataflow.yml

# 新开终端测试
terminal-input
> 你好，请介绍一下自己
```

## 🔧 构建自定义 Agent

### 使用模板创建
```bash
mofa new-agent you_agent_name 
```

### 核心代码示例
```python
from mofa.agent_build.base.base_agent import MofaAgent, run_agent

@run_agent
def run(agent: MofaAgent):
    try:
        # 接收单个agent输入
        task = agent.receive_parameter('task')
        
        # 接收多个agent输入
        receive_datas = agent.receive_parameter(['example_one','example_two'])
        # 结果类似于 {'example_one':'example_one_data','example_two':'example_two_data'}

        # 处理逻辑 你可以把你的逻辑添加到这里
        result = process_task(task)
        
        # 发送输出 确保你的输出是可以被序列化的对象(字符串等)
        agent.send_output(
            agent_output_name='agent_result',
            agent_result=result
        )
        
    except Exception as e:
        agent.logger.error(f"Error: {str(e)}")
        

def process_task(data: str) -> str:
    """示例处理函数"""
    return f"Processed: {data}"

def main():
    agent = MofaAgent(agent_name='my-new-agent')
    run(agent=agent)

if __name__ == "__main__":
    main()
```

---

立即开始您的智能体开发之旅！
