# Angular 專案開發規範 (Kiro Steering)

## 專案風格
- 使用 **Standalone Components**（避免 NgModule）
- 使用 **Signals** 優先（computed, effect, toSignal）
- 使用 **OnPush** change detection 策略
- Tailwind CSS + SCSS 模組化樣式

## 程式碼規範
- 嚴格遵守 Prettier + ESLint 設定
- Component 名稱使用 kebab-case
- Service 使用 providedIn: 'root'
- 使用 RxJS 時優先 pipeable operators
- 避免任何 `any` 型別，盡量使用 interface / type

## 目錄結構建議
- src/app/core/       → 核心服務、guards、interceptors
- src/app/shared/     → 共用元件、pipe、directive
- src/app/features/   → 功能模組（lazy loaded）
- src/app/data/       → 靜態資料或 mock

## Kiro 偏好
- 先理解整體架構再修改
- 產生程式碼時同時更新相關文件與註解
- 優先使用 modern Angular 寫法
- 保持程式碼乾淨、易讀、可維護
- 產生新元件時一併產生對應的 spec 檔案（除非明確要求不產生）

你現在正在這個 Angular 導航網站專案中工作。
