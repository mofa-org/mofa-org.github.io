import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro.32e88c90.js';
import 'clsx';

const html = "<p><img src=\"https://github.com/user-attachments/assets/14484a34-0f6c-406d-b81b-c999a94f0d83\" alt=\"image\"></p>";

				const frontmatter = {"title":"111"};
				const file = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/content/docs/1. concepts/111.md";
				const url = undefined;
				function rawContent() {
					return "\n![image](https://github.com/user-attachments/assets/14484a34-0f6c-406d-b81b-c999a94f0d83)\n";
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
