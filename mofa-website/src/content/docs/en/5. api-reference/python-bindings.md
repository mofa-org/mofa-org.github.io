---
title: "Python SDK & UniFFI Integration"
description: "How to bind MoFA's core Rust features into Python and other languages."
order: 2
---

# Multi-Language Publishing via UniFFI

MoFA is fundamentally "polyglot by design," meaning it guarantees near-zero overhead native integrations across multiple languages without HTTP/RPC latency. We achieve this using Mozilla's **[UniFFI](https://mozilla.github.io/uniffi-rs/)**.

## Generating the Python SDK

Currently, the Rust core exposes interfaces defining structs such as `Agent`, `Prompt`, and `WorkflowEngine`.

### Steps to Compile Python Wheel (Local)

1. Make sure you have python, pip, and maturin installed:
```bash
pip install maturin
```
2. In the `mofa` repository root:
```bash
maturin develop --release
```

This will compile the `mofa-core` backend and install it directly into your currently active Python virtual environment.

### Using the Python SDK

Here's an example of calling MoFA's Rust-backed LLM workflow engine from a native Python script:

```python
import mofa_core

agent = mofa_core.Agent("DataAnnotator")
agent.set_model("gpt-4")
result = agent.run("Annotate this JSON array...")

print(result)
```

## Other Languages (Future)

UniFFI natively supports generating bindings for:
- Swift (iOS/macOS)
- Kotlin (Android/JVM)
- Ruby
- Go

These bindings will eventually be published to their respective package managers.
