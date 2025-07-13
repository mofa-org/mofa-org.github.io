import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.32e88c90.js';
import 'clsx';
/* empty css                           *//* empty css                          */import { $ as $$BaseLayout, g as getCollection } from './_...slug_.astro.e6d9cad9.js';
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
        en: "Basic agent example",
        zh: "\u6700\u7B80\u5355\u7684 AI \u4EE3\u7406\u6570\u636E\u6D41"
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
        en: "Automated paper research",
        zh: "\u81EA\u52A8\u5316\u7814\u7A76\uFF0C\u5305\u542B\u8BBA\u6587\u5206\u6790\u548C\u62A5\u544A\u751F\u6210"
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
        en: "RAG for Q&A",
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
        en: "Multi-agent web research",
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
        en: "Memory-enhanced dataflow",
        zh: "\u5177\u6709\u8BB0\u5FC6\u68C0\u7D22\u548C\u8BB0\u5F55\u80FD\u529B\u7684\u589E\u5F3AAI\u6570\u636E\u6D41"
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
        en: "Auto-generate AI agents",
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
        en: "Multi-agent reflection & generation",
        zh: "\u5177\u6709\u53CD\u601D\u548C\u751F\u6210\u80FD\u529B\u7684\u590D\u6742\u591A\u4EE3\u7406\u6570\u636E\u6D41"
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
  const repoLinks = {
    "hello-world": "https://github.com/moxin-org/mofa/tree/main/python/examples/hello_world",
    "arxiv-research": "https://github.com/moxin-org/mofa/tree/main/python/examples/arxiv_research",
    "rag-system": "https://github.com/moxin-org/mofa/tree/main/python/examples/rag",
    "gosim-pedia": "https://github.com/moxin-org/mofa/tree/main/python/examples/gosim-pedia",
    "mem0-dataflow": "https://github.com/moxin-org/mofa/tree/main/python/examples/mem0-dataflow",
    "intelligent-agent-creation": "https://github.com/moxin-org/mofa/tree/main/python/examples/intelligent_agent_creation",
    "xiaowang-workflow": "https://github.com/moxin-org/mofa/tree/main/python/examples/xiaowang"
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-20" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);" data-astro-cid-22cdqia5> <div class="container mx-auto px-4" data-astro-cid-22cdqia5> <div class="text-center mb-16" data-astro-cid-22cdqia5> <h2 class="text-4xl font-bold mb-4" data-en="Real Examples: <span class='gradient-text'>AI Dataflows</span> in Action" data-zh="实际案例：<span class='gradient-text'>AI 数据流</span>实战" data-astro-cid-22cdqia5>
Real Examples: <span class="gradient-text" data-astro-cid-22cdqia5>AI Dataflows</span> in Action
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-en="Explore different types of AI dataflows - from simple hello world to complex research automation" data-zh="探索不同类型的 AI 数据流 - 从简单的Hello World到复杂的研究自动化" data-astro-cid-22cdqia5>
Explore different types of AI dataflows - from simple hello world to complex research automation
</p> </div> <!-- Workflow Horizontal Scroll Container --> <div class="workflow-container" data-astro-cid-22cdqia5> <div class="workflow-scroll" data-astro-cid-22cdqia5> ${workflows.map((workflow) => renderTemplate`<div class="workflow-card bg-white rounded-lg shadow-lg border-4 border-gray-300 hover:border-4 hover:border-indigo-500 transition-all duration-300 overflow-hidden" data-astro-cid-22cdqia5> <!-- Header --> <div${addAttribute(`${workflow.color} p-6 text-white`, "class")} data-astro-cid-22cdqia5> <h3 class="text-2xl font-bold mb-2"${addAttribute(workflow.title.en, "data-en")}${addAttribute(workflow.title.zh, "data-zh")} data-astro-cid-22cdqia5> ${workflow.title.en} </h3> <p class="text-white text-opacity-90"${addAttribute(workflow.description.en, "data-en")}${addAttribute(workflow.description.zh, "data-zh")} data-astro-cid-22cdqia5> ${workflow.description.en} </p> </div> <!-- Mermaid Graph --> <div class="chart-container" data-astro-cid-22cdqia5> <div${addAttribute(`mermaid-container-${workflow.id} bg-gray-50 rounded-lg p-4 border-2 border-gray-200`, "class")}${addAttribute(workflow.scale, "data-scale")} data-astro-cid-22cdqia5> <div${addAttribute(`mermaid mermaid-${workflow.id}`, "class")} data-astro-cid-22cdqia5> ${workflow.mermaidGraph} </div> </div> </div> <!-- Action Buttons --> <div class="p-4 flex justify-end gap-2" data-astro-cid-22cdqia5> <!-- Zoom / View Button --> <button type="button"${addAttribute(`workflow-view-btn ${workflow.color}`, "class")}${addAttribute(workflow.id, "data-target-id")} aria-label="View Diagram" data-en="View" data-zh="查看" data-astro-cid-22cdqia5> <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-22cdqia5><path d="M10 2a8 8 0 1 0 4.906 14.32l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" data-astro-cid-22cdqia5></path></svg> <span class="ml-1 hidden sm:inline" data-astro-cid-22cdqia5>View</span> </button> <!-- GitHub Link Button --> <a${addAttribute(repoLinks[workflow.id], "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`workflow-code-btn ${workflow.color}`, "class")} data-astro-cid-22cdqia5> <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-22cdqia5><path d="M12 .5C5.73.5.49 5.74.49 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.46-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.21-1.5 3.17-1.19 3.17-1.19.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.8 1.09.8 2.2 0 1.59-.02 2.87-.02 3.26 0 .31.2.68.8.56a10.53 10.53 0 0 0 7.85-10.97C23.51 5.74 18.27.5 12 .5z" data-astro-cid-22cdqia5></path></svg> <span class="ml-1" data-en="Code" data-zh="代码" data-astro-cid-22cdqia5>Code</span> </a> </div> </div>`)} </div> </div> <!-- Scroll hint --> <div class="text-center mt-8" data-astro-cid-22cdqia5> <p class="text-sm text-gray-500" data-en="← Scroll horizontally to explore more workflows →" data-zh="← 水平滚动以探索更多数据流 →" data-astro-cid-22cdqia5>
← Scroll horizontally to explore more workflows →
</p> </div> </div> </section> <!-- Mermaid Script -->  `;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/WorkflowShowcase.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$TabletQuickStart = createComponent(($$result, $$props, $$slots) => {
  const tabs = [
    {
      id: "install",
      labelZh: "1. \u5B89\u88C5",
      labelEn: "1. Install",
      commandMain: "pip install mofa-ai",
      secondary: "pip install mofa-stage  # MoFA_Stage GUI"
    },
    {
      id: "clone",
      labelZh: "2. \u514B\u9686\u6570\u636E\u6D41",
      labelEn: "2. Clone Data Flow",
      commandMain: "mofa clone-node <repo-url>",
      secondary: "Clone an existing data flow"
    },
    {
      id: "run",
      labelZh: "3. \u8FD0\u884C\u6570\u636E\u6D41",
      labelEn: "3. Run Data Flow",
      commandMain: "mofa run-dataflow <dataflow-name>",
      secondary: "Start your data flow"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", `<section id="quick-start" class="py-20 bg-gradient-to-b from-gray-50 to-white"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold mb-4" data-en="Get Started in <span class='gradient-text'>Seconds</span>" data-zh="<span class='gradient-text'>\u5FEB\u901F</span>\u5F00\u59CB">
Get Started in <span class="gradient-text">Seconds</span> </h2> <p class="text-xl text-gray-600" data-en="One command to install MoFA and start building AI agents" data-zh="\u4E00\u884C\u547D\u4EE4\u5B89\u88C5 MoFA\uFF0C\u7ACB\u5373\u5F00\u59CB\u6784\u5EFA AI \u4EE3\u7406">
One command to install MoFA and start building AI agents
</p> </div> <!-- Tabs --> <div class="flex justify-center mb-6 overflow-x-auto no-scrollbar"> <div class="inline-flex bg-gray-800 rounded-lg p-1 shadow-lg space-x-1" id="qs-tabs"> `, ' </div> </div> <!-- Terminal --> <div class="mx-auto max-w-3xl"> <div class="bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden"> <div class="flex items-center justify-between px-5 py-3 bg-gray-800 border-b border-gray-700"> <div class="flex space-x-2"> <span class="w-3 h-3 rounded-full bg-red-500"></span> <span class="w-3 h-3 rounded-full bg-yellow-500"></span> <span class="w-3 h-3 rounded-full bg-green-500"></span> </div> <span class="text-gray-400 text-sm font-mono">Terminal</span> <button id="qs-copy" class="copy-btn-header px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white text-xs rounded flex items-center space-x-1"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path> </svg> <span>Copy</span> </button> </div> <!-- Commands --> ', ` </div> </div> <!-- Steps circles --> <div class="grid md:grid-cols-3 gap-8 quick-start-steps mt-12 hidden"> <div class="text-center"> <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div> <h3 class="text-lg font-semibold" data-en="Install MoFA" data-zh="\u5B89\u88C5 MoFA">Install MoFA</h3> <p class="text-gray-600 text-sm" data-en="Run the pip command above to install MoFA framework" data-zh="\u8FD0\u884C\u4E0A\u9762\u7684 pip \u547D\u4EE4\u5B89\u88C5 MoFA \u6846\u67B6">Run the pip command above to install MoFA framework</p> </div> <div class="text-center"> <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div> <h3 class="text-lg font-semibold" data-en="Create Your Agent" data-zh="\u521B\u5EFA\u4EE3\u7406">Create Your Agent</h3> <p class="text-gray-600 text-sm" data-en="Use our templates or start from scratch with simple YAML configs" data-zh="\u4F7F\u7528\u6211\u4EEC\u7684\u6A21\u677F\u6216\u901A\u8FC7\u7B80\u5355\u7684 YAML \u914D\u7F6E\u4ECE\u96F6\u5F00\u59CB">Use our templates or start from scratch with simple YAML configs</p> </div> <div class="text-center"> <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div> <h3 class="text-lg font-semibold" data-en="Deploy & Scale" data-zh="\u90E8\u7F72\u6269\u5C55">Deploy & Scale</h3> <p class="text-gray-600 text-sm" data-en="Launch your AI agents and scale them across different environments" data-zh="\u542F\u52A8\u60A8\u7684 AI \u4EE3\u7406\u5E76\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u6269\u5C55">Launch your AI agents and scale them across different environments</p> </div> </div> </div> <!-- Copy success toast --> <div id="qs-success" class="hidden fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-green-600 text-white text-sm rounded shadow-lg">Copied!</div> </section> <!-- Inline script --> <script>
  const tabs = document.querySelectorAll('.terminal-tab');
  const contents = document.querySelectorAll('.terminal-content');
  const copyBtn = document.getElementById('qs-copy');
  const toast = document.getElementById('qs-success');

  let active = 'install';
  let typer;

  function typeText(el, text){
    if(!el) return;
    if(typer) clearInterval(typer);
    el.textContent='';
    let i=0;
    typer = setInterval(()=>{
      if(i<text.length){
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typer);
      }
    }, 40);
  }

  function setActive(id) {
    active = id;
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    contents.forEach(c => c.classList.toggle('active', c.dataset.content === id));

    const newContent = [...contents].find(c => c.dataset.content === id);
    const cmdEl = newContent.querySelector('.cmd');
    typeText(cmdEl, cmdEl.dataset.full);
  }
  tabs.forEach(t => {
    t.addEventListener('click', () => setActive(t.dataset.tab));
  });
  setActive(active);

  function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 1800);
  }

  copyBtn.addEventListener('click', () => {
    const cmd = [...contents].find(c => c.classList.contains('active')).querySelector('code').innerText;
    navigator.clipboard.writeText(cmd).then(showToast);
  });
<\/script>`])), maybeRenderHead(), tabs.map((tab) => renderTemplate`<button class="terminal-tab px-4 py-2 rounded-md text-sm font-medium"${addAttribute(tab.id, "data-tab")}>${tab.labelEn}</button>`), tabs.map((tab) => renderTemplate`<div${addAttribute(`p-6 space-y-3 terminal-content ${tab.id === "install" ? "active" : ""}`, "class")}${addAttribute(tab.id, "data-content")}> <div class="flex space-x-2 items-start"> <span class="text-green-400 font-mono">❯</span> <code class="cmd text-white font-mono break-words"${addAttribute(tab.commandMain, "data-full")}></code> <span class="cursor-blink text-green-400">▊</span> </div> ${tab.secondary && renderTemplate`<div class="flex space-x-2 items-start text-gray-400"> <span class="text-gray-500 font-mono">#</span> <code class="font-mono text-sm break-words">${tab.secondary}</code> </div>`} </div>`));
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/TabletQuickStart.astro", void 0);

const $$HallOfFame = createComponent(async ($$result, $$props, $$slots) => {
  let mofaContributors = [];
  let doraContributors = [];
  async function fetchAllContributors(repo) {
    let allContributors = [];
    let page = 1;
    const perPage = 100;
    try {
      while (true) {
        const response = await fetch(`https://api.github.com/repos/${repo}/contributors?per_page=${perPage}&page=${page}`);
        if (!response.ok) {
          console.log(`Failed to fetch ${repo} contributors page ${page}:`, response.status);
          break;
        }
        const data = await response.json();
        if (data.length === 0) {
          break;
        }
        allContributors = allContributors.concat(data);
        if (data.length < perPage) {
          break;
        }
        page++;
      }
    } catch (error) {
      console.log(`Error fetching ${repo} contributors:`, error);
    }
    return allContributors;
  }
  try {
    const mofaData = await fetchAllContributors("moxin-org/mofa");
    mofaContributors = mofaData.filter((contributor) => contributor.type === "User").map((contributor) => ({
      name: contributor.login,
      role: { en: "Contributor", zh: "\u8D21\u732E\u8005" },
      avatar: contributor.avatar_url,
      github: contributor.html_url,
      // Check if custom image exists, format: /images/{github_login}.jpg
      largeImage: `/images/${contributor.login}.jpg`,
      desc: {
        en: `${contributor.contributions} contributions to MoFA`,
        zh: `\u4E3A MoFA \u8D21\u732E\u4E86 ${contributor.contributions} \u6B21\u63D0\u4EA4`
      }
    }));
    console.log(`Fetched ${mofaContributors.length} MoFA contributors`);
  } catch (error) {
    console.log("Failed to fetch MoFA contributors:", error);
  }
  try {
    const doraData = await fetchAllContributors("dora-rs/dora");
    doraContributors = doraData.filter((contributor) => contributor.type === "User").map((contributor) => ({
      name: contributor.login,
      role: { en: "Contributor", zh: "\u8D21\u732E\u8005" },
      avatar: contributor.avatar_url,
      github: contributor.html_url,
      // Check if custom image exists, format: /images/{github_login}.jpg
      largeImage: `/images/${contributor.login}.jpg`,
      desc: {
        en: `${contributor.contributions} contributions to Dora-rs`,
        zh: `\u4E3A Dora-rs \u8D21\u732E\u4E86 ${contributor.contributions} \u6B21\u63D0\u4EA4`
      }
    }));
    console.log(`Fetched ${doraContributors.length} Dora-rs contributors`);
  } catch (error) {
    console.log("Failed to fetch Dora-rs contributors:", error);
  }
  const categories = [
    {
      id: "core",
      name: { en: "MoFA Core Team", zh: "MoFA Core Team" },
      contributors: [
        {
          name: "XiaoKuge",
          role: { en: "Core Member", zh: "\u6838\u5FC3\u6210\u5458" },
          avatar: "https://avatars.githubusercontent.com/XiaoKuge?v=4",
          github: "https://github.com/XiaoKuge",
          largeImage: "/images/XiaoKuge.jpg",
          desc: { en: "MoFA Core Team Member", zh: "MoFA Core Team Member" }
        },
        {
          name: "chengzi0103",
          role: { en: "Core Member", zh: "\u6838\u5FC3\u6210\u5458" },
          avatar: "https://avatars.githubusercontent.com/chengzi0103?v=4",
          github: "https://github.com/chengzi0103",
          largeImage: "/images/chengzi0103.jpg",
          desc: { en: "MoFA Core Team Member", zh: "MoFA Core Team Member" }
        },
        {
          name: "BH3GEI",
          role: { en: "Core Member", zh: "\u6838\u5FC3\u6210\u5458" },
          avatar: "https://avatars.githubusercontent.com/BH3GEI?v=4",
          github: "https://github.com/BH3GEI",
          largeImage: "/images/BH3GEI.jpg",
          desc: { en: "MoFA Core Team Member", zh: "MoFA Core Team Member" }
        }
      ]
    },
    {
      id: "contributors",
      name: { en: "MoFA Contributors", zh: "MoFA \u8D21\u732E\u8005" },
      contributors: mofaContributors
    },
    {
      id: "dora",
      name: { en: "Dora-rs Contributors", zh: "Dora-rs \u8D21\u732E\u8005" },
      contributors: doraContributors
    },
    {
      id: "ai2025",
      name: { en: "2025 MoFA Hackathon Winners", zh: "2025 MoFA Search AI \u641C\u7D22\u5F15\u64CE\u5927\u8D5B\u83B7\u5956\u8005" },
      contributors: [
        {
          name: "winner123456",
          role: { en: "First Prize", zh: "First Prize" },
          avatar: "https://avatars.githubusercontent.com/u/23193969?v=4",
          github: "https://github.com/placeholder-winner-1",
          largeImage: "/images/winner123456.jpg",
          desc: { en: "2025 contest first prize", zh: "2025 contest first prize" }
        },
        {
          name: "winner789",
          role: { en: "First Prize", zh: "First Prize" },
          avatar: "https://avatars.githubusercontent.com/u/23193969?v=4",
          github: "https://github.com/placeholder-winner-2",
          largeImage: "/images/winner789.jpg",
          desc: { en: "2025 contest first prize", zh: "2025 contest first prize" }
        }
      ]
    },
    {
      id: "ai2024",
      name: { en: "2024 MoFA Hackathon Winners", zh: "2024 MoFA Search AI \u641C\u7D22\u5F15\u64CE\u5927\u8D5B\u83B7\u5956\u8005" },
      contributors: [
        {
          name: "winner2024-1",
          role: { en: "First Prize", zh: "First Prize" },
          avatar: "https://avatars.githubusercontent.com/u/23193969?v=4",
          github: "https://github.com/placeholder-2024-winner-1",
          largeImage: "/images/winner2024-1.jpg",
          desc: { en: "2024 contest first prize", zh: "2024 contest first prize" }
        },
        {
          name: "winner2024-2",
          role: { en: "First Prize", zh: "First Prize" },
          avatar: "https://avatars.githubusercontent.com/u/23193969?v=4",
          github: "https://github.com/placeholder-2024-winner-2",
          largeImage: "/images/winner2024-2.jpg",
          desc: { en: "2024 contest first prize", zh: "2024 contest first prize" }
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);"> <div class="container mx-auto"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold mb-4" data-en="Developer <span class='gradient-text'>Hall of Fame</span>" data-zh="开发者 <span class='gradient-text'>殿堂</span>">
Developer <span class="gradient-text">Hall of Fame</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-en="We celebrate everyone who made MoFA possible" data-zh="向每一位让 MoFA 成为可能的开发者致敬">We celebrate everyone who made MoFA possible</p> </div> <ul class="flex flex-wrap justify-center gap-4 mb-10" id="hof-tabs"> ${categories.map((cat) => renderTemplate`<li class="px-4 py-2 rounded-full border-2 border-gray-400 cursor-pointer transition hover:bg-gray-100 text-sm sm:text-base font-medium category-tab"${addAttribute(cat.id, "data-category")}> <span${addAttribute(cat.name.en, "data-en")}${addAttribute(cat.name.zh, "data-zh")}>${cat.name.en}</span> </li>`)} </ul> ${categories.map((cat) => renderTemplate`<div class="flex flex-wrap justify-center gap-8 category-content"${addAttribute(cat.id, "data-category")}${addAttribute(cat.id === "contributors" ? "display:flex;" : "display:none;", "style")}> ${cat.contributors.map((person) => renderTemplate`<div class="relative contributor-item"> <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg hover:border-blue-500 transition-all duration-300 cursor-pointer contributor-avatar"${addAttribute(person.name, "data-name")}${addAttribute(person.role.en, "data-role-en")}${addAttribute(person.role.zh, "data-role-zh")}${addAttribute(person.github, "data-github")}${addAttribute(person.desc.en, "data-desc-en")}${addAttribute(person.desc.zh, "data-desc-zh")}${addAttribute(person.largeImage || person.avatar, "data-large-image")}${addAttribute(person.avatar, "data-avatar")}> <img${addAttribute(person.avatar, "src")}${addAttribute(person.name, "alt")} class="w-full h-full object-cover"> </div> <!-- 轻量级 Tooltip --> <div class="contributor-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible transition-all duration-200 whitespace-nowrap z-20"> ${person.name} <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div> </div> </div>`)} </div>`)} </div> <!-- 详细信息模态框 --> <div id="contributor-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0 invisible transition-all duration-300"> <div class="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 transform scale-95 transition-transform duration-300" id="modal-content"> <!-- 关闭按钮 --> <button id="close-modal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10">
×
</button> <!-- 大图区域 - 正方形 --> <div class="w-full aspect-square overflow-hidden bg-gray-100 rounded-t-lg"> <img id="modal-large-image" src="" alt="" class="w-full h-full object-cover"> </div> <!-- 信息区域 --> <div class="p-6"> <div class="text-center"> <!-- 小头像 --> <div class="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-gray-200 -mt-12 bg-white"> <img id="modal-avatar" src="" alt="" class="w-full h-full object-cover"> </div> <!-- 姓名 --> <h3 id="modal-name" class="text-xl font-bold text-gray-800 mb-1"></h3> <!-- 角色 --> <p id="modal-role" class="text-sm text-gray-600 mb-3"></p> <!-- GitHub 链接 --> <a id="modal-github" href="" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mb-3 transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg>
GitHub
</a> <!-- 描述 --> <p id="modal-desc" class="text-xs text-gray-500"></p> </div> </div> </div> </div>  </section>`;
}, "/home/runner/work/mofa-org.github.io/mofa-org.github.io/mofa-website/src/components/HallOfFame.astro", void 0);

const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="zh-CN" id="html-root" style="scroll-behavior: smooth;"> <head><meta charset="utf-8"><meta name="description" content="MoFA - Make Ordinary Developers Full-stack AI Engineers. A modular framework for AI agents that enables developers to build complex AI applications."><meta name="viewport" content="width=device-width, initial-scale=1.0"><title id="page-title">MoFA - Make Ordinary Developers Full-stack AI Engineers</title><link rel="icon" type="image/png" href="/favicon-32x32.png"><link rel="shortcut icon" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><meta name="theme-color" content="#6366F1">${renderHead()}</head> <body> <header style="position: sticky; top: 0; background: white; border-bottom: 4px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 50;"> <nav class="container mobile-header" style="padding: 16px; display: flex; align-items: center; justify-content: space-between;"> <a href="https://mofa.ai" style="display: flex; align-items: center; gap: 8px; text-decoration: none;" target="_blank" rel="noopener noreferrer"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"> <span class="gradient-text" style="font-size: 1.5rem; font-weight: 700;">MoFA</span> </a> <!-- 桌面端导航 --> <div class="desktop-nav" style="display: flex; align-items: center; gap: 16px;"> <a href="/docs" class="nav-link" data-en="Docs" data-zh="文档">Docs</a> <a href="/blog" class="nav-link" data-en="Blog" data-zh="博客">Blog</a> <!-- 语言切换按钮 - 扁平化风格 --> <button id="lang-toggle" class="btn-lang" style="gap: 6px;"> <span id="current-lang">🇺🇸 EN</span> <span style="font-size: 0.75rem; opacity: 0.8;">▼</span> </button> <!-- Discord 按钮 - 扁平化风格 --> <a href="https://discord.gg/hKJZzDMMm9" class="btn-discord" target="_blank" rel="noopener noreferrer" style="gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path> </svg> <span class="btn-text">Discord</span> </a> <!-- GitHub 按钮 - 扁平化风格 --> <a href="https://github.com/moxin-org/mofa" class="btn-primary" target="_blank" rel="noopener noreferrer" style="gap: 8px;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"> <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> <span class="btn-text">GitHub</span> </a> </div> <!-- 移动端导航 --> <div class="mobile-nav" style="display: none; align-items: center; gap: 12px;"> <!-- 语言切换按钮 - 移动端精简版 --> <button id="lang-toggle-mobile" class="btn-lang mobile-lang-btn" style="gap: 4px; padding: 8px 10px;"> <span id="current-lang-mobile">🇺🇸</span> </button> <!-- 汉堡菜单按钮 --> <button id="mobile-menu-toggle" class="mobile-menu-btn" style="border: none; background: none; padding: 8px; cursor: pointer;"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> </div> </nav> <!-- 移动端下拉菜单 --> <div id="mobile-menu" class="mobile-dropdown" style="display: none; background: white; border-bottom: 2px solid var(--mondrian-black); box-shadow: 0 2px 4px rgba(0,0,0,0.1);"> <div class="container" style="padding: 16px; display: flex; flex-direction: column; gap: 12px;"> <a href="/docs" class="mobile-nav-link"> <span class="link-text" data-en="Docs" data-zh="文档">Docs</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path> <polyline points="14,2 14,8 20,8" fill="none" stroke="currentColor" stroke-width="1"></polyline> <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1"></line> <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1"></line> <line x1="13" y1="9" x2="8" y2="9" stroke="currentColor" stroke-width="1"></line> </svg> </a> <a href="/blog" class="mobile-nav-link"> <span class="link-text" data-en="Blog" data-zh="博客">Blog</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"></path> </svg> </a> <a href="https://discord.gg/hKJZzDMMm9" class="mobile-nav-link" target="_blank" rel="noopener noreferrer"> <span class="link-text">Discord</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a19.7363 19.7363 0 00-4.8852 1.515C.5334 9.0458-.319 13.5799.0992 18.0578c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294.4616-.6304.8731-1.2952 1.226-1.9942-.6528-.2476-1.2743-.5495-1.8722-.8923.1258-.0943.2517-.1923.3718-.2914 3.9278 1.7933 8.18 1.7933 12.0614 0 .1202.099.246.1981.3728.2924-.6528.2476-1.2743.5495-1.873.8914.3604.698.7719 1.3628 1.225 1.9932 1.961-.6067 3.9495-1.5219 6.0023-3.0294.5004-5.177-.8382-9.6739-3.5485-13.6604z"></path> </svg> </a> <a href="https://github.com/moxin-org/mofa" class="mobile-nav-link" target="_blank" rel="noopener noreferrer"> <span class="link-text">GitHub</span> <svg class="icon-right" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234C5.662 20.302 4.967 18.16 4.967 18.16c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604C6.25 16.01 3.448 14.981 3.448 10.384c0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg> </a> </div> </div> </header> <main style="flex: 1;"> <section class="py-20" style="position: relative; overflow: hidden;"> <div style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"> <div class="mondrian-decoration-left" style="position: absolute; left: -100px; top: 20%; width: 300px; height: 400px;"> <svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"> <line x1="80" y1="0" x2="80" y2="400" stroke="var(--mondrian-black)" stroke-width="3"></line> <line x1="180" y1="0" x2="180" y2="400" stroke="var(--mondrian-black)" stroke-width="3"></line> <line x1="0" y1="120" x2="300" y2="120" stroke="var(--mondrian-black)" stroke-width="3"></line> <line x1="0" y1="280" x2="300" y2="280" stroke="var(--mondrian-black)" stroke-width="3"></line> <rect x="6" y="6" width="68" height="108" fill="var(--mofa-gradient-1)" opacity="0.85"></rect> <rect x="86" y="126" width="88" height="148" fill="var(--mofa-gradient-4)" opacity="0.85"></rect> <rect x="186" y="6" width="108" height="108" fill="var(--mofa-gradient-3)" opacity="0.85"></rect> </svg> </div> <div class="mondrian-decoration-right" style="position: absolute; right: -120px; bottom: 15%; width: 280px; height: 350px;"> <svg width="280" height="350" viewBox="0 0 280 350" xmlns="http://www.w3.org/2000/svg"> <line x1="100" y1="0" x2="100" y2="350" stroke="var(--mondrian-black)" stroke-width="3"></line> <line x1="200" y1="0" x2="200" y2="350" stroke="var(--mondrian-black)" stroke-width="3"></line> <line x1="0" y1="100" x2="280" y2="100" stroke="var(--mondrian-black)" stroke-width="3"></line> <line x1="0" y1="250" x2="280" y2="250" stroke="var(--mondrian-black)" stroke-width="3"></line> <rect x="106" y="6" width="88" height="88" fill="var(--mofa-gradient-1)" opacity="0.85"></rect> <rect x="6" y="106" width="88" height="138" fill="var(--mofa-gradient-3)" opacity="0.85"></rect> <rect x="206" y="256" width="68" height="88" fill="var(--mofa-gradient-4)" opacity="0.85"></rect> </svg> </div> </div> <div class="container" style="position: relative; z-index: 10;"> <div class="max-w-4xl mx-auto text-center"> <div style="display: flex; justify-content: center; margin-bottom: 32px;"> <div class="logo-container" style="width: 144px; height: 144px; position: relative; overflow: hidden; border-radius: 20px;"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px; filter: invert(1); display: none;"> <div class="logo-letter-container" style="
                position: absolute;
                top: 12px;
                left: 14px;
                width: 60px;
                height: 56px;
                z-index: 10;
                --flow-delay: 0;
                --letter-svg: url(/mofa-M.svg);
              "> <img src="/mofa-M.png" alt="M" class="logo-letter letter-m draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> <div class="logo-letter-container" style="
                position: absolute;
                top: 66px;
                left: 14px;
                width: 60px;
                height: 60px;
                z-index: 10;
                --flow-delay: 1;
                --letter-svg: url(/mofa-O.svg);
              "> <img src="/mofa-O.png" alt="O" class="logo-letter letter-o draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> <div class="logo-letter-container" style="
                position: absolute;
                top: 63px; /* 12 + 106/2 */
                left: 100px; /* 76 + 48/2 */
                width: 424px;
                height: 224px;
                z-index: 4; /* 位于 A 之下 */
                --flow-delay: 2;
                --letter-svg: url(/mofa-F.svg);
                transform: translate(-50%, -50%);
              "> <img src="/mofa-F.png" alt="F" class="logo-letter letter-f draggable" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                "> <div class="data-flow"></div> </div> <div class="logo-letter-container" style="
                position: absolute;
                top: 102.5px; /* 几何中心定位 */
                left: 111px;
                width: 290px;   /* 58 × 5 */
                height: 350px; /* 69 × 5 */
                z-index: 5; /* 置底，避免遮挡点击 */
                --flow-delay: 3;
                --letter-svg: url(/mofa-A.svg);
                transform: translate(-50%, -50%);
                transition: transform 0.3s ease;
              "> <img src="/mofa-A.png" alt="A" class="logo-letter letter-a" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  border-radius: 8px;
                  transition: transform 0.3s ease;
                "> <div class="data-flow"></div> </div> </div> </div> <p class="text-2xl font-medium mb-4 pixel-gradient-text" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师">
让普通开发者成为全栈 <span class="ai-char">AI</span> 工程师
</p> <p class="text-xl mb-8 pixel-glow-text" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架" style="color:#6CCDD1;">
模块化 <span class="ai-char">AI</span> 代理框架
</p> <p class="mb-12 max-w-2xl mx-auto description-text-zh" style="display: block;" data-zh="通过可组合的 AI 代理框架，让每个开发者都能轻松构建、调试和部署复杂的 AI 应用">
通过可组合的 AI 代理框架，让每个开发者都能轻松构建、调试和部署复杂的 AI 应用
</p> <p class="mb-12 max-w-2xl mx-auto description-text-en" style="display: none;" data-en="A composable AI agent framework that enables every developer to easily build, debug, and deploy complex AI applications">
A composable AI agent framework that enables every developer to easily build, debug, and deploy complex AI applications
</p> <div style="display: flex; flex-direction: column; gap: 16px; justify-content: center; margin-bottom: 64px;"> <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;"> <a href="#quick-start" rel="noopener noreferrer" style="
                   display: inline-flex;
                   align-items: center;
                   font-size: 1.125rem;
                   padding: 16px 32px;
                   background: var(--mondrian-red);
                   color: white;
                   text-decoration: none;
                   border-radius: 0;
                   font-weight: 700;
                   transition: all 0.2s ease;
                   border: 3px solid var(--mondrian-black);
                   cursor: pointer;
                   box-shadow: none;
                 " onmouseover="this.style.transform='translate(-2px, -2px)'; this.style.boxShadow='4px 4px 0 var(--mondrian-black)'" onmouseout="this.style.transform='translate(0, 0)'; this.style.boxShadow='none'"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; flex-shrink: 0;"> <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path> </svg> <span data-en="Quick Start" data-zh="快速开始">快速开始</span> </a> <a href="#why-mofa" rel="noopener noreferrer" style="
                   display: inline-flex;
                   align-items: center;
                   font-size: 1.125rem;
                   padding: 16px 32px;
                   background: var(--mofa-gradient-4);
                   color: white;
                   text-decoration: none;
                   border-radius: 0;
                   font-weight: 700;
                   transition: all 0.2s ease;
                   border: 3px solid var(--mondrian-black);
                   cursor: pointer;
                   box-shadow: none;
                 " onmouseover="this.style.transform='translate(-2px, -2px)'; this.style.boxShadow='4px 4px 0 var(--mondrian-black)'" onmouseout="this.style.transform='translate(0, 0)'; this.style.boxShadow='none'"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; flex-shrink: 0;"> <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path> </svg> <span data-en="Learn More" data-zh="了解更多">了解更多</span> </a> </div> </div> <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto"> <div class="text-center"> <div class="text-3xl font-bold" style="color: var(--mofa-gradient-1);" data-en="5 min" data-zh="5分钟">5 min</div> <div class="text-sm text-gray-600" data-en="Quick Setup" data-zh="快速上手">Quick Setup</div> </div> <div class="text-center"> <div class="text-3xl font-bold" style="color: var(--mofa-gradient-3);">100+</div> <div class="text-sm text-gray-600" data-en="Built-in Agents" data-zh="内置代理">Built-in Agents</div> </div> <div class="text-center"> <div class="text-3xl font-bold" style="color: var(--mofa-gradient-4);">∞</div> <div class="text-sm text-gray-600" data-en="Combinations" data-zh="组合可能">Combinations</div> </div> </div> </div> </div> </section> <div class="mini-divider"> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> </div> ${renderComponent($$result, "TabletQuickStart", $$TabletQuickStart, {})} <section class="py-20" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); display:none;"> <div class="container"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4" data-en="Get Started in <span class='gradient-text'>Seconds</span>" data-zh="<span class='gradient-text'>快速</span>开始">
Get Started in <span class="gradient-text">Seconds</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-en="One command to install MoFA and start building AI agents" data-zh="一行命令安装 MoFA，立即开始构建 AI 代理">
One command to install MoFA and start building AI agents
</p> </div> <div class="max-w-4xl mx-auto"> <div class="terminal-multi-window relative mb-16"> <div class="flex justify-center mb-6"> <div class="inline-flex bg-gray-800 rounded-lg p-1 shadow-lg"> <button class="terminal-tab active px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" data-tab="install"> <span data-en="1. Install" data-zh="1. 安装">1. Install</span> </button> <button class="terminal-tab px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" data-tab="clone"> <span data-en="2. Clone Node" data-zh="2. 克隆节点">2. Clone Node</span> </button> <button class="terminal-tab px-4 py-2 rounded-md text-sm font-medium transition-all duration-200" data-tab="run"> <span data-en="3. Run Node" data-zh="3. 运行节点">3. Run Node</span> </button> </div> </div> <div class="terminal-window group relative"> <div class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-600"> <div class="flex items-center justify-between px-5 py-3 bg-gray-800 border-b border-gray-700"> <div class="flex items-center space-x-2"> <div class="w-3 h-3 rounded-full bg-red-500"></div> <div class="w-3 h-3 rounded-full bg-yellow-500"></div> <div class="w-3 h-3 rounded-full bg-green-500"></div> </div> <div class="absolute left-1/2 transform -translate-x-1/2"> <span class="text-gray-400 text-sm font-mono">Terminal</span> </div> <button id="main-copy-btn" class="copy-btn-header px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white text-xs rounded transition-all duration-200 flex items-center space-x-1"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path> </svg> <span>Copy</span> </button> </div> <div class="p-6 bg-gray-900 min-h-[120px]"> <div class="terminal-content active" data-content="install"> <div class="space-y-3"> <div class="flex items-center space-x-2"> <span class="text-green-400 font-mono">❯</span> <div class="flex-1"> <span class="typing-text text-white font-mono" data-text="pip install mofa-ai"></span> <span class="cursor-blink text-green-400">▊</span> </div> </div> <div class="flex items-center space-x-2 opacity-60"> <span class="text-gray-500 font-mono">#</span> <div class="flex-1"> <span class="typing-text text-gray-400 font-mono text-sm" data-text="or with additional stage tools:" data-delay="2000"></span> </div> </div> <div class="flex items-center space-x-2"> <span class="text-green-400 font-mono">❯</span> <div class="flex-1"> <span class="typing-text text-white font-mono" data-text="pip install mofa-ai[mofa-stage]  #If you need GUI" data-delay="3500"></span> </div> </div> </div> </div> <div class="terminal-content" data-content="clone"> <div class="space-y-3"> <div class="flex items-center space-x-2"> <span class="text-green-400 font-mono">❯</span> <div class="flex-1"> <span class="typing-text text-white font-mono" data-text="mofa clone-node node-url"></span> <span class="cursor-blink text-green-400">▊</span> </div> </div> <div class="flex items-center space-x-2 opacity-60"> <span class="text-gray-500 font-mono">#</span> <div class="flex-1"> <span class="typing-text text-gray-400 font-mono text-sm" data-text="Clone an existing AI agent node" data-delay="1500"></span> </div> </div> </div> </div> <div class="terminal-content" data-content="run"> <div class="space-y-3"> <div class="flex items-center space-x-2"> <span class="text-green-400 font-mono">❯</span> <div class="flex-1"> <span class="typing-text text-white font-mono" data-text="mofa run-node"></span> <span class="cursor-blink text-green-400">▊</span> </div> </div> <div class="flex items-center space-x-2 opacity-60"> <span class="text-gray-500 font-mono">#</span> <div class="flex-1"> <span class="typing-text text-gray-400 font-mono text-sm" data-text="Start your data flow" data-delay="1200"></span> </div> </div> </div> </div> <div id="success-message" class="hidden mt-4"> <div class="flex items-center space-x-2 text-green-400 text-sm font-mono animate-fade-in"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span data-en="✅ Command copied to clipboard!" data-zh="✅ 命令已复制到剪贴板！">✅ Command copied to clipboard!</span> </div> </div> </div> </div> </div> </div> <div class="grid md:grid-cols-3 gap-8 quick-start-steps"> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200">1</div> <h3 class="text-lg font-semibold mb-2" data-en="Install MoFA" data-zh="安装 MoFA">Install MoFA</h3> <p class="text-gray-600 text-sm" data-en="Run the pip command above to install MoFA framework" data-zh="运行上面的 pip 命令安装 MoFA 框架">
Run the pip command above to install MoFA framework
</p> </div> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200">2</div> <h3 class="text-lg font-semibold mb-2" data-en="Create Your Agent" data-zh="创建代理">Create Your Agent</h3> <p class="text-gray-600 text-sm" data-en="Use our templates or start from scratch with simple YAML configs" data-zh="使用我们的模板或通过简单的 YAML 配置从零开始">
Use our templates or start from scratch with simple YAML configs
</p> </div> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200">3</div> <h3 class="text-lg font-semibold mb-2" data-en="Deploy & Scale" data-zh="部署扩展">Deploy & Scale</h3> <p class="text-gray-600 text-sm" data-en="Launch your AI agents and scale them across different environments" data-zh="启动您的 AI 代理并在不同环境中扩展">
Launch your AI agents and scale them across different environments
</p> </div> </div> </div> </div> </section> <div class="mini-divider"> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> </div> <section id="why-mofa" class="py-20" style="background-color: #f9fafb;"> <div class="container"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4" data-en="Why Choose <span class='gradient-text'>MoFA</span>" data-zh="为什么选择 <span class='gradient-text'>MoFA</span>">
Why Choose <span class="gradient-text">MoFA</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-en="Making AI development simple, efficient, and enjoyable" data-zh="让 AI 开发变得简单、高效、有趣">
Making AI development simple, efficient, and enjoyable
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--macaron-peach); color: white; flex-shrink: 0;"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"></path> </svg> </div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Composable Agent Architecture" data-zh="可组合的代理架构">Composable Agent Architecture</h3> <p class="text-gray-600" data-en="Build complex AI applications by connecting agents via YAML-defined flows. Leverage a core kernel with modules for RAG (embedding, splitting, vector stores), planning, and tool integration. Easily orchestrate data flow between agents." data-zh="通过 YAML 定义的数据流连接代理，构建复杂的 AI 应用。利用包含 RAG（嵌入、分割、向量存储）、规划和工具集成等模块的核心内核。轻松编排代理间的数据流动。">
Build complex AI applications by connecting agents via YAML-defined flows. Leverage a core kernel with modules for RAG (embedding, splitting, vector stores), planning, and tool integration. Easily orchestrate data flow between agents.
</p> </div> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--macaron-lavender); color: white; flex-shrink: 0;"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Rapid Agent Development" data-zh="快速代理开发">Rapid Agent Development</h3> <p class="text-gray-600" data-en="MoFA offers a clear structure for agent development, significantly reducing boilerplate and letting you focus on core logic. The MoFA Stage visual IDE further accelerates the entire development cycle, from creation to debugging. Get started in just 5 minutes." data-zh="MoFA 提供清晰的代理开发结构，大幅减少样板代码，让您专注于核心业务逻辑。结合 MoFA Stage 可视化 IDE，可进一步加速从创建到调试的完整开发周期。5分钟即可快速上手。">
MoFA offers a clear structure for agent development, significantly reducing boilerplate and letting you focus on core logic. The MoFA Stage visual IDE further accelerates the entire development cycle, from creation to debugging. Get started in just 5 minutes.
</p> </div> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--macaron-mint); color: white; flex-shrink: 0;"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Rich Agent Hub & Dev Tools" data-zh="丰富的代理中心与开发工具">Rich Agent Hub &amp; Dev Tools</h3> <p class="text-gray-600" data-en="Access 100+ pre-built agents from our Agent Hub, covering data connectors, LLM integrations, and specialized tools. MoFA Stage further enhances development with visual agent management, an integrated terminal, and an advanced code editor." data-zh="从我们的代理中心获取100+预构建代理，涵盖数据连接器、LLM 集成和专用工具。MoFA Stage 通过可视化代理管理、集成终端和高级代码编辑器进一步增强开发体验。">
Access 100+ pre-built agents from our Agent Hub, covering data connectors, LLM integrations, and specialized tools. MoFA Stage further enhances development with visual agent management, an integrated terminal, and an advanced code editor.
</p> </div> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: border-width 0.2s ease;" onmouseover="this.style.borderWidth='4px'" onmouseout="this.style.borderWidth='2px'"> <div style="display: flex; align-items: flex-start; gap: 16px;"> <div style="padding: 12px; border-radius: 8px; background-color: var(--macaron-rose); color: white; flex-shrink: 0;"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="text-xl font-semibold mb-2" data-en="Highly Extensible Framework" data-zh="高度可扩展框架">Highly Extensible Framework</h3> <p class="text-gray-600" data-en="Easily write custom Python agents. Integrate third-party tools, models, and data sources through well-defined interfaces. Extend core functionalities like memory (e.g., Mem0 integration) or RAG strategies by implementing custom components." data-zh="轻松编写自定义 Python 代理。通过定义良好的接口集成第三方工具、模型和数据源。通过实现自定义组件来扩展核心功能，如记忆（例如 Mem0 集成）或 RAG 策略。">
Easily write custom Python agents. Integrate third-party tools, models, and data sources through well-defined interfaces. Extend core functionalities like memory (e.g., Mem0 integration) or RAG strategies by implementing custom components.
</p> </div> </div> </div> </div> <div class="text-center mt-16 mb-8" style="display: none;"> <h3 class="text-3xl font-bold" data-en="Highlight: Your AI Agent IDE - <span class='gradient-text'>MoFA Stage</span>" data-zh="核心功能：你的 AI Agent IDE - <span class='gradient-text'>MoFA Stage</span>">
Highlight: Your AI Agent IDE - <span class="gradient-text">MoFA Stage</span> </h3> </div> <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12" style="display: none;" data-en="A visual management platform for MoFA - your web-based IDE for AI agents." data-zh="MoFA 的可视化管理平台 - 你的Agent专属 Web IDE.">
A visual management platform for MoFA - your web-based IDE.
</p> <div class="max-w-6xl mx-auto" style="display: none;"> <div class="grid md:grid-cols-3 gap-8 mb-16"> <div class="card" style="border: 2px solid var(--mondrian-black); transition: all 0.3s ease; padding: 16px;" onmouseover="this.style.borderWidth='4px'; this.style.transform='translateY(-8px)'" onmouseout="this.style.borderWidth='2px'; this.style.transform='translateY(0)'"> <div style="text-align: center;"> <div style="
                   width: 48px;
                   height: 48px;
                   margin: 0 auto 12px;
                   background: linear-gradient(135deg, var(--macaron-sky), var(--macaron-lavender));
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   color: white;
                   box-shadow: 0 6px 18px rgba(179, 229, 252, 0.4);
                 "> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path> </svg> </div> <h3 class="text-base font-semibold mb-1" data-en="Visual Agent Management" data-zh="可视化代理管理">Visual Agent Management</h3> <p class="text-gray-600 text-xs leading-snug" data-en="Create, edit, and manage AI agents through an intuitive web interface" data-zh="通过直观的网页界面创建、编辑和管理 AI 代理">
Create, edit, and manage AI agents through an intuitive web interface - no command line expertise required
</p> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: all 0.3s ease; padding: 16px;" onmouseover="this.style.borderWidth='4px'; this.style.transform='translateY(-8px)'" onmouseout="this.style.borderWidth='2px'; this.style.transform='translateY(0)'"> <div style="text-align: center;"> <div style="
                   width: 48px;
                   height: 48px;
                   margin: 0 auto 12px;
                   background: linear-gradient(135deg, var(--macaron-coral), var(--macaron-lemon));
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   color: white;
                   box-shadow: 0 6px 18px rgba(255, 171, 145, 0.4);
                 "> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <h3 class="text-base font-semibold mb-1" data-en="Integrated Terminal" data-zh="集成终端">Integrated Terminal</h3> <p class="text-gray-600 text-xs leading-snug" data-en="Built-in web terminal with SSH access - execute commands and monitor agents directly from your browser" data-zh="内置网页终端支持 SSH 访问 - 直接在浏览器中执行命令和监控代理">
Built-in web terminal with SSH access - execute commands and monitor agents directly from your browser
</p> </div> </div> <div class="card" style="border: 2px solid var(--mondrian-black); transition: all 0.3s ease; padding: 16px;" onmouseover="this.style.borderWidth='4px'; this.style.transform='translateY(-8px)'" onmouseout="this.style.borderWidth='2px'; this.style.transform='translateY(0)'"> <div style="text-align: center;"> <div style="
                   width: 48px;
                   height: 48px;
                   margin: 0 auto 12px;
                   background: linear-gradient(135deg, var(--macaron-sage), var(--macaron-mint));
                   border-radius: 12px;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   color: white;
                   box-shadow: 0 6px 18px rgba(200, 230, 201, 0.4);
                 "> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path> </svg> </div> <h3 class="text-base font-semibold mb-1" data-en="Advanced Code Editor" data-zh="代码编辑器">Code Editor</h3> <p class="text-gray-600 text-xs leading-snug" data-en="Monaco-powered editor with syntax highlighting, auto-completion, and instant Markdown preview" data-zh="基于 Monaco 的编辑器，支持语法高亮、自动补全和 Markdown 即时预览">
Monaco-powered editor with syntax highlighting, auto-completion, and instant Markdown preview - just like VS Code
</p> </div> </div> </div> <div class="bg-white rounded-lg shadow-lg p-8" style="border: 2px solid var(--mondrian-black); display: none;"> <div class="text-center mb-8"> <h3 class="text-2xl font-bold mb-4" data-en="Full-Stack Architecture" data-zh="全栈架构">Full-Stack Architecture</h3> <p class="text-gray-600" data-en="Built with modern technologies for optimal performance and developer experience" data-zh="使用现代技术构建，确保最佳性能和开发体验">
Built with modern technologies for optimal performance and developer experience
</p> </div> <div class="grid md:grid-cols-2 gap-12"> <div> <h4 class="text-lg font-semibold mb-4 flex items-center gap-2" data-en="🎨 Frontend Stack" data-zh="🎨 前端技术栈">
🎨 Frontend Stack
</h4> <div class="space-y-3"> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #42b883; border-radius: 50%;"></div> <span class="font-medium">Vue 3</span> <span class="text-sm text-gray-500" data-en="Progressive Framework" data-zh="渐进式框架">Progressive Framework</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #409eff; border-radius: 50%;"></div> <span class="font-medium">Element Plus</span> <span class="text-sm text-gray-500" data-en="UI Components" data-zh="UI 组件库">UI Components</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: var(--mondrian-blue); border-radius: 50%;"></div> <span class="font-medium">Monaco Editor</span> <span class="text-sm text-gray-500" data-en="VS Code Engine" data-zh="VS Code 引擎">VS Code Engine</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #000; border-radius: 50%;"></div> <span class="font-medium">XTerm.js</span> <span class="text-sm text-gray-500" data-en="Terminal Emulation" data-zh="终端模拟">Terminal Emulation</span> </div> </div> </div> <div> <h4 class="text-lg font-semibold mb-4 flex items-center gap-2" data-en="⚙️ Backend Stack" data-zh="⚙️ 后端技术栈">
⚙️ Backend Stack
</h4> <div class="space-y-3"> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #306998; border-radius: 50%;"></div> <span class="font-medium">Python + Flask</span> <span class="text-sm text-gray-500" data-en="RESTful API" data-zh="RESTful API">RESTful API</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: var(--mondrian-red); border-radius: 50%;"></div> <span class="font-medium">WebSocket</span> <span class="text-sm text-gray-500" data-en="Real-time Communication" data-zh="实时通信">Real-time Communication</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: #ff6b35; border-radius: 50%;"></div> <span class="font-medium">SSH Integration</span> <span class="text-sm text-gray-500" data-en="Terminal Access" data-zh="终端访问">Terminal Access</span> </div> <div class="flex items-center gap-3"> <div style="width: 12px; height: 12px; background: var(--mondrian-yellow); border-radius: 50%;"></div> <span class="font-medium">ttyd Service</span> <span class="text-sm text-gray-500" data-en="Web Terminal" data-zh="网页终端">Web Terminal</span> </div> </div> </div> </div> </div> <div class="text-center mt-12"> <a href="https://github.com/moxin-org/mofa/tree/main/MoFA_stage" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 1.125rem; padding: 16px 32px; margin-right: 16px; background: linear-gradient(135deg, var(--macaron-peach), var(--mondrian-red));" data-en="🚀 Explore MoFA_Stage" data-zh="🚀 探索 MoFA_Stage"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> <span data-en="Explore MoFA_Stage" data-zh="探索 MoFA_Stage">Explore MoFA_Stage</span> </a> <a href="https://github.com/moxin-org/mofa/tree/main/MoFA_stage#quick-start" target="_blank" rel="noopener noreferrer" class="btn-outline" style="font-size: 1.125rem; padding: 16px 32px;" data-en="📖 Quick Start Guide" data-zh="📖 快速开始指南">
📖 Quick Start Guide
</a> </div> </div> </div> </section> <div class="mini-divider"> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> <div class="mini-line red-line"></div> </div> ${renderComponent($$result, "WorkflowShowcase", $$WorkflowShowcase, {})} <div class="mini-divider"> <div class="mini-line yellow-line"></div> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> </div> <section class="py-20" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);"> <div class="container"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4" data-en="See MoFA in <span class='gradient-text'>Action</span>" data-zh="观看 MoFA <span class='gradient-text'>实战演示</span>">
See MoFA in <span class="gradient-text">Action</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-en="Watch how developers use MoFA to build sophisticated AI applications in minutes" data-zh="观看开发者如何在几分钟内使用 MoFA 构建复杂的人工智能应用">Watch how developers use MoFA to build sophisticated AI applications in minutes</p> <div class="video-container rounded-lg shadow-2xl overflow-hidden mx-auto" style="max-width: 800px; background-color: #2d3748;"> <iframe id="demo-video-iframe" width="100%" style="aspect-ratio: 16/9; display: block;" src="https://www.youtube.com/embed/-QApoNUPG-U" title="MoFA in Action Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe> </div> </div> </div> <div class="mini-divider"> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> <div class="mini-line yellow-line"></div> </div> ${renderComponent($$result, "HallOfFame", $$HallOfFame, {})} <div class="mini-divider" style="display: none;"> <div class="mini-line yellow-line"></div> <div class="mini-line red-line"></div> <div class="mini-line blue-line"></div> </div> </section></main> <footer style="background-color: var(--mondrian-black); color: white;"> <div class="container py-12"> <div class="text-center"> <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px;"> <img src="/mofa-logo.png" alt="MoFA Logo" style="width: 32px; height: 32px; border-radius: 6px; object-fit: cover;"> <span style="font-size: 1.25rem; font-weight: 700;">MoFA</span> </div> <p style="color: #9ca3af; margin-bottom: 8px;" data-en="Make Ordinary Developers Full-stack AI Engineers" data-zh="让普通开发者成为全栈 AI 工程师">
Make Ordinary Developers Full-stack AI Engineers
</p> <p style="color: #9ca3af; margin-bottom: 24px;" data-en="Modular Framework for AI Agents" data-zh="模块化 AI 代理框架">
Modular Framework for AI Agents
</p> <div style="display: flex; justify-content: center; gap: 32px; margin-bottom: 16px;"> <a href="https://github.com/moxin-org/mofa" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">GitHub</a> <a href="https://discord.gg/hKJZzDMMm9" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">Discord</a> <a href="https://github.com/moxin-org/mofa/tree/main/Gosim_2024_Hackathon/documents" target="_blank" rel="noopener noreferrer" style="color: #9ca3af; text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'" data-en="Docs" data-zh="文档">Docs</a> </div> <p style="color: #6b7280; font-size: 0.875rem;" data-en="© 2025 MoFA. All rights reserved." data-zh="© 2025 MoFA. 保留所有权利.">
&copy; 2024 MoFA. All rights reserved.
</p> </div> </div> </footer>  </body> </html>`;
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "MoFA \u7684\u6700\u65B0\u52A8\u6001\u548C\u6280\u672F\u5206\u4EAB" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;"> <!-- 页面标题 --> <header style="text-align: center; margin-bottom: 60px;"> <h1 style="font-size: 2.5rem; font-weight: bold; margin: 0 0 16px 0; color: #1a1a1a;">
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
