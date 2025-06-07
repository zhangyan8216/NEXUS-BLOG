"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RecommendedPost {
  id: string;
  title: string;
  similarity: number;
}

export function AIRecommendation({ currentPostId }: { currentPostId: string }) {
  const [recommendations, setRecommendations] = useState<RecommendedPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        // 集成 Vercel AI SDK
        const response = await fetch('/api/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ postId: currentPostId })
        });
        const data = await response.json();
        setRecommendations(data.recommendations);
      } catch (error) {
        console.error('AI推荐获取失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentPostId]);

  return (
    <motion.div 
      className="glass p-6 rounded-xl neon-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-bold mb-4 neon-text">🤖 AI 智能推荐</h3>
      <AnimatePresence>
        {recommendations.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: index * 0.1 }}
            className="mb-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <span className="text-sm text-emerald-400">匹配度: {(post.similarity * 100).toFixed(1)}%</span>
            <h4 className="font-medium">{post.title}</h4>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}