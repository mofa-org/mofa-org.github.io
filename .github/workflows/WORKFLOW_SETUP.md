# 自动化Build工作流设置指南

## 概述

此项目已配置了GitHub Actions工作流，可以在每次commit后自动触发build，并在推送到main分支时自动部署到GitHub Pages。

## 工作流配置

### 1. 主部署工作流 (`.github/workflows/deploy.yml`)

**触发条件:**
- 推送到 `main` 分支时自动触发build和部署
- 创建到 `main` 分支的Pull Request时仅触发build测试
- 支持手动触发

**功能:**
- 自动安装依赖
- 构建Astro项目
- 部署到GitHub Pages (仅限main分支)

### 2. Build测试工作流 (`.github/workflows/build-test.yml`)

**触发条件:**
- 推送到除 `main` 以外的任何分支
- 创建任何Pull Request

**功能:**
- 验证代码可以成功构建
- 检查构建输出
- 提供快速反馈

## 使用方法

### 基本工作流程

1. **开发分支工作:**
   ```bash
   git checkout -b feature/new-feature
   # 进行代码修改
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
   → 自动触发build测试

2. **创建Pull Request:**
   - 在GitHub上创建PR到main分支
   → 自动触发build测试

3. **合并到main分支:**
   ```bash
   git checkout main
   git merge feature/new-feature
   git push origin main
   ```
   → 自动触发build和部署

### GitHub Pages设置

要启用自动部署，需要在GitHub仓库中设置：

1. 进入仓库的 `Settings` → `Pages`
2. 在 `Source` 中选择 `GitHub Actions`
3. 保存设置

## 工作流状态

你可以在以下位置查看工作流状态：
- GitHub仓库的 `Actions` 标签页
- Pull Request页面的检查状态
- 每次commit旁边的状态图标

## 本地开发

在本地开发时，你仍然可以使用常规命令：

```bash
cd mofa-website
npm install
npm run dev      # 开发服务器
npm run build    # 构建项目
npm run preview  # 预览构建结果
```

## 故障排除

### 如果build失败:
1. 检查GitHub Actions的错误日志
2. 确保本地 `npm run build` 可以成功执行
3. 检查依赖是否正确安装
4. 确认Node.js版本兼容性

### 如果部署失败:
1. 确认GitHub Pages已正确配置
2. 检查仓库权限设置
3. 验证workflow文件语法是否正确

## 自定义配置

如需修改工作流配置，编辑以下文件：
- `.github/workflows/deploy.yml` - 主部署工作流
- `.github/workflows/build-test.yml` - Build测试工作流

常见自定义选项：
- 修改Node.js版本
- 添加代码质量检查
- 配置不同的部署目标
- 添加通知机制 