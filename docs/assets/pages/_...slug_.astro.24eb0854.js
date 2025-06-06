import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, A as AstroError, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from '../astro.32e88c90.js';
/* empty css                           */import 'clsx';
/* empty css                           *//* empty css                           */
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header style="position: sticky; top: 0; background: white; border-bottom: 4px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 50;"> <nav class="container" style="padding: 16px; display: flex; align-items: center; justify-content: space-between;"> <a href="https://mofa.ai" style="display: flex; align-items: center; gap: 8px; text-decoration: none;" target="_blank" rel="noopener noreferrer"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"> <span class="gradient-text" style="font-size: 1.5rem; font-weight: 700;">MoFA</span> </a> <div style="display: flex; align-items: center; gap: 32px;"> <a href="/" class="nav-link" data-en="Home" data-zh="首页">Home</a> <a href="/docs" class="nav-link" data-en="Docs" data-zh="文档">Docs</a> <!-- 临时隐藏 Examples 链接 --> <!-- <a href="https://demo.mofa.ai" class="nav-link" target="_blank" rel="noopener noreferrer" data-en="Examples" data-zh="示例">Examples</a> --> <a href="/blog" class="nav-link" data-en="Blog" data-zh="博客">Blog</a> <!-- 语言切换按钮 --> <div style="display: flex; align-items: center; gap: 8px;"> <button id="lang-toggle" style="
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          background: transparent;
          border: 2px solid var(--mondrian-gray);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--mondrian-black);
        " onmouseover="this.style.borderColor='var(--mondrian-red)'" onmouseout="this.style.borderColor='var(--mondrian-gray)'"> <span id="current-lang">🇺🇸 EN</span> <span style="font-size: 0.75rem; opacity: 0.6;">▼</span> </button> </div> <a href="https://github.com/moxin-org/mofa" class="btn-primary" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg>
GitHub
</a> </div> </nav> </header> <!-- 添加语言切换功能的JavaScript --> `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer style="background-color: var(--mondrian-black); color: white;"> <div class="container py-12"> <div class="text-center"> <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px;"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 32px; height: 32px; border-radius: 6px; object-fit: cover;"> <span style="font-size: 1.25rem; font-weight: 700;">MoFA</span> </div> <p style="color: #9ca3af; margin-bottom: 8px;" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师">
Make Ordinary Developers Full-stack AI Engineers
</p> <p style="color: #9ca3af; margin-bottom: 24px;" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架">
Modular Framework for AI Agents
</p> <div style="display: flex; justify-content: center; gap: 32px; margin-bottom: 16px;"> <a href="https://github.com/moxin-org/mofa" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">GitHub</a> <a href="https://discord.gg/mofa-ai" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">Discord</a> <a href="/docs" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-en="Docs" data-zh="文档">Docs</a> </div> <p style="color: #6b7280; font-size: 0.875rem;" data-en="© 2025 MoFA. All rights reserved." data-zh="© 2025 MoFA. 保留所有权利.">
&copy; 2024 MoFA. All rights reserved.
</p> </div> </div> </footer> <!-- 返回顶部按钮 --> <button id="back-to-top" title="Go to top" style="
  display: none; /* Hidden by default */
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: var(--mondrian-red);
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s, opacity 0.3s, visibility 0.3s;
">
↑
</button> <!-- Footer 脚本 --> `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://mofa-org.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "MoFA - Make Ordinary Developers Full-stack AI Engineers" } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon-32x32.png"><link rel="shortcut icon" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | MoFA</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/layouts/BaseLayout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://mofa-org.github.io","ASSETS_PREFIX":undefined},{_:process.env._,}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/introducing-mofa copy.md": () => import('../introducing-mofa copy.6ac8ded0.js'),"/src/content/blog/introducing-mofa.md": () => import('../introducing-mofa.57c9eaf3.js'),"/src/content/docs/0.overview.md": () => import('../0.overview.8abfbc8e.js'),"/src/content/docs/1. concepts/agents.md": () => import('../agents.6147fe12.js'),"/src/content/docs/2. getting-started/first-agent.md": () => import('../first-agent.e6ea65e9.js'),"/src/content/docs/2. getting-started/installation.md": () => import('../installation.151328d0.js'),"/src/content/docs/3. test/first-agent.md": () => import('../first-agent.9692d727.js'),"/src/content/docs/3. test/installation.md": () => import('../installation.d1170d9a.js'),"/src/content/docs/3. test2/first-agent.md": () => import('../first-agent.aacfb7fe.js'),"/src/content/docs/3. test2/installation.md": () => import('../installation.0a1e1c27.js'),"/src/content/docs/3. test3/first-agent.md": () => import('../first-agent.b19e296a.js'),"/src/content/docs/3. test3/installation.md": () => import('../installation.b738fb47.js')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"introducing-mofa":"/src/content/blog/introducing-mofa.md","introducing-mofa-copy":"/src/content/blog/introducing-mofa copy.md"}},"docs":{"type":"content","entries":{"0overview":"/src/content/docs/0.overview.md","1-concepts/agents":"/src/content/docs/1. concepts/agents.md","2-getting-started/installation":"/src/content/docs/2. getting-started/installation.md","2-getting-started/first-agent":"/src/content/docs/2. getting-started/first-agent.md","3-test/first-agent":"/src/content/docs/3. test/first-agent.md","3-test/installation":"/src/content/docs/3. test/installation.md","3-test2/first-agent":"/src/content/docs/3. test2/first-agent.md","3-test2/installation":"/src/content/docs/3. test2/installation.md","3-test3/first-agent":"/src/content/docs/3. test3/first-agent.md","3-test3/installation":"/src/content/docs/3. test3/installation.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/introducing-mofa copy.md": () => import('../introducing-mofa copy.ea4935e3.js'),"/src/content/blog/introducing-mofa.md": () => import('../introducing-mofa.b268539b.js'),"/src/content/docs/0.overview.md": () => import('../0.overview.3cbc7e7e.js'),"/src/content/docs/1. concepts/agents.md": () => import('../agents.0a87cef3.js'),"/src/content/docs/2. getting-started/first-agent.md": () => import('../first-agent.c65856df.js'),"/src/content/docs/2. getting-started/installation.md": () => import('../installation.eb299c47.js'),"/src/content/docs/3. test/first-agent.md": () => import('../first-agent.2358d90b.js'),"/src/content/docs/3. test/installation.md": () => import('../installation.576e3205.js'),"/src/content/docs/3. test2/first-agent.md": () => import('../first-agent.53adc8eb.js'),"/src/content/docs/3. test2/installation.md": () => import('../installation.b3c319cf.js'),"/src/content/docs/3. test3/first-agent.md": () => import('../first-agent.64695aa4.js'),"/src/content/docs/3. test3/installation.md": () => import('../installation.477b8c6e.js')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://mofa-org.github.io");
async function getStaticPaths$1() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description, "data-astro-cid-7jjqptxk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;" data-astro-cid-7jjqptxk> <!-- 返回博客按钮 --> <div style="margin-bottom: 40px;" data-astro-cid-7jjqptxk> <a href="/blog" style="color: #0066cc; text-decoration: none; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px;" onmouseover="this.style.color='#004499'" onmouseout="this.style.color='#0066cc'" data-astro-cid-7jjqptxk>
← 返回博客
</a> </div> <!-- 文章头部 --> <header style="margin-bottom: 40px; padding-bottom: 32px; border-bottom: 1px solid #e5e5e5;" data-astro-cid-7jjqptxk> <!-- 文章元信息 --> <div style="margin-bottom: 20px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;" data-astro-cid-7jjqptxk> <time style="color: #666; font-size: 0.9rem;" data-astro-cid-7jjqptxk> ${post.data.date.toLocaleDateString("zh-CN")} </time> ${post.data.tags && renderTemplate`<div style="display: flex; gap: 8px;" data-astro-cid-7jjqptxk> ${post.data.tags.map((tag) => renderTemplate`<span style="background: #f0f0f0; color: #333; padding: 4px 12px; border-radius: 16px; font-size: 0.8rem;" data-astro-cid-7jjqptxk> ${tag} </span>`)} </div>`} </div> <!-- 文章标题 --> <h1 style="font-size: 2.5rem; font-weight: bold; margin: 0 0 16px 0; line-height: 1.2; color: #1a1a1a;" data-astro-cid-7jjqptxk> ${post.data.title} </h1> <!-- 文章描述 --> <p style="font-size: 1.2rem; color: #666; margin: 0 0 20px 0; line-height: 1.6;" data-astro-cid-7jjqptxk> ${post.data.description} </p> <!-- 作者信息 --> <div style="color: #888; font-size: 0.9rem;" data-astro-cid-7jjqptxk>
作者：${post.data.author} </div> </header> <!-- 文章内容 --> <article class="prose" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </article> <!-- 文章底部 --> <footer style="margin-top: 60px; padding-top: 32px; border-top: 1px solid #e5e5e5;" data-astro-cid-7jjqptxk> <div style="display: flex; flex-direction: column; gap: 24px; text-align: center;" data-astro-cid-7jjqptxk> <!-- 互动区域 --> <div data-astro-cid-7jjqptxk> <p style="color: #666; margin: 0 0 16px 0;" data-astro-cid-7jjqptxk>喜欢这篇文章？</p> <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;" data-astro-cid-7jjqptxk> <a href="https://github.com/moxin-org/mofa" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: none; padding: 8px 16px; border: 1px solid #0066cc; border-radius: 4px; font-size: 0.9rem;" onmouseover="this.style.background='#0066cc'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='#0066cc'" data-astro-cid-7jjqptxk>
GitHub 上关注我们
</a> <a href="https://discord.gg/mofatesttesttest" target="_blank" rel="noopener noreferrer" style="background: #0066cc; color: white; text-decoration: none; padding: 8px 16px; border-radius: 4px; font-size: 0.9rem;" onmouseover="this.style.background='#004499'" onmouseout="this.style.background='#0066cc'" data-astro-cid-7jjqptxk>
加入讨论
</a> </div> </div> <!-- 编辑链接 --> <div data-astro-cid-7jjqptxk> <p style="color: #666; margin: 0 0 8px 0; font-size: 0.9rem;" data-astro-cid-7jjqptxk>发现问题？</p> <a${addAttribute(`https://github.com/moxin-org/mofa-website/edit/main/src/content/blog/${post.slug}.md`, "href")} target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: none; font-size: 0.9rem;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" data-astro-cid-7jjqptxk>
在 GitHub 上编辑此页面
</a> </div> </div> </footer> </div>   ` })}`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/blog/[...slug].astro", void 0);

const $$file$1 = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/blog/[...slug].astro";
const $$url$1 = "/blog/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://mofa-org.github.io");
const $$DocsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const { title, description, currentSlug } = Astro2.props;
  const allDocs = await getCollection("docs");
  const docsStructure = {};
  allDocs.forEach((doc) => {
    const pathParts = doc.slug.split("/");
    let current = docsStructure;
    pathParts.forEach((part, index) => {
      if (index === pathParts.length - 1) {
        current[part] = doc;
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  });
  function renderSidebarItem(key, item, basePath = "") {
    const fullPath = basePath ? `${basePath}/${key}` : key;
    if (item.data) {
      const isActive = currentSlug === item.slug;
      return `
      <li>
        <a href="/docs/${item.slug}" 
           class="sidebar-link ${isActive ? "active" : ""}"
           style="display: block; padding: 8px 16px; text-decoration: none; color: ${isActive ? "#0066cc" : "#374151"}; font-weight: ${isActive ? "600" : "400"}; border-radius: 4px; transition: all 0.2s ease;"
           onmouseover="if (!this.classList.contains('active')) { this.style.background = '#f3f4f6'; this.style.color = '#0066cc'; }"
           onmouseout="if (!this.classList.contains('active')) { this.style.background = 'transparent'; this.style.color = '#374151'; }">
          ${item.data.title}
        </a>
      </li>
    `;
    } else {
      const folderItems = Object.entries(item).map(
        ([subKey, subItem]) => renderSidebarItem(subKey, subItem, fullPath)
      ).join("");
      return `
      <li style="margin-bottom: 16px;">
        <div style="padding: 8px 16px; font-weight: 600; color: #111827; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">
          ${key.replace("-", " ")}
        </div>
        <ul style="list-style: none; margin: 0; padding: 0;">
          ${folderItems}
        </ul>
      </li>
    `;
    }
  }
  const sidebarContent = Object.entries(docsStructure).map(
    ([key, item]) => renderSidebarItem(key, item)
  ).join("");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-mw7aashj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="sidebar-background" data-astro-cid-mw7aashj></div> <div style="display: flex; min-height: calc(100vh - 140px);" data-astro-cid-mw7aashj> <!-- 左侧侧边栏 --> <aside class="docs-sidebar" data-astro-cid-mw7aashj> <div class="sidebar-content" data-astro-cid-mw7aashj> <h2 style="font-size: 1.125rem; font-weight: 700; color: #111827; margin: 0 0 24px 0;" data-astro-cid-mw7aashj>
Documentation
</h2> <nav data-astro-cid-mw7aashj> <ul style="list-style: none; margin: 0; padding: 0;" data-astro-cid-mw7aashj>${unescapeHTML(sidebarContent)}</ul> </nav> </div> </aside> <!-- 右侧内容区域 --> <main style="flex: 1; padding: 40px; max-width: calc(100% - 280px); overflow-x: auto;" data-astro-cid-mw7aashj> <div style="max-width: 800px;" data-astro-cid-mw7aashj> ${renderSlot($$result2, $$slots["default"])} </div> </main> </div>   ` })}`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/layouts/DocsLayout.astro", void 0);

const $$Astro = createAstro("https://mofa-org.github.io");
async function getStaticPaths() {
  const docs = await getCollection("docs");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: { doc }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { doc } = Astro2.props;
  const { Content } = await doc.render();
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": doc.data.title, "description": doc.data.description, "currentSlug": doc.slug, "data-astro-cid-uadgga6g": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose" data-astro-cid-uadgga6g> <h1 data-astro-cid-uadgga6g>${doc.data.title}</h1> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-uadgga6g": true })} </article> ` })} `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/docs/[...slug].astro", void 0);

const $$file = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/docs/[...slug].astro";
const $$url = "/docs/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, ____slug_$1 as _, ____slug_ as a, getCollection as g };
