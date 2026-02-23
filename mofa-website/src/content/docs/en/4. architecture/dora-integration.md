---
title: "Distributed Dataflow with Dora-rs"
description: "How MoFA scales to the edge and multi-agent distributed systems."
order: 3
---

# Dora Integration

MoFA natively integrates with [Dora-rs](https://github.com/dora-rs/dora), an extremely fast and low-latency dataflow middleware system designed originally for robotics.

## Why Dora?

When building local LLM agent systems, most frameworks quickly hit a bottleneck when it comes to edge computing or cross-machine distributed collaboration.

MoFA solves this by treating agents as nodes in a Dora dataflow graph.

### Distributed by Nature
- **Cross-process, cross-machine**: Agents communicate transparently across process or hardware boundaries.
- **Micro-second latency**: Ideal for voice-chat bots (like MoFA Studio) where audio streaming, ASR, and TTS nodes must communicate instantly. 

### Dataflow Orchestration
Using YAML files, developers can string together complex flows involving Python-based ML nodes (`dora-asr`, `dora-primespeech`) and Rust-based execution nodes (`dora-maas-client`). 

MoFA's microkernel ensures that the outputs from Dora nodes are properly parsed and handled by the agent's core task management loop.
