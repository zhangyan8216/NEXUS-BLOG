"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 模拟文章数据
const posts = [
  {
    id: 1,
    title: "使用 Next.js 构建现代博客",
    excerpt: "探索如何使用 Next.js 和 Tailwind CSS 构建一个现代化的博客平台...",
    slug: "building-modern-blog-with-nextjs",
  },
  {
    id: 2,
    title: "AI 驱动的博客内容推荐",
    excerpt: "了解如何利用人工智能技术为用户提供个性化的内容推荐...",
    slug: "ai-powered-content-recommendation",
  },
  {
    id: 3,
    title: "优化博客性能的最佳实践",
    excerpt: "学习如何通过图片优化、代码分割等技术提升博客性能...",
    slug: "blog-performance-optimization",
  },
];

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof posts>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = (slug: string) => {
    router.push(`/post/${slug}`);
    setQuery("");
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setIsOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="搜索文章..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-md border bg-popover p-2 shadow-md">
          {results.map((result) => (
            <button
              key={result.id}
              type="button"
              onClick={() => handleSelect(result.slug)}
              className="w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
            >
              <div className="font-medium">{result.title}</div>
              <div className="text-xs text-muted-foreground line-clamp-1">
                {result.excerpt}
              </div>
            </button>
          ))}
          <div className="mt-2 border-t pt-2">
            <button
              type="submit"
              className="w-full rounded-sm px-2 py-1.5 text-left text-sm text-primary hover:bg-accent hover:text-accent-foreground"
            >
              查看所有搜索结果
            </button>
          </div>
        </div>
      )}
    </form>
  );
} 