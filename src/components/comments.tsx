"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// 模拟评论数据
const initialComments = [
  {
    id: 1,
    content: "这篇文章写得很好，对我帮助很大！",
    author: {
      name: "张三",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    date: "2024-03-15T10:30:00Z",
  },
  {
    id: 2,
    content: "感谢分享，学到了很多新知识。",
    author: {
      name: "李四",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    date: "2024-03-15T11:45:00Z",
  },
];

interface Comment {
  id: number;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

export function Comments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    try {
      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const comment: Comment = {
        id: comments.length + 1,
        content: newComment,
        author: {
          name: "当前用户",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        },
        date: new Date().toISOString(),
      };

      setComments([comment, ...comments]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">评论</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="写下你的评论..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4"
          rows={4}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "提交中..." : "提交评论"}
        </Button>
      </form>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(comment.date).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 