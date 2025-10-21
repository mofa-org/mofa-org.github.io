# **6分钟开发首个MoFA智能体应用**

本指南将指导你快速构建一个基于大语言模型的MoFA智能体（Agent），通过标准化流程实现从环境配置到交互测试的完整开发链路。

## 0. 参考文件结构

```tree
.
└── mofa/
    ├── dataflows/                     # 数据流配置目录
    │   └── qwen_agent/                # 智能体数据流目录
    │       ├── logs/                  # 运行日志目录
    │       ├── out/                   # 输出文件目录
    │       ├── my_llm_dataflow.yml    # 数据流配置
    │       └── .env.secret            # 环境变量配置
    ├── node-hub/                      # 节点仓库目录
    │   ├── terminal-input/            # 终端输入节点
    │   │   ├── README.md
    │   │   ├── pyproject.toml
    │   │   ├── terminal_input/        # 核心代码
    │   │   │   ├── __init__.py
    │   │   │   └── main.py
    │   │   └── tests/                 # 测试目录
    │   │       └── test.py
    │   └── qwen_agent/                # Qwen智能体节点
    │       ├── README.md
    │       ├── pyproject.toml
    │       ├── qwen_agent/            # 核心代码
    │       │   ├── __init__.py
    │       │   ├── configs/           # 配置目录
    │       │   │   └── agent.yml
    │       │   └── main.py            # 逻辑入口
    │       └── tests/                 # 测试目录
    │            └── test_main.py
    └── README.md                      # 框架说明文档
```
## 1. 环境变量配置（1分钟）

在示例目录中创建环境变量文件 `.env.secret`  
（需与数据流配置文件 `dataflow.yml` 同级，本示例路径为 `mofa/dataflows/qwen_agent`）

向 `.env.secret` 写入以下配置，替换 `LLM_API_KEY`、`LLM_API_BASE` 和 `LLM_MODEL` 为实际模型参数：
```plaintext
# Qwen API 密钥
LLM_API_KEY=your_api_key_here
# Qwen 模型标识符（如 qwen-turbo、qwen-plus 等，根据服务端支持配置）
LLM_MODEL=qwen-turbo
# API 端点基础路径
LLM_API_BASE=https://dashscope.aliyuncs.com/compatible-mode/v1
```
## 2. 初始化智能体项目（1分钟）

使用MoFA CLI快速创建智能体项目骨架：
```bash
# 在 node-hub 目录下执行（本示例路径为 mofa/node-hub）
mofa new-agent qwen_agent
cd qwen_agent
```

生成的项目结构遵循MoFA规范，包含核心模块与配置目录：
```tree
.
├── README.md                  # 项目说明文档
├── qwen_agent                 # 核心代码目录
│   ├── __init__.py            # 包标识文件
│   ├── configs                # 配置文件目录
│   │   └── agent.yml          # 智能体配置定义
│   └── main.py                # 核心逻辑入口
├── pyproject.toml             # 项目依赖与构建配置
└── tests                      # 单元测试目录
    └── test_main.py           # 核心功能测试用例
```


## 3. 配置项目元信息（1分钟）

修改 `qwen_agent` 项目的 `pyproject.toml`  
（本示例路径为 `mofa/node-hub/qwen_agent/pyproject.toml`），配置项目元数据与依赖：

```toml
[tool.poetry]
name = "qwen_agent"
version = "0.1.0"
authors = [
    "youremail@gmail.com",
]
description = "基于MoFA框架的Qwen大语言模型智能体"
license = "MIT"
homepage = "https://github.com/your-org/qwen_agent"
readme = "README.md"
packages = [{ include = "qwen_agent" }]

[tool.poetry.dependencies]
python = ">=3.10,<3.12"         # 兼容Python版本范围
dashscope = "1.20.0"            # Qwen API客户端依赖
python-dotenv = "*"             # 环境变量加载工具

[tool.poetry.scripts]
qwen_agent = "qwen_agent.main:main"  # 定义可执行入口

[build-system]
requires = ["poetry-core>=1.8.0"]    # 构建系统依赖
build-backend = "poetry.core.masonry.api"  # 构建后端指定
```


## 4. 实现智能体核心逻辑（2分钟）

编辑 `qwen_agent` 模块的 `main.py`  
（本示例路径为 `mofa/node-hub/qwen_agent/qwen_agent/main.py`），实现LLM调用与数据流交互逻辑：

```python
import os
from dotenv import load_dotenv
from mofa.agent_build.base.base_agent import MofaAgent, run_agent

def call_qwen_directly(user_input: str) -> str:
    """调用Qwen API获取生成结果"""
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
        return f"API调用失败: {str(e)}"


@run_agent
def run(agent: MofaAgent):
    load_dotenv('.env.secret')
    user_input = agent.receive_parameter('query')
    
    if not user_input or str(user_input).strip() == "":
        return
    
    agent.write_log(f"收到输入: {user_input}")
    agent.write_log("转发至Qwen模型处理...")
    
    llm_result = call_qwen_directly(user_input)
    agent.write_log(f"Qwen模型返回结果: {llm_result}")
    
    agent.send_output('llm_result', llm_result)


def main():
    agent = MofaAgent(agent_name='my_llm_agent')
    run(agent=agent)

if __name__ == "__main__":
    main()
```


## 5. 定义数据流配置（1分钟）

在 `dataflows/qwen_agent` 目录下创建 `my_llm_dataflow.yml`  
（与 `.env.secret` 同级，本示例路径为 `mofa/dataflows/qwen_agent/my_llm_dataflow.yml`），配置节点间数据交互关系：

```yaml
nodes:
  - id: terminal-input                 # 终端输入节点ID
    build: pip install ../../node-hub/terminal-input  # 构建命令
    path: dynamic                      # 动态节点标识
    outputs:
      - data                           # 输出端口定义
    inputs:
      agent_response: qwen_agent/llm_result  # 输入映射：接收智能体输出

  - id: qwen_agent                     # 智能体节点ID
    build: pip install ../../node-hub/qwen_agent  # 构建命令
    path: qwen_agent                   # 智能体包路径
    outputs:
      - llm_result                     # 输出端口定义
    inputs:
      query: terminal-input/data       # 输入映射：接收终端输入
    env:                               # 环境变量配置
      IS_DATAFLOW_END: true            # 标识为数据流终点
      WRITE_LOG: true                  # 启用日志输出
```


## 6. 运行与测试

切换至数据流配置目录（本示例路径为 `mofa/dataflows/qwen_agent`），执行启动命令：

```bash
# 安装依赖并启动数据流
mofa run my_llm_dataflow.yml
```

交互测试示例：
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