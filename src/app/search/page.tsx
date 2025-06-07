import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// 模拟文章数据
const posts = [
  {
    id: 1,
    title: "使用 Next.js 构建现代博客",
    excerpt: "探索如何使用 Next.js 和 Tailwind CSS 构建一个现代化的博客平台...",
    slug: "building-modern-blog-with-nextjs",
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    date: "2024-03-15",
    author: {
      name: "张三",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
  },
  {
    id: 2,
    title: "AI 驱动的博客内容推荐",
    excerpt: "了解如何利用人工智能技术为用户提供个性化的内容推荐...",
    slug: "ai-powered-content-recommendation",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2024-03-14",
    author: {
      name: "李四",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  },
  {
    id: 3,
    title: "优化博客性能的最佳实践",
    excerpt: "学习如何通过图片优化、代码分割等技术提升博客性能...",
    slug: "blog-performance-optimization",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "2024-03-13",
    author: {
      name: "王五",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
  },
];

interface Props {
  searchParams: { q?: string };
}

export default function SearchPage({ searchParams }: Props) {
  const query = searchParams.q;
  if (!query) return notFound();

  const results = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          搜索结果: {query}
        </h1>
        <p className="mt-2 text-muted-foreground">
          找到 {results.length} 个相关结果
        </p>

        <div className="mt-8 space-y-8">
          {results.map((post) => (
            <article key={post.id} className="relative isolate">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-x-4 text-xs">
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
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span className="text-muted-foreground">
                      {post.author.name}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/post/${post.slug}`}
                  className="mt-2 block"
                >
                  <h2 className="text-xl font-semibold leading-6 hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 