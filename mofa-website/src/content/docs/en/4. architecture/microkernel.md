---
title: "MoFA Microkernel Architecture"
description: "Understanding the core of the MoFA framework and its layered design."
order: 1
---

# Microkernel Architecture

MoFA adopts a **layered microkernel architecture** with `mofa-kernel` at its core. All other features (including the dual-layer plugin system, LLM capabilities, multi-agent collaboration, etc.) are built as modular components on top of the microkernel.

## Core Design Principles

- **Core Simplicity**: The microkernel contains only the most basic functions: agent lifecycle management, metadata system, and dynamic management.
- **High Extensibility**: All advanced features are extended through modular components and plugins, keeping the kernel incredibly stable.
- **Loose Coupling**: Components communicate through standardized interfaces, making them easy to replace and upgrade.

## Visual Architecture Overview

```mermaid
block-beta
    columns 1
    block:business["🧩 Business Layer"]
        A["User-defined Agents, Workflows, Rules"]
    end
    space
    block:runtime["⚡ Runtime Plugin Layer (Rhai Scripts)"]
        B["Dynamic tool registration"]
        C["Rule engine & Scripts"]
        D["Hot-load logic"]
    end
    space
    block:compile["🔧 Compile-time Plugin Layer (Rust/WASM)"]
        E["LLM plugins"]
        F["Tool plugins"]
        G["Storage & Protocol"]
    end
    space
    block:kernel["🏗️ Microkernel (mofa-kernel)"]
        H["Lifecycle management"]
        I["Metadata & Communication"]
        J["Task scheduling"]
    end

    business --> runtime
    runtime --> compile
    compile --> kernel
```

## Agent Coordination via the Microkernel

The kernel handles complex coordination seamlessly without bloating the framework:

- **Priority Scheduling**: Task scheduling system based on strict priority levels.
- **Communication Bus**: A built-in inter-agent communication bus allows seamless interactions via the `SimpleMessageBus` or `DoraChannel`.
- **Workflow Engine**: Powers the core engine behind visual workflow builders and complex LLM agent collaborations.
