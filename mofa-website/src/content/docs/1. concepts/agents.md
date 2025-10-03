---
title: MoFA Agents
description: Understanding MoFA agent concepts, design patterns, and composition
order: 1
---

# MoFA智能体模版

构建智能体有一定的设计模式（Design Pattern），MoFA提供一系列的设计模式的实现，供开发者作为模版使用。

- [设计模式](templates/design_patterns.md)
- [reasoner](templates/reasoner_template.md)
- [self_refine](templates/self_refine_template.md)
- [crewai](templates/crewai_template.md)
- ...

## MoFA组合智能体

基于Dora-RS框架构建的MoFA智能体，实质上就是Dora-RS Dataflow。两个智能体之间可以通过数据连接进行组合，从而形成组合智能体。

在上述的self_refine Agent模版和下面将要介绍的服务智能体和案例，都是MoFA组合智能体。

## MoFA服务智能体

智能体往往需要需要一些服务，包括检索增强生成，记忆，使用外部工具和任务规划和分解等。MoFA认为：Everything Agent。我们以MoFA智能体的方式提供RAG智能体，记忆智能体，规划智能体和行动智能体。开发者可以使用这些已经实现的服务智能体，与自己的智能体相连接组合从而获得相应的服务。MoFA也可以集成第三方的服务智能体，供开发者按照不同的需求使用。

- rag
- memory
- action
- planning

## Nesting Design Patterns of AI Agents

AI agents are intelligent software applications with various design patterns:

- **LLM Inference**: Using large language models for basic inference
- **Customized Prompt**: Tailoring system prompts for specific agents
- **Reflection Pattern**: Agents capable of self-review and improvement
- **Actor Pattern**: Agents with external tool and resource capabilities
- **ReAct Pattern**: Combining reflection and tool usage
- **Multi-Agent Collaboration**: Specialized agents working together

## Agent Kernel Services

MoFA provides core services to agents, including:
- Memory management
- Task planning
- Knowledge base integration
- RAG (Retrieval-Augmented Generation)
- Action capabilities

## Composition-Based Architecture

Composition allows assembling elements into new entities without changing original components, enabling developers to build and recombine agents for new functionalities.

## Dataflow-Driven Approach

MoFA employs a dataflow-driven method focusing on data dependencies rather than business rules, simplifying and enhancing modularity.

