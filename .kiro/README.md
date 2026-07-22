# Kiro AI 設定說明

此專案已整合 **Kiro CLI**，可在 GitHub Codespaces 中快速使用 AI 輔助開發。

## 模型設定

- **主模型**：`claude-sonnet-4.5`（推薦，平衡效能與免費額度）
- **備用模型**：`claude-sonnet-4.5`

當主模型額度用完或不可用時，會自動切換到備用模型。

## 目錄結構

.kiro/
├── agents/              # 自訂 Agent 設定
│   └── default.json     # 預設 Agent（模型設定）
├── steering/            # 專案指引文件（Kiro 會自動讀取）
│   └── angular.md       # Angular 開發規範
├── settings/            # 全局設定（MCP、hooks 等）
│   └── mcp.json         # Model Context Protocol 設定（可選）
└── README.md            # 本說明文件


## 如何使用

### 在 Codespaces 中

1. 開啟 Codespaces 後，Kiro CLI 會自動安裝（Node 22 環境）
2. 執行以下指令開始使用：

```bash
# 進入互動模式
kiro-cli

# 或直接開啟聊天
kiro-cli chat

# 查看目前模型設定
kiro-cli models
