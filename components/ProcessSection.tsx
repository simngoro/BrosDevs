'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionParticles from './SectionParticles';
import ProcessHeroBackground from './ProcessHeroBackground';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const illustrationRefs = useRef<(SVGSVGElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState<string>('ideas');
  const meetingRefs = useRef<{
    person1?: SVGGElement;
    person2?: SVGGElement;
    bubble1?: SVGGElement;
    bubble2?: SVGGElement;
    connection?: SVGPathElement;
  }>({});
  const techRefs = useRef<{
    react?: SVGGElement;
    node?: SVGGElement;
    db?: SVGGElement;
    layers?: SVGGElement;
    connections?: SVGPathElement[];
  }>({});

  const processSteps = [
    {
      id: 'ideas',
      title: 'Ideas',
      description: 'Todo comienza con una idea. Nos sentamos contigo para entender tu visión, tus objetivos y qué problema quieres resolver. Realizamos un análisis profundo de tu mercado, competencia y audiencia objetivo. Identificamos oportunidades de mejora y definimos el valor único que tu producto aportará. Esta fase es crucial: establecemos las bases estratégicas, validamos conceptos y aseguramos que cada decisión técnica esté alineada con tus metas de negocio. Tu input es fundamental en cada paso, y trabajamos juntos para transformar ideas abstractas en soluciones concretas y viables.',
      illustration: 'lightbulb'
    },
    {
      id: 'reunion',
      title: 'Reunión con el Cliente',
      description: 'Nos reunimos contigo para profundizar en los detalles. Escuchamos tus necesidades, analizamos tu mercado y definimos juntos el alcance del proyecto. Durante estas sesiones, exploramos casos de uso específicos, flujos de usuario, requisitos funcionales y no funcionales. Discutimos presupuestos, tiempos de entrega y prioridades. Establecemos canales de comunicación claros y definimos hitos de revisión. Tu input es fundamental en cada paso, y nos aseguramos de que cada decisión refleje tu visión mientras aplicamos nuestra experiencia técnica para optimizar resultados.',
      illustration: 'meeting'
    },
    {
      id: 'definicion',
      title: 'Definición del Proyecto',
      description: 'Transformamos tus ideas en un plan concreto. Definimos funcionalidades, arquitectura técnica, timeline y presupuesto. Todo documentado y claro para que sepas exactamente qué vas a recibir. Creamos especificaciones técnicas detalladas, diagramas de arquitectura, modelos de datos y wireframes. Establecemos metodologías de trabajo, definimos sprints, entregables y criterios de aceptación. Preparamos contratos claros, acuerdos de confidencialidad y establecemos procesos de revisión y aprobación. Cada aspecto queda documentado para evitar malentendidos y garantizar transparencia total en el proceso.',
      illustration: 'document'
    },
    {
      id: 'tecnologias',
      title: 'Selección de Tecnologías',
      description: 'Elegimos el stack tecnológico perfecto para tu proyecto. Basándonos en tus necesidades, escalabilidad y presupuesto, seleccionamos las mejores herramientas para garantizar éxito a largo plazo. Evaluamos frameworks frontend y backend, bases de datos, servicios en la nube, herramientas de CI/CD y sistemas de monitoreo. Consideramos factores como rendimiento, seguridad, mantenibilidad, costos y curva de aprendizaje. Te explicamos cada decisión técnica y sus implicaciones. Nuestro objetivo es construir sobre tecnologías probadas, modernas y con futuro, asegurando que tu aplicación pueda crecer y evolucionar sin limitaciones técnicas.',
      illustration: 'gears'
    },
    {
      id: 'desarrollo',
      title: 'Desarrollo',
      description: 'Aquí es donde la magia sucede. Desarrollamos tu aplicación con código limpio, siguiendo las mejores prácticas. Mantenemos comunicación constante y entregas incrementales para que siempre sepas el progreso. Implementamos funcionalidades siguiendo metodologías ágiles, con code reviews, testing automatizado y documentación en tiempo real. Realizamos deployments frecuentes a ambientes de staging para que puedas ver el avance en tiempo real. Organizamos reuniones semanales de seguimiento, compartimos demos funcionales y ajustamos el rumbo según tus feedback. Aseguramos calidad, seguridad y rendimiento desde el primer día, no como una etapa final.',
      illustration: 'coding'
    },
    {
      id: 'lanzamiento',
      title: 'Lanzamiento',
      description: 'Llegamos al destino. Desplegamos tu aplicación, realizamos pruebas finales y te entregamos un producto listo para usar. Pero nuestro trabajo no termina aquí: te acompañamos en el mantenimiento y mejoras continuas. Configuramos servidores, dominios, certificados SSL y monitoreo en producción. Realizamos pruebas de carga, seguridad y compatibilidad. Capacitamos a tu equipo, entregamos documentación completa y código fuente organizado. Establecemos planes de mantenimiento, actualizaciones de seguridad y mejoras iterativas. Estamos disponibles para soporte post-lanzamiento, optimizaciones de rendimiento y nuevas funcionalidades. Tu éxito es nuestro éxito a largo plazo.',
      illustration: 'rocket'
    }
  ];

  // Render SVG illustrations based on type
  const renderIllustration = (type: string, index: number) => {
    switch (type) {
      case 'lightbulb':
        return (
          <svg ref={(el) => { illustrationRefs.current[index] = el; }} viewBox="0 0 400 300" className="w-full h-full">
            {/* Background circle */}
            <circle cx="200" cy="150" r="80" fill="#ffd93d" opacity="0.3" />
            {/* Lightbulb */}
            <g id="lightbulb">
              <ellipse cx="200" cy="140" rx="35" ry="45" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="3" />
              <rect x="185" y="185" width="30" height="8" rx="2" fill="#1a1a1a" />
              <rect x="190" y="193" width="20" height="4" rx="1" fill="#1a1a1a" />
              {/* Light rays */}
              <motion.path
                d="M 200 100 L 180 80 M 200 100 L 220 80 M 200 100 L 200 70"
                stroke="#ffd93d"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </g>
          </svg>
        );
      case 'meeting':
        return (
          <svg ref={(el) => { illustrationRefs.current[index] = el; }} viewBox="0 0 400 300" className="w-full h-full">
            {/* Background with subtle animation */}
            <rect x="50" y="50" width="300" height="200" rx="10" fill="#f5f5f5" stroke="#1a1a1a" strokeWidth="2" opacity="0.3" />
            
            {/* Table */}
            <ellipse cx="200" cy="220" rx="140" ry="25" fill="#8b4513" stroke="#1a1a1a" strokeWidth="3" />
            
            {/* Person 1 - More detailed */}
            <g ref={(el) => { meetingRefs.current.person1 = el || undefined; }} id="person1" transform="translate(130, 150)">
              {/* Head */}
              <circle cx="0" cy="0" r="22" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Eyes */}
              <circle cx="-5" cy="-2" r="2.5" fill="#1a1a1a" />
              <circle cx="5" cy="-2" r="2.5" fill="#1a1a1a" />
              {/* Smile */}
              <path d="M -8 5 Q 0 10 8 5" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Body */}
              <rect x="-15" y="22" width="30" height="45" rx="8" fill="#87d0c3" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Arms */}
              <ellipse cx="-25" cy="35" rx="8" ry="20" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="25" cy="35" rx="8" ry="20" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2" />
            </g>
            
            {/* Person 2 - More detailed */}
            <g ref={(el) => { meetingRefs.current.person2 = el || undefined; }} id="person2" transform="translate(270, 150)">
              {/* Head */}
              <circle cx="0" cy="0" r="22" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Eyes */}
              <circle cx="-5" cy="-2" r="2.5" fill="#1a1a1a" />
              <circle cx="5" cy="-2" r="2.5" fill="#1a1a1a" />
              {/* Smile */}
              <path d="M -8 5 Q 0 10 8 5" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Body */}
              <rect x="-15" y="22" width="30" height="45" rx="8" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Arms */}
              <ellipse cx="-25" cy="35" rx="8" ry="20" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2" />
              <ellipse cx="25" cy="35" rx="8" ry="20" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2" />
            </g>
            
            {/* Speech bubbles - animated */}
            <g ref={(el) => { meetingRefs.current.bubble1 = el || undefined; }}>
              <path d="M 90 100 Q 80 80 90 70 Q 100 80 90 100" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
              <circle cx="95" cy="85" r="2" fill="#1a1a1a" />
              <circle cx="100" cy="88" r="1.5" fill="#1a1a1a" />
            </g>
            
            <g ref={(el) => { meetingRefs.current.bubble2 = el || undefined; }}>
              <path d="M 310 100 Q 320 80 310 70 Q 300 80 310 100" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
              <circle cx="305" cy="85" r="2" fill="#1a1a1a" />
              <circle cx="300" cy="88" r="1.5" fill="#1a1a1a" />
            </g>
            
            {/* Connection line */}
            <path
              ref={(el) => { meetingRefs.current.connection = el || undefined; }}
              d="M 145 195 Q 200 180 255 195"
              stroke="#87d0c3"
              strokeWidth="3"
              strokeDasharray="5 5"
              fill="none"
              opacity="0.6"
            />
          </svg>
        );
      case 'document':
        return (
          <svg ref={(el) => { illustrationRefs.current[index] = el; }} viewBox="0 0 400 300" className="w-full h-full">
            {/* Document */}
            <rect x="120" y="80" width="160" height="200" rx="5" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
            {/* Lines */}
            <motion.line
              x1="140"
              y1="120"
              x2="260"
              y2="120"
              stroke="#1a1a1a"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.line
              x1="140"
              y1="150"
              x2="260"
              y2="150"
              stroke="#1a1a1a"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.3 }}
            />
            <motion.line
              x1="140"
              y1="180"
              x2="240"
              y2="180"
              stroke="#1a1a1a"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.6 }}
            />
            {/* Checkmark */}
            <motion.path
              d="M 140 220 L 160 240 L 200 200"
              fill="none"
              stroke="#4a7c59"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            />
          </svg>
        );
      case 'gears':
        return (
          <svg ref={(el) => { illustrationRefs.current[index] = el; }} viewBox="0 0 400 300" className="w-full h-full">
            {/* Code brackets */}
            <g id="code-brackets">
              <path d="M 80 100 L 100 120 L 80 140" fill="none" stroke="#87d0c3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 320 100 L 300 120 L 320 140" fill="none" stroke="#87d0c3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            
            {/* Tech icons in a row */}
            {/* React logo */}
            <g ref={(el) => { techRefs.current.react = el || undefined; }} id="react-icon" transform="translate(120, 120)">
              <circle cx="0" cy="0" r="25" fill="none" stroke="#61dafb" strokeWidth="3" opacity="0.6" />
              <circle cx="0" cy="0" r="18" fill="none" stroke="#61dafb" strokeWidth="2" opacity="0.4" />
              <circle cx="0" cy="0" r="3" fill="#61dafb" />
            </g>
            
            {/* Node.js icon */}
            <g ref={(el) => { techRefs.current.node = el || undefined; }} id="node-icon" transform="translate(200, 120)">
              <circle cx="0" cy="0" r="20" fill="#339933" stroke="#1a1a1a" strokeWidth="2" />
              <text x="0" y="8" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">N</text>
            </g>
            
            {/* Database icon */}
            <g ref={(el) => { techRefs.current.db = el || undefined; }} id="db-icon" transform="translate(280, 120)">
              <ellipse cx="0" cy="0" rx="18" ry="25" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2.5" />
              <rect x="-12" y="-8" width="24" height="16" rx="2" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="-8" y1="2" x2="8" y2="2" stroke="#1a1a1a" strokeWidth="1.5" />
            </g>
            
            {/* Connecting lines */}
            <path
              ref={(el) => { if (el) techRefs.current.connections = [...(techRefs.current.connections || []), el]; }}
              d="M 145 120 L 190 120"
              stroke="#87d0c3"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              ref={(el) => { if (el) techRefs.current.connections = [...(techRefs.current.connections || []), el]; }}
              d="M 220 120 L 265 120"
              stroke="#87d0c3"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
            
            {/* Stack layers representation */}
            <g ref={(el) => { techRefs.current.layers = el || undefined; }} id="stack-layers" transform="translate(200, 200)">
              <rect x="-60" y="-15" width="120" height="8" rx="2" fill="#87d0c3" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="-50" y="-5" width="100" height="8" rx="2" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" />
              <rect x="-40" y="5" width="80" height="8" rx="2" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2" />
            </g>
            
            {/* Selection indicator */}
            <circle cx="200" cy="120" r="80" fill="none" stroke="#87d0c3" strokeWidth="2" opacity="0.4" id="tech-selection-circle" />
          </svg>
        );
      case 'coding':
        return (
          <svg ref={(el) => { illustrationRefs.current[index] = el; }} viewBox="0 0 400 300" className="w-full h-full">
            {/* Laptop */}
            <rect x="100" y="140" width="200" height="120" rx="5" fill="#4a4a4a" stroke="#1a1a1a" strokeWidth="3" />
            <rect x="110" y="150" width="180" height="100" fill="#1a1a1a" />
            {/* Screen content - code lines */}
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
            {/* Cursor blinking */}
            <motion.rect
              x="120"
              y="160"
              width="2"
              height="12"
              fill="#ffd93d"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
        );
      case 'rocket':
        return (
          <svg ref={(el) => { illustrationRefs.current[index] = el; }} viewBox="0 0 400 300" className="w-full h-full">
            {/* Rocket */}
            <motion.g
              id="rocket"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Body */}
              <ellipse cx="200" cy="180" rx="25" ry="60" fill="#87d0c3" stroke="#1a1a1a" strokeWidth="3" />
              {/* Nose */}
              <path d="M 175 120 L 200 100 L 225 120 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="3" />
              {/* Window */}
              <circle cx="200" cy="160" r="12" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
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
            {/* Stars */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + i * 50}
                cy={50 + (i % 2) * 30}
                r="3"
                fill="#ffd93d"
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate path points based on actual image positions
      const updatePath = () => {
        if (!pathRef.current || stepRefs.current.length === 0 || !sectionRef.current) return;

        const svgContainer = pathRef.current.closest('svg')?.parentElement;
        if (!svgContainer) return;

        const points: { x: number; y: number }[] = [];
        const containerRect = svgContainer.getBoundingClientRect();
        
        stepRefs.current.forEach((stepEl, index) => {
          if (!stepEl) return;

          // Get the illustration container within the step
          const illustrationContainer = stepEl.querySelector('[class*="h-64"]') as HTMLElement;
          if (!illustrationContainer) return;

          const illustrationRect = illustrationContainer.getBoundingClientRect();
          
          // Calculate center of illustration relative to SVG container
          const centerX = illustrationRect.left - containerRect.left + (illustrationRect.width / 2);
          const centerY = illustrationRect.top - containerRect.top + (illustrationRect.height / 2);
          
          points.push({ x: centerX, y: centerY });
        });

        // Build path connecting all points - stops exactly at each image center
        if (points.length > 0 && pathRef.current) {
          let pathData = `M ${points[0].x} ${points[0].y}`;
          
          for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            
            // Calculate distance and direction
            const dx = curr.x - prev.x;
            const dy = curr.y - prev.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Much shorter control points - curve stops right at the image
            // Use a smaller factor to make curves tighter and stop at image
            const controlFactor = Math.min(0.15, 80 / distance);
            
            // Control point 1: very close to previous point
            const cp1x = prev.x + dx * controlFactor;
            const cp1y = prev.y + dy * 0.03;
            
            // Control point 2: very close to current point (almost at the image)
            const cp2x = curr.x - dx * controlFactor;
            const cp2y = curr.y - dy * 0.03;
            
            // Cubic bezier that ends exactly at the center of the image
            // This creates a tighter curve that stops at the image
            pathData += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
          }
          
          pathRef.current.setAttribute('d', pathData);
          
          // Update animation
          const pathLength = pathRef.current.getTotalLength();
          pathRef.current.style.strokeDasharray = '15 20';
          pathRef.current.style.strokeDashoffset = `${pathLength}`;
        }
      };

      // Update path on load and resize with multiple attempts to ensure DOM is ready
      const updatePathWithRetry = (attempts = 0) => {
        if (attempts < 5) {
          updatePath();
          if (stepRefs.current.filter(Boolean).length < processSteps.length) {
            setTimeout(() => updatePathWithRetry(attempts + 1), 200);
          }
        }
      };

      const timeoutId = setTimeout(() => updatePathWithRetry(), 300);
      window.addEventListener('resize', updatePath);
      
      // Animate curved path drawing on scroll
      if (pathRef.current) {
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
            onUpdate: () => {
              // Recalculate path during scroll to ensure accuracy
              updatePath();
            },
          },
        });
      }

      // Recalculate path when steps appear and update active step
      processSteps.forEach((step) => {
        const stepElement = document.getElementById(`step-${step.id}`);
        if (stepElement) {
          ScrollTrigger.create({
            trigger: stepElement,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => {
              setActiveStep(step.id);
              setTimeout(updatePath, 200);
            },
            onEnterBack: () => {
              setActiveStep(step.id);
              setTimeout(updatePath, 200);
            },
          });
        }
      });

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', updatePath);
      };

      // Animate illustrations appearing with professional GSAP animations
      illustrationRefs.current.forEach((illustration, index) => {
        if (illustration) {
          // Base animation for illustration container
          gsap.fromTo(illustration,
            {
              opacity: 0,
              scale: 0.8,
              rotation: -5,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: illustration,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Professional animations for meeting illustration
          if (processSteps[index]?.illustration === 'meeting') {
            const person1 = meetingRefs.current.person1;
            const person2 = meetingRefs.current.person2;
            const bubble1 = meetingRefs.current.bubble1;
            const bubble2 = meetingRefs.current.bubble2;
            const connection = meetingRefs.current.connection;

            if (person1 && person2 && bubble1 && bubble2 && connection) {
              const meetingTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
              
              // Person 1 subtle nod
              meetingTimeline.to(person1, {
                y: -3,
                duration: 0.6,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 1,
              }, 0);
              
              // Person 2 nod (slightly delayed)
              meetingTimeline.to(person2, {
                y: -3,
                duration: 0.6,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 1,
              }, 0.2);
              
              // Bubbles appear and pulse
              meetingTimeline.fromTo(bubble1, {
                scale: 0,
                opacity: 0,
              }, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: 'back.out(2)',
              }, 0.5);
              
              meetingTimeline.to(bubble1, {
                scale: 1.1,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
              }, 0.9);
              
              meetingTimeline.fromTo(bubble2, {
                scale: 0,
                opacity: 0,
              }, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: 'back.out(2)',
              }, 1.2);
              
              meetingTimeline.to(bubble2, {
                scale: 1.1,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
              }, 1.6);
              
              // Connection line draws
              meetingTimeline.fromTo(connection, {
                pathLength: 0,
                opacity: 0,
              }, {
                pathLength: 1,
                opacity: 0.8,
                duration: 0.8,
                ease: 'power2.out',
              }, 2);
              
              meetingTimeline.to(connection, {
                opacity: 0.4,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
              }, 2.8);
            }
          }

          // Professional animations for tech/gears illustration
          if (processSteps[index]?.illustration === 'gears') {
            const react = techRefs.current.react;
            const node = techRefs.current.node;
            const db = techRefs.current.db;
            const layers = techRefs.current.layers;
            const connections = techRefs.current.connections || [];
            const selectionCircle = document.getElementById('tech-selection-circle');

            if (react && node && db && layers) {
              const techTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
              
              // React icon rotation
              techTimeline.to(react, {
                rotation: 360,
                duration: 8,
                ease: 'none',
                repeat: -1,
              }, 0);
              
              // Node icon pulse
              techTimeline.to(node, {
                scale: 1.15,
                duration: 0.6,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 1,
              }, 0);
              
              techTimeline.to(node, {
                scale: 1.15,
                duration: 0.6,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 1,
              }, 2);
              
              // Database icon bounce
              techTimeline.to(db, {
                y: -8,
                duration: 0.5,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1,
              }, 1);
              
              techTimeline.to(db, {
                y: -8,
                duration: 0.5,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1,
              }, 3);
              
              // Connection lines draw
              connections.forEach((conn, i) => {
                techTimeline.fromTo(conn, {
                  pathLength: 0,
                  opacity: 0,
                }, {
                  pathLength: 1,
                  opacity: 1,
                  duration: 0.6,
                  ease: 'power2.out',
                }, i * 0.3);
                
                techTimeline.to(conn, {
                  opacity: 0.3,
                  duration: 0.4,
                  yoyo: true,
                  repeat: 1,
                  ease: 'power2.inOut',
                }, i * 0.3 + 0.8);
              });
              
              // Stack layers build up
              const layerRects = layers.querySelectorAll('rect');
              layerRects.forEach((layer, i) => {
                techTimeline.fromTo(layer, {
                  scaleY: 0,
                  transformOrigin: 'center',
                }, {
                  scaleY: 1,
                  duration: 0.4,
                  ease: 'back.out(1.7)',
                }, 1.5 + i * 0.2);
              });
              
              // Selection circle pulse
              if (selectionCircle) {
                techTimeline.to(selectionCircle, {
                  scale: 1.2,
                  opacity: 0.6,
                  duration: 1.5,
                  ease: 'power2.inOut',
                  yoyo: true,
                  repeat: 1,
                }, 0);
              }
            }
          }
        }
      });

      // Animate steps appearing
      processSteps.forEach((step, index) => {
        const stepElement = document.getElementById(`step-${step.id}`);
        if (stepElement) {
          gsap.fromTo(stepElement,
            {
              opacity: 0,
              y: 80,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: stepElement,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="servicios" className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle particle background - reduced for performance */}
      <SectionParticles count={200} color="#87d0c3" intensity={0.1} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-2 font-light">Nuestro Proceso</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
              De la idea al lanzamiento
            </h2>
            <p className="text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed font-sans italic">
              Un camino claro desde la idea hasta el lanzamiento. Cada paso está diseñado para garantizar el éxito de tu proyecto.
            </p>
          </motion.div>

          {/* Process Steps with Curved Path */}
          <div className="relative">
            {/* Curved Dotted Path - Black dashed line connecting images */}
            <div className="absolute left-0 top-0 bottom-0 w-full h-full pointer-events-none z-0 hidden lg:block" id="path-container">
              <svg className="w-full h-full" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path
                  ref={pathRef}
                  d="M 0 0"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="3"
                  strokeDasharray="15 20"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </svg>
            </div>

            {/* Process Steps */}
            <div className="relative z-10 space-y-24 sm:space-y-32">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  id={`step-${step.id}`}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >

                  {/* Illustration - Left or Right based on index */}
                  <motion.div
                    className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -left-4 z-20 w-16 h-16 bg-[#87d0c3] border-4 border-black rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-[#1a1a1a] font-sans">{index + 1}</span>
                      </div>
                      
                      {/* Illustration Container with Hero-style Animated Background */}
                      <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-black overflow-hidden bg-[#fcf8f3]">
                        <ProcessHeroBackground 
                          scene={step.id as 'ideas' | 'reunion' | 'definicion' | 'tecnologias' | 'desarrollo' | 'lanzamiento'}
                          isActive={activeStep === step.id}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content - Right or Left based on index */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed font-sans italic max-w-2xl">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA at the end */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#87d0c3] rounded-lg p-10 sm:p-14 border-2 border-black inline-block">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-[#1a1a1a] tracking-tight">
                ¿Listo para comenzar tu viaje?
              </h3>
              <p className="text-lg sm:text-xl text-[#1a1a1a] mb-8 max-w-2xl mx-auto opacity-90 font-sans">
                Hablemos de tu proyecto y te mostramos cómo podemos llevarlo desde la idea hasta el lanzamiento.
              </p>
              <a
                href="https://wa.me/5492915109116?text=¡Hola DevBros! Quiero conocer más sobre su proceso de desarrollo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-black text-[#1a1a1a] font-bold rounded-lg hover:bg-[#f5f5f5] transition-colors text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Comenzar mi proyecto
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
