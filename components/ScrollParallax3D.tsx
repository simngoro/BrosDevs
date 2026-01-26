'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

interface ScrollParallax3DProps {
  children: React.ReactNode;
  speed?: number;
}

export default function ScrollParallax3D({ children, speed = 0.5 }: ScrollParallax3DProps) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    if (!group.current) return;
    group.current.position.y = scroll.offset * viewport.height * speed;
  });

  return <group ref={group}>{children}</group>;
}
