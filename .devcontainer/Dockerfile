FROM mcr.microsoft.com/devcontainers/typescript-node:22

# 安裝系統依賴
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# 預留 Kiro CLI 安裝位置
RUN mkdir -p /home/node/.local/bin && chown -R node:node /home/node/.local

USER node
