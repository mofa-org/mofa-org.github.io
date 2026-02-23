---
title: "Dual-Layer Plugin Architecture"
description: "How MoFA combines Rust/WASM compile-time performance with Rhai runtime scripting."
order: 2
---

# Dual-Layer Plugin System

MoFA's most distinguishing feature is its revolutionary **dual-layer plugin system**. This allows the framework to strike the elusive balance between raw native performance and hot-swappable dynamic flexibility.

## The Two Layers

### 1. Compile-time Plugins (Rust/WASM)
These plugins are compiled into WebAssembly or native binaries and hook directly into the core framework.
- Extreme performance, zero runtime overhead.
- Total type safety and compile-time error checking.
- Secure WASM sandboxes provide strong isolation.
- Used for performance-critical paths like LLM inference providers, storage adapters, and high-frequency tool calls.

### 2. Runtime Plugins (Rhai Scripts)
The embedded [Rhai](https://github.com/rhaiscript/rhai) scripting engine allows for on-the-fly logic definition.
- **No recompilation needed**. Changes take instant effect.
- Ideal for business logic hot updates, discounting rules, custom conversational flows.
- Seamless Bidirectional JSON Conversion for passing arguments between the script and the LLM.
- Secure sandbox execution with configurable resource limits (CPU cycles, recursion depth).

## Combined Power
By leveraging both layers, developers can achieve 99% coverage of extension scenarios. You can use Rust plugins for the heavily-lifted data processing tasks, while allowing operations or community contributors to tweak Rhai scripts to alter agent behaviors without ever needing to touch `cargo`.
