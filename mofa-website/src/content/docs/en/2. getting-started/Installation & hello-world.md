---
title: Quick Start Guide
description: MoFA installation and Hello World example
order: 1
---


## 1. Development Environment Setup

### 1.1 Python Environment

First, create an isolated Python runtime environment:

```bash
# Create virtual environment
python3 -m venv .mofa
# Activate virtual environment
source .mofa/bin/activate
```

**Environment Requirements**
- Python version 3.10 or 3.11
- Compatible systems: WSL (Ubuntu 22.04), macOS
- Windows system not currently supported

### 1.2 Rust Environment Setup
```bash
# Install Rust toolchain
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Keep default configuration during installation (press Enter to confirm)
# Install Dora CLI tool
cargo install dora-cli

# Verify installation
rustc --version
cargo --version
dora --version
```

## 2. Install MoFA Framework
```bash
pip install git+https://github.com/mofa-org/mofa.git
# Verify installation
pip show mofa-ai
```

## 3. Run Hello World Example
```bash
# Clone the repository
git clone git@github.com:mofa-org/mofa.git
```

### 3.1 Start Dataflow
```bash
cd mofa/dataflows/hello_world
mofa run hello_world_dataflow.yml
```


Example interaction output:

```
 Send Your Task :  Hello
-------------hello_world_result---------------
Hello
```
