'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Person3D({ position, color, name }: { position: [number, number, number]; color: string; name: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle floating animation
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 3;
    // Subtle head nod
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <Sphere args={[8, 16, 16]} position={[0, 12, 0]}>
        <meshStandardMaterial color={color} roughness={0.7} />
      </Sphere>
      
      {/* Body */}
      <Box args={[12, 18, 6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#87d0c3" roughness={0.6} />
      </Box>
      
      {/* Arms */}
      <Box args={[3, 12, 3]} position={[-8, 2, 0]} rotation={[0, 0, 0.3]}>
        <meshStandardMaterial color={color} roughness={0.7} />
      </Box>
      <Box args={[3, 12, 3]} position={[8, 2, 0]} rotation={[0, 0, -0.3]}>
        <meshStandardMaterial color={color} roughness={0.7} />
      </Box>
    </group>
  );
}

function Table3D() {
  return (
    <group position={[0, -8, 0]}>
      {/* Table top */}
      <Box args={[60, 3, 30]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b4513" roughness={0.8} />
      </Box>
      {/* Table legs */}
      {[[-25, -15], [25, -15], [-25, 15], [25, 15]].map(([x, z], i) => (
        <Box key={i} args={[2, 15, 2]} position={[x, -7.5, z]}>
          <meshStandardMaterial color="#654321" roughness={0.9} />
        </Box>
      ))}
    </group>
  );
}

function SpeechBubble({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  const bubbleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!bubbleRef.current) return;
    const time = state.clock.elapsedTime + delay;
    bubbleRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    bubbleRef.current.position.y = position[1] + Math.sin(time * 1.5) * 2;
  });

  return (
    <group position={position}>
      <mesh ref={bubbleRef}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshStandardMaterial color="#ffffff" opacity={0.9} transparent roughness={0.3} />
      </mesh>
      {/* Connection line */}
      <mesh position={[0, -6, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 4]} />
        <meshStandardMaterial color="#ffffff" opacity={0.7} transparent />
      </mesh>
    </group>
  );
}

function MeetingScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, 10, -5]} intensity={0.4} color="#ffd3b6" />
      
      {/* People */}
      <Person3D position={[-20, 0, 0]} color="#fdbcb4" name="Client" />
      <Person3D position={[20, 0, 0]} color="#ffd3b6" name="DevBros" />
      
      {/* Table */}
      <Table3D />
      
      {/* Speech bubbles */}
      <SpeechBubble position={[-20, 25, 0]} delay={0} />
      <SpeechBubble position={[20, 25, 0]} delay={0.5} />
      
      {/* Connection line between people */}
      <mesh position={[0, 5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 40]} />
        <meshStandardMaterial color="#87d0c3" opacity={0.5} transparent />
      </mesh>
    </>
  );
}

export default function Meeting3D() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 15, 50], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <Suspense fallback={null}>
          <MeetingScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
