"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-[60vh] w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-background overflow-hidden">
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          className="absolute -left-4 -top-4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
          className="absolute -right-4 -bottom-4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
        />
      </div>

      {/* 网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-geist mb-6 text-6xl md:text-7xl font-bold tracking-tight"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white bg-[length:200%_100%] animate-gradient">
              NEXUS BLOG
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-xl md:text-2xl text-gray-400 mb-8"
          >
            Where Ideas Meet Innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-300 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              Exploring the Future of Web Development
            </span>
            <div className="mt-8 flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
              >
                开始阅读
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
              >
                了解更多
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部渐变阴影 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
} 