import { Hero } from "@/components/hero";
import { PostCard } from "@/components/PostCard";
import Link from "next/link";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "打造极致酷炫的3D博客首页",
      summary: "用 React Three Fiber 和 Framer Motion 实现沉浸式3D动效。",
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      date: "2024-06-07",
      slug: "3d-cool-homepage",
      category: "前端开发",
      tags: ["React", "Three.js", "动画"],
    },
    {
      id: 2,
      title: "前端AI内容推荐实战",
      summary: "集成 OpenAI/Vercel AI SDK，智能推荐相关文章。",
      cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      date: "2024-06-06",
      slug: "ai-recommendation",
      category: "AI 应用",
      tags: ["OpenAI", "Vercel", "AI"],
    },
    {
      id: 3,
      title: "Next.js 14 App Router 深度体验",
      summary: "探索 SSR/ISR、边缘渲染与极致性能优化。",
      cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      date: "2024-06-05",
      slug: "nextjs14-app-router",
      category: "框架探索",
      tags: ["Next.js", "性能优化"],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          最新文章
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/post/${post.slug}`} key={post.slug}>
              <PostCard
                title={post.title}
                summary={post.summary}
                cover={post.cover}
                date={post.date}
                category={post.category}
                tags={post.tags}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}