'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      temp.push({ time, factor, speed });
    }
    return { positions, temp };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    particles.temp.forEach((particle, i) => {
      let { factor, speed } = particle;
      const t = (particle.time += speed);
      
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];

      positions[i * 3] = x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10;
      positions[i * 3 + 1] = y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10;
      positions[i * 3 + 2] = z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10;
    });
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={mesh} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#87d0c3"
        size={1.5}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1000], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingParticles count={800} />
      </Canvas>
    </div>
  );
}
