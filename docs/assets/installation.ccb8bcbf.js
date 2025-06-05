import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro.32e88c90.js';
import 'clsx';

const html = "<p>This guide will help you install MoFA and set up your development environment.</p>";

				const frontmatter = {"title":"Installation","description":"How to install MoFA and set up your development environment"};
				const file = "/Users/liyao/Code/mofa-org.github.io/mofa-website/src/content/docs/3. test3/installation.md";
				const url = undefined;
				function rawContent() {
					return "\n\nThis guide will help you install MoFA and set up your development environment.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
