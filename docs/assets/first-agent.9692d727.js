const id = "3. test/first-agent.md";
						const collection = "docs";
						const slug = "3-test/first-agent";
						const body = "\n\nLet's create your first MoFA agent! This tutorial will guide you through building a simple question-answering agent.\n\n## Step 1: Import Required Modules\n\n```python\nfrom mofa import Agent, Pipeline\nfrom mofa.messages import HumanMessage\n```\n\n## Step 2: Create an Agent\n\n```python\n# Create a simple Q&A agent\nagent = Agent(\n    name=\"qna-agent\",\n    model=\"gpt-3.5-turbo\",\n    system_prompt=\"You are a helpful AI assistant. Answer questions clearly and concisely.\"\n)\n```\n\n## Step 3: Set Up a Pipeline\n\n```python\n# Create a pipeline to run the agent\npipeline = Pipeline()\npipeline.add(agent)\n```\n\n## Step 4: Interact with Your Agent\n\n```python\n# Send a message to the agent\nmessage = HumanMessage(content=\"What is MoFA?\")\nresponse = pipeline.run(message)\n\nprint(response.content)\n```\n\n## Complete Example\n\nHere's the complete code:\n\n```python\nfrom mofa import Agent, Pipeline\nfrom mofa.messages import HumanMessage\n\n# Create agent\nagent = Agent(\n    name=\"qna-agent\",\n    model=\"gpt-3.5-turbo\",\n    system_prompt=\"You are a helpful AI assistant.\"\n)\n\n# Create pipeline\npipeline = Pipeline()\npipeline.add(agent)\n\n# Run conversation\nmessage = HumanMessage(content=\"What is MoFA?\")\nresponse = pipeline.run(message)\n\nprint(response.content)\n```\n\n";
						const data = {title:"Your First Agent",description:"Create and run your first MoFA agent in just a few minutes"};
						const _internal = {
							type: 'content',
							filePath: "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/content/docs/3. test/first-agent.md",
							rawData: "\ntitle: Your First Agent\ndescription: Create and run your first MoFA agent in just a few minutes",
						};

export { _internal, body, collection, data, id, slug };
