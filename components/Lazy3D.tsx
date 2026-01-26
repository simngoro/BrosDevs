'use client';

import { lazy, Suspense } from 'react';

// Lazy load 3D components for better performance
export const LazyMeeting3D = lazy(() => import('./Meeting3D'));
export const LazyTechStack3D = lazy(() => import('./TechStack3D'));

export function Lazy3DFallback() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-[#f5f5f5] rounded-lg border-2 border-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#87d0c3] mx-auto mb-4"></div>
        <p className="text-sm text-[#4a4a4a] font-sans">Cargando animación...</p>
      </div>
    </div>
  );
}
