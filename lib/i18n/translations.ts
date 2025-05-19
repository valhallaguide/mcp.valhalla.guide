export type Language = "en" | "zh-CN" | "zh-TW"

export const languages = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
}

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.getMcp": "Get MCP",
    "nav.howToUse": "How to Use",
    "nav.example": "Example",

    // Hero Section
    "hero.title": "OdinFun MCP",
    "hero.subtitle": "Interacting with odin.fun via AI",
    "hero.tryNow": "Try Now",

    // Get MCP Section
    "getMcp.title": "Get OdinFun MCP",
    "getMcp.github.title": "GitHub Repository",
    "getMcp.github.description": "Access the source code and contribute to the project",
    "getMcp.github.button": "View on GitHub",
    "getMcp.npm.title": "NPM Package",
    "getMcp.npm.description": "Install via NPM for easy integration into your projects",
    "getMcp.npm.button": "View on NPM",
    "getMcp.mcp.title": "MCP.so Directory",
    "getMcp.mcp.description": "Find it in the official MCP directory for easy discovery",
    "getMcp.mcp.button": "View on MCP.so",

    // How to Use Section
    "howToUse.title": "How to Use",
    "howToUse.step1.title": "Install Prerequisites",
    "howToUse.step1.item1": "Download and install the Claude Desktop App.",
    "howToUse.step1.item2": "Download and install Node.js.",
    "howToUse.step2.title": "Configure Claude",
    "howToUse.step2.description":
      "Go to the Claude 'Settings' and click 'Developers', then click 'Edit Config', you will open the config file. Add the code below to the config file and save.",
    "howToUse.step3.title": "Start Using",
    "howToUse.step3.description":
      "Restart the Claude and try out. You can now interact with odin.fun through Claude's AI interface.",

    // Example Section
    "example.title": "Example",
    "example.subtitle": "What can you do with OdinFun MCP?",
    "example.item1": "Please generate the daily market report of Odin.fun platform for me today...",
    "example.item2": "Please analyze the market trends of Odin.fun platform...",
    "example.item3": "Please make an in-depth analysis of the token XXX(id:XXX)...",
    "example.item4": "Please analyze my Odin.fun portfolio (user ID: XXX)...",

    // Footer
    "footer.copyright": "© {year} OdinFun MCP. All rights reserved.",
  },
  "zh-CN": {
    // Navigation
    "nav.home": "首页",
    "nav.getMcp": "获取 MCP",
    "nav.howToUse": "使用方法",
    "nav.example": "示例",

    // Hero Section
    "hero.title": "OdinFun MCP",
    "hero.subtitle": "通过 AI 与 odin.fun 交互",
    "hero.tryNow": "立即尝试",

    // Get MCP Section
    "getMcp.title": "获取 OdinFun MCP",
    "getMcp.github.title": "GitHub 仓库",
    "getMcp.github.description": "访问源代码并为项目做出贡献",
    "getMcp.github.button": "查看 GitHub",
    "getMcp.npm.title": "NPM 包",
    "getMcp.npm.description": "通过 NPM 安装，轻松集成到您的项目中",
    "getMcp.npm.button": "查看 NPM",
    "getMcp.mcp.title": "MCP.so 目录",
    "getMcp.mcp.description": "在 MCP 目录中查找，便于发现",
    "getMcp.mcp.button": "查看 MCP.so",

    // How to Use Section
    "howToUse.title": "使用方法",
    "howToUse.step1.title": "安装先决条件",
    "howToUse.step1.item1": "下载并安装 Claude 桌面应用。",
    "howToUse.step1.item2": "下载并安装 Node.js。",
    "howToUse.step2.title": "配置 Claude",
    "howToUse.step2.description":
      '进入 Claude 的"设置"，点击"开发者"，然后点击"编辑配置"，您将打开配置文件。将以下代码添加到配置文件中并保存。',
    "howToUse.step3.title": "开始使用",
    "howToUse.step3.description": "重启 Claude 并开始尝试。您现在可以通过 Claude 的 AI 界面与 odin.fun 进行交互。",

    // Example Section
    "example.title": "示例",
    "example.subtitle": "您可以用 OdinFun MCP 做什么？",
    "example.item1": "请为我生成今日 Odin.fun 平台的每日市场报告...",
    "example.item2": "请分析 Odin.fun 平台的市场趋势...",
    "example.item3": "请对代币 XXX(id:XXX) 进行深入分析...",
    "example.item4": "请分析我的 Odin.fun 投资组合（用户 ID: XXX）...",
    // Footer
    "footer.copyright": "© {year} OdinFun MCP. 保留所有权利。",
  },
  "zh-TW": {
    // Navigation
    "nav.home": "首頁",
    "nav.getMcp": "獲取 MCP",
    "nav.howToUse": "使用方法",
    "nav.example": "示例",

    // Hero Section
    "hero.title": "OdinFun MCP",
    "hero.subtitle": "通過 AI 與 odin.fun 互動",
    "hero.tryNow": "立即嘗試",

    // Get MCP Section
    "getMcp.title": "獲取 OdinFun MCP",
    "getMcp.github.title": "GitHub 倉庫",
    "getMcp.github.description": "訪問源代碼並為項目做出貢獻",
    "getMcp.github.button": "查看 GitHub",
    "getMcp.npm.title": "NPM 包",
    "getMcp.npm.description": "通過 NPM 安裝，輕鬆集成到您的項目中",
    "getMcp.npm.button": "查看 NPM",
    "getMcp.mcp.title": "MCP.so 目錄",
    "getMcp.mcp.description": "在 MCP 目錄中查找，便於發現",
    "getMcp.mcp.button": "查看 MCP.so",

    // How to Use Section
    "howToUse.title": "使用方法",
    "howToUse.step1.title": "安裝先決條件",
    "howToUse.step1.item1": "下載並安裝 Claude 桌面應用。",
    "howToUse.step1.item2": "下載並安裝 Node.js。",
    "howToUse.step2.title": "配置 Claude",
    "howToUse.step2.description":
      '進入 Claude 的"設置"，點擊"開發者"，然後點擊"編輯配置"，您將打開配置文件。將以下代碼添加到配置文件中並保存。',
    "howToUse.step3.title": "開始使用",
    "howToUse.step3.description": "重啟 Claude 並開始嘗試。您現在可以通過 Claude 的 AI 界面與 odin.fun 進行互動。",

    // Example Section
    "example.title": "示例",
    "example.subtitle": "您可以用 OdinFun MCP 做什麼？",
    "example.item1": "請為我生成今日 Odin.fun 平台的每日市場報告...",
    "example.item2": "請分析 Odin.fun 平台的市場趨勢...",
    "example.item3": "請對代幣 XXX(id:XXX) 進行深入分析...",
    "example.item4": "請分析我的 Odin.fun 投資組合（用戶 ID: XXX）...",

    // Footer
    "footer.copyright": "© {year} OdinFun MCP. 保留所有權利。",
  },
}

export const getTranslation = (lang: Language, key: string, params?: Record<string, string | number>): string => {
  const translation = translations[lang][key as keyof (typeof translations)[typeof lang]] || key

  if (params) {
    return Object.entries(params).reduce((acc, [key, value]) => {
      return acc.replace(`{${key}}`, String(value))
    }, translation)
  }

  return translation
}
