#!/usr/bin/env bash
# =========================================================
# GitHub 自动部署 · 一键推送脚本
# 用法：
#   1. 先在 GitHub 上创建仓库（Public）：
#      https://github.com/new
#   2. 运行本脚本，按提示输入 GitHub 用户名和仓库名
#   3. 脚本会自动关联远程仓库并推送，触发自动部署
# =========================================================

set -e
cd "$(dirname "$0")"

echo "========================================"
echo " 烟台大学文新学院新生指南 · 一键推送"
echo "========================================"

# 读取 GitHub 用户名
if [ -z "$1" ]; then
  read -r -p "请输入你的 GitHub 用户名: " GH_USER
else
  GH_USER="$1"
fi

# 读取仓库名
if [ -z "$2" ]; then
  read -r -p "请输入 GitHub 仓库名（如 xin-sheng-guide）: " GH_REPO
else
  GH_REPO="$2"
fi

if [ -z "$GH_USER" ] || [ -z "$GH_REPO" ]; then
  echo "错误：用户名和仓库名都不能为空"
  exit 1
fi

REMOTE_URL="https://github.com/${GH_USER}/${GH_REPO}.git"

echo ""
echo ">> 关联远程仓库: $REMOTE_URL"

# 检查是否已有远程仓库
if git remote -v | grep -q origin; then
  echo ">> 已存在 origin 远程仓库，更新地址..."
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

echo ">> 推送 main 分支到 GitHub..."
git push -u origin main

echo ""
echo "========================================"
echo " 推送成功！接下来请完成最后一步："
echo "========================================"
echo ""
echo " 1. 打开仓库页面: https://github.com/${GH_USER}/${GH_REPO}/settings/pages"
echo " 2. Source 选择 [GitHub Actions]（不是 Deploy from a branch）"
echo " 3. 等 1-2 分钟，访问:"
echo "    https://${GH_USER}.github.io/${GH_REPO}/"
echo ""
echo " 以后更新内容：git add . && git commit -m '更新' && git push"
echo "========================================"
