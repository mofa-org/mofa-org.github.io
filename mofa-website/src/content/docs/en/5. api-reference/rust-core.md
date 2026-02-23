---
title: "Rust Core API Reference"
description: "How to use the MoFA framework natively in Rust."
order: 1
---

# Rust Core Reference

MoFA's foundational microkernel, engine, and plugins are built entirely in Rust. This enables high concurrency via the Actor model (`Ractor`), distributed dataflow handling via `dora-rs`, and zero-overhead memory safety.

The MoFA ecosystem in Rust is primarily exposed through the `mofa-sdk` crate. 

## Crates Overview

* **mofa-kernel**: The core types, component registries, and agent lifecycle traits.
* **mofa-foundation**: Utilities for networking, persistence, and telemetry.
* **mofa-sdk**: The unified API for building agents and using MoFA's workspace features.

## Exploring the API

The complete Rust reference documentation for MoFA can be found hosted on docs.rs. 

> 👉 **[Visit `docs.rs/mofa-sdk` for the complete Rust API Reference](https://docs.rs/mofa-sdk)**

### Quick Snippet: Building an Agent
```rust
use mofa_sdk::{AgentBuilder, Agent, LLMCapability};

#[tokio::main]
async fn main() {
    let agent = AgentBuilder::new("ResearcherApp")
        .with_llm(LLMCapability::new("openai"))
        .build()
        .await
        .unwrap();
    
    agent.start().await;
}
```
