"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface PostCardProps {
  title: string;
  summary: string;
  cover?: string;
  date?: string;
  category?: string;
  tags?: string[];
  slug?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  summary,
  cover,
  date,
  category,
  tags,
  slug,
}) => {
  return (
    <Link href={`/posts/${slug}`} className="block">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
      >
        {cover && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={cover}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {category && (
              <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/80 backdrop-blur-sm z-10">
                {category}
              </span>
            )}
          </div>
        )}
        <div className="p-5">
          <h2 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{summary}</p>
          <div className="flex items-center justify-between">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {date && (
              <time dateTime={date} className="text-xs text-gray-500 font-mono">
                {new Date(date).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })}
              </time>
            )}
          </div>
        </div>
      </motion.article>
  );
}; 