import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro.32e88c90.js';
import 'clsx';

const html = "<h1 id=\"hello-world\">Hello World</h1>\n<p><a href=\"hello_world.md\">English</a> | <a href=\"hello_world_cn.md\">简体中文</a></p>\n<p>This section introduces how to implement the simplest “Hello World” agent.</p>\n<p>The task of this agent is to print “Hello World” as output, regardless of the input it receives.</p>\n<p><a href=\"hello-world-dora\">Customization of an agent template based on Dora-RS + configuration of Dora-RS data flow</a></p>";

				const frontmatter = {"title":"Hello World Example","description":"The simplest MoFA agent example - Hello World"};
				const file = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/content/docs/3. examples/hello-world.md";
				const url = undefined;
				function rawContent() {
					return "\n# Hello World\n\n[English](hello_world.md) | [简体中文](hello_world_cn.md)\n\nThis section introduces how to implement the simplest \"Hello World\" agent.\n\nThe task of this agent is to print \"Hello World\" as output, regardless of the input it receives.\n\n[Customization of an agent template based on Dora-RS + configuration of Dora-RS data flow](hello-world-dora) ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello-world","text":"Hello World"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
