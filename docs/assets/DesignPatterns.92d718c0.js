import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro.32e88c90.js';
import 'clsx';

const html = "<h1 id=\"mofa-agent-design-patterns\">MoFA Agent Design Patterns</h1>\n<p>MoFA provides various design patterns that help developers build sophisticated agents with different capabilities and behaviors.</p>\n<h2 id=\"core-design-patterns\">Core Design Patterns</h2>\n<h3 id=\"1-reasoner-pattern\">1. Reasoner Pattern</h3>\n<p>The simplest pattern for building agents that can reason and respond to queries.</p>\n<h3 id=\"2-self-refine-pattern\">2. Self-Refine Pattern</h3>\n<p>Agents that can review and improve their own outputs through iterative refinement.</p>\n<h3 id=\"3-crewai-pattern\">3. CrewAI Pattern</h3>\n<p>Multi-agent collaboration pattern for complex task execution.</p>\n<h2 id=\"pattern-categories\">Pattern Categories</h2>\n<ul>\n<li><strong>Basic Patterns</strong>: Single-agent designs for simple tasks</li>\n<li><strong>Collaborative Patterns</strong>: Multi-agent coordination</li>\n<li><strong>Reflective Patterns</strong>: Self-improving agents</li>\n<li><strong>Service Patterns</strong>: Specialized service agents</li>\n</ul>\n<p>These patterns form the foundation for building more complex agent behaviors in the MoFA framework.</p>";

				const frontmatter = {"title":"Design Patterns","description":"Understanding various design patterns used in MoFA agents"};
				const file = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/content/docs/1. concepts/DesignPatterns.md";
				const url = undefined;
				function rawContent() {
					return "\n# MoFA Agent Design Patterns\n\nMoFA provides various design patterns that help developers build sophisticated agents with different capabilities and behaviors.\n\n## Core Design Patterns\n\n### 1. Reasoner Pattern\nThe simplest pattern for building agents that can reason and respond to queries.\n\n### 2. Self-Refine Pattern  \nAgents that can review and improve their own outputs through iterative refinement.\n\n### 3. CrewAI Pattern\nMulti-agent collaboration pattern for complex task execution.\n\n## Pattern Categories\n\n- **Basic Patterns**: Single-agent designs for simple tasks\n- **Collaborative Patterns**: Multi-agent coordination\n- **Reflective Patterns**: Self-improving agents\n- **Service Patterns**: Specialized service agents\n\nThese patterns form the foundation for building more complex agent behaviors in the MoFA framework.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mofa-agent-design-patterns","text":"MoFA Agent Design Patterns"},{"depth":2,"slug":"core-design-patterns","text":"Core Design Patterns"},{"depth":3,"slug":"1-reasoner-pattern","text":"1. Reasoner Pattern"},{"depth":3,"slug":"2-self-refine-pattern","text":"2. Self-Refine Pattern"},{"depth":3,"slug":"3-crewai-pattern","text":"3. CrewAI Pattern"},{"depth":2,"slug":"pattern-categories","text":"Pattern Categories"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
