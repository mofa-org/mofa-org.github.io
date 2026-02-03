---
title: "MoFA Framework: Compositional AI Agent Building Platform"
description: "MoFA is a software framework for building AI agents through composition, enabling ordinary people to create extraordinary AI applications"
date: 2025-06-09
author: MoFA Team
tags: [Architecture, AI Framework, Dora-RS, Agent, Compositional AI]
---

MoFA (**M**odular **F**ramework for **A**gent) is a software framework for building AI agents through composition. Using MoFA, AI agents can be built from templates and composed by stacking to form more powerful Super Agents.

## 🎯 Design Philosophy

MoFA's unique design philosophy includes:

- **Ordinary People Doing Extraordinary Things**: AI should not be the exclusive domain of elites and giants. MoFA enables everyone to harness and develop AI, turning the impossible into possible.

- **Composition AI**: Inspired by Unix philosophy, MoFA takes "composition" as its core principle. You can build agents, connect agents, and integrate tools like building blocks.

- **Everything Agent**: In MoFA's world, agents are the applications of the AI era. Not just large language models, they can be code, scripts, APIs, or even MoFA itself.

- **Data Flow**: While most agent frameworks rely on complex workflows, MoFA chooses a more intuitive and powerful data flow approach.

## 🏗️ Technical Architecture

<img src="https://github.com/RelevantStudy/mofasearch/blob/main/hackathons/docs/images/image-20250310010710778.png" alt="MoFA Architecture" style="zoom:67%;" />

MoFA and Dora-RS form a layered architecture:

```
┌─────────────────────────────────────┐
│           MoFA Layer                │  ← AI Agent Development Framework
│  Agent Templates + Composition      │     (Python-based)
├─────────────────────────────────────┤
│           Dora Layer                │  ← Dataflow Engine
│  Real-time Communication            │     (Rust Core)
└─────────────────────────────────────┘
```

## 🚀 Quick Start

### Environment Setup

#### Python Environment
```bash
pip install uv
```

**Requirements**:
- Python >= 3.10
- WSL (Ubuntu 22.04) or macOS
- Windows not yet supported

#### Rust Environment
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install dora-cli
dora --version
```

### Install MoFA
```bash
git clone https://github.com/mofa-org/mofa.git
cd mofa/python
uv pip install -e . && pip install -e .
```

### Hello World Example
```bash
cd mofa/python/examples/hello_world
dora up
dora build hello_world_dataflow.yml
dora start hello_world_dataflow.yml
```

## 💡 Create Your First App in 5 Minutes

```bash
mofa new-agent my-llm-agent
cd my-llm-agent
```

Create `.env.secret`:
```
LLM_API_KEY=your_api_key_here
LLM_API_BASE=https://api.openai.com/v1
LLM_MODEL=gpt-3.5-turbo
```

Edit `my_llm_agent/main.py` and run:
```bash
dora up
dora build my_llm_dataflow.yml
dora start my_llm_dataflow.yml
```

---

Start your agent development journey today!
