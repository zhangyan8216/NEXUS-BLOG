# NEXUS BLOG

一个使用 Next.js 15 构建的现代化博客平台，具有优雅的用户界面和流畅的动画效果。

## ✨ 特性

- 🎨 现代化的用户界面设计
- 🌓 支持亮色/暗色主题切换
- 🎭 流畅的页面过渡动画
- 📱 响应式设计，完美支持移动端
- 🏷️ 文章分类和标签系统
- 🔍 内置搜索功能
- 💬 评论系统支持
- ⚡ 基于 Next.js 的快速页面加载

## 🛠️ 技术栈

- **框架：** [Next.js 15](https://nextjs.org/)
- **语言：** [TypeScript](https://www.typescriptlang.org/)
- **样式：** [Tailwind CSS](https://tailwindcss.com/)
- **UI组件：** [Radix UI](https://www.radix-ui.com/)
- **动画：** [Framer Motion](https://www.framer.com/motion/)
- **3D效果：** [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📦 项目结构

```
src/
├── app/                # 页面路由和布局
│   ├── categories/    # 分类页面
│   ├── post/         # 文章详情页
│   ├── search/       # 搜索页面
│   └── tags/         # 标签页面
├── components/        # React 组件
│   ├── ui/           # UI 基础组件
│   └── ...           # 其他功能组件
└── lib/              # 工具函数和配置
```

## 🚀 主要组件

- **Hero:** 主页面的动画标题组件
- **PostCard:** 文章卡片组件，支持封面图、标题、摘要等
- **Navbar:** 导航栏组件，包含主题切换
- **ThemeProvider:** 主题管理组件
- **Comments:** 评论系统组件

## 🎯 核心功能

1. **博客文章展示**
   - 支持封面图片
   - 文章分类和标签
   - 发布日期显示
   - 文章摘要预览

2. **主题系统**
   - 支持亮色/暗色主题
   - 跟随系统主题
   - 平滑主题切换

3. **交互体验**
   - 卡片悬停动画
   - 页面过渡效果
   - 响应式布局

## 🔧 开发环境设置

1. 克隆项目
```bash
git clone <repository-url>
cd nexusblog
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:3000

## 📝 使用说明

1. **创建新文章**
   - 在 `src/app/post` 目录下创建新的 Markdown 文件
   - 添加必要的 frontmatter 信息（标题、日期、标签等）

2. **自定义主题**
   - 修改 `tailwind.config.ts` 配置主题颜色
   - 在 `src/app/globals.css` 中添加自定义样式

3. **添加新功能**
   - 在 `src/components` 目录下创建新组件
   - 在相应的页面中导入并使用

## 📄 许可证

MIT License

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目！

1. Fork 项目
2. 创建新的功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📚 相关资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [React Three Fiber 文档](https://docs.pmnd.rs/react-three-fiber)