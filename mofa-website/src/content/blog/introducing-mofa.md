---
title: "MoFA 技术架构介绍：基于 Dora-RS 的模块化 AI 智能体框架"
description: "介绍 MoFA 的技术架构，探讨其如何基于 Dora-RS 框架构建模块化、可组合的 AI 智能体系统"
date: 2025-06-09
author: MoFA Team
tags: [架构, AI框架, Dora-RS, 智能体, 技术]
---


MoFA（**M**odular **F**ramework for **A**gent）是一个基于 Dora-RS 数据流引擎构建的智能体开发框架。本文介绍 MoFA 的技术架构和设计思路。

## 🏗️ 整体架构设计

<svg aria-roledescription="flowchart-v2" role="graphics-document document" viewBox="-8 -8 6160.376953125 539" style="max-width: 100%; height: auto;" xmlns="http://www.w3.org/2000/svg" width="100%"><style>#mermaid-svg-inline{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:rgba(204, 204, 204, 0.87);}#mermaid-svg-inline .error-icon{fill:#bf616a;}#mermaid-svg-inline .error-text{fill:#bf616a;stroke:#bf616a;}#mermaid-svg-inline .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-inline .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-inline .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-inline .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-inline .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-inline .marker{fill:rgba(204, 204, 204, 0.87);stroke:rgba(204, 204, 204, 0.87);}#mermaid-svg-inline .marker.cross{stroke:rgba(204, 204, 204, 0.87);}#mermaid-svg-inline svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-inline .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:rgba(204, 204, 204, 0.87);}#mermaid-svg-inline .cluster-label text{fill:#ffffff;}#mermaid-svg-inline .cluster-label span,#mermaid-svg-inline p{color:#ffffff;}#mermaid-svg-inline .label text,#mermaid-svg-inline span,#mermaid-svg-inline p{fill:rgba(204, 204, 204, 0.87);color:rgba(204, 204, 204, 0.87);}#mermaid-svg-inline .node rect,#mermaid-svg-inline .node circle,#mermaid-svg-inline .node ellipse,#mermaid-svg-inline .node polygon,#mermaid-svg-inline .node path{fill:#1a1a1a;stroke:#2a2a2a;stroke-width:1px;}#mermaid-svg-inline .flowchart-label text{text-anchor:middle;}#mermaid-svg-inline .node .label{text-align:center;}#mermaid-svg-inline .node.clickable{cursor:pointer;}#mermaid-svg-inline .arrowheadPath{fill:#e5e5e5;}#mermaid-svg-inline .edgePath .path{stroke:rgba(204, 204, 204, 0.87);stroke-width:2.0px;}#mermaid-svg-inline .flowchart-link{stroke:rgba(204, 204, 204, 0.87);fill:none;}#mermaid-svg-inline .edgeLabel{background-color:#1a1a1a99;text-align:center;}#mermaid-svg-inline .edgeLabel rect{opacity:0.5;background-color:#1a1a1a99;fill:#1a1a1a99;}#mermaid-svg-inline .labelBkg{background-color:rgba(26, 26, 26, 0.5);}#mermaid-svg-inline .cluster rect{fill:rgba(64, 64, 64, 0.47);stroke:#30373a;stroke-width:1px;}#mermaid-svg-inline .cluster text{fill:#ffffff;}#mermaid-svg-inline .cluster span,#mermaid-svg-inline p{color:#ffffff;}#mermaid-svg-inline div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:#88c0d0;border:1px solid #30373a;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-inline .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgba(204, 204, 204, 0.87);}#mermaid-svg-inline :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g id="mermaid-svg-inline"><g><g class="clusters"><g class="cluster default flowchart-label"><rect height="312.5" width="3988.619140625" y="0" x="0" ry="0" rx="0" style=""/><g transform="translate(1958.3017578125, 0)" class="cluster-label"><text class="nodeLabel">MoFA 架构</text></g></g><g class="cluster default flowchart-label"><rect height="396" width="2135.7578125" y="127" x="4008.619140625" ry="0" rx="0" style=""/><g transform="translate(5030.134765625, 127)" class="cluster-label"><text class="nodeLabel">Dora-RS 架构</text></g></g></g><g class="edgePaths"><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M349.477,58.5L349.477,146.7"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M263.615,185.5L129.507,250.821"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M385.081,185.5L457.883,248.7"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M440.34,179.14L795.48,248.7"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M440.34,174.572L1145.449,248.7"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M3837.61,58.5L4102.636,156.775"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M4175.287,185.5L4175.287,248.7"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M4175.287,287.5L4175.287,375.7"/><path style="fill:none;stroke:rgba(204, 204, 204, 0.87);stroke-width:2px" d="M4175.287,414.5L4175.287,459.2"/></g><g class="nodes"><g transform="translate(349.4765625, 41.75)" class="node default"><rect height="33.5" width="137.1015625" y="-16.75" x="-68.55078125" ry="0" rx="0" style="fill:#f3e5f5;" class="basic label-container"/><text class="nodeLabel">CLI - mofa/cli.py</text></g><g transform="translate(349.4765625, 168.75)" class="node default"><rect height="33.5" width="181.7265625" y="-16.75" x="-90.86328125" ry="0" rx="0" style="" class="basic label-container"/><text class="nodeLabel">Agent Build Framework</text></g><g transform="translate(156.09765625, 270.75)" class="node default"><rect height="33.5" width="242.1953125" y="-16.75" x="-121.09765625" ry="0" rx="0" style="fill:#f3e5f5;" class="basic label-container"/><text class="nodeLabel">Base Agent - agent_build/base/</text></g><g transform="translate(457.8828125, 270.75)" class="node default"><rect height="33.5" width="261.375" y="-16.75" x="-130.6875" ry="0" rx="0" style="" class="basic label-container"/><text class="nodeLabel">ReasonER - agent_build/reasoner/</text></g><g transform="translate(795.48046875, 270.75)" class="node default"><rect height="33.5" width="313.8203125" y="-16.75" x="-156.91015625" ry="0" rx="0" style="" class="basic label-container"/><text class="nodeLabel">CrewAI Integration - agent_build/crewai/</text></g><g transform="translate(1145.44921875, 270.75)" class="node default"><rect height="33.5" width="286.1171875" y="-16.75" x="-143.05859375" ry="0" rx="0" style="" class="basic label-container"/><text class="nodeLabel">Self Refine - agent_build/self_refine/</text></g><g transform="translate(4175.287109375, 168.75)" class="node default"><rect height="33.5" width="134.84375" y="-16.75" x="-67.421875" ry="0" rx="0" style="fill:#e1f5fe;" class="basic label-container"/><text class="nodeLabel">CLI - binaries/cli</text></g><g transform="translate(4175.287109375, 270.75)" class="node default"><rect height="33.5" width="263.3359375" y="-16.75" x="-131.66796875" ry="0" rx="0" style="fill:#e1f5fe;" class="basic label-container"/><text class="nodeLabel">Coordinator - binaries/coordinator</text></g><g transform="translate(4175.287109375, 397.75)" class="node default"><rect height="33.5" width="209.7265625" y="-16.75" x="-104.86328125" ry="0" rx="0" style="fill:#e1f5fe;" class="basic label-container"/><text class="nodeLabel">Daemon - binaries/daemon</text></g><g transform="translate(4175.287109375, 481.25)" class="node default"><rect height="33.5" width="211.3828125" y="-16.75" x="-105.69140625" ry="0" rx="0" style="fill:#e1f5fe;" class="basic label-container"/><text class="nodeLabel">Runtime - binaries/runtime</text></g></g></g></svg>

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

## 🔧 MoFA 核心组件

### 1. 智能体构建框架 (Agent Build Framework)

提供智能体开发的基础抽象和常见模式：

#### **基础智能体 (Base Agent)**
```python
from mofa.agent_build.base.base_agent import MofaAgent
from dora import Node

class MofaAgent:
    def __attrs_post_init__(self):
        self.node = Node(self.agent_name)  # 集成 Dora 节点
        
    def receive_parameter(self, parameter_name: str):
        for event in self.node:  # 使用 Dora 事件循环
            # 智能体业务逻辑
            
    def send_output(self, output_name: str, result: Any):
        self.node.send_output(output_name, ...)  # 通过 Dora 发送
```

#### **智能体模式**
- **ReasonER**: 支持推理链的智能体
- **CrewAI Integration**: 集成 CrewAI 的多智能体协作
- **Self Refine**: 支持输出自我改进的智能体

### 2. 核心服务 (Kernel Services)

提供智能体系统的基础服务：

- **Memory**: 智能体记忆管理
- **Planning**: 任务规划和调度
- **RAG**: 检索增强生成
- **Tools**: 工具调用和管理

### 3. 智能体模板 (Agent Templates)

预构建的智能体配置，简化开发流程：

```yaml
# 智能体配置示例
nodes:
  - id: reasoning-agent
    build: pip install -e ../../agent-hub/openai-agent
    path: openai-agent
    inputs:
      query: terminal-input/data
    outputs:
      - reasoning_result
```

### 4. 生态系统

#### **Node Hub**: 扩展 Dora 生态
- `terminal-input` / `terminal-print`: 终端 I/O 节点
- `dora-openai-server`: OpenAI API 服务集成
- `openai-server-stream`: 流式 AI 服务

#### **Agent Hub**: 预构建智能体库
- `hello-world`: 基础示例智能体
- `openai-agent`: OpenAI 集成智能体
- `memory-agent`: 带记忆的智能体
- `kling-agent`: 视频生成智能体
- 更多专用智能体...

## ⚡ Dora-RS 基础设施

### 架构组成

Dora-RS 为 MoFA 提供运行时基础：

```
dora/
├── binaries/              # 运行时组件
│   ├── cli/              # dora 命令行工具
│   ├── coordinator/      # 分布式协调器
│   ├── daemon/           # 后台守护进程
│   └── runtime/          # 数据流运行时
├── libraries/             # 核心库
│   ├── core/            # 调度引擎
│   ├── communication-layer/ # 通信层
│   ├── shared-memory-server/ # 共享内存服务
│   └── message/         # 基于 Apache Arrow 的消息系统
├── apis/                 # 多语言 API
│   ├── rust/ python/ c/ c++/  # 跨语言支持
└── node-hub/            # 预构建节点
    ├── dora-yolo/       # YOLO 目标检测
    ├── dora-sam2/       # SAM2 分割
    ├── dora-qwen/       # Qwen 大语言模型
    └── ...              # 更多 AI/硬件节点
```

### 技术特点

1. **性能**: 基于 Rust 和共享内存的高效通信
2. **零拷贝**: 基于 Apache Arrow 的数据传输
3. **跨语言**: Python 智能体可与其他语言节点协作
4. **实时性**: 低延迟的节点间通信

## 🔄 数据流设计

### 数据流 vs 工作流

MoFA 采用数据流驱动的设计：

```
传统工作流:
Task → Rule → Step → Rule → Step → Result

数据流方式:
Data → Node → Data → Node → Data → Result
  ↑      ↑      ↑      ↑      ↑
  |   智能体   |   智能体   |
  └─────────通信层──────┘
```

### 配置驱动

通过 YAML 配置实现智能体组合：

```yaml
# hello_world_dataflow.yml
nodes:
  - id: terminal-input
    build: pip install -e ../../node-hub/terminal-input
    path: dynamic
    outputs: [data]
    inputs:
      agent_response: hello-world-agent/hello_world_result
      
  - id: hello-world-agent
    build: pip install -e ../../agent-hub/hello-world
    path: hello-world
    outputs: [hello_world_result]
    inputs:
      query: terminal-input/data
    env:
      IS_DATAFLOW_END: true
      WRITE_LOG: true
```

## 🔗 关键集成

### 1. 智能体与 Dora 的集成

```python
# MoFA 智能体使用 Dora Node
from dora import Node

class MofaAgent:
    def __attrs_post_init__(self):
        self.node = Node(self.agent_name)
```

### 2. 生态系统扩展

| 组件类型 | Dora原生 | MoFA扩展 |
|----------|----------|----------|
| MoFA专用 | - | `dora-openai-server`, `openai-server-stream` |
| 智能体 | - | `agent-hub/*` |

### 3. 数据流连接

通过 Dora 的数据流机制实现：
- 智能体与硬件设备通信
- 智能体与 AI 模型交互
- 智能体数据流构建

## 🎯 组合式智能体

### 组合层次

```
复合智能体
    ↓
基础智能体组合
    ↓
MofaAgent
    ↓
Dora Node
```

### 应用示例

```python
# 基础智能体
@run_agent
def run(agent: MofaAgent):
    user_query = agent.receive_parameter('query')
    # 处理逻辑
    agent.send_output('result', processed_data)

# 通过配置组合：input → reasoning_agent → memory_agent → output
```

## 🚀 技术优势

### 1. 性能
- **Rust 内核**: 内存安全和性能
- **共享内存**: 减少数据拷贝
- **Apache Arrow**: 高效的列式数据格式

### 2. 开发体验
- **配置化**: YAML 配置完成组合
- **模板化**: 预构建的智能体和模式
- **跨语言**: 统一的开发接口

### 3. 扩展性
- **分布式**: 支持分布式部署
- **模块化**: 松耦合的组件设计
- **生态**: 丰富的节点和智能体库




---
