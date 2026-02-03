---
title: MoFA Agent Templates
description: Understanding MoFA agent concepts, design patterns, and composition
order: 2
---


Building agents follows certain design patterns. MoFA provides a series of design pattern implementations for developers to use as templates.


## MoFA Composite Agents

MoFA agents built on the Dora-RS framework are essentially Dora-RS Dataflows. Two agents can be composed through data connections to form composite agents.

The self_refine Agent template mentioned above, as well as the service agents and examples to be introduced below, are all MoFA composite agents.

## MoFA Service Agents

Agents often require various services, including retrieval-augmented generation, memory, external tool usage, and task planning and decomposition. MoFA believes in: Everything Agent. We provide RAG agents, memory agents, planning agents, and action agents in the form of MoFA agents. Developers can use these ready-made service agents, connect and compose them with their own agents to obtain corresponding services. MoFA can also integrate third-party service agents for developers to use according to different needs.

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
