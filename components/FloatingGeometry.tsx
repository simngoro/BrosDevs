'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Mesh } from 'three';
import { Box, Sphere, Torus } from '@react-three/drei';

interface FloatingShapeProps {
  position: [number, number, number];
  rotationSpeed?: [number, number, number];
  floatSpeed?: number;
  shape: 'box' | 'sphere' | 'torus';
  color?: string;
}

function FloatingShape({ 
  position, 
  rotationSpeed = [0.01, 0.01, 0.01], 
  floatSpeed = 0.5,
  shape,
  color = '#87d0c3'
}: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotation
    meshRef.current.rotation.x += rotationSpeed[0];
    meshRef.current.rotation.y += rotationSpeed[1];
    meshRef.current.rotation.z += rotationSpeed[2];
    
    // Floating animation
    meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * floatSpeed) * 20;
  });

  const renderShape = () => {
    switch (shape) {
      case 'box':
        return <Box args={[30, 30, 30]} />;
      case 'sphere':
        return <Sphere args={[20, 32, 32]} />;
      case 'torus':
        return <Torus args={[15, 5, 16, 100]} />;
      default:
        return <Box args={[30, 30, 30]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderShape()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.15}
        wireframe
        roughness={0.5}
        metalness={0.3}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 500], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Multiple floating shapes */}
        <FloatingShape 
          position={[100, 200, -200]} 
          rotationSpeed={[0.005, 0.01, 0.005]}
          shape="box"
          color="#87d0c3"
        />
        <FloatingShape 
          position={[-150, 300, -150]} 
          rotationSpeed={[0.01, 0.005, 0.01]}
          shape="sphere"
          color="#a8e6cf"
          floatSpeed={0.3}
        />
        <FloatingShape 
          position={[200, 150, -100]} 
          rotationSpeed={[0.008, 0.008, 0.008]}
          shape="torus"
          color="#ffd3b6"
          floatSpeed={0.4}
        />
        <FloatingShape 
          position={[-200, 250, -180]} 
          rotationSpeed={[0.006, 0.012, 0.006]}
          shape="box"
          color="#ffaaa5"
          floatSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
