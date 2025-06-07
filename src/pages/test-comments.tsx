"use client";

import { Comments } from "@/components/comments";

export default function TestCommentsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">测试评论组件</h1>
      <div className="max-w-2xl mx-auto">
        <Comments postId="test-post-123" />
      </div>
    </div>
  );
}