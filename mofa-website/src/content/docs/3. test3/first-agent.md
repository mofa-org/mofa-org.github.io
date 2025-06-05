---
title: Your First Agent
description: Create and run your first MoFA agent in just a few minutes
---


Let's create your first MoFA agent! This tutorial will guide you through building a simple question-answering agent.

## Step 1: Import Required Modules

```python
from mofa import Agent, Pipeline
from mofa.messages import HumanMessage
```

## Step 2: Create an Agent

```python
# Create a simple Q&A agent
agent = Agent(
    name="qna-agent",
    model="gpt-3.5-turbo",
    system_prompt="You are a helpful AI assistant. Answer questions clearly and concisely."
)
```

## Step 3: Set Up a Pipeline

```python
# Create a pipeline to run the agent
pipeline = Pipeline()
pipeline.add(agent)
```

## Step 4: Interact with Your Agent

```python
# Send a message to the agent
message = HumanMessage(content="What is MoFA?")
response = pipeline.run(message)

print(response.content)
```

## Complete Example

Here's the complete code:

```python
from mofa import Agent, Pipeline
from mofa.messages import HumanMessage

# Create agent
agent = Agent(
    name="qna-agent",
    model="gpt-3.5-turbo",
    system_prompt="You are a helpful AI assistant."
)

# Create pipeline
pipeline = Pipeline()
pipeline.add(agent)

# Run conversation
message = HumanMessage(content="What is MoFA?")
response = pipeline.run(message)

print(response.content)
```

