import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Comments } from "@/components/comments";
import { AIRecommendation } from "@/components/ai-recommendation";

// 模拟文章数据
const posts = [
  {
    id: 1,
    title: "使用 Next.js 构建现代博客",
    excerpt: "探索如何使用 Next.js 和 Tailwind CSS 构建一个现代化的博客平台...",
    slug: "building-modern-blog-with-nextjs",
    content: `
# 使用 Next.js 构建现代博客

Next.js 是一个强大的 React 框架，它提供了许多开箱即用的功能，使得构建现代化的博客变得简单而高效。

## 为什么选择 Next.js？

- 服务端渲染 (SSR)
- 静态站点生成 (SSG)
- 文件系统路由
- API 路由
- 内置图片优化
- 自动代码分割

## 开始使用

首先，我们需要创建一个新的 Next.js 项目：

\`\`\`bash
npx create-next-app@latest my-blog --typescript --tailwind --eslint
\`\`\`

## 项目结构

一个典型的 Next.js 博客项目结构如下：

\`\`\`
my-blog/
  ├── src/
  │   ├── app/
  │   │   ├── layout.tsx
  │   │   ├── page.tsx
  │   │   └── post/[slug]/
  │   │       └── page.tsx
  │   ├── components/
  │   │   ├── navbar.tsx
  │   │   └── footer.tsx
  │   └── lib/
  │       └── utils.ts
  ├── public/
  │   └── images/
  └── package.json
\`\`\`

## 结论

使用 Next.js 构建博客不仅能够提供出色的性能，还能带来良好的开发体验。通过利用其强大的功能，我们可以轻松创建一个现代化的博客平台。
    `,
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    date: "2024-03-15",
    author: {
      name: "张三",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    category: "技术",
    tags: ["Next.js", "React", "Web开发"],
  },
  {
    id: 2,
    title: "AI 驱动的博客内容推荐",
    excerpt: "了解如何利用人工智能技术为用户提供个性化的内容推荐...",
    slug: "ai-powered-content-recommendation",
    content: `
# AI 驱动的博客内容推荐

人工智能正在改变我们消费内容的方式。通过智能推荐系统，我们可以为用户提供更加个性化的阅读体验。

## 推荐系统的核心要素

1. 用户行为分析
2. 内容特征提取
3. 相似度计算
4. 实时反馈

## 实现方法

\`\`\`python
def calculate_similarity(user_profile, content):
    # 计算用户画像与内容的相似度
    return similarity_score

def get_recommendations(user_id):
    user_profile = get_user_profile(user_id)
    all_content = get_all_content()
    recommendations = []
    
    for content in all_content:
        score = calculate_similarity(user_profile, content)
        recommendations.append((content, score))
    
    return sorted(recommendations, key=lambda x: x[1], reverse=True)
\`\`\`

## 未来展望

随着 AI 技术的不断发展，内容推荐系统将变得更加智能和精准。
    `,
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2024-03-14",
    author: {
      name: "李四",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    category: "AI",
    tags: ["人工智能", "推荐系统", "机器学习"],
  },
  {
    id: 3,
    title: "优化博客性能的最佳实践",
    excerpt: "学习如何通过图片优化、代码分割等技术提升博客性能...",
    slug: "blog-performance-optimization",
    content: `
# 优化博客性能的最佳实践

性能优化是提升用户体验的关键。本文将介绍一些优化博客性能的实用技巧。

## 图片优化

1. 使用现代图片格式（WebP）
2. 实现懒加载
3. 响应式图片

## 代码优化

\`\`\`javascript
// 使用动态导入实现代码分割
const DynamicComponent = dynamic(() => import('./Component'))

// 使用 React.memo 优化渲染
const MemoizedComponent = React.memo(({ prop }) => {
  return <div>{prop}</div>
})
\`\`\`

## 缓存策略

- 浏览器缓存
- CDN 缓存
- 服务端缓存

## 性能监控

使用 Lighthouse 等工具监控网站性能，持续优化。
    `,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "2024-03-13",
    author: {
      name: "王五",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    category: "性能优化",
    tags: ["性能优化", "Web开发", "最佳实践"],
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostDetail({ params }: Props) {
  const post = await Promise.resolve(posts.find((p) => p.slug === params.slug));
  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-x-4 text-sm mb-8">
          <time dateTime={post.date} className="text-muted-foreground">
            {new Date(post.date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="flex items-center gap-x-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-muted-foreground">{post.author.name}</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-8">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href={`/categories/${post.category}`}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
          >
            {post.category}
          </Link>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert">
          {post.content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
              return <h1 key={index}>{line.slice(2)}</h1>;
            } else if (line.startsWith("## ")) {
              return <h2 key={index}>{line.slice(3)}</h2>;
            } else if (line.startsWith("### ")) {
              return <h3 key={index}>{line.slice(4)}</h3>;
            } else if (line.startsWith("- ")) {
              return <li key={index}>{line.slice(2)}</li>;
            } else if (line.startsWith("```")) {
              return null;
            } else if (line.trim() === "") {
              return <br key={index} />;
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>
      </article>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr,300px]">
        <Comments postId={post.id.toString()} />
        <div className="space-y-16">
          <AIRecommendation postId={post.id.toString()} />
        </div>
      </div>
    </main>
  );
} 