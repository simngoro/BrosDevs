'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

interface ProcessHeroBackgroundProps {
  scene: 'ideas' | 'reunion' | 'definicion' | 'tecnologias' | 'desarrollo' | 'lanzamiento';
  isActive: boolean;
}

export default function ProcessHeroBackground({ scene, isActive }: ProcessHeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Different color schemes for each scene
  const getSceneColors = () => {
    switch (scene) {
      case 'ideas':
        return {
          skyGradient: ['#ffe5d4', '#ffd4b3', '#ffc49b', '#ffb380', '#fcf8f3'],
          waterGradient: ['#6bb5d4', '#5ba3c2', '#4a90a4', '#2c5f6b'],
          mountainGradient: ['#e8d5b7', '#d4a574'],
          sunColor: '#ffd93d',
          sunGlow: '#ffe066'
        };
      case 'reunion':
        return {
          skyGradient: ['#e8f4f8', '#d4e8f0', '#c0dce8', '#acd0e0', '#f0f8ff'],
          waterGradient: ['#a8d5e2', '#8bc5d4', '#6eb5c6', '#4a9bb0'],
          mountainGradient: ['#d4e8f0', '#b8d8e8'],
          sunColor: '#87ceeb',
          sunGlow: '#b0e0e6'
        };
      case 'definicion':
        return {
          skyGradient: ['#f0f8ff', '#e0f0ff', '#d0e8ff', '#c0e0ff', '#f5f9ff'],
          waterGradient: ['#b8d4f0', '#9cc4e8', '#80b4e0', '#5a9cd0'],
          mountainGradient: ['#d0e8f0', '#b0d8e8'],
          sunColor: '#add8e6',
          sunGlow: '#c8e6f0'
        };
      case 'tecnologias':
        return {
          skyGradient: ['#fff5e6', '#ffe8cc', '#ffdbb3', '#ffce99', '#fff8f0'],
          waterGradient: ['#ffd3b6', '#ffc49b', '#ffb580', '#ffa066'],
          mountainGradient: ['#ffe8cc', '#ffdbb3'],
          sunColor: '#ffd93d',
          sunGlow: '#ffe066'
        };
      case 'desarrollo':
        return {
          skyGradient: ['#e8f5e9', '#d4e8d5', '#c0dbc1', '#accead', '#f0f8f0'],
          waterGradient: ['#a5d6a7', '#81c784', '#66bb6a', '#4caf50'],
          mountainGradient: ['#c8e6c9', '#a5d6a7'],
          sunColor: '#8bc34a',
          sunGlow: '#aed581'
        };
      case 'lanzamiento':
        return {
          skyGradient: ['#1a1a2e', '#16213e', '#0f1419', '#0a0e14', '#1e1e3e'],
          waterGradient: ['#2c3e50', '#34495e', '#1a252f', '#0f1419'],
          mountainGradient: ['#34495e', '#2c3e50'],
          sunColor: '#ffd93d',
          sunGlow: '#ffe066'
        };
      default:
        return {
          skyGradient: ['#ffe5d4', '#ffd4b3', '#ffc49b', '#ffb380', '#fcf8f3'],
          waterGradient: ['#6bb5d4', '#5ba3c2', '#4a90a4', '#2c5f6b'],
          mountainGradient: ['#e8d5b7', '#d4a574'],
          sunColor: '#ffd93d',
          sunGlow: '#ffe066'
        };
    }
  };

  const colors = getSceneColors();

  // Special elements for specific scenes
  const getSpecialElements = () => {
    switch (scene) {
      case 'desarrollo':
        // Trees with snow in foreground
        return (
          <>
            {/* Snow-covered trees in foreground */}
            {[...Array(6)].map((_, i) => {
              const xPos = 200 + i * 250;
              const yBase = 450;
              return (
                <g key={i} transform={`translate(${xPos}, ${yBase})`}>
                  {/* Tree trunk */}
                  <rect x="-8" y="0" width="16" height="120" fill="#8b4513" stroke="#1a1a1a" strokeWidth="3" />
                  {/* Lower branches with snow */}
                  <path
                    d="M -40 20 Q -20 0 0 -10 Q 20 0 40 20"
                    fill="#ffffff"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                  />
                  {/* Middle branches */}
                  <path
                    d="M -35 0 Q -15 -25 0 -35 Q 15 -25 35 0"
                    fill="#ffffff"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                  />
                  {/* Top with snow cap */}
                  <ellipse cx="0" cy="-35" rx="45" ry="12" fill="#ffffff" stroke="#1a1a1a" strokeWidth="3" />
                  <path
                    d="M -30 -20 Q -10 -45 0 -55 Q 10 -45 30 -20"
                    fill="#ffffff"
                    stroke="#1a1a1a"
                    strokeWidth="2.5"
                  />
                </g>
              );
            })}
            {/* Snowflakes falling */}
            {[...Array(25)].map((_, i) => (
              <motion.circle
                key={i}
                cx={50 + (i * 73) % 400}
                cy={50 + (i * 37) % 300}
                r="2.5"
                fill="#ffffff"
                stroke="#1a1a1a"
                strokeWidth="1"
                animate={{
                  y: [50 + (i * 37) % 300, 50 + (i * 37) % 300 + 400],
                  opacity: [0.9, 0, 0.9],
                  scale: [1, 1.3, 1],
                  x: [50 + (i * 73) % 400, 50 + (i * 73) % 400 + Math.sin(i) * 20]
                }}
                transition={{
                  duration: 4 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'linear'
                }}
              />
            ))}
          </>
        );
      case 'lanzamiento':
        // Stars
        return (
          <>
            {[...Array(30)].map((_, i) => (
              <motion.circle
                key={i}
                cx={50 + (i * 67) % 400}
                cy={50 + (i * 43) % 250}
                r="2"
                fill="#ffd93d"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + (i % 3) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </>
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
      animate={{ opacity: isActive ? 1 : 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Animated sky gradient */}
          <linearGradient id={`skyGradient-${scene}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {colors.skyGradient.map((color, i) => (
              <motion.stop
                key={i}
                offset={`${(i * 100) / (colors.skyGradient.length - 1)}%`}
                stopColor={color}
                animate={{
                  stopColor: isActive ? color : colors.skyGradient[Math.floor(colors.skyGradient.length / 2)]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
          </linearGradient>
          
          <linearGradient id={`waterGradient-${scene}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {colors.waterGradient.map((color, i) => (
              <stop
                key={i}
                offset={`${(i * 100) / (colors.waterGradient.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
          
          <linearGradient id={`mountainGradient-${scene}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.mountainGradient[0]} />
            <stop offset="100%" stopColor={colors.mountainGradient[1]} />
          </linearGradient>
        </defs>

        {/* Sky with animated gradient */}
        <motion.rect
          width="1920"
          height="1080"
          fill={`url(#skyGradient-${scene})`}
          animate={{
            opacity: [1, 0.95, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Mountains */}
        <g opacity="0.6">
          <path
            d="M0,400 L300,320 L600,350 L900,300 L1200,330 L1500,310 L1800,340 L1920,320 L1920,1080 L0,1080 Z"
            fill={`url(#mountainGradient-${scene})`}
            stroke="#1a1a1a"
            strokeWidth="3"
          />
          <path
            d="M0,500 L400,420 L800,450 L1200,400 L1600,430 L1920,410 L1920,1080 L0,1080 Z"
            fill={`url(#mountainGradient-${scene})`}
            stroke="#1a1a1a"
            strokeWidth="3"
            opacity="0.7"
          />
        </g>

        {/* Animated clouds */}
        <g>
          <motion.g
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <ellipse cx="200" cy="150" rx="120" ry="40" fill="#ffffff" stroke="#1a1a1a" strokeWidth="3" />
            <ellipse cx="180" cy="140" rx="60" ry="25" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
            <ellipse cx="220" cy="140" rx="70" ry="30" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
          </motion.g>
          
          <motion.g
            animate={{ x: [0, -80, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            <ellipse cx="800" cy="120" rx="150" ry="50" fill="#ffffff" stroke="#1a1a1a" strokeWidth="3" />
            <ellipse cx="770" cy="110" rx="80" ry="35" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
            <ellipse cx="830" cy="110" rx="90" ry="40" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
          </motion.g>
        </g>

        {/* Water with animated waves */}
        <g>
          <motion.path
            d="M0,600 Q200,580 400,600 T800,590 T1200,600 T1600,590 T1920,600 L1920,1080 L0,1080 Z"
            fill={`url(#waterGradient-${scene})`}
            stroke="#1a1a1a"
            strokeWidth="4"
            animate={{
              d: [
                "M0,600 Q200,580 400,600 T800,590 T1200,600 T1600,590 T1920,600 L1920,1080 L0,1080 Z",
                "M0,605 Q200,585 400,605 T800,595 T1200,605 T1600,595 T1920,605 L1920,1080 L0,1080 Z",
                "M0,595 Q200,575 400,595 T800,585 T1200,595 T1600,585 T1920,595 L1920,1080 L0,1080 Z",
                "M0,600 Q200,580 400,600 T800,590 T1200,600 T1600,590 T1920,600 L1920,1080 L0,1080 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Wave lines */}
          <motion.path
            d="M0,620 Q200,600 400,620 T800,610 T1200,620 T1600,610 T1920,620"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M0,620 Q200,600 400,620 T800,610 T1200,620 T1600,610 T1920,620",
                "M0,625 Q200,605 400,625 T800,615 T1200,625 T1600,615 T1920,625",
                "M0,615 Q200,595 400,615 T800,605 T1200,615 T1600,605 T1920,615",
                "M0,620 Q200,600 400,620 T800,610 T1200,620 T1600,610 T1920,620"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </g>

        {/* Special scene elements */}
        {getSpecialElements()}

        {/* Sun with animation */}
        <motion.g
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ transformOrigin: '1600px 200px' }}
        >
          <circle cx="1600" cy="200" r="60" fill={colors.sunColor} stroke="#1a1a1a" strokeWidth="4" />
          <circle cx="1600" cy="200" r="50" fill={colors.sunGlow} />
          {/* Sun rays */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x1 = 1600 + Math.cos(angle) * 55;
            const y1 = 200 + Math.sin(angle) * 55;
            const x2 = 1600 + Math.cos(angle) * 75;
            const y2 = 200 + Math.sin(angle) * 75;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            );
          })}
        </motion.g>

        {/* Birds */}
        <g>
          <motion.g
            animate={{
              x: [0, 150, 0],
              y: [0, -5, 0]
            }}
            transition={{
              x: { duration: 20, repeat: Infinity, ease: 'linear' },
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <path
              d="M300,350 Q310,340 320,350 Q310,360 300,350"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.g>
        </g>

        {/* Boat - Animated, moving across the water */}
        <motion.g
          animate={{
            x: [0, 400, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ transformOrigin: '0px 580px' }}
        >
          <g transform="translate(0, 580)">
            {/* Boat hull */}
            <path
              d="M-70,10 Q-50,-5 0,-10 Q50,-5 70,10 L70,35 Q50,40 0,40 Q-50,40 -70,35 Z"
              fill="#8b4513"
              stroke="#1a1a1a"
              strokeWidth="4"
            />
            {/* Boat deck detail */}
            <ellipse cx="0" cy="10" rx="65" ry="12" fill="#a0522d" stroke="#1a1a1a" strokeWidth="2" />
            <line x1="-40" y1="10" x2="40" y2="10" stroke="#1a1a1a" strokeWidth="2" />
            
            {/* Mast */}
            <line x1="0" y1="-10" x2="0" y2="-100" stroke="#1a1a1a" strokeWidth="5" />
            
            {/* Main sail */}
            <path
              d="M0,-10 L0,-80 L-50,-70 L-40,-30 Z"
              fill="#ffffff"
              stroke="#1a1a1a"
              strokeWidth="4"
            />
            {/* Sail details */}
            <line x1="-25" y1="-40" x2="-25" y2="-70" stroke="#1a1a1a" strokeWidth="2" />
            <line x1="-12" y1="-35" x2="-12" y2="-65" stroke="#1a1a1a" strokeWidth="1.5" />
            
            {/* Front sail (jib) */}
            <path
              d="M0,-10 L0,-70 L35,-65 L30,-30 Z"
              fill="#f5f5f5"
              stroke="#1a1a1a"
              strokeWidth="3"
            />
            
            {/* Flag on top */}
            <rect x="0" y="-100" width="20" height="15" fill="#ff4444" stroke="#1a1a1a" strokeWidth="2" />
            <path d="M0,-100 L10,-92 L0,-85 Z" fill="#ffffff" />
            
            {/* Boat reflection in water */}
            <g opacity="0.25" transform="scale(1, -1) translate(0, -90)">
              <path
                d="M-70,10 Q-50,-5 0,-10 Q50,-5 70,10 L70,35 Q50,40 0,40 Q-50,40 -70,35 Z"
                fill="#8b4513"
                stroke="#1a1a1a"
                strokeWidth="3"
              />
            </g>
          </g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
