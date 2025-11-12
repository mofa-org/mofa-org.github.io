import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, a as renderTemplate, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderComponent, m as maybeRenderHead, e as renderScript, d as createAstro, b as addAttribute, f as renderHead, g as renderSlot } from './astro/server.C5Q1HgHb.js';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content.DRdjX3Mw.js');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://mofa-org.github.io", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets.DleWbedO.js');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
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
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets.DleWbedO.js');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets.C6jbwOPx.js').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules.Dz-S_Wwv.js');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
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

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  let starCount = "100";
  try {
    const prizeEntries = await getCollection("prize");
    const statsCacheEntry = prizeEntries.find((entry) => entry.data.type === "repo_stats");
    if (statsCacheEntry && statsCacheEntry.data.stars !== void 0) {
      const stars = statsCacheEntry.data.stars;
      if (stars >= 1e3) {
        starCount = (stars / 1e3).toFixed(1).replace(".0", "") + "K";
      } else {
        starCount = stars.toString();
      }
      console.log(`Loaded ${starCount} stars from cache (${statsCacheEntry.data.last_updated})`);
    } else {
      console.log("No GitHub stats cache found, falling back to API...");
      const response = await fetch("https://api.github.com/repos/mofa-org/mofa", {
        headers: {
          "User-Agent": "MoFA-Website",
          "Accept": "application/vnd.github.v3+json"
        },
        signal: AbortSignal.timeout(5e3)
        // 5秒超时
      });
      if (response.ok) {
        const data = await response.json();
        const stars = data.stargazers_count;
        if (typeof stars === "number" && stars > 0) {
          if (stars >= 1e3) {
            starCount = (stars / 1e3).toFixed(1).replace(".0", "") + "K";
          } else {
            starCount = stars.toString();
          }
          console.log("GitHub stars fetched from API fallback:", starCount);
        }
      } else {
        console.warn("GitHub API response not ok:", response.status);
      }
    }
  } catch (error) {
    console.warn("Failed to load GitHub stats:", error);
  }
  return renderTemplate`${maybeRenderHead()}<header style="position: sticky; top: 0; background: white; border-bottom: 4px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 50;"> <nav class="container mobile-header" style="padding: 16px; display: flex; align-items: center; justify-content: space-between;"> <a href="/" style="display: flex; align-items: center; gap: 8px; text-decoration: none;" rel="noopener noreferrer"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"> <span class="gradient-text" style="font-size: 1.5rem; font-weight: 700;">MoFA</span> </a> <div class="desktop-nav" style="display: flex; align-items: center; gap: 16px;"> <!-- Products Dropdown --> <div class="nav-dropdown" style="position: relative;"> <button class="nav-link dropdown-toggle" data-en="Products" data-zh="产品" style="display: flex; align-items: center; gap: 4px; background: none; border: none; cursor: pointer;"> <span>产品</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <polyline points="6,9 12,15 18,9"></polyline> </svg> </button> <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; background: white; border: 2px solid var(--mondrian-black); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 200px; z-index: 1000; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.2s ease;"> <a href="/" class="dropdown-item" style="display: block; padding: 12px 16px; text-decoration: none; color: #333; border-bottom: 1px solid #eee;" data-en="MoFA Framework" data-zh="MoFA 框架">MoFA 框架</a> <a href="/mofa-stage" class="dropdown-item" style="display: block; padding: 12px 16px; text-decoration: none; color: #333;" data-en="MoFA Stage" data-zh="MoFA Stage">MoFA Stage</a> </div> </div> <a href="/docs" class="nav-link" data-en="Docs" data-zh="文档">文档</a> <a href="/blog" class="nav-link" data-en="Blog" data-zh="博客">博客</a> <!-- Hackathons Dropdown --> <div class="nav-dropdown" style="position: relative;"> <button class="nav-link dropdown-toggle" data-en="Hackathons" data-zh="黑客松" style="display: flex; align-items: center; gap: 4px; background: none; border: none; cursor: pointer;"> <span>黑客松</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <polyline points="6,9 12,15 18,9"></polyline> </svg> </button> <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; background: white; border: 2px solid var(--mondrian-black); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 240px; z-index: 1000; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.2s ease;"> <a href="/#hall-of-fame" class="dropdown-item" style="display: block; padding: 12px 16px; text-decoration: none; color: #333; border-bottom: 1px solid #eee;" data-en="Hall of Fame" data-zh="开发者殿堂">开发者殿堂</a> <a href="/super-agent-hackathon" class="dropdown-item" style="display: block; padding: 12px 16px; text-decoration: none; color: #333; border-bottom: 1px solid #eee;" data-en="Super Agent Hackathon" data-zh="超级智能体黑客松">超级智能体黑客松</a> <a href="https://hackathon.mofa.ai" class="dropdown-item" target="_blank" rel="noopener noreferrer" style="display: block; padding: 12px 16px; text-decoration: none; color: #333;" data-en="Code Alert Hackathon" data-zh="Code Alert 黑客松">Code Alert 黑客松</a> </div> </div> <!-- Community Dropdown --> <div class="nav-dropdown" style="position: relative;"> <button class="nav-link dropdown-toggle" data-en="Community" data-zh="社区" style="display: flex; align-items: center; gap: 4px; background: none; border: none; cursor: pointer;"> <span>社区</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <polyline points="6,9 12,15 18,9"></polyline> </svg> </button> <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; background: white; border: 2px solid var(--mondrian-black); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 200px; z-index: 1000; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.2s ease;"> <a href="https://discord.gg/hKJZzDMMm9" class="dropdown-item" target="_blank" rel="noopener noreferrer" style="display: block; padding: 12px 16px; text-decoration: none; color: #333; border-bottom: 1px solid #eee;" data-en="Discord Community" data-zh="Discord 社区">Discord 社区</a> <a href="#" id="wechat-header-link" class="dropdown-item" style="display: block; padding: 12px 16px; text-decoration: none; color: #333; border-bottom: 1px solid #eee; cursor: pointer;" data-en="WeChat Group" data-zh="微信群">微信群</a> <a href="https://github.com/mofa-org/mofa/tree/main/documents" class="dropdown-item" target="_blank" rel="noopener noreferrer" style="display: block; padding: 12px 16px; text-decoration: none; color: #333;" data-en="Contributing Guide" data-zh="贡献指南">贡献指南</a> </div> </div> <button id="lang-toggle" class="btn-lang" style="gap: 6px;"> <span id="current-lang">🇺🇸 EN</span> <span style="font-size: 0.75rem; opacity: 0.8;">▼</span> </button> <button id="wechat-btn" class="btn-wechat" style="gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"></path> </svg> <span class="btn-text" data-en="WeChat" data-zh="微信">微信</span> </button> <a href="https://discord.gg/hKJZzDMMm9" class="btn-discord" target="_blank" rel="noopener noreferrer" style="gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path> </svg> <span class="btn-text">Discord</span> </a> <a href="https://github.com/mofa-org/mofa" class="btn-primary github-star-btn" target="_blank" rel="noopener noreferrer" style="gap: 8px; position: relative; overflow: visible; background: linear-gradient(90deg, #FF5039, #FF6756); border: 2px solid #FF5039; transition: all 0.2s ease;" onmouseover="this.style.background='linear-gradient(90deg, #FFC938, #6ACFD1)'; this.style.borderColor='#FFC938'" onmouseout="this.style.background='linear-gradient(90deg, #FF5039, #FF6756)'; this.style.borderColor='#FF5039'"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> <span class="btn-text" style="font-weight: 600;">STAR ON GITHUB</span> <!-- Star count badge --> <span class="star-count-badge" style="background: rgba(255,255,255,0.9); color: #FF5039; padding: 3px 6px; font-size: 0.7rem; font-weight: 900; border: 1px solid rgba(255,80,57,0.3);"> ${starCount} </span> </a> </div> <div class="mobile-nav" style="display: none; align-items: center; gap: 12px;"> <button id="lang-toggle-mobile" class="btn-lang mobile-lang-btn" style="gap: 4px; padding: 8px 10px;"> <span id="current-lang-mobile">🇺🇸</span> </button> <button id="mobile-menu-toggle" class="mobile-menu-btn" style="border: none; background: none; padding: 8px; cursor: pointer;"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> </div> </nav> <div id="mobile-menu" class="mobile-dropdown" style="display: none; background: white; border-bottom: 2px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1);"> <div class="container" style="padding: 16px; display: flex; flex-direction: column; gap: 12px;"> <!-- Products Section --> <div class="mobile-section" style="border-bottom: 1px solid #eee; padding-bottom: 12px; margin-bottom: 12px;"> <div class="mobile-section-title" style="font-weight: 600; color: #666; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 8px;" data-en="Products" data-zh="产品">产品</div> <a href="/" class="mobile-nav-link" style="padding-left: 12px;"> <span class="link-text" data-en="MoFA Framework" data-zh="MoFA Core">MoFA Core</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1 -1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.75z"></path> </svg> </a> <a href="/mofa-stage" class="mobile-nav-link" style="padding-left: 12px;"> <span class="link-text" data-en="MoFA Stage" data-zh="MoFA Stage">MoFA Stage</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </a> </div> <!-- Main Navigation --> <a href="/docs" class="mobile-nav-link"> <span class="link-text" data-en="Docs" data-zh="文档">文档</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path> <polyline points="14,2 14,8 20,8" fill="none" stroke="currentColor" stroke-width="1"></polyline> <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1"></line> <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1"></line> <line x1="13" y1="9" x2="8" y2="9" stroke="currentColor" stroke-width="1"></line> </svg> </a> <a href="/blog" class="mobile-nav-link"> <span class="link-text" data-en="Blog" data-zh="博客">博客</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"></path> </svg> </a> <!-- Hackathons Section --> <div class="mobile-section" style="border-top: 1px solid #eee; padding-top: 12px; margin-top: 12px;"> <div class="mobile-section-title" style="font-weight: 600; color: #666; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 8px;" data-en="Hackathons" data-zh="黑客松">黑客松</div> <a href="/#hall-of-fame" class="mobile-nav-link" style="padding-left: 12px;"> <span class="link-text" data-en="Hall of Fame" data-zh="开发者殿堂">开发者殿堂</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg> </a> <a href="/super-agent-hackathon" class="mobile-nav-link" style="padding-left: 12px;"> <span class="link-text" data-en="Super Agent Hackathon" data-zh="超级智能体黑客松">超级智能体黑客松</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path> <polyline points="14,2 14,8 20,8" fill="none" stroke="currentColor" stroke-width="1"></polyline> <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1"></line> <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1"></line> <line x1="13" y1="9" x2="8" y2="9" stroke="currentColor" stroke-width="1"></line> </svg> </a> <a href="https://hackathon.mofa.ai" class="mobile-nav-link" target="_blank" rel="noopener noreferrer" style="padding-left: 12px;"> <span class="link-text" data-en="Code Alert Hackathon" data-zh="Code Alert 黑客松">Code Alert 黑客松</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> <!-- Community Section --> <div class="mobile-section" style="border-top: 1px solid #eee; padding-top: 12px; margin-top: 12px;"> <div class="mobile-section-title" style="font-weight: 600; color: #666; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 8px;" data-en="Community" data-zh="社区">社区</div> <a href="https://discord.gg/hKJZzDMMm9" class="mobile-nav-link" target="_blank" rel="noopener noreferrer" style="padding-left: 12px;"> <span class="link-text" data-en="Discord Community" data-zh="Discord 社区">Discord 社区</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a19.7363 19.7363 0 00-4.8852 1.515C.5334 9.0458-.319 13.5799.0992 18.0578c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294.4616-.6304.8731-1.2952 1.226-1.9942-.6528-.2476-1.2743-.5495-1.8722-.8923.1258-.0943.2517-.1923.3718-.2914 3.9278 1.7933 8.18 1.7933 12.0614 0 .1202.099.246.1981.3728.2924-.6528.2476-1.2743.5495-1.873.8914.3604.698.7719 1.3628 1.225 1.9932 1.961-.6067 3.9495-1.5219 6.0023-3.0294.5004-5.177-.8382-9.6739-3.5485-13.6604z"></path> </svg> </a> <a href="#" id="wechat-mobile-link" class="mobile-nav-link" style="padding-left: 12px; cursor: pointer;"> <span class="link-text" data-en="WeChat Group" data-zh="微信群">微信群</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"></path> </svg> </a> <a href="https://github.com/mofa-org/mofa/tree/main/documents" class="mobile-nav-link" target="_blank" rel="noopener noreferrer" style="padding-left: 12px;"> <span class="link-text" data-en="Contributing Guide" data-zh="贡献指南">贡献指南</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> </a> <a href="https://github.com/mofa-org/mofa" class="mobile-nav-link github-star-mobile" target="_blank" rel="noopener noreferrer" style="position: relative; padding: 12px; margin: 4px 0; background: linear-gradient(90deg, #FF5039, #FF6756); border: 2px solid #FF5039; color: white; display: flex; align-items: center; justify-content: space-between; transition: all 0.2s ease;" onmouseover="this.style.background='linear-gradient(90deg, #FFC938, #6ACFD1)'; this.style.borderColor='#FFC938'" onmouseout="this.style.background='linear-gradient(90deg, #FF5039, #FF6756)'; this.style.borderColor='#FF5039'"> <div style="display: flex; align-items: center; gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> <span class="link-text" style="font-weight: 600;">STAR ON GITHUB </span> </div> <!-- Mobile star badge --> <span class="star-count-mobile" style="background: rgba(255,255,255,0.9); color: #FF5039; padding: 3px 8px; font-size: 0.7rem; font-weight: 900; border: 1px solid rgba(255,80,57,0.3);"> ${starCount} </span> </a> </div> </div> </div> </header> ${renderScript($$result, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  let starCount = "100";
  let forkCount = "8";
  let watcherCount = "10";
  let issueCount = "0";
  function formatNumber(num) {
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(".0", "") + "K";
    }
    return num.toString();
  }
  try {
    const prizeEntries = await getCollection("prize");
    const statsCacheEntry = prizeEntries.find((entry) => entry.data.type === "repo_stats");
    if (statsCacheEntry) {
      if (statsCacheEntry.data.stars !== void 0) {
        starCount = formatNumber(statsCacheEntry.data.stars);
      }
      if (statsCacheEntry.data.forks !== void 0) {
        forkCount = formatNumber(statsCacheEntry.data.forks);
      }
      if (statsCacheEntry.data.watchers !== void 0) {
        watcherCount = formatNumber(statsCacheEntry.data.watchers);
      }
      if (statsCacheEntry.data.open_issues !== void 0) {
        issueCount = formatNumber(statsCacheEntry.data.open_issues);
      }
      console.log(`Loaded GitHub stats from cache: ${starCount} stars, ${forkCount} forks, ${watcherCount} watchers (${statsCacheEntry.data.last_updated})`);
    } else {
      console.log("No GitHub stats cache found, falling back to API...");
      const response = await fetch("https://api.github.com/repos/mofa-org/mofa");
      if (response.ok) {
        const data = await response.json();
        starCount = formatNumber(data.stargazers_count);
        forkCount = formatNumber(data.forks_count);
        watcherCount = formatNumber(data.watchers_count);
        issueCount = formatNumber(data.open_issues_count);
        console.log(`Fetched GitHub stats from API fallback: ${starCount} stars, ${forkCount} forks, ${watcherCount} watchers`);
      }
    }
  } catch (error) {
    console.log("Failed to load GitHub stats:", error);
  }
  return renderTemplate`${maybeRenderHead()}<footer style="background-color: var(--mondrian-black); color: white;" data-astro-cid-sz7xmlte> <div class="container py-12" data-astro-cid-sz7xmlte> <div class="text-center" data-astro-cid-sz7xmlte> <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px;" data-astro-cid-sz7xmlte> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 32px; height: 32px; border-radius: 6px; object-fit: cover;" data-astro-cid-sz7xmlte> <span style="font-size: 1.25rem; font-weight: 700;" data-astro-cid-sz7xmlte>MoFA</span> </div> <p style="color: #9ca3af; margin-bottom: 8px;" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师" data-astro-cid-sz7xmlte>
Make Ordinary Developers Full-stack AI Engineers
</p> <p style="color: #9ca3af; margin-bottom: 24px;" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架" data-astro-cid-sz7xmlte>
Modular Framework for AI Agents
</p> <!-- Star Call-to-Action Section --> <div class="star-cta-section" style="background: #2a2a2a; border: 3px solid #333; padding: 28px; margin: 32px 0; max-width: 560px; margin-left: auto; margin-right: auto;" data-astro-cid-sz7xmlte> <div style="margin-bottom: 20px;" data-astro-cid-sz7xmlte> <h3 style="color: #ffffff; font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.02em;" data-en="Support MoFA Development" data-zh="支持 MoFA 开发" data-astro-cid-sz7xmlte>
支持 MoFA 开发
</h3> <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 0; line-height: 1.4;" data-en="Help us build the future of AI agent frameworks" data-zh="帮助我们构建 AI 代理框架的未来" data-astro-cid-sz7xmlte>
帮助我们构建 AI 代理框架的未来
</p> </div> <!-- GitHub Stats Grid --> <div class="github-stats-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px;" data-astro-cid-sz7xmlte> <!-- Stars --> <div class="stat-card" style="background: rgba(255, 80, 57, 0.1); border: 1px solid rgba(255, 80, 57, 0.3); padding: 12px; text-align: center; transition: all 0.2s ease;" data-astro-cid-sz7xmlte> <svg style="width: 20px; height: 20px; margin: 0 auto 6px; color: #FF5039;" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-sz7xmlte></path> </svg> <div style="font-size: 1.25rem; font-weight: 700; color: #FF5039; margin-bottom: 2px;" data-astro-cid-sz7xmlte>${starCount}</div> <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;" data-en="Stars" data-zh="星标" data-astro-cid-sz7xmlte>Stars</div> </div> <!-- Forks --> <div class="stat-card" style="background: rgba(255, 201, 56, 0.1); border: 1px solid rgba(255, 201, 56, 0.3); padding: 12px; text-align: center; transition: all 0.2s ease;" data-astro-cid-sz7xmlte> <svg style="width: 20px; height: 20px; margin: 0 auto 6px; color: #FFC938;" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6Z" data-astro-cid-sz7xmlte></path> </svg> <div style="font-size: 1.25rem; font-weight: 700; color: #FFC938; margin-bottom: 2px;" data-astro-cid-sz7xmlte>${forkCount}</div> <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;" data-en="Forks" data-zh="分支" data-astro-cid-sz7xmlte>Forks</div> </div> <!-- Watchers --> <div class="stat-card" style="background: rgba(106, 207, 209, 0.1); border: 1px solid rgba(106, 207, 209, 0.3); padding: 12px; text-align: center; transition: all 0.2s ease;" data-astro-cid-sz7xmlte> <svg style="width: 20px; height: 20px; margin: 0 auto 6px; color: #6ACFD1;" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" data-astro-cid-sz7xmlte></path> </svg> <div style="font-size: 1.25rem; font-weight: 700; color: #6ACFD1; margin-bottom: 2px;" data-astro-cid-sz7xmlte>${watcherCount}</div> <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;" data-en="Watching" data-zh="关注" data-astro-cid-sz7xmlte>Watching</div> </div> <!-- Issues --> <div class="stat-card" style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); padding: 12px; text-align: center; transition: all 0.2s ease;" data-astro-cid-sz7xmlte> <svg style="width: 20px; height: 20px; margin: 0 auto 6px; color: #8B5CF6;" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" data-astro-cid-sz7xmlte></path> </svg> <div style="font-size: 1.25rem; font-weight: 700; color: #8B5CF6; margin-bottom: 2px;" data-astro-cid-sz7xmlte>${issueCount}</div> <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;" data-en="Issues" data-zh="问题" data-astro-cid-sz7xmlte>Issues</div> </div> </div> <!-- CTA Button --> <a href="https://github.com/mofa-org/mofa" target="_blank" rel="noopener noreferrer" class="star-button" style="
          background: linear-gradient(90deg, #FF5039, #FF6756);
          color: white;
          padding: 14px 24px;
          border: 2px solid #FF5039;
          text-decoration: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.9rem;
          width: 100%;
          justify-content: center;
        " onmouseover="this.style.background='linear-gradient(90deg, #FFC938, #6ACFD1)'; this.style.borderColor='#FFC938'" onmouseout="this.style.background='linear-gradient(90deg, #FF5039, #FF6756)'; this.style.borderColor='#FF5039'" data-astro-cid-sz7xmlte> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" data-astro-cid-sz7xmlte></path> </svg> <span data-en="STAR ON GITHUB" data-zh="在 GITHUB 上 STAR" data-astro-cid-sz7xmlte>在 GITHUB 上 STAR</span> </a> </div> <!-- Regular Footer Links --> <div style="display: flex; justify-content: center; gap: 32px; margin-bottom: 16px;" data-astro-cid-sz7xmlte> <a href="https://github.com/mofa-org/mofa" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-astro-cid-sz7xmlte>GitHub</a> <a href="https://discord.gg/hKJZzDMMm9" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-astro-cid-sz7xmlte>Discord</a> <a href="#" id="wechat-link" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease; cursor: pointer;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-en="WeChat" data-zh="微信" data-astro-cid-sz7xmlte>微信</a> <a href="/docs" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-en="Docs" data-zh="文档" data-astro-cid-sz7xmlte>Docs</a> </div> <p style="color: #6b7280; font-size: 0.875rem;" data-en="© 2025 MoFA. All rights reserved." data-zh="© 2025 MoFA. 保留所有权利." data-astro-cid-sz7xmlte>
&copy; 2024 MoFA. All rights reserved.
</p> </div> </div> </footer> <!-- WeChat QR Code Modal --> <div id="wechat-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); z-index: 9999; align-items: center; justify-content: center;" data-astro-cid-sz7xmlte> <div style="background: white; padding: 32px; border-radius: 12px; max-width: 400px; position: relative; text-align: center;" data-astro-cid-sz7xmlte> <button id="close-wechat-modal" style="position: absolute; top: 12px; right: 12px; background: none; border: none; font-size: 24px; cursor: pointer; color: #666; line-height: 1;" data-astro-cid-sz7xmlte>&times;</button> <h3 style="margin-bottom: 16px; font-size: 1.25rem; font-weight: 700; color: #333;" data-en="Join WeChat Group" data-zh="加入微信群" data-astro-cid-sz7xmlte>加入微信群</h3> <img src="/wechat-qrcode.jpg" alt="WeChat QR Code" style="width: 100%; max-width: 300px; margin: 0 auto; display: block; border-radius: 8px;" data-astro-cid-sz7xmlte> <p style="margin-top: 16px; color: #666; font-size: 0.9rem;" data-en="Scan QR code to join our WeChat group" data-zh="扫描二维码加入微信群" data-astro-cid-sz7xmlte>扫描二维码加入微信群</p> </div> </div> <button id="back-to-top" style="position: fixed; bottom: 40px; right: 40px; z-index: 50; display: none; background: #FFC938; color: #333; border: none; border-radius: 50%; width: 48px; height: 48px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 24px; cursor: pointer; transition: background-color 0.3s, opacity 0.3s, visibility 0.3s;" aria-label="Back to top" data-astro-cid-sz7xmlte>↑</button> ${renderScript($$result, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://mofa-org.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "MoFA - Make Ordinary Developers Full-stack AI Engineers" } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon-32x32.png"><link rel="shortcut icon" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | MoFA</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, DEFAULT_HASH_PROPS as a, getCollection as g };
