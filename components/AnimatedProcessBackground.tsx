'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedProcessBackgroundProps {
  step: 'ideas' | 'reunion' | 'definicion' | 'tecnologias' | 'desarrollo' | 'lanzamiento';
  isActive: boolean;
}

export default function AnimatedProcessBackground({ step, isActive }: AnimatedProcessBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Different background scenes for each step
  const getBackgroundScene = () => {
    switch (step) {
      case 'ideas':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="ideasSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffe5d4" />
                <stop offset="100%" stopColor="#ffd4b3" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="400" height="300" fill="url(#ideasSky)" />
            
            {/* Animated clouds */}
            <motion.g
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse cx="100" cy="80" rx="60" ry="25" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
              <ellipse cx="80" cy="75" rx="35" ry="15" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
            </motion.g>
            
            {/* Lightbulb with animated glow */}
            <motion.g
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '200px 150px' }}
            >
              <circle cx="200" cy="150" r="40" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="3" />
              <circle cx="200" cy="150" r="30" fill="#ffe066" />
              {/* Glow rays */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 6;
                const x1 = 200 + Math.cos(angle) * 35;
                const y1 = 150 + Math.sin(angle) * 35;
                const x2 = 200 + Math.cos(angle) * 50;
                const y2 = 150 + Math.sin(angle) * 50;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                );
              })}
            </motion.g>
            
            {/* Mountains in background */}
            <path d="M0,200 L100,150 L200,170 L300,140 L400,160 L400,300 L0,300 Z" 
              fill="#e8d5b7" stroke="#1a1a1a" strokeWidth="2.5" opacity="0.6" />
          </svg>
        );
      
      case 'reunion':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="reunionSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e8f4f8" />
                <stop offset="100%" stopColor="#d4e8f0" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="400" height="300" fill="url(#reunionSky)" />
            
            {/* Animated clouds */}
            <motion.g
              animate={{ x: [0, -15, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse cx="150" cy="70" rx="70" ry="30" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
              <ellipse cx="130" cy="65" rx="40" ry="18" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
            </motion.g>
            
            {/* Meeting table illustration */}
            <ellipse cx="200" cy="200" rx="120" ry="20" fill="#8b4513" stroke="#1a1a1a" strokeWidth="3" />
            
            {/* Two people silhouettes with animation */}
            <motion.g
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Person 1 */}
              <circle cx="150" cy="160" r="15" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2.5" />
              <rect x="135" y="175" width="30" height="40" rx="5" fill="#87d0c3" stroke="#1a1a1a" strokeWidth="2.5" />
              
              {/* Person 2 */}
              <circle cx="250" cy="160" r="15" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2.5" />
              <rect x="235" y="175" width="30" height="40" rx="5" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2.5" />
            </motion.g>
            
            {/* Speech bubbles */}
            <motion.g
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ellipse cx="120" cy="120" rx="25" ry="20" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="280" cy="120" rx="25" ry="20" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
            </motion.g>
          </svg>
        );
      
      case 'definicion':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="definicionSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0f8ff" />
                <stop offset="100%" stopColor="#e0f0ff" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="400" height="300" fill="url(#definicionSky)" />
            
            {/* Document illustration */}
            <motion.rect
              x="120"
              y="80"
              width="160"
              height="200"
              rx="5"
              fill="#ffffff"
              stroke="#1a1a1a"
              strokeWidth="3"
              animate={{ y: [80, 75, 80] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Animated lines on document */}
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={i}
                x1="140"
                y1={120 + i * 25}
                x2="260"
                y2={120 + i * 25}
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
            
            {/* Mountains background */}
            <path d="M0,250 L150,200 L300,220 L400,210 L400,300 L0,300 Z" 
              fill="#d4e8f0" stroke="#1a1a1a" strokeWidth="2" opacity="0.5" />
          </svg>
        );
      
      case 'tecnologias':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="techSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff5e6" />
                <stop offset="100%" stopColor="#ffe8cc" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="400" height="300" fill="url(#techSky)" />
            
            {/* Tech icons floating */}
            {[
              { x: 100, y: 120, color: '#4a90a4', label: 'R' },
              { x: 200, y: 120, color: '#68a063', label: 'N' },
              { x: 300, y: 120, color: '#ffd93d', label: 'DB' }
            ].map((icon, i) => (
              <motion.g
                key={i}
                animate={{ y: [120, 110, 120] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              >
                <circle cx={icon.x} cy={icon.y} r="20" fill={icon.color} stroke="#1a1a1a" strokeWidth="2.5" />
                <text x={icon.x} y={icon.y + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
                  {icon.label}
                </text>
              </motion.g>
            ))}
            
            {/* Connecting lines */}
            <motion.path
              d="M 120 120 L 180 120"
              stroke="#87d0c3"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              fill="none"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M 220 120 L 280 120"
              stroke="#87d0c3"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              fill="none"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* Stack layers */}
            <g transform="translate(200, 220)">
              <motion.rect
                x="-60"
                y="-15"
                width="120"
                height="8"
                rx="2"
                fill="#87d0c3"
                stroke="#1a1a1a"
                strokeWidth="2"
                animate={{ y: [-15, -18, -15] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.rect
                x="-50"
                y="-5"
                width="100"
                height="8"
                rx="2"
                fill="#ffd93d"
                stroke="#1a1a1a"
                strokeWidth="2"
                animate={{ y: [-5, -8, -5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              />
              <motion.rect
                x="-40"
                y="5"
                width="80"
                height="8"
                rx="2"
                fill="#ffaaa5"
                stroke="#1a1a1a"
                strokeWidth="2"
                animate={{ y: [5, 2, 5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              />
            </g>
          </svg>
        );
      
      case 'desarrollo':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="devSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e8f5e9" />
                <stop offset="100%" stopColor="#c8e6c9" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="400" height="300" fill="url(#devSky)" />
            
            {/* Laptop illustration */}
            <motion.g
              animate={{ y: [140, 135, 140] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="100" y="140" width="200" height="120" rx="5" fill="#4a4a4a" stroke="#1a1a1a" strokeWidth="3" />
              <rect x="110" y="150" width="180" height="100" fill="#1a1a1a" />
              
              {/* Animated code lines */}
              {[...Array(5)].map((_, i) => (
                <motion.rect
                  key={i}
                  x="120"
                  y={160 + i * 18}
                  width={140 - i * 10}
                  height="3"
                  fill="#4a7c59"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
              
              {/* Keyboard */}
              <rect x="130" y="260" width="140" height="20" rx="3" fill="#2a2a2a" stroke="#1a1a1a" strokeWidth="2" />
            </motion.g>
            
            {/* Mountains */}
            <path d="M0,280 L150,240 L300,260 L400,250 L400,300 L0,300 Z" 
              fill="#a5d6a7" stroke="#1a1a1a" strokeWidth="2" opacity="0.6" />
          </svg>
        );
      
      case 'lanzamiento':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="launchSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#16213e" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="400" height="300" fill="url(#launchSky)" />
            
            {/* Stars */}
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={50 + (i * 25) % 350}
                cy={30 + (i * 20) % 100}
                r="2"
                fill="#ffd93d"
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            
            {/* Rocket with animation */}
            <motion.g
              animate={{ y: [180, 120, 180] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Rocket body */}
              <ellipse cx="200" cy="180" rx="25" ry="60" fill="#87d0c3" stroke="#1a1a1a" strokeWidth="3" />
              {/* Nose */}
              <path d="M 175 120 L 200 100 L 225 120 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="3" />
              {/* Window */}
              <circle cx="200" cy="160" r="12" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
              {/* Fins */}
              <path d="M 175 180 L 160 200 L 175 200 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M 225 180 L 240 200 L 225 200 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Fire */}
              <motion.g
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <path d="M 190 240 Q 200 250 210 240" fill="#ffd93d" opacity="0.8" />
                <path d="M 185 235 Q 200 245 215 235" fill="#ff6b6b" opacity="0.6" />
              </motion.g>
            </motion.g>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {getBackgroundScene()}
    </motion.div>
  );
}
