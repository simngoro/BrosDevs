export default function PortfolioShowcase() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Tienda online completa con panel de administración y pasarela de pago",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      category: "Web App"
    },
    {
      title: "Task Management SaaS",
      description: "Plataforma de gestión de proyectos para equipos remotos",
      tags: ["React", "Node.js", "MongoDB"],
      category: "SaaS"
    },
    {
      title: "Real Estate Portal",
      description: "Portal inmobiliario con búsqueda avanzada y virtual tours",
      tags: ["Vue.js", "Python", "AWS"],
      category: "Marketplace"
    },
    {
      title: "Healthcare Dashboard",
      description: "Dashboard médico para gestión de pacientes y citas",
      tags: ["React", "Express", "MySQL"],
      category: "Healthcare"
    },
    {
      title: "Social Media App",
      description: "App móvil de redes sociales con chat y contenido multimedia",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile"
    },
    {
      title: "Analytics Platform",
      description: "Plataforma de análisis de datos con visualizaciones en tiempo real",
      tags: ["TypeScript", "D3.js", "Python"],
      category: "Analytics"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Proyectos que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                funcionan de verdad
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Cada proyecto es una historia de problemas resueltos y objetivos alcanzados. 
              Sin promesas vacías, solo código que funciona.
            </p>
          </div>
          
          {/* Filter tabs */}
          <div className="flex justify-center mb-8 sm:mb-12 px-4">
            <div className="inline-flex bg-gray-100 rounded-lg p-1 overflow-x-auto max-w-full">
              <button className="px-4 sm:px-6 py-2 bg-white text-gray-900 rounded-md font-medium text-sm sm:text-base whitespace-nowrap">
                Todos
              </button>
              <button className="px-4 sm:px-6 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base whitespace-nowrap">
                Web Apps
              </button>
              <button className="px-4 sm:px-6 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base whitespace-nowrap">
                Mobile
              </button>
              <button className="px-4 sm:px-6 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base whitespace-nowrap">
                SaaS
              </button>
            </div>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                  {/* Project image placeholder */}
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-2 sm:px-3 py-1 bg-black/80 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Project info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* View project link */}
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group/link">
                      Ver proyecto
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center bg-black rounded-xl sm:rounded-2xl p-8 sm:p-12 text-white mx-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Listos para el siguiente proyecto?
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Hablemos de tu idea. Te damos una respuesta honesta sobre qué podemos hacer, 
              en cuánto tiempo y cuánto va a costar. Sin sorpresas.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Empezar Conversación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}