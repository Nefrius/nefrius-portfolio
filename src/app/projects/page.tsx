'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaRocket } from 'react-icons/fa';

const Background = dynamic(() => import('@/components/three/Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-dark" />
});

const projects = [
  {
    title: 'Artuno',
    description: 'Geliştirme aşamasında olan yapay zeka destekli modern web uygulaması.',
    technologies: ['TypeScript', 'Next.js', 'TailwindCSS', 'AI'],
    githubUrl: 'https://github.com/Nefrius/artuno',
    stars: 1,
    forks: 0
  },
  {
    title: 'Artuno Chat',
    description: 'Artuno projesinin chat modülü. Gerçek zamanlı mesajlaşma özellikleri.',
    technologies: ['TypeScript', 'WebSocket', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Nefrius/artuno-chat',
    stars: 1,
    forks: 0
  },
  {
    title: 'Portfolio',
    description: 'Kişisel portfolio websitesi. Modern tasarım ve interaktif kullanıcı deneyimi.',
    technologies: ['Next.js', 'Three.js', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Nefrius/portfolio',
    stars: 1,
    forks: 0
  },
  {
    title: 'Nefrius QR',
    description: 'QR kod oluşturma ve okuma uygulaması.',
    technologies: ['TypeScript', 'React', 'QR Code API'],
    githubUrl: 'https://github.com/Nefrius/nefriusqr',
    stars: 1,
    forks: 0
  }
];

export default function ProjectsPage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={<div className="fixed inset-0 bg-dark" />}>
          <Background />
        </Suspense>
      </div>

      {/* Landing Screen */}
      {isClient && (
        <motion.div
          style={{ opacity }}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-4 relative z-10"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                Projeler
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 mb-4">
                Geliştirdiğim projeler ve katkıda bulunduğum çalışmalar
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                Modern teknolojiler kullanarak geliştirdiğim web uygulamaları ve açık kaynak projeler
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {[
                { icon: FaGithub, label: 'Açık Kaynak', desc: 'Projeler' },
                { icon: FaCode, label: 'Modern', desc: 'Teknolojiler' },
                { icon: FaRocket, label: 'Yüksek', desc: 'Performans' },
                { icon: FaStar, label: 'En İyi', desc: 'Pratikler' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="inline-flex p-2 rounded-lg bg-white/5 mb-2"
                  >
                    <item.icon className="w-5 h-5 text-gray-400" />
                  </motion.div>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-lg font-bold">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="animate-bounce text-gray-500"
            >
              ↓ Aşağı kaydır
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
          {/* Projects Section */}
          <section className="min-h-screen pt-[100vh]">
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">{project.title}</h3>
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Kaynak Kod</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <FaStar className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCodeBranch className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 