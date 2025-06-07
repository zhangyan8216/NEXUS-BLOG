import Link from "next/link";
import Image from "next/image";

// 模拟分类数据
const categories = [
  {
    id: 1,
    name: "技术",
    description: "探索最新的技术趋势和开发实践",
    posts: [
      {
        id: 1,
        title: "使用 Next.js 构建现代博客",
        excerpt: "探索如何使用 Next.js 和 Tailwind CSS 构建一个现代化的博客平台...",
        date: "2024-03-20",
        slug: "building-modern-blog-with-nextjs",
        coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      },
    ],
  },
  {
    id: 2,
    name: "AI",
    description: "人工智能和机器学习的最新进展",
    posts: [
      {
        id: 2,
        title: "AI 驱动的博客内容推荐",
        excerpt: "了解如何利用人工智能技术为用户提供个性化的内容推荐...",
        date: "2024-03-19",
        slug: "ai-powered-content-recommendation",
        coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      },
    ],
  },
  {
    id: 3,
    name: "性能优化",
    description: "提升应用性能和用户体验的最佳实践",
    posts: [
      {
        id: 3,
        title: "优化博客性能的最佳实践",
        excerpt: "学习如何通过图片优化、代码分割等技术提升博客性能...",
        date: "2024-03-18",
        slug: "blog-performance-optimization",
        coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      },
    ],
  },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">文章分类</h1>
        <p className="text-lg text-muted-foreground">
          探索不同主题的文章和见解
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.id}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {post.date}
                      </p>
                      <p className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
} 