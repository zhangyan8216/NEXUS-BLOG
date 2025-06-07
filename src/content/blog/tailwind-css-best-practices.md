---
title: "Tailwind CSS最佳实践"
date: "2023-11-16"
description: "分享使用Tailwind CSS的高效开发技巧"
tags: ["tailwind", "css", "前端"]
---

# Tailwind CSS最佳实践

Tailwind CSS是一个实用优先的CSS框架，可以快速构建自定义设计。

## 为什么选择Tailwind？

- 无需编写自定义CSS
- 设计系统一致性
- 响应式设计简单
- 极小的生产包大小

## 核心技巧

### 1. 使用@apply提取重复样式

```css
/* 不推荐 */
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按钮</button>

/* 推荐 */
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}
```

### 2. 利用配置扩展设计系统

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3b82f6',
          secondary: '#10b981'
        }
      }
    }
  }
}
```

### 3. 响应式设计

```html
<!-- 移动端优先 -->
<div class="text-sm md:text-base lg:text-lg">
  响应式文本大小
</div>
```

## 性能优化

1. 启用PurgeCSS移除未使用的样式
2. 使用JIT模式提高开发体验
3. 避免过度使用@apply

## 实用资源

- [Tailwind官方文档](https://tailwindcss.com/docs)
- [Tailwind组件库](https://tailwindcomponents.com)
- [Tailwind Play](https://play.tailwindcss.com)