"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import { motion } from 'framer-motion';

function CommentCube({ comment, position }: { comment: string; position: [number, number, number] }) {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[1, 1, 1]}>
        <meshStandardMaterial color="#10b981" transparent opacity={0.8} />
      </Box>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {comment.slice(0, 20)}...
      </Text>
    </group>
  );
}

export function CommentWall({ comments }: { comments: string[] }) {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {comments.map((comment, index) => (
          <CommentCube
            key={index}
            comment={comment}
            position={[
              (index % 3 - 1) * 2,
              Math.floor(index / 3) * 2 - 2,
              0
            ]}
          />
        ))}
      </Canvas>
    </div>
  );
}