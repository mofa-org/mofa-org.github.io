import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro.32e88c90.js';
import 'clsx';

const html = "<p>This guide will help you install MoFA and set up your development environment.</p>\n<h2 id=\"prerequisites\">Prerequisites</h2>\n<p>Before installing MoFA, make sure you have:</p>\n<ul>\n<li><strong>Python 3.8 or higher</strong></li>\n<li><strong>pip package manager</strong></li>\n<li><strong>Git</strong> (for cloning repositories)</li>\n<li>At least <strong>4GB of RAM</strong></li>\n</ul>\n<h2 id=\"installation-methods\">Installation Methods</h2>\n<h3 id=\"method-1-install-via-pip-recommended\">Method 1: Install via pip (Recommended)</h3>\n<p>The easiest way to install MoFA is using pip:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">pip</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> mofa</span></span></code></pre>\n<h3 id=\"method-2-install-from-source\">Method 2: Install from Source</h3>\n<p>For development or the latest features:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#6A737D\"># Clone the repository</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> clone</span><span style=\"color:#9ECBFF\"> https://github.com/moxin-org/mofa.git</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">cd</span><span style=\"color:#9ECBFF\"> mofa</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D\"># Install in development mode</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">pip</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#79B8FF\"> -e</span><span style=\"color:#9ECBFF\"> .</span></span></code></pre>\n<h2 id=\"verify-installation\">Verify Installation</h2>\n<p>To verify that MoFA is installed correctly:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#F97583\">import</span><span style=\"color:#E1E4E8\"> mofa</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">print</span><span style=\"color:#E1E4E8\">(mofa.</span><span style=\"color:#79B8FF\">__version__</span><span style=\"color:#E1E4E8\">)</span></span></code></pre>";

				const frontmatter = {"title":"Installation","description":"How to install MoFA and set up your development environment"};
				const file = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/content/docs/3. test3/installation.md";
				const url = undefined;
				function rawContent() {
					return "\n\nThis guide will help you install MoFA and set up your development environment.\n\n## Prerequisites\n\nBefore installing MoFA, make sure you have:\n\n- **Python 3.8 or higher**\n- **pip package manager**\n- **Git** (for cloning repositories)\n- At least **4GB of RAM**\n\n## Installation Methods\n\n### Method 1: Install via pip (Recommended)\n\nThe easiest way to install MoFA is using pip:\n\n```bash\npip install mofa\n```\n\n### Method 2: Install from Source\n\nFor development or the latest features:\n\n```bash\n# Clone the repository\ngit clone https://github.com/moxin-org/mofa.git\ncd mofa\n\n# Install in development mode\npip install -e .\n```\n\n## Verify Installation\n\nTo verify that MoFA is installed correctly:\n\n```python\nimport mofa\nprint(mofa.__version__)\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"prerequisites","text":"Prerequisites"},{"depth":2,"slug":"installation-methods","text":"Installation Methods"},{"depth":3,"slug":"method-1-install-via-pip-recommended","text":"Method 1: Install via pip (Recommended)"},{"depth":3,"slug":"method-2-install-from-source","text":"Method 2: Install from Source"},{"depth":2,"slug":"verify-installation","text":"Verify Installation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
