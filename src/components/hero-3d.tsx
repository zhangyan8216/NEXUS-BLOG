"use client";

import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Center, Float } from "@react-three/drei";
import { Suspense } from "react";

function Scene() {
  return (
    <>
      {/* 环境光 */}
      <ambientLight intensity={0.5} />
      {/* 点光源 */}
      <pointLight position={[10, 10, 10]} />
      
      {/* 浮动动画包装器 */}
      <Float
        speed={4} // 动画速度
        rotationIntensity={1} // 旋转强度
        floatIntensity={1} // 浮动强度
      >
        {/* 居中包装器 */}
        <Center>
          {/* 3D 文字 */}
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={1.5}
            height={0.2}
            curveSegments={12}
          >
            NEXUS
            <meshStandardMaterial
              color="#50C878"
              metalness={0.8}
              roughness={0.2}
            />
          </Text3D>
        </Center>
      </Float>

      {/* 轨道控制器 */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6],
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}