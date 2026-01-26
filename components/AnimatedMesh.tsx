'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface AnimatedMeshProps {
  color?: string;
  intensity?: number;
}

function RotatingMesh({ color = '#87d0c3', intensity = 0.2 }: AnimatedMeshProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <octahedronGeometry args={[50, 0]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={intensity}
        wireframe
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
}

export default function AnimatedMesh({ color, intensity }: AnimatedMeshProps) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 200]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingMesh color={color} intensity={intensity} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
