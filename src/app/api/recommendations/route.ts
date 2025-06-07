import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// 模拟文章数据（实际应用中应该从数据库获取）
const posts = [
  {
    id: "1",
    title: "使用 Next.js 构建现代博客",
    content: "Next.js 是一个强大的 React 框架...",
    tags: ["Next.js", "React", "Web开发"],
  },
  {
    id: "2",
    title: "AI 驱动的博客内容推荐",
    content: "人工智能正在改变我们消费内容的方式...",
    tags: ["人工智能", "推荐系统", "机器学习"],
  },
  {
    id: "3",
    title: "优化博客性能的最佳实践",
    content: "性能优化是提升用户体验的关键...",
    tags: ["性能优化", "Web开发", "最佳实践"],
  },
];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { postId } = await request.json();
    
    // 获取当前文章
    const currentPost = posts.find(p => p.id === postId);
    if (!currentPost) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    // 使用 OpenAI 计算文章相似度
    const recommendations = await Promise.all(
      posts
        .filter(p => p.id !== postId)
        .map(async (post) => {
          try {
            const response = await openai.embeddings.create({
              model: "text-embedding-ada-002",
              input: [
                `${currentPost.title} ${currentPost.content} ${currentPost.tags.join(" ")}`,
                `${post.title} ${post.content} ${post.tags.join(" ")}`
              ],
            });

            const [currentEmbedding, postEmbedding] = response.data;
            
            // 计算余弦相似度
            const similarity = calculateCosineSimilarity(
              currentEmbedding.embedding,
              postEmbedding.embedding
            );

            return {
              id: post.id,
              title: post.title,
              similarity,
            };
          } catch (error) {
            console.error('Error calculating similarity:', error);
            return {
              id: post.id,
              title: post.title,
              similarity: 0,
            };
          }
        })
    );

    // 按相似度排序并返回前3篇
    const sortedRecommendations = recommendations
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3);

    return NextResponse.json({ recommendations: sortedRecommendations });
  } catch (error) {
    console.error('Error in recommendations:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// 计算余弦相似度
function calculateCosineSimilarity(vec1: number[], vec2: number[]) {
  const dotProduct = vec1.reduce((acc, val, i) => acc + val * vec2[i], 0);
  const norm1 = Math.sqrt(vec1.reduce((acc, val) => acc + val * val, 0));
  const norm2 = Math.sqrt(vec2.reduce((acc, val) => acc + val * val, 0));
  return dotProduct / (norm1 * norm2);
}