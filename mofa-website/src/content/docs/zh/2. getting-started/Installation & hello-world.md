---
title: 快速开始指南
description: MoFA 安装和 Hello World 示例
order: 1
---


## 1. 开发环境配置

### 1.1 Python 环境

首先需构建隔离的 Python 运行环境：

```bash
# 创建虚拟环境
python3 -m venv .mofa
# 激活虚拟环境
source .mofa/bin/activate
```

**环境要求**
- Python 版本需为 3.10 或 3.11
- 兼容系统：WSL（Ubuntu 22.04）、macOS
- 暂不支持 Windows 系统

### 1.2 Rust 环境配置
```bash
# 安装 Rust 工具链
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# 安装过程中保持默认配置（直接按 Enter 确认）
# 安装 Dora 命令行工具
cargo install dora-cli

# 验证安装结果
rustc --version
cargo --version
dora --version
```

## 2. 安装 MoFa 框架
```bash
pip install git+https://github.com/mofa-org/mofa.git
# 验证安装
pip show mofa-ai
```

## 3. 运行 Hello World 示例
```bash
# 克隆代码仓库
git clone git@github.com:mofa-org/mofa.git
```

### 3.1 启动数据流
```bash
cd mofa/dataflows/hello_world
mofa run hello_world_dataflow.yml
```


交互示例输出：

```
 Send Your Task :  你好
-------------hello_world_result---------------
你好
```
