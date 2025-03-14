# 專案目標
這個專案的主要目標是利用 ABP 框架和 NX 開發環境，快速開發符合 ABP 後端框架的前端 Angular 模組。

# 優勢簡述

## 1. 與後端 API 整合
- 開發者可以利用 ABP 框架提供的既有倉庫專案啟動，無需從零開始構建後端。
- ABP 框架提供了豐富的 API 和服務，方便前端模組與後端進行整合。

# 後端準備
本專案依賴 ABP 框架的後端程式，請開發者依照以下步驟準備後端環境：

1. 前往 [ABP 官方 GitHub 倉庫](https://github.com/abpframework/abp/tree/dev/templates/app-nolayers/aspnet-core)。
2. 下載或克隆該倉庫。
3. 依照倉庫中的說明文件，將後端專案架設起來。

完成後端架設後，即可開始使用本專案的前端功能模組。

# 前端專案啟動
在完成後端架設後，請依照以下步驟啟動前端專案：

1. 安裝專案所需的 npm 套件：
    npm i

2. 啟動前端應用程式：
    nx serve dev-app -o

這樣即可在瀏覽器中開啟並使用前端應用程式。

## 2. NX 開發環境
- 利用 NX 開發環境建立單一倉庫（monorepo），可以同時開發多個應用和模組。
- NX 提供了強大的工具和插件，幫助管理和構建大型項目。

## 3. NX Generators 功能
- NX 的 generators 功能可以自動生成程式碼，減少手動編寫的工作量。
- 開發者可以使用 generators 快速生成應用程式和功能模組，提升開發效率。

### 使用 NX Generators
1. 安裝 NX CLI：
    npm install -g nx

2. 使用 NX Console（Visual Studio Code 插件）：
    - 在 Visual Studio Code 中安裝 NX Console 插件。
    - 安裝完成後，打開 NX Console，選擇所需的 generator 類型並依照指示操作。

### 已開發的 Generators
1. Package Generator
2. Extensions Generator
3. Component Generator
4. Application Generator

這些 generators 可以幫助開發者快速生成所需的應用程式和功能模組，提升開發效率。

## 4. 快速生成 CRUD 功能
- 透過 NX generators 的執行，可以快速生成包含基本 CRUD 功能的應用程式和功能模組。
- 這些生成的模組可以直接使用，並且可以根據需求進行擴展和自定義。

## 5. 客製化功能
- 開發者可以在生成的基礎上，手動加入代碼，以建立更客製化的功能。
- 這種方式既保留了自動化生成的高效性，又提供了靈活的擴展性。