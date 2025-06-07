"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
}

interface AIRecommendationProps {
  postId: string;
}

export function AIRecommendation({ postId }: AIRecommendationProps) {
  const [recommendations, setRecommendations] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟 AI 推荐加载
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        // 在实际应用中，这里应该调用 AI 推荐 API
        // 目前使用模拟数据
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        // 模拟推荐数据
        const mockRecommendations = [
          { id: "1", title: "深入理解 React 18 新特性", slug: "understanding-react-18" },
          { id: "2", title: "Next.js 14 性能优化指南", slug: "nextjs-14-performance" },
          { id: "3", title: "AI 在前端开发中的应用", slug: "ai-in-frontend-development" },
        ];
        
        setRecommendations(mockRecommendations);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchRecommendations();
    }
  }, [postId]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">AI 推荐阅读</h2>
      </div>
      
      <Card className="overflow-hidden border-dashed border-primary/20">
        <CardContent className="p-0">
          {loading ? (
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-6 w-4/5" />
            </div>
          ) : (
            <ul className="divide-y">
              {recommendations.map((post) => (
                <li key={post.id} className="group">
                  <Link href={`/post/${post.slug}`} className="block p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{post.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      
      <p className="text-xs text-muted-foreground text-center">
        基于您的阅读兴趣，AI 为您精选的相关文章
      </p>
    </div>
  );
}