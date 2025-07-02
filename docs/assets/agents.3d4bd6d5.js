const id = "1. concepts/agents.md";
						const collection = "docs";
						const slug = "1-concepts/agents";
						const body = "\n# MoFA智能体模版\n\n构建智能体有一定的设计模式（Design Pattern），MoFA提供一系列的设计模式的实现，供开发者作为模版使用。\n\n- [设计模式](templates/design_patterns.md)\n- [reasoner](templates/reasoner_template.md)\n- [self_refine](templates/self_refine_template.md)\n- [crewai](templates/crewai_template.md)\n- ...\n\n## MoFA组合智能体\n\n基于Dora-RS框架构建的MoFA智能体，实质上就是Dora-RS Dataflow。两个智能体之间可以通过数据连接进行组合，从而形成组合智能体。\n\n在上述的self_refine Agent模版和下面将要介绍的服务智能体和案例，都是MoFA组合智能体。\n\n## MoFA服务智能体\n\n智能体往往需要需要一些服务，包括检索增强生成，记忆，使用外部工具和任务规划和分解等。MoFA认为：Everything Agent。我们以MoFA智能体的方式提供RAG智能体，记忆智能体，规划智能体和行动智能体。开发者可以使用这些已经实现的服务智能体，与自己的智能体相连接组合从而获得相应的服务。MoFA也可以集成第三方的服务智能体，供开发者按照不同的需求使用。\n\n- rag\n- memory\n- action\n- planning\n\n## Nesting Design Patterns of AI Agents\n\nAI agents are intelligent software applications with various design patterns:\n\n- **LLM Inference**: Using large language models for basic inference\n- **Customized Prompt**: Tailoring system prompts for specific agents\n- **Reflection Pattern**: Agents capable of self-review and improvement\n- **Actor Pattern**: Agents with external tool and resource capabilities\n- **ReAct Pattern**: Combining reflection and tool usage\n- **Multi-Agent Collaboration**: Specialized agents working together\n\n## Agent Kernel Services\n\nMoFA provides core services to agents, including:\n- Memory management\n- Task planning\n- Knowledge base integration\n- RAG (Retrieval-Augmented Generation)\n- Action capabilities\n\n## Composition-Based Architecture\n\nComposition allows assembling elements into new entities without changing original components, enabling developers to build and recombine agents for new functionalities.\n\n## Dataflow-Driven Approach\n\nMoFA employs a dataflow-driven method focusing on data dependencies rather than business rules, simplifying and enhancing modularity.\n\n";
						const data = {title:"MoFA Agents",description:"Understanding MoFA agent concepts, design patterns, and composition"};
						const _internal = {
							type: 'content',
							filePath: "/Users/liyao/Code/mofa-org.github.io/mofa-website/src/content/docs/1. concepts/agents.md",
							rawData: "\ntitle: MoFA Agents\ndescription: Understanding MoFA agent concepts, design patterns, and composition",
						};

export { _internal, body, collection, data, id, slug };
