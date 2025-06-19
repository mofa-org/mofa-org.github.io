import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, A as AstroError, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from '../astro.32e88c90.js';
/* empty css                           */import 'clsx';
/* empty css                           *//* empty css                           */
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header style="position: sticky; top: 0; background: white; border-bottom: 4px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 50;"> <nav class="container mobile-header" style="padding: 16px; display: flex; align-items: center; justify-content: space-between;"> <a href="https://mofa.ai" style="display: flex; align-items: center; gap: 8px; text-decoration: none;" target="_blank" rel="noopener noreferrer"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"> <span class="gradient-text" style="font-size: 1.5rem; font-weight: 700;">MoFA</span> </a> <div class="desktop-nav" style="display: flex; align-items: center; gap: 16px;"> <a href="/" class="nav-link" data-en="Home" data-zh="首页">Home</a> <a href="/docs" class="nav-link" data-en="Docs" data-zh="文档">Docs</a> <!-- <a href="https://demo.mofa.ai" class="nav-link" target="_blank" rel="noopener noreferrer" data-en="Examples" data-zh="示例">Examples</a> --> <a href="/blog" class="nav-link" data-en="Blog" data-zh="博客">Blog</a> <button id="lang-toggle" class="btn-lang" style="gap: 6px;"> <span id="current-lang">🇺🇸 EN</span> <span style="font-size: 0.75rem; opacity: 0.8;">▼</span> </button> <a href="https://discord.gg/hKJZzDMMm9" class="btn-discord" target="_blank" rel="noopener noreferrer" style="gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path> </svg> <span class="btn-text">Discord</span> </a> <a href="https://github.com/moxin-org/mofa" class="btn-primary" target="_blank" rel="noopener noreferrer" style="gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> <span class="btn-text">GitHub</span> </a> </div> <div class="mobile-nav" style="display: none; align-items: center; gap: 12px;"> <button id="lang-toggle-mobile" class="btn-lang mobile-lang-btn" style="gap: 4px; padding: 8px 10px;"> <span id="current-lang-mobile">🇺🇸</span> </button> <button id="mobile-menu-toggle" class="mobile-menu-btn" style="border: none; background: none; padding: 8px; cursor: pointer;"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> </div> </nav> <div id="mobile-menu" class="mobile-dropdown" style="display: none; background: white; border-bottom: 2px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1);"> <div class="container" style="padding: 16px; display: flex; flex-direction: column; gap: 12px;"> <a href="/" class="mobile-nav-link"> <span class="link-text" data-en="Home" data-zh="首页">Home</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1 -1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.75z"></path> </svg> </a> <a href="/docs" class="mobile-nav-link"> <span class="link-text" data-en="Docs" data-zh="文档">Docs</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path> <polyline points="14,2 14,8 20,8" fill="none" stroke="currentColor" stroke-width="1"></polyline> <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1"></line> <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1"></line> <line x1="13" y1="9" x2="8" y2="9" stroke="currentColor" stroke-width="1"></line> </svg> </a> <a href="/blog" class="mobile-nav-link"> <span class="link-text" data-en="Blog" data-zh="博客">Blog</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"></path> </svg> </a> <a href="https://discord.gg/hKJZzDMMm9" class="mobile-nav-link" target="_blank" rel="noopener noreferrer"> <span class="link-text">Discord</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a19.7363 19.7363 0 00-4.8852 1.515C.5334 9.0458-.319 13.5799.0992 18.0578c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294.4616-.6304.8731-1.2952 1.226-1.9942-.6528-.2476-1.2743-.5495-1.8722-.8923.1258-.0943.2517-.1923.3718-.2914 3.9278 1.7933 8.18 1.7933 12.0614 0 .1202.099.246.1981.3728.2924-.6528.2476-1.2743.5495-1.873.8914.3604.698.7719 1.3628 1.225 1.9932 1.961-.6067 3.9495-1.5219 6.0023-3.0294.5004-5.177-.8382-9.6739-3.5485-13.6604z"></path> </svg> </a> <a href="https://github.com/moxin-org/mofa" class="mobile-nav-link" target="_blank" rel="noopener noreferrer"> <span class="link-text">GitHub</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234C5.662 20.302 4.967 18.16 4.967 18.16c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604C6.25 16.01 3.448 14.981 3.448 10.384c0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> </a> </div> </div> </header> `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer style="background-color: var(--mondrian-black); color: white;"> <div class="container py-12"> <div class="text-center"> <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px;"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 32px; height: 32px; border-radius: 6px; object-fit: cover;"> <span style="font-size: 1.25rem; font-weight: 700;">MoFA</span> </div> <p style="color: #9ca3af; margin-bottom: 8px;" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师">
Make Ordinary Developers Full-stack AI Engineers
</p> <p style="color: #9ca3af; margin-bottom: 24px;" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架">
Modular Framework for AI Agents
</p> <div style="display: flex; justify-content: center; gap: 32px; margin-bottom: 16px;"> <a href="https://github.com/moxin-org/mofa" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">GitHub</a> <a href="https://discord.gg/hKJZzDMMm9" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">Discord</a> <a href="/docs" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-en="Docs" data-zh="文档">Docs</a> </div> <p style="color: #6b7280; font-size: 0.875rem;" data-en="© 2025 MoFA. All rights reserved." data-zh="© 2025 MoFA. 保留所有权利.">
&copy; 2024 MoFA. All rights reserved.
</p> </div> </div> </footer> <button id="back-to-top" style="position: fixed; bottom: 40px; right: 40px; z-index: 50; display: none; background: #FFC938; color: #333; border: none; border-radius: 50%; width: 48px; height: 48px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 24px; cursor: pointer; transition: background-color 0.3s, opacity 0.3s, visibility 0.3s;" aria-label="Back to top">↑</button> `;
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/ai-is-a-way-of-reveal-humanity.md": () => import('../ai-is-a-way-of-reveal-humanity.13f264d6.js'),"/src/content/blog/call-for-bounty-developers.md": () => import('../call-for-bounty-developers.cb889a03.js'),"/src/content/blog/introducing-mofa.md": () => import('../introducing-mofa.c110ce33.js'),"/src/content/blog/mofa-mobile-solution-plan.md": () => import('../mofa-mobile-solution-plan.a92a9d04.js'),"/src/content/blog/types-of-magicians.md": () => import('../types-of-magicians.84cf1135.js'),"/src/content/docs/0.overview.md": () => import('../0.overview.8abfbc8e.js'),"/src/content/docs/1. concepts/111.md": () => import('../111.7bfb56f0.js'),"/src/content/docs/1. concepts/agents.md": () => import('../agents.6147fe12.js'),"/src/content/docs/2. getting-started/first-agent.md": () => import('../first-agent.e6ea65e9.js'),"/src/content/docs/2. getting-started/installation.md": () => import('../installation.151328d0.js'),"/src/content/docs/3. test/first-agent.md": () => import('../first-agent.9692d727.js'),"/src/content/docs/3. test/installation.md": () => import('../installation.d1170d9a.js'),"/src/content/docs/3. test2/first-agent.md": () => import('../first-agent.aacfb7fe.js'),"/src/content/docs/3. test2/installation.md": () => import('../installation.0a1e1c27.js'),"/src/content/docs/3. test3/first-agent.md": () => import('../first-agent.b19e296a.js'),"/src/content/docs/3. test3/installation.md": () => import('../installation.b738fb47.js')});
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
lookupMap = {"blog":{"type":"content","entries":{"ai-is-a-way-of-reveal-humanity":"/src/content/blog/ai-is-a-way-of-reveal-humanity.md","call-for-bounty-developers":"/src/content/blog/call-for-bounty-developers.md","introducing-mofa":"/src/content/blog/introducing-mofa.md","mofa-mobile-solution-plan":"/src/content/blog/mofa-mobile-solution-plan.md","types-of-magicians":"/src/content/blog/types-of-magicians.md"}},"docs":{"type":"content","entries":{"0overview":"/src/content/docs/0.overview.md","1-concepts/111":"/src/content/docs/1. concepts/111.md","1-concepts/agents":"/src/content/docs/1. concepts/agents.md","2-getting-started/first-agent":"/src/content/docs/2. getting-started/first-agent.md","2-getting-started/installation":"/src/content/docs/2. getting-started/installation.md","3-test/first-agent":"/src/content/docs/3. test/first-agent.md","3-test/installation":"/src/content/docs/3. test/installation.md","3-test2/first-agent":"/src/content/docs/3. test2/first-agent.md","3-test2/installation":"/src/content/docs/3. test2/installation.md","3-test3/first-agent":"/src/content/docs/3. test3/first-agent.md","3-test3/installation":"/src/content/docs/3. test3/installation.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/ai-is-a-way-of-reveal-humanity.md": () => import('../ai-is-a-way-of-reveal-humanity.76c0b3cc.js'),"/src/content/blog/call-for-bounty-developers.md": () => import('../call-for-bounty-developers.846ddedc.js'),"/src/content/blog/introducing-mofa.md": () => import('../introducing-mofa.c2a7880f.js'),"/src/content/blog/mofa-mobile-solution-plan.md": () => import('../mofa-mobile-solution-plan.b44f52fd.js'),"/src/content/blog/types-of-magicians.md": () => import('../types-of-magicians.1651474d.js'),"/src/content/docs/0.overview.md": () => import('../0.overview.3cbc7e7e.js'),"/src/content/docs/1. concepts/111.md": () => import('../111.43d227f2.js'),"/src/content/docs/1. concepts/agents.md": () => import('../agents.0a87cef3.js'),"/src/content/docs/2. getting-started/first-agent.md": () => import('../first-agent.c65856df.js'),"/src/content/docs/2. getting-started/installation.md": () => import('../installation.eb299c47.js'),"/src/content/docs/3. test/first-agent.md": () => import('../first-agent.2358d90b.js'),"/src/content/docs/3. test/installation.md": () => import('../installation.576e3205.js'),"/src/content/docs/3. test2/first-agent.md": () => import('../first-agent.53adc8eb.js'),"/src/content/docs/3. test2/installation.md": () => import('../installation.b3c319cf.js'),"/src/content/docs/3. test3/first-agent.md": () => import('../first-agent.64695aa4.js'),"/src/content/docs/3. test3/installation.md": () => import('../installation.477b8c6e.js')});
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
</a> <a href="https://discord.gg/hKJZzDMMm9" target="_blank" rel="noopener noreferrer" style="background: #0066cc; color: white; text-decoration: none; padding: 8px 16px; border-radius: 4px; font-size: 0.9rem;" onmouseover="this.style.background='#004499'" onmouseout="this.style.background='#0066cc'" data-astro-cid-7jjqptxk>
加入讨论
</a> </div> </div> <!-- 编辑链接 --> <div data-astro-cid-7jjqptxk> <p style="color: #666; margin: 0 0 8px 0; font-size: 0.9rem;" data-astro-cid-7jjqptxk>发现问题？</p> <a${addAttribute(`https://github.com/mofa-org/mofa-org.github.io/blob/main/mofa-website/src/content/blog/${post.slug}.md`, "href")} target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: none; font-size: 0.9rem;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" data-astro-cid-7jjqptxk>
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-mw7aashj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mobile-overlay" id="mobile-overlay" data-astro-cid-mw7aashj></div>  <button class="mobile-toc-button" id="mobile-toc-button" style="display: none;" data-astro-cid-mw7aashj> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" id="toc-icon" data-astro-cid-mw7aashj> <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" data-astro-cid-mw7aashj></path> </svg> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" id="close-icon" style="display: none;" data-astro-cid-mw7aashj> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-astro-cid-mw7aashj></path> </svg> </button> <div class="sidebar-background" id="sidebar-background" data-astro-cid-mw7aashj></div> <div style="display: flex; min-height: calc(100vh - 140px);" data-astro-cid-mw7aashj> <aside class="docs-sidebar" id="docs-sidebar" data-astro-cid-mw7aashj> <div class="mobile-drag-indicator" style="display: none;" data-astro-cid-mw7aashj></div> <div class="sidebar-content" data-astro-cid-mw7aashj> <h2 style="font-size: 1.125rem; font-weight: 700; color: #111827; margin: 0 0 24px 0;" data-astro-cid-mw7aashj>
Documentation
</h2> <nav data-astro-cid-mw7aashj> <ul style="list-style: none; margin: 0; padding: 0;" data-astro-cid-mw7aashj>${unescapeHTML(sidebarContent)}</ul> </nav> </div> </aside> <main class="docs-main" style="flex: 1; padding: 40px; overflow-x: auto;" data-astro-cid-mw7aashj> <div style="max-width: 800px;" data-astro-cid-mw7aashj> ${renderSlot($$result2, $$slots["default"])} </div> </main> </div>    ` })}`;
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
