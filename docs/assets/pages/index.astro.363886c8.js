import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.32e88c90.js';
import 'clsx';
/* empty css                           *//* empty css                          */import { $ as $$BaseLayout, g as getCollection } from './_...slug_.astro.6501faca.js';
/* empty css                          */
const $$WorkflowShowcase = createComponent(($$result, $$props, $$slots) => {
  const workflows = [
    {
      id: "hello-world",
      title: {
        en: "Hello World",
        zh: "Hello World"
      },
      description: {
        en: "Simplest AI agent workflow for beginners",
        zh: "\u6700\u7B80\u5355\u7684 AI \u4EE3\u7406\u5DE5\u4F5C\u6D41"
      },
      category: "Basic",
      color: "mofa-color-1",
      scale: 0.3,
      mermaidGraph: `
    flowchart TB
      terminal-input[\u{1F5A5}\uFE0F Terminal Input<br/>User Query]
      agent[\u{1F916} Agent<br/>Process & Respond]
      
      terminal-input --> agent
      agent --> terminal-input
      
      classDef inputNode fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
      classDef agentNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
      
      class terminal-input inputNode
      class agent agentNode`
    },
    {
      id: "arxiv-research",
      title: {
        en: "ArXiv Research",
        zh: "ArXiv \u7814\u7A76"
      },
      description: {
        en: "Automated research workflow with paper analysis and report generation",
        zh: "\u81EA\u52A8\u5316\u7814\u7A76\u5DE5\u4F5C\u6D41\uFF0C\u5305\u542B\u8BBA\u6587\u5206\u6790\u548C\u62A5\u544A\u751F\u6210"
      },
      category: "Research",
      color: "mofa-color-2",
      scale: 1,
      mermaidGraph: `
    flowchart TB
      terminal[\u{1F5A5}\uFE0F Terminal Input<br/>Research Task]
      extractor[\u{1F50D} Keyword Extractor<br/>Extract Keywords]
      downloader[\u{1F4E5} Paper Downloader<br/>Download Papers]
      analyzer[\u{1F52C} Paper Analyzer<br/>Analyze Content]
      writer[\u270D\uFE0F Report Writer<br/>Generate Report]
      feedback[\u{1F4AC} Feedback Agent<br/>Review & Suggest]
      refinement[\u{1F527} Refinement Agent<br/>Improve Report]
      
      terminal --> extractor
      extractor --> downloader
      downloader --> analyzer
      terminal --> analyzer
      analyzer --> writer
      terminal --> writer
      writer --> feedback
      terminal --> feedback
      feedback --> refinement
      terminal --> refinement
      
      classDef inputNode fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
      classDef processNode fill:#fff3e0,stroke:#f57c00,stroke-width:2px
      classDef analysisNode fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
      classDef outputNode fill:#fce4ec,stroke:#c2185b,stroke-width:2px
      
      class terminal inputNode
      class extractor,downloader processNode
      class analyzer,feedback analysisNode
      class writer,refinement outputNode`
    },
    {
      id: "rag-system",
      title: {
        en: "RAG System",
        zh: "RAG \u7CFB\u7EDF"
      },
      description: {
        en: "Retrieval-Augmented Generation for intelligent Q&A",
        zh: "\u68C0\u7D22\u589E\u5F3A\u751F\u6210\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u667A\u80FD\u95EE\u7B54"
      },
      category: "AI",
      color: "mofa-color-3",
      scale: 0.5,
      mermaidGraph: `
    flowchart TB
      terminal[\u{1F5A5}\uFE0F Terminal Input<br/>User Question]
      retrieval[\u{1F50D} RAG Retrieval<br/>Search Knowledge]
      reasoner[\u{1F9E0} Reasoner Agent<br/>Generate Answer]
      
      terminal --> retrieval
      retrieval --> reasoner
      terminal --> reasoner
      retrieval --> terminal
      reasoner --> terminal
      
      classDef inputNode fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
      classDef retrievalNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
      classDef reasoningNode fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
      
      class terminal inputNode
      class retrieval retrievalNode
      class reasoner reasoningNode`
    },
    {
      id: "gosim-pedia",
      title: {
        en: "GoSim Pedia",
        zh: "GoSim \u767E\u79D1"
      },
      description: {
        en: "Multi-agent system with web scraping and search capabilities",
        zh: "\u5177\u6709\u7F51\u9875\u6293\u53D6\u548C\u641C\u7D22\u80FD\u529B\u7684\u591A\u4EE3\u7406\u7CFB\u7EDF"
      },
      category: "Web",
      color: "mofa-color-4",
      scale: 0.9,
      mermaidGraph: `
    flowchart TB
      openai[\u{1F916} OpenAI Server<br/>Chat Interface]
      gosim[\u{1F3AE} GoSim Pedia Agent<br/>Main Controller]
      firecrawl[\u{1F577}\uFE0F Firecrawl Agent<br/>Web Scraping]
      rag[\u{1F9E0} GoSim RAG Agent<br/>Knowledge Retrieval]
      serper[\u{1F50D} Serper Search Agent<br/>Web Search]
      
      openai <--> gosim
      gosim --> firecrawl
      firecrawl --> gosim
      gosim --> rag
      rag --> gosim
      gosim --> serper
      serper --> gosim
      
      classDef serverNode fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
      classDef mainNode fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
      classDef toolNode fill:#fff3e0,stroke:#f57c00,stroke-width:2px
      
      class openai serverNode
      class gosim mainNode
      class firecrawl,rag,serper toolNode`
    },
    {
      id: "mem0-dataflow",
      title: {
        en: "Mem0 Memory System",
        zh: "Mem0 \u8BB0\u5FC6\u7CFB\u7EDF"
      },
      description: {
        en: "Memory-enhanced AI workflow with retrieval and recording",
        zh: "\u5177\u6709\u8BB0\u5FC6\u68C0\u7D22\u548C\u8BB0\u5F55\u80FD\u529B\u7684\u589E\u5F3AAI\u5DE5\u4F5C\u6D41"
      },
      category: "Memory",
      color: "mofa-color-1",
      scale: 0.75,
      mermaidGraph: `
    flowchart TB
      terminal[\u{1F5A5}\uFE0F Terminal Input<br/>User Task]
      retrieval[\u{1F9E0} Memory Retrieval<br/>Fetch Context]
      reasoner[\u{1F914} Reasoner<br/>Process & Think]
      record[\u{1F4BE} Memory Record<br/>Store Results]
      
      terminal --> retrieval
      retrieval --> reasoner
      terminal --> reasoner
      reasoner --> record
      terminal --> record
      retrieval --> terminal
      reasoner --> terminal
      record --> terminal
      
      classDef inputNode fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
      classDef memoryNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
      classDef processNode fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
      classDef storageNode fill:#fff3e0,stroke:#f57c00,stroke-width:2px
      
      class terminal inputNode
      class retrieval memoryNode
      class reasoner processNode
      class record storageNode`
    },
    {
      id: "intelligent-agent-creation",
      title: {
        en: "Agent Creation System",
        zh: "\u4EE3\u7406\u521B\u5EFA\u7CFB\u7EDF"
      },
      description: {
        en: "Intelligent system for generating AI agents automatically",
        zh: "\u81EA\u52A8\u751F\u6210AI\u4EE3\u7406\u7684\u667A\u80FD\u7CFB\u7EDF"
      },
      category: "Meta-AI",
      color: "mofa-color-2",
      scale: 0.75,
      mermaidGraph: `
    flowchart TB
      openai[\u{1F916} OpenAI Server<br/>API Interface]
      config[\u2699\uFE0F Config Generator<br/>Generate Settings]
      code[\u{1F468}\u200D\u{1F4BB} Code Generator<br/>Write Agent Code]
      dependency[\u{1F4E6} Dependency Generator<br/>Manage Dependencies]
      
      openai --> config
      openai --> code
      config --> code
      openai --> dependency
      code --> dependency
      config --> dependency
      dependency --> openai
      
      classDef serverNode fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
      classDef generatorNode fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
      classDef codeNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
      classDef depNode fill:#fff3e0,stroke:#f57c00,stroke-width:2px
      
      class openai serverNode
      class config generatorNode
      class code codeNode
      class dependency depNode`
    },
    {
      id: "xiaowang-workflow",
      title: {
        en: "XiaoWang Multi-Agent",
        zh: "\u591A\u4EE3\u7406\u7CFB\u7EDF"
      },
      description: {
        en: "Complex multi-agent workflow with reflection and generation",
        zh: "\u5177\u6709\u53CD\u601D\u548C\u751F\u6210\u80FD\u529B\u7684\u590D\u6742\u591A\u4EE3\u7406\u5DE5\u4F5C\u6D41"
      },
      category: "Complex",
      color: "mofa-color-3",
      scale: 0.75,
      mermaidGraph: `
    flowchart TB
      terminal[\u{1F5A5}\uFE0F XiaoWang Terminal<br/>Task Input]
      dlc[\u{1F3AF} Agent DLC<br/>Task Processing]
      generate[\u{1F527} Agent Generate<br/>Content Creation]
      reflection[\u{1F914} Agent Reflection<br/>Self-Improvement]
      
      terminal --> dlc
      dlc --> generate
      generate --> reflection
      reflection --> generate
      generate --> dlc
      dlc --> terminal
      generate --> terminal
      reflection --> terminal
      
      classDef inputNode fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
      classDef taskNode fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
      classDef generateNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
      classDef reflectNode fill:#fff3e0,stroke:#f57c00,stroke-width:2px
      
      class terminal inputNode
      class dlc taskNode
      class generate generateNode
      class reflection reflectNode`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);" data-astro-cid-22cdqia5> <div class="container mx-auto px-4" data-astro-cid-22cdqia5> <div class="text-center mb-16" data-astro-cid-22cdqia5> <h2 class="text-4xl font-bold mb-4" data-en="Real Examples: <span class='gradient-text'>AI Workflows</span> in Action" data-zh="实际案例：<span class='gradient-text'>AI 工作流</span>实战" data-astro-cid-22cdqia5>
Real Examples: <span class="gradient-text" data-astro-cid-22cdqia5>AI Workflows</span> in Action
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-en="Explore different types of AI workflows - from simple hello world to complex research automation" data-zh="探索不同类型的 AI 工作流 - 从简单的问候到复杂的研究自动化" data-astro-cid-22cdqia5>
Explore different types of AI workflows - from simple hello world to complex research automation
</p> </div> <!-- Workflow Horizontal Scroll Container --> <div class="workflow-container" data-astro-cid-22cdqia5> <div class="workflow-scroll" data-astro-cid-22cdqia5> ${workflows.map((workflow) => renderTemplate`<div class="workflow-card bg-white rounded-lg shadow-lg border-4 border-gray-300 hover:border-4 hover:border-indigo-500 transition-all duration-300 overflow-hidden" data-astro-cid-22cdqia5> <!-- Header --> <div${addAttribute(`${workflow.color} p-6 text-white`, "class")} data-astro-cid-22cdqia5> <h3 class="text-2xl font-bold mb-2"${addAttribute(workflow.title.en, "data-en")}${addAttribute(workflow.title.zh, "data-zh")} data-astro-cid-22cdqia5> ${workflow.title.en} </h3> <p class="text-white text-opacity-90"${addAttribute(workflow.description.en, "data-en")}${addAttribute(workflow.description.zh, "data-zh")} data-astro-cid-22cdqia5> ${workflow.description.en} </p> </div> <!-- Mermaid Graph --> <div class="chart-container" data-astro-cid-22cdqia5> <div${addAttribute(`mermaid-container-${workflow.id} bg-gray-50 rounded-lg p-4 border-2 border-gray-200`, "class")}${addAttribute(workflow.scale, "data-scale")} data-astro-cid-22cdqia5> <div${addAttribute(`mermaid mermaid-${workflow.id}`, "class")} data-astro-cid-22cdqia5> ${workflow.mermaidGraph} </div> </div> </div> </div>`)} </div> </div> <!-- Scroll hint --> <div class="text-center mt-8" data-astro-cid-22cdqia5> <p class="text-sm text-gray-500" data-en="← Scroll horizontally to explore more workflows →" data-zh="← 水平滚动以探索更多工作流 →" data-astro-cid-22cdqia5>
← Scroll horizontally to explore more workflows →
</p> </div> </div> </section> <!-- Mermaid Script -->  `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/WorkflowShowcase.astro", void 0);

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" id="html-root" style="scroll-behavior: smooth;"> <head><meta charset="utf-8"><meta name="description" content="MoFA - Make Ordinary Developers Full-stack AI Engineers. A modular framework for AI agents that enables developers to build complex AI applications."><meta name="viewport" content="width=device-width, initial-scale=1.0"><title id="page-title">MoFA - Make Ordinary Developers Full-stack AI Engineers</title><!-- Favicon --><link rel="icon" type="image/png" href="/favicon-32x32.png"><link rel="shortcut icon" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><meta name="theme-color" content="#6366F1">${renderHead()}</head> <body> <header style="position: sticky; top: 0; background: white; border-bottom: 4px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 50;"> <nav class="container" style="padding: 16px; display: flex; align-items: center; justify-content: space-between;"> <a href="https://mofa.ai" style="display: flex; align-items: center; gap: 8px; text-decoration: none;" target="_blank" rel="noopener noreferrer"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"> <span class="gradient-text" style="font-size: 1.5rem; font-weight: 700;">MoFA</span> </a> <div style="display: flex; align-items: center; gap: 32px;"> <a href="/docs" class="nav-link" data-en="Docs" data-zh="文档">Docs</a> <!-- 临时隐藏 Examples 链接 --> <!-- <a href="https://demo.mofa.ai" class="nav-link" target="_blank" rel="noopener noreferrer" data-en="Examples" data-zh="示例">Examples</a> --> <a href="/blog" class="nav-link" data-en="Blog" data-zh="博客">Blog</a> <!-- 语言切换按钮 --> <div style="display: flex; align-items: center; gap: 8px;"> <button id="lang-toggle" style="
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
</a> </div> </nav> </header> <!-- 主要内容 --> <main style="flex: 1;"> <!-- Hero 区域 --> <section class="py-20" style="position: relative; overflow: hidden;"> <!-- 蒙德里安背景 --> <div style="position: absolute; inset: 0; opacity: 0.1;"> <div class="mondrian-grid" style="grid-template-columns: repeat(12, 1fr); grid-template-rows: repeat(8, 1fr); height: 100%;"> <div class="mondrian-block animate-grid-float" style="background-color: var(--mondrian-red); grid-column: span 3; grid-row: span 2;"></div> <div class="mondrian-block animate-grid-float" style="background-color: var(--mondrian-blue); grid-column: span 2; grid-row: span 3; animation-delay: 0.5s;"></div> <div class="mondrian-block animate-grid-float" style="background-color: var(--mondrian-yellow); grid-column: span 4; grid-row: span 2; animation-delay: 1s;"></div> <div class="mondrian-block" style="background-color: var(--mondrian-white); grid-column: span 3; grid-row: span 3;"></div> </div> </div> <div class="container" style="position: relative; z-index: 10;"> <div class="max-w-4xl mx-auto text-center"> <!-- Logo --> <div style="display: flex; justify-content: center; margin-bottom: 32px;"> <div class="logo-container" style="width: 144px; height: 144px; position: relative; overflow: hidden; border-radius: 20px;"> <!-- 原始logo作为背景定位参考 --> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px; filter: invert(1); display: none;"> <!-- M字母 - 左上 --> <div class="logo-letter-container" style="
                position: absolute;
                top: 12px;
                left: 14px;
                width: 60px;
                height: 56px;
                z-index: 10;
                --flow-delay: 0;
              "> <img src="mofa-M.png" alt="M" class="logo-letter letter-m draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> <!-- O字母 - 左下 --> <div class="logo-letter-container" style="
                position: absolute;
                top: 66px;
                left: 14px;
                width: 60px;
                height: 60px;
                z-index: 10;
                --flow-delay: 1;
              "> <img src="mofa-O.png" alt="O" class="logo-letter letter-o draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> <!-- F字母 - 右侧 --> <div class="logo-letter-container" style="
                position: absolute;
                top: 12px;
                left: 76px;
                width: 48px;
                height: 106px;
                z-index: 10;
                --flow-delay: 2;
              "> <img src="mofa-F.png" alt="F" class="logo-letter letter-f draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> <!-- A字母 - 右下 --> <div class="logo-letter-container" style="
                position: absolute;
                top: 60px;
                left: 80px;
                width: 58px;
                height: 69px;
                z-index: 10;
                --flow-delay: 3;
              "> <img src="mofa-A.png" alt="A" class="logo-letter letter-a draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> </div> </div> <!-- 副标题 --> <p class="text-2xl font-medium mb-4" style="color: var(--mondrian-black);" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师">
Make Ordinary Developers Full-stack AI Engineers
</p> <p class="text-xl mb-8 text-gray-600" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架">
Modular Framework for AI Agents
</p> <!-- 描述 --> <p class="text-xl text-gray-700 mb-12 max-w-2xl mx-auto" data-en="A composable AI agent framework that enables every developer to easily build, debug, and deploy complex AI applications" data-zh="通过可组合的 AI 代理框架，让每个开发者都能轻松构建、调试和部署复杂的 AI 应用">
A composable AI agent framework that enables every developer to easily build, debug, and deploy complex AI applications
</p> <!-- CTA 按钮 --> <div style="display: flex; flex-direction: column; gap: 16px; justify-content: center; margin-bottom: 64px;"> <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;"> <a href="https://github.com/moxin-org/mofa/blob/main/python/README.md#2-quick-start-guide" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 1.125rem; padding: 16px 32px;" data-en="🚀 Quick Start" data-zh="🚀 快速开始">
🚀 Quick Start
</a> <a href="#why-mofa" rel="noopener noreferrer" class="btn-outline" style="font-size: 1.125rem; padding: 16px 32px;" data-en="💡 Learn More" data-zh="💡 了解更多">
💡 Learn More
</a> </div> </div> <!-- 快速统计 --> <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto"> <div class="text-center"> <div class="text-3xl font-bold" style="color: var(--mondrian-red);" data-en="5 min" data-zh="5分钟">5 min</div> <div class="text-sm text-gray-600" data-en="Quick Setup" data-zh="快速上手">Quick Setup</div> </div> <div class="text-center"> <div class="text-3xl font-bold" style="color: var(--mondrian-blue);">100+</div> <div class="text-sm text-gray-600" data-en="Built-in Agents" data-zh="内置代理">Built-in Agents</div> </div> <div class="text-center"> <div class="text-3xl font-bold" style="color: var(--mondrian-yellow);">∞</div> <div class="text-sm text-gray-600" data-en="Combinations" data-zh="组合可能">Combinations</div> </div> </div> </div> </div> </section> <!-- 小型分隔线 --> <div class="mini-divider"> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> </div> <!-- 核心优势 --> <section id="why-mofa" class="py-20" style="background-color: #f9fafb;"> <div class="container"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4" data-en="Why Choose <span class='gradient-text'>MoFA</span>" data-zh="为什么选择 <span class='gradient-text'>MoFA</span>">
Why Choose <span class="gradient-text">MoFA</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-en="Making AI development simple, efficient, and enjoyable" data-zh="让 AI 开发变得简单、高效、有趣">
Making AI development simple, efficient, and enjoyable
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--mondrian-red); color: white; flex-shrink: 0;">
🧩
</div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Composable Agent Architecture" data-zh="可组合的代理架构">Composable Agent Architecture</h3> <p class="text-gray-600" data-en="Build complex AI applications by connecting agents via YAML-defined flows. Leverage a core kernel with modules for RAG (embedding, splitting, vector stores), planning, and tool integration. Easily orchestrate data flow between agents." data-zh="通过 YAML 定义的工作流连接代理，构建复杂的 AI 应用。利用包含 RAG（嵌入、分割、向量存储）、规划和工具集成等模块的核心内核。轻松编排代理间的数据流动。">
Build complex AI applications by connecting agents via YAML-defined flows. Leverage a core kernel with modules for RAG (embedding, splitting, vector stores), planning, and tool integration. Easily orchestrate data flow between agents.
</p> </div> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--mondrian-blue); color: white; flex-shrink: 0;">
⚡
</div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Rapid Agent Development" data-zh="快速代理开发">Rapid Agent Development</h3> <p class="text-gray-600" data-en="MoFA offers a clear structure for agent development, significantly reducing boilerplate and letting you focus on core logic. The MoFA Stage visual IDE further accelerates the entire development cycle, from creation to debugging. Get started in just 5 minutes." data-zh="MoFA 提供清晰的代理开发结构，大幅减少样板代码，让您专注于核心业务逻辑。结合 MoFA Stage 可视化 IDE，可进一步加速从创建到调试的完整开发周期。5分钟即可快速上手。">
MoFA offers a clear structure for agent development, significantly reducing boilerplate and letting you focus on core logic. The MoFA Stage visual IDE further accelerates the entire development cycle, from creation to debugging. Get started in just 5 minutes.
</p> </div> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--mondrian-yellow); color: var(--mondrian-black); flex-shrink: 0;">
🚀
</div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Rich Agent Hub & Dev Tools" data-zh="丰富代理中心与开发工具">Rich Agent Hub &amp; Dev Tools</h3> <p class="text-gray-600" data-en="Access 100+ pre-built agents from our Agent Hub, covering data connectors, LLM integrations, and specialized tools. MoFA Stage further enhances development with visual agent management, an integrated terminal, and an advanced code editor." data-zh="从我们的代理中心获取100+预构建代理，涵盖数据连接器、LLM 集成和专用工具。MoFA Stage 通过可视化代理管理、集成终端和高级代码编辑器进一步增强开发体验。">
Access 100+ pre-built agents from our Agent Hub, covering data connectors, LLM integrations, and specialized tools. MoFA Stage further enhances development with visual agent management, an integrated terminal, and an advanced code editor.
</p> </div> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--mondrian-black); color: white; flex-shrink: 0;">
🔧
</div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Highly Extensible Framework" data-zh="高度可扩展框架">Highly Extensible Framework</h3> <p class="text-gray-600" data-en="Easily write custom Python agents. Integrate third-party tools, models, and data sources through well-defined interfaces. Extend core functionalities like memory (e.g., Mem0 integration) or RAG strategies by implementing custom components." data-zh="轻松编写自定义 Python 代理。通过定义良好的接口集成第三方工具、模型和数据源。通过实现自定义组件来扩展核心功能，如记忆（例如 Mem0 集成）或 RAG 策略。">
Easily write custom Python agents. Integrate third-party tools, models, and data sources through well-defined interfaces. Extend core functionalities like memory (e.g., Mem0 integration) or RAG strategies by implementing custom components.
</p> </div> </div> </div> </div> <div class="text-center mt-16 mb-8" style="display: none;"> <h3 class="text-3xl font-bold" data-en="Highlight: Your AI Agent IDE - <span class='gradient-text'>MoFA Stage</span>" data-zh="核心功能：你的 AI Agent IDE - <span class='gradient-text'>MoFA Stage</span>">
Highlight: Your AI Agent IDE - <span class="gradient-text">MoFA Stage</span> </h3> </div> <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12" style="display: none;" data-en="A visual management platform for MoFA - your web-based IDE for AI agents." data-zh="MoFA 的可视化管理平台 - 你的Agent专属 Web IDE.">
A visual management platform for MoFA - your web-based IDE.
</p> <div class="max-w-6xl mx-auto" style="display: none;"> <!-- 平台特色展示 --> <div class="grid md:grid-cols-3 gap-8 mb-16"> <div class="card" style="border: 2px solid var(--mondrian-black); transition: all 0.3s ease; padding: 16px;" onmouseover="this.style.borderWidth='4px'; this.style.transform='translateY(-8px)'" onmouseout="this.style.borderWidth='2px'; this.style.transform='translateY(0)'"> <div style="text-align: center;"> <div style="
                   width: 48px;
                   height: 48px;
                   margin: 0 auto 12px;
                   background: linear-gradient(135deg, var(--mondrian-red), #8B5CF6);
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   font-size: 1.5rem;
                   color: white;
                   box-shadow: 0 6px 18px rgba(99, 102, 241, 0.3);
                 ">💻</div> <h3 class="text-base font-semibold mb-1" data-en="Visual Agent Management" data-zh="可视化代理管理">Visual Agent Management</h3> <p class="text-gray-600 text-xs leading-snug" data-en="Create, edit, and manage AI agents through an intuitive web interface" data-zh="通过直观的网页界面创建、编辑和管理 AI 代理">
Create, edit, and manage AI agents through an intuitive web interface - no command line expertise required
</p> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: all 0.3s ease; padding: 16px;" onmouseover="this.style.borderWidth='4px'; this.style.transform='translateY(-8px)'" onmouseout="this.style.borderWidth='2px'; this.style.transform='translateY(0)'"> <div style="text-align: center;"> <div style="
                   width: 48px;
                   height: 48px;
                   margin: 0 auto 12px;
                   background: linear-gradient(135deg, var(--mondrian-blue), #06B6D4);
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   font-size: 1.5rem;
                   color: white;
                   box-shadow: 0 6px 18px rgba(14, 165, 233, 0.3);
                 ">🖥️</div> <h3 class="text-base font-semibold mb-1" data-en="Integrated Terminal" data-zh="集成终端">Integrated Terminal</h3> <p class="text-gray-600 text-xs leading-snug" data-en="Built-in web terminal with SSH access - execute commands and monitor agents directly from your browser" data-zh="内置网页终端支持 SSH 访问 - 直接在浏览器中执行命令和监控代理">
Built-in web terminal with SSH access - execute commands and monitor agents directly from your browser
</p> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: all 0.3s ease; padding: 16px;" onmouseover="this.style.borderWidth='4px'; this.style.transform='translateY(-8px)'" onmouseout="this.style.borderWidth='2px'; this.style.transform='translateY(0)'"> <div style="text-align: center;"> <div style="
                   width: 48px;
                   height: 48px;
                   margin: 0 auto 12px;
                   background: linear-gradient(135deg, var(--mondrian-yellow), #FBBF24);
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   font-size: 1.5rem;
                   color: var(--mondrian-black);
                   box-shadow: 0 6px 18px rgba(245, 158, 11, 0.3);
                 ">📝</div> <h3 class="text-base font-semibold mb-1" data-en="Advanced Code Editor" data-zh="代码编辑器">Code Editor</h3> <p class="text-gray-600 text-xs leading-snug" data-en="Monaco-powered editor with syntax highlighting, auto-completion, and instant Markdown preview" data-zh="基于 Monaco 的编辑器，支持语法高亮、自动补全和 Markdown 即时预览">
Monaco-powered editor with syntax highlighting, auto-completion, and instant Markdown preview - just like VS Code
</p> </div> </div> </div> <!-- 平台架构展示 --> <div class="bg-white rounded-lg shadow-lg p-8" style="border: 2px solid var(--mondrian-black); display: none;"> <div class="text-center mb-8"> <h3 class="text-2xl font-bold mb-4" data-en="Full-Stack Architecture" data-zh="全栈架构">Full-Stack Architecture</h3> <p class="text-gray-600" data-en="Built with modern technologies for optimal performance and developer experience" data-zh="使用现代技术构建，确保最佳性能和开发体验">
Built with modern technologies for optimal performance and developer experience
</p> </div> <div class="grid md:grid-cols-2 gap-12"> <!-- 前端技术栈 --> <div> <h4 class="text-lg font-semibold mb-4 flex items-center gap-2" data-en="🎨 Frontend Stack" data-zh="🎨 前端技术栈">
🎨 Frontend Stack
</h4> <div class="space-y-3"> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #42b883; border-radius: 50%;"></div> <span class="font-medium">Vue 3</span> <span class="text-sm text-gray-500" data-en="Progressive Framework" data-zh="渐进式框架">Progressive Framework</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #409eff; border-radius: 50%;"></div> <span class="font-medium">Element Plus</span> <span class="text-sm text-gray-500" data-en="UI Components" data-zh="UI 组件库">UI Components</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: var(--mondrian-blue); border-radius: 50%;"></div> <span class="font-medium">Monaco Editor</span> <span class="text-sm text-gray-500" data-en="VS Code Engine" data-zh="VS Code 引擎">VS Code Engine</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #000; border-radius: 50%;"></div> <span class="font-medium">XTerm.js</span> <span class="text-sm text-gray-500" data-en="Terminal Emulation" data-zh="终端模拟">Terminal Emulation</span> </div> </div> </div> <!-- 后端技术栈 --> <div> <h4 class="text-lg font-semibold mb-4 flex items-center gap-2" data-en="⚙️ Backend Stack" data-zh="⚙️ 后端技术栈">
⚙️ Backend Stack
</h4> <div class="space-y-3"> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #306998; border-radius: 50%;"></div> <span class="font-medium">Python + Flask</span> <span class="text-sm text-gray-500" data-en="RESTful API" data-zh="RESTful API">RESTful API</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: var(--mondrian-red); border-radius: 50%;"></div> <span class="font-medium">WebSocket</span> <span class="text-sm text-gray-500" data-en="Real-time Communication" data-zh="实时通信">Real-time Communication</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #ff6b35; border-radius: 50%;"></div> <span class="font-medium">SSH Integration</span> <span class="text-sm text-gray-500" data-en="Terminal Access" data-zh="终端访问">Terminal Access</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: var(--mondrian-yellow); border-radius: 50%;"></div> <span class="font-medium">ttyd Service</span> <span class="text-sm text-gray-500" data-en="Web Terminal" data-zh="网页终端">Web Terminal</span> </div> </div> </div> </div> </div> <!-- 快速开始按钮 --> <div class="text-center mt-12"> <a href="https://github.com/moxin-org/mofa/tree/main/MoFA_stage" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 1.125rem; padding: 16px 32px; margin-right: 16px;" data-en="🚀 Explore MoFA_Stage" data-zh="🚀 探索 MoFA_Stage">
🚀 Explore MoFA_Stage
</a> <a href="https://github.com/moxin-org/mofa/tree/main/MoFA_stage#quick-start" target="_blank" rel="noopener noreferrer" class="btn-outline" style="font-size: 1.125rem; padding: 16px 32px;" data-en="📖 Quick Start Guide" data-zh="📖 快速开始指南">
📖 Quick Start Guide
</a> </div> </div> </div> </section> <!-- 小型分隔线 --> <div class="mini-divider"> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> <div class="mini-line red-line"></div> </div> <!-- 新的工作流展示组件 --> ${renderComponent($$result, "WorkflowShowcase", $$WorkflowShowcase, {})} <!-- 小型分隔线 --> <div class="mini-divider"> <div class="mini-line yellow-line"></div> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> </div> <!-- Demo Video Section --> <section class="py-20" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);"> <div class="container"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4" data-en="See MoFA in <span class='gradient-text'>Action</span>" data-zh="观看 MoFA <span class='gradient-text'>实战演示</span>">
See MoFA in <span class="gradient-text">Action</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-en="Watch how developers use MoFA to build sophisticated AI applications in minutes" data-zh="观看开发者如何在几分钟内使用 MoFA 构建复杂的人工智能应用">Watch how developers use MoFA to build sophisticated AI applications in minutes</p> <!-- Video Embed --> <div class="video-container rounded-lg shadow-2xl overflow-hidden mx-auto" style="max-width: 800px; background-color: #2d3748;"> <iframe id="demo-video-iframe" width="100%" style="aspect-ratio: 16/9; display: block;" src="https://www.youtube.com/embed/-QApoNUPG-U" title="MoFA in Action Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe> </div> </div> </div> <!-- 小型分隔线 --> <div class="mini-divider"> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> </div> </section></main> <footer style="background-color: var(--mondrian-black); color: white;"> <div class="container py-12"> <div class="text-center"> <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px;"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 32px; height: 32px; border-radius: 6px; object-fit: cover;"> <span style="font-size: 1.25rem; font-weight: 700;">MoFA</span> </div> <p style="color: #9ca3af; margin-bottom: 8px;" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师">
Make Ordinary Developers Full-stack AI Engineers
</p> <p style="color: #9ca3af; margin-bottom: 24px;" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架">
Modular Framework for AI Agents
</p> <div style="display: flex; justify-content: center; gap: 32px; margin-bottom: 16px;"> <a href="https://github.com/moxin-org/mofa" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">GitHub</a> <a href="https://discord.gg/mofa-ai" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">Discord</a> <a href="https://github.com/moxin-org/mofa/tree/main/Gosim_2024_Hackathon/documents" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-en="Docs" data-zh="文档">Docs</a> </div> <p style="color: #6b7280; font-size: 0.875rem;" data-en="© 2025 MoFA. All rights reserved." data-zh="© 2025 MoFA. 保留所有权利.">
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
</button> <!-- 语言切换脚本 -->  </body> </html>`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/index.astro", void 0);

const $$file$3 = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/index.astro";
const $$url$3 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const examples = [
    {
      id: "hello-world",
      title: "Hello World",
      description: "\u6700\u7B80\u5355\u7684\u5165\u95E8\u793A\u4F8B\uFF0C\u521B\u5EFA\u7B2C\u4E00\u4E2A AI \u4EE3\u7406",
      category: "\u5165\u95E8",
      difficulty: 1,
      time: "5\u5206\u949F",
      code: `from mofa import Agent, Pipeline
from mofa.messages import HumanMessage

# \u521B\u5EFA\u4EE3\u7406
agent = Agent(
    name="hello-agent",
    system_prompt="\u4F60\u662F\u4E00\u4E2A\u53CB\u597D\u7684\u52A9\u624B"
)

# \u521B\u5EFA\u7BA1\u9053\u5E76\u8FD0\u884C
pipeline = Pipeline().add(agent)
response = pipeline.run(
    HumanMessage("\u4F60\u597D\uFF01")
)

print(response.content)`,
      color: "bg-mondrian-red"
    },
    {
      id: "rag-qa",
      title: "RAG \u95EE\u7B54\u7CFB\u7EDF",
      description: "\u57FA\u4E8E\u68C0\u7D22\u589E\u5F3A\u751F\u6210\u7684\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF",
      category: "\u4E2D\u7EA7",
      difficulty: 3,
      time: "30\u5206\u949F",
      code: `from mofa import Agent, Pipeline
from mofa.agents import RAGAgent
from mofa.knowledge import VectorStore

# \u521B\u5EFA\u77E5\u8BC6\u5E93
knowledge = VectorStore()
knowledge.add_documents([
    "MoFA \u662F\u4E00\u4E2A\u6A21\u5757\u5316\u7684 AI \u4EE3\u7406\u6846\u67B6",
    "\u5B83\u652F\u6301\u7EC4\u5408\u5F0F\u5F00\u53D1\u6A21\u5F0F"
])

# \u521B\u5EFA RAG \u4EE3\u7406
rag_agent = RAGAgent(
    name="rag-qa",
    knowledge_base=knowledge
)

# \u8FD0\u884C\u67E5\u8BE2
pipeline = Pipeline().add(rag_agent)
response = pipeline.run("\u4EC0\u4E48\u662F MoFA\uFF1F")`,
      color: "bg-mondrian-blue"
    },
    {
      id: "arxiv-analyzer",
      title: "Arxiv \u8BBA\u6587\u5206\u6790",
      description: "\u81EA\u52A8\u5206\u6790\u548C\u603B\u7ED3\u5B66\u672F\u8BBA\u6587\u7684 AI \u4EE3\u7406",
      category: "\u9AD8\u7EA7",
      difficulty: 4,
      time: "60\u5206\u949F",
      code: `from mofa import Agent, Pipeline
from mofa.agents import PaperAnalyzer
from mofa.tools import ArxivTool

# \u521B\u5EFA\u8BBA\u6587\u5206\u6790\u4EE3\u7406
analyzer = PaperAnalyzer(
    name="arxiv-analyzer",
    tools=[ArxivTool()]
)

# \u5206\u6790\u8BBA\u6587
pipeline = Pipeline().add(analyzer)
result = pipeline.run(
    "\u5206\u6790\u8BBA\u6587 arxiv:2301.00001"
)

print(result.summary)`,
      color: "bg-mondrian-yellow"
    },
    {
      id: "reflection-agent",
      title: "\u53CD\u601D\u4EE3\u7406",
      description: "\u5177\u6709\u81EA\u6211\u53CD\u601D\u80FD\u529B\u7684\u667A\u80FD\u4EE3\u7406\u7CFB\u7EDF",
      category: "\u9AD8\u7EA7",
      difficulty: 4,
      time: "45\u5206\u949F",
      code: `from mofa import Agent, Pipeline
from mofa.patterns import ReflectionPattern

# \u521B\u5EFA\u53CD\u601D\u4EE3\u7406
agent = Agent(
    name="reflection-agent",
    pattern=ReflectionPattern(
        max_iterations=3
    )
)

pipeline = Pipeline().add(agent)
response = pipeline.run(
    "\u5199\u4E00\u4E2APython\u6392\u5E8F\u7B97\u6CD5\u5E76\u4F18\u5316\u5B83"
)`,
      color: "bg-mondrian-red"
    },
    {
      id: "multi-agent",
      title: "\u591A\u4EE3\u7406\u534F\u4F5C",
      description: "\u591A\u4E2A AI \u4EE3\u7406\u534F\u540C\u5DE5\u4F5C\u5B8C\u6210\u590D\u6742\u4EFB\u52A1",
      category: "\u4E13\u5BB6",
      difficulty: 5,
      time: "90\u5206\u949F",
      code: `from mofa import Agent, Pipeline
from mofa.patterns import CollaborationPattern

# \u521B\u5EFA\u591A\u4E2A\u4E13\u95E8\u4EE3\u7406
researcher = Agent(name="researcher")
writer = Agent(name="writer") 
reviewer = Agent(name="reviewer")

# \u8BBE\u7F6E\u534F\u4F5C\u6A21\u5F0F
pipeline = Pipeline(
    pattern=CollaborationPattern()
)
pipeline.add(researcher)
pipeline.add(writer)
pipeline.add(reviewer)

result = pipeline.run(
    "\u7814\u7A76\u5E76\u5199\u4E00\u7BC7\u5173\u4E8E AI \u53D1\u5C55\u7684\u6587\u7AE0"
)`,
      color: "bg-mondrian-blue"
    },
    {
      id: "community-examples",
      title: "\u793E\u533A\u6848\u4F8B",
      description: "\u6765\u81EA\u793E\u533A\u7684\u7CBE\u5F69\u5E94\u7528\u6848\u4F8B\u96C6\u5408",
      category: "\u793E\u533A",
      difficulty: 0,
      time: "\u53D8\u5316",
      code: `# \u793E\u533A\u8D21\u732E\u7684\u5404\u79CD\u521B\u610F\u6848\u4F8B
# \u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A
# - \u667A\u80FD\u5BA2\u670D\u7CFB\u7EDF
# - \u4EE3\u7801\u751F\u6210\u52A9\u624B
# - \u6570\u636E\u5206\u6790\u5DE5\u5177
# - \u521B\u610F\u5199\u4F5C\u52A9\u624B
# - \u6E38\u620F NPC \u7CFB\u7EDF

# \u67E5\u770B\u5B8C\u6574\u6848\u4F8B\u8BF7\u8BBF\u95EE\uFF1A
# https://github.com/moxin-org/mofa-examples`,
      color: "bg-mondrian-yellow"
    }
  ];
  const { base } = (Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://mofa-org.github.io","ASSETS_PREFIX":undefined},{_:process.env._,}));
  function getDifficultyStars(difficulty) {
    return "\u2605".repeat(difficulty) + "\u2606".repeat(5 - difficulty);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u793A\u4F8B\u9879\u76EE", "description": "\u63A2\u7D22 MoFA \u7684\u5404\u79CD\u5E94\u7528\u573A\u666F\u548C\u5B9E\u73B0\u65B9\u5F0F" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-5xl font-bold mb-4">
示例项目展示
</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
从简单到复杂，探索 <span class="gradient-text">MoFA</span> 的无限可能
</p> </div> <!-- Examples Grid --> <div class="max-w-7xl mx-auto"> ${examples.map((example) => renderTemplate`<div class="mb-12 group"${addAttribute(example.id, "id")}> <div class="card border-2 border-mondrian-black hover:border-4 transition-all duration-200"> <!-- Header --> <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6"> <div class="flex-1"> <div class="flex items-center mb-3"> <span${addAttribute(`${example.color} text-white text-sm px-3 py-1 rounded-md font-medium mr-3`, "class")}> ${example.category} </span> ${example.difficulty > 0 && renderTemplate`<span class="text-sm text-gray-500 mr-3">
难度: ${getDifficultyStars(example.difficulty)} </span>`} <span class="text-sm text-gray-500">
预计时间: ${example.time} </span> </div> <h2 class="text-3xl font-bold mb-3 group-hover:text-mondrian-red transition-colors"> ${example.title} </h2> <p class="text-lg text-gray-600"> ${example.description} </p> </div> <div class="mt-4 lg:mt-0 lg:ml-6"> <a${addAttribute(`https://github.com/moxin-org/mofa-examples/tree/main/${example.id}`, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary">
查看完整代码
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> <!-- Code Example --> <div class="relative group/code"> <div class="absolute -inset-1 bg-gradient-to-r from-mondrian-red via-mondrian-blue to-mondrian-yellow opacity-20 blur group-hover/code:opacity-30 transition duration-300"></div> <div class="relative bg-gray-900 rounded-lg p-6 border-2 border-mondrian-black"> <pre class="text-sm overflow-x-auto"><code class="text-gray-100">${example.code}</code></pre> </div> </div> </div> </div>`)} </div> <!-- Call to Action --> <div class="text-center mt-16"> <div class="bg-gray-50 rounded-lg p-8"> <h2 class="text-2xl font-bold mb-4">想要贡献你的示例？</h2> <p class="text-gray-600 mb-6">我们欢迎社区贡献更多有趣的应用案例</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://github.com/moxin-org/mofa-examples" target="_blank" rel="noopener noreferrer" class="btn-secondary">
查看示例仓库
</a> <a${addAttribute(`${base}/community/contributing`, "href")} class="btn-outline">
贡献指南
</a> </div> </div> </div> </div> ` })}`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/examples/index.astro", void 0);

const $$file$2 = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/examples/index.astro";
const $$url$2 = "/examples";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u535A\u5BA2", "description": "MoFA \u7684\u6700\u65B0\u52A8\u6001\u548C\u6280\u672F\u5206\u4EAB" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;"> <!-- 页面标题 --> <header style="text-align: center; margin-bottom: 60px;"> <h1 style="font-size: 2.5rem; font-weight: bold; margin: 0 0 16px 0; color: #1a1a1a;">
MoFA Blog
</h1> <p style="font-size: 1.2rem; color: #666; margin: 0; line-height: 1.6;">
Latest about MoFA.
</p> </header> <!-- 博客文章列表 --> <div style="margin-bottom: 40px;"> ${sortedPosts.map((post) => renderTemplate`<article style="margin-bottom: 40px; padding: 32px; border: 1px solid #e5e5e5; border-radius: 8px; background: #fff;"> <!-- 文章元信息 --> <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;"> <time style="color: #666; font-size: 0.9rem;"> ${post.data.date.toLocaleDateString("zh-CN")} </time> ${post.data.tags && renderTemplate`<div style="display: flex; gap: 8px;"> ${post.data.tags.map((tag) => renderTemplate`<span style="background: #f0f0f0; color: #333; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"> ${tag} </span>`)} </div>`} </div> <!-- 文章标题 --> <h2 style="margin: 0 0 12px 0; font-size: 1.5rem; font-weight: 600; line-height: 1.4;"> <a${addAttribute(`/blog/${post.slug}`, "href")} style="color: #1a1a1a; text-decoration: none;" onmouseover="this.style.color='#0066cc'" onmouseout="this.style.color='#1a1a1a'"> ${post.data.title} </a> </h2> <!-- 文章描述 --> <p style="color: #666; margin: 0 0 16px 0; line-height: 1.6; font-size: 1rem;"> ${post.data.description} </p> <!-- 作者和阅读链接 --> <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;"> <span style="color: #888; font-size: 0.9rem;">
作者：${post.data.author} </span> <a${addAttribute(`/blog/${post.slug}`, "href")} style="color: #0066cc; text-decoration: none; font-weight: 500; padding: 8px 16px; border: 1px solid #0066cc; border-radius: 4px; font-size: 0.9rem;" onmouseover="this.style.background='#0066cc'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='#0066cc'">
阅读全文 →
</a> </div> </article>`)} </div> <!-- 空状态 --> ${sortedPosts.length === 0 && renderTemplate`<div style="text-align: center; padding: 80px 20px; color: #666;"> <h2 style="font-size: 1.5rem; margin: 0 0 16px 0; color: #888;">敬请期待</h2> <p style="margin: 0; font-size: 1rem;">我们正在准备更多精彩内容</p> </div>`} </div> ` })}`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/blog/index.astro", void 0);

const $$file$1 = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-zsukdfzm> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Redirecting to Documentation...</title><meta http-equiv="refresh" content="0;url=/docs/0overview"><link rel="canonical" href="/docs/0overview">${renderHead()}</head> <body data-astro-cid-zsukdfzm> <div style="text-align: center; padding: 80px 20px; font-family: system-ui, -apple-system, sans-serif;" data-astro-cid-zsukdfzm> <h1 style="font-size: 2rem; margin-bottom: 16px;" data-astro-cid-zsukdfzm>Redirecting to Documentation...</h1> <p style="color: #666; margin-bottom: 24px;" data-astro-cid-zsukdfzm>If you are not redirected automatically, <a href="/docs/0overview" style="color: #0066cc;" data-astro-cid-zsukdfzm>click here</a>.</p> <div class="loading" style="margin: 0 auto; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #0066cc; border-radius: 50%; animation: spin 1s linear infinite;" data-astro-cid-zsukdfzm></div> </div>  </body> </html>`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/docs/index.astro", void 0);

const $$file = "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/pages/docs/index.astro";
const $$url = "/docs";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
