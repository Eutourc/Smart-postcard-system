# Smart Postcard Foundation V1.0

这是 Smart Postcard 的正式工程基础版，用于 `Smart-postcard-system` GitHub 开发仓库。

## 固定原则

1. 首页序号 = 目录序号 = 开发顺序 = 网站模块顺序。
2. GitHub 是开发仓库，不是最终运行依赖。
3. 正式网站应能整体复制本工程后运行。
4. HTML 不再内嵌大规模 Base64 图片。
5. 软件、系统资源、用户数据库、用户文件库分离。
6. 每个模块只管理自己的内容；共享内容进入 `00_Core`。
7. 03 是纪念事件主数据来源；04 与 09 只读取，不重复维护。
8. 先完成可运行系统，再逐步精修细节。

## 第一次部署

把本目录中的全部内容复制到：

`C:\GitHub\Smart-postcard-system`

然后用 GitHub Desktop 执行 Commit 与 Push。
