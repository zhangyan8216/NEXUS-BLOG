---
title: "Next.js入门指南"
date: "2023-11-15"
description: "学习Next.js框架的基础知识和核心概念"
tags: ["nextjs", "react", "前端"]
---

# Next.js入门指南

Next.js是一个基于React的框架，提供了服务端渲染、静态网站生成等强大功能。

## 为什么选择Next.js？

- 内置路由系统
- 自动代码分割
- 服务端渲染支持
- 静态导出功能
- API路由支持

## 基本概念

### 页面路由

Next.js使用文件系统作为路由系统。在`pages`目录下创建的文件会自动成为路由。

### 数据获取

Next.js提供了多种数据获取方式：

- `getStaticProps` - 构建时获取数据
- `getServerSideProps` - 每次请求时获取数据
- `getStaticPaths` - 动态路由预渲染

## 示例代码

```jsx
// pages/index.js
export default function Home({ posts }) {
  return (
    <div>
      <h1>欢迎来到我的博客</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}
```

## 下一步

- 学习Next.js的API路由
- 探索中间件功能
- 了解图像优化组件