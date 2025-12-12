export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Dos hermanos,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                una misión
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              No somos una agencia tradicional. Somos dos hermanos que escribimos código, 
              resolvemos problemas y construimos cosas que funcionan de verdad.
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            <div>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Código con propósito</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Cada línea que escribimos tiene un objetivo: resolver tu problema. 
                    Sin burocracia, sin reuniones infinitas. Solo código limpio y resultados.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">La ventaja de ser hermanos</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Nos entendemos sin palabras. Compartimos la misma visión y estándares de calidad. 
                    Eso se traduce en proyectos más rápidos y consistentes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Tecnología que escala</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Trabajamos con las herramientas modernas que garantizan que tu proyecto 
                    no solo funcione hoy, sino que crezca con tu negocio.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative">
              <div className="bg-black rounded-2xl p-6 sm:p-8 text-white">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold">B</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">BrosDevs</div>
                      <div className="text-xs sm:text-sm text-gray-400">Est. 2024</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                      <span className="text-gray-400 text-xs sm:text-sm">Proyectos completados</span>
                      <span className="text-xl sm:text-2xl font-bold">50+</span>
                    </div>
                    <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                      <span className="text-gray-400 text-xs sm:text-sm">Años de experiencia</span>
                      <span className="text-xl sm:text-2xl font-bold">8+</span>
                    </div>
                    <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800">
                      <span className="text-gray-400 text-xs sm:text-sm">Tecnologías</span>
                      <span className="text-xl sm:text-2xl font-bold">15+</span>
                    </div>
                    <div className="flex justify-between items-center py-2 sm:py-3">
                      <span className="text-gray-400 text-xs sm:text-sm">Clientes felices</span>
                      <span className="text-xl sm:text-2xl font-bold">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Rapidez</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Entregamos en semanas, no meses</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Calidad</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Código que funciona y escala</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Pasión</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Amamos lo que hacemos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}