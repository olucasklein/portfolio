export default function About() {
  return (
    <section id="sobre" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto glass rounded-3xl p-8 relative overflow-hidden">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-4xl font-bold gradient-text">4+</div>
                    <div className="text-gray-400 text-sm mt-1">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-4xl font-bold gradient-text">20+</div>
                    <div className="text-gray-400 text-sm mt-1">Projetos Entregues</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-4xl font-bold gradient-text">10+</div>
                    <div className="text-gray-400 text-sm mt-1">Tecnologias</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-4xl font-bold gradient-text">∞</div>
                    <div className="text-gray-400 text-sm mt-1">Aprendizado Contínuo</div>
                  </div>
                </div>

                {/* Education Info */}
                <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-xl border border-indigo-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Formação</div>
                      <div className="text-gray-400 text-sm">Sistemas de Informação</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Graduado em Sistemas de Informação, atualmente estudando UX/UI para ampliar conhecimentos em design de experiência do usuário.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-500/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-indigo-400 font-medium text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">
              Transformando ideias em{' '}
              <span className="gradient-text">experiências digitais</span>
            </h2>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Sou um <span className="text-white font-medium">Desenvolvedor Front-End</span> apaixonado por criar interfaces bonitas e funcionais. Com mais de 4 anos de experiência, tenho trabalhado com diversas tecnologias e frameworks modernos.
              </p>
              <p>
                Atualmente trabalho na <span className="text-cyan-400 font-medium">Tuna Pagamentos</span> em Rio de Janeiro, onde desenvolvo soluções escaláveis e interfaces intuitivas para milhares de usuários.
              </p>
              <p>
                Minha jornada no desenvolvimento web começou pela curiosidade de entender como as coisas funcionam por trás das telas. Desde então, descobri na programação uma carreira cheia de desafios e oportunidades de crescimento contínuo.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🎯', text: 'Foco em Clean Code' },
                { icon: '🚀', text: 'Performance First' },
                { icon: '📱', text: 'Mobile Responsive' },
                { icon: '✨', text: 'Pixel Perfect' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 glass rounded-xl"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/cv-lucas-klein.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium rounded-xl hover:opacity-90 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
