# 大创竞赛小程序

一个最小可运行的微信小程序骨架（仅含 "hello" 启动页，无业务逻辑）。

## 目录结构

```
.
├── app.js                  # 小程序入口
├── app.json                # 全局配置（页面路由、窗口样式）
├── app.wxss                # 全局样式
├── project.config.json     # 开发者工具项目配置
├── sitemap.json            # 索引配置
├── pages/
│   └── index/
│       ├── index.js        # 首页逻辑
│       ├── index.json      # 首页配置
│       ├── index.wxml      # 首页结构
│       └── index.wxss      # 首页样式
├── utils/
│   └── util.js             # 时间格式化工具
├── .github/
│   └── workflows/
│       └── ci.yml          # 仅校验 JSON 配置合法性的 CI
├── .gitignore
└── LICENSE
```

## 在微信开发者工具中打开

1. 打开 **微信开发者工具**。
2. 选择 **导入项目**（Import Project）。
3. **项目目录** 选择本仓库根目录。
4. **AppID** 填写 `touristappid`（游客身份，无需账号即可预览）；如有自己的小程序 AppID 也可填入。
5. 点击 **导入**，工具会自动编译并预览首页。

首页将显示 `Hello 大创` 以及加载时的本地时间。

## 关于 .gitignore

仓库的 `.gitignore` 已配置妥当，会自动忽略：
- 依赖目录（`node_modules/`、`miniprogram_npm/`）
- 微信开发者工具本地缓存、上传产物（`project.private.config.json`、`preview/` 等）
- 本地环境变量与密钥（`.env*`）

因此无需担心密钥或本地缓存被提交。

## CI

`.github/workflows/ci.yml` 仅校验 `app.json`、`project.config.json`、`sitemap.json`、`pages/index/index.json` 能否正确解析为 JSON，不依赖微信私有构建链。可选的上传预览步骤（需 `miniprogram-ci` 与密钥）已注释保留。
