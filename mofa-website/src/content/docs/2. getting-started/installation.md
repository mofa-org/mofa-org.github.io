---
title: Installation
description: How to install MoFA and set up your development environment
---


This guide will help you install MoFA and set up your development environment.

## Prerequisites

Before installing MoFA, make sure you have:

- **Python 3.8 or higher**
- **pip package manager**
- **Git** (for cloning repositories)
- At least **4GB of RAM**

## Installation Methods

### Method 1: Install via pip (Recommended)

The easiest way to install MoFA is using pip:

```bash
pip install mofa
```

### Method 2: Install from Source

For development or the latest features:

```bash
# Clone the repository
git clone https://github.com/mofa-org/mofa.git
cd mofa

# Install in development mode
pip install -e .
```

## Verify Installation

To verify that MoFA is installed correctly:

```python
import mofa
print(mofa.__version__)
```
