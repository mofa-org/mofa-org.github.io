const id = "3. test/installation.md";
						const collection = "docs";
						const slug = "3-test/installation";
						const body = "\n\nThis guide will help you install MoFA and set up your development environment.\n\n## Prerequisites\n\nBefore installing MoFA, make sure you have:\n\n- **Python 3.8 or higher**\n- **pip package manager**\n- **Git** (for cloning repositories)\n- At least **4GB of RAM**\n\n## Installation Methods\n\n### Method 1: Install via pip (Recommended)\n\nThe easiest way to install MoFA is using pip:\n\n```bash\npip install mofa\n```\n\n### Method 2: Install from Source\n\nFor development or the latest features:\n\n```bash\n# Clone the repository\ngit clone https://github.com/moxin-org/mofa.git\ncd mofa\n\n# Install in development mode\npip install -e .\n```\n\n## Verify Installation\n\nTo verify that MoFA is installed correctly:\n\n```python\nimport mofa\nprint(mofa.__version__)\n```\n";
						const data = {title:"Installation",description:"How to install MoFA and set up your development environment"};
						const _internal = {
							type: 'content',
							filePath: "/Users/liyao/Code/mofa-org.github.io/mofa-website/src/content/docs/3. test/installation.md",
							rawData: "\ntitle: Installation\ndescription: How to install MoFA and set up your development environment",
						};

export { _internal, body, collection, data, id, slug };
