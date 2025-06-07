"use client";

import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function FloatingTitle() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text3D
        font="/fonts/geist_bold.json"
        size={1.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        NEXUS
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981" 
          emissiveIntensity={0.3}
        />
      </Text3D>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="relative h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingTitle />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {/* 粒子背景层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-background">
        <div className="particles-container">
          {/* 动态粒子效果 */}
        </div>
      </div>
    </div>
  );
}