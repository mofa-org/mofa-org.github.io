---
title: Understanding Agents
description: Learn about MoFA agents, their architecture, and how they work
---

[cn.md]
Agents are the core building blocks of MoFA. They are intelligent software components that can process information, make decisions, and perform actions.

## What is an Agent?

An agent in MoFA is:

- **Autonomous**: Can operate independently
- **Reactive**: Responds to messages and events
- **Composable**: Can be combined with other agents
- **Configurable**: Behavior can be customized

## Agent Architecture

```python
agent = Agent(
    name="my-agent",           # Unique identifier
    model="gpt-3.5-turbo",     # Language model
    system_prompt="...",       # Instructions
    tools=[],                  # Available tools
    memory=None,               # Memory system
    temperature=0.7            # Model parameters
)
```

## Agent Types

### 1. Basic Agents
Simple agents that process input and generate output:

```python
basic_agent = Agent(
    name="basic",
    model="gpt-3.5-turbo",
    system_prompt="You are a helpful assistant."
)
```

### 2. Tool-Using Agents
Agents that can use external tools:

```python
from mofa.tools import WebSearchTool, CalculatorTool

tool_agent = Agent(
    name="tool-user",
    model="gpt-3.5-turbo", 
    tools=[WebSearchTool(), CalculatorTool()]
)
```

### 3. Memory-Enabled Agents
Agents with persistent memory:

```python
from mofa.memory import VectorMemory

memory_agent = Agent(
    name="memory-enabled",
    model="gpt-3.5-turbo",
    memory=VectorMemory()
)
```

## Agent Lifecycle

1. **Initialization**: Agent is created with configuration
2. **Processing**: Agent receives and processes messages
3. **Action**: Agent performs computations or tool calls
4. **Response**: Agent generates and returns output

## Best Practices

- **Clear System Prompts**: Write specific, clear instructions
- **Appropriate Models**: Choose the right model for your task
- **Tool Selection**: Only include necessary tools
- **Memory Management**: Use memory efficiently
- **Error Handling**: Implement proper error handling

