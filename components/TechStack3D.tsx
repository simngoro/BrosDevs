'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

function TechIcon3D({ 
  position, 
  color, 
  label, 
  icon = 'box' 
}: { 
  position: [number, number, number]; 
  color: string; 
  label: string;
  icon?: 'box' | 'sphere' | 'torus';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    
    // Floating animation
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0] * 0.1) * 2;
    
    // Rotation based on icon type
    if (icon === 'box') {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    } else if (icon === 'sphere') {
      meshRef.current.rotation.y += 0.02;
    } else {
      meshRef.current.rotation.z += 0.015;
    }
  });

  const renderIcon = () => {
    switch (icon) {
      case 'sphere':
        return <sphereGeometry args={[4, 16, 16]} />;
      case 'torus':
        return <torusGeometry args={[3, 1, 16, 32]} />;
      default:
        return <boxGeometry args={[6, 6, 6]} />;
    }
  };

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        {renderIcon()}
        <meshStandardMaterial 
          color={color} 
          metalness={0.6}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Connection line to base */}
      <mesh position={[0, -6, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 4]} />
        <meshStandardMaterial color={color} opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

function TechLayers() {
  const layersRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!layersRef.current) return;
    layersRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  const layers: Array<{ color: string; position: [number, number, number]; size: [number, number, number] }> = [
    { color: '#87d0c3', position: [0, -15, 0], size: [40, 3, 30] },
    { color: '#ffd3b6', position: [0, -18, 0], size: [35, 3, 25] },
    { color: '#ffaaa5', position: [0, -21, 0], size: [30, 3, 20] },
  ];

  return (
    <group ref={layersRef}>
      {layers.map((layer, i) => (
        <mesh key={i} position={layer.position}>
          <boxGeometry args={layer.size} />
          <meshStandardMaterial 
            color={layer.color} 
            roughness={0.5}
            metalness={0.2}
            opacity={0.8}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

function TechScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, 10, -5]} intensity={0.5} color="#87d0c3" />
      <pointLight position={[10, -10, 5]} intensity={0.4} color="#ffd3b6" />
      
      {/* Tech Icons */}
      <TechIcon3D position={[-25, 5, 0]} color="#4a90a4" label="React" icon="sphere" />
      <TechIcon3D position={[-8, 5, 0]} color="#68a063" label="Node" icon="box" />
      <TechIcon3D position={[8, 5, 0]} color="#ffd93d" label="Next" icon="torus" />
      <TechIcon3D position={[25, 5, 0]} color="#4a90a4" label="DB" icon="box" />
      
      {/* Base layers */}
      <TechLayers />
      
      {/* Connection lines between icons */}
      {[[-25, -8], [-8, 0], [8, 0], [25, 8]].map(([x, z], i) => (
        <mesh key={i} position={[x, 2, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 8]} />
          <meshStandardMaterial color="#87d0c3" opacity={0.4} transparent />
        </mesh>
      ))}
    </>
  );
}

export default function TechStack3D() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 10, 45], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <Suspense fallback={null}>
          <TechScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 3.5}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
