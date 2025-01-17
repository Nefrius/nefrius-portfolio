'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaServer, FaCode, FaMobile, FaDatabase, FaRocket, FaUsers, FaClock, FaSmile, FaCloud, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si';

const Background = dynamic(() => import('@/components/three/Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-dark" />
});

const services = [
  {
    title: 'Full Stack Geliştirme',
    description: 'Modern web teknolojileri ile uçtan uca çözümler geliştiriyorum. Frontend\'den backend\'e, veritabanından sunucu yönetimine kadar komple çözümler.',
    icon: FaCode,
    technologies: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ]
  },
  {
    title: 'Web Uygulamaları',
    description: 'Yüksek performanslı, ölçeklenebilir ve güvenli web uygulamaları. Mikroservis mimarisi, konteynerizasyon ve bulut altyapısı ile modern çözümler.',
    icon: FaServer,
    technologies: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Cloud', icon: FaCloud }
    ]
  },
  {
    title: 'Responsive Tasarım',
    description: 'Mobil öncelikli yaklaşım ile her ekran boyutunda mükemmel görünen, kullanıcı dostu ve modern arayüzler. PWA desteği ile mobil uygulama deneyimi.',
    icon: FaMobile,
    features: ['Mobile First', 'PWA', 'Cross Platform']
  },
  {
    title: 'Veritabanı & API',
    description: 'Optimize edilmiş veritabanı tasarımı ve güvenli API endpoints. GraphQL ve REST API çözümleri ile esnek ve hızlı veri erişimi.',
    icon: FaDatabase,
    features: ['GraphQL', 'REST API', 'Optimizasyon']
  }
];

const stats = [
  {
    number: '50+',
    label: 'Proje',
    description: 'Başarıyla tamamlanmış kurumsal ve bireysel projeler',
    icon: FaRocket,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '5+',
    label: 'Yıl Deneyim',
    description: 'Full stack web geliştirme ve yazılım mimarisi',
    icon: FaUsers,
    color: 'from-green-500 to-emerald-500'
  },
  {
    number: '100%',
    label: 'Müşteri Memnuniyeti',
    description: 'Mutlu müşteriler ve başarılı iş birlikleri',
    icon: FaSmile,
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '24/7',
    label: 'Destek',
    description: 'Kesintisiz teknik destek ve bakım hizmeti',
    icon: FaClock,
    color: 'from-orange-500 to-red-500'
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Nefrius',
    icon: FaGithub,
    description: 'Açık kaynak projelerim'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/enes-ba%C5%9F-8430b81b1',
    icon: FaLinkedin,
    description: 'Profesyonel profilim'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@bilgesteknoloji',
    icon: FaYoutube,
    description: 'Eğitim içeriklerim'
  }
];

export default function Home() {
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
                Enes Baş
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 mb-4">
                Full Stack Developer & AI Enthusiast
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                Modern web teknolojileri ve yapay zeka ile yenilikçi çözümler geliştiriyorum
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="inline-flex p-2 rounded-lg bg-white/5 mb-2"
                  >
                    <stat.icon className="w-5 h-5 text-gray-400" />
                  </motion.div>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex justify-center space-x-4 mb-12"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
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
          {/* Services Section */}
          <section className="min-h-screen pt-[100vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Neler Yapıyorum?</h2>
              <p className="text-xl text-gray-400">Modern teknolojiler ile yaratıcı çözümler</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-white/5 transition-colors border border-white/10"
                >
                  <service.icon className="w-12 h-12 text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  {service.technologies && (
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-1 text-gray-400">
                          <tech.icon className="w-5 h-5" />
                          <span className="text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {service.features && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">İstatistikler</h2>
              <p className="text-xl text-gray-400">Sayılarla başarı hikayem</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                    <div className="inline-flex p-3 rounded-lg bg-white/10 mb-4">
                      <stat.icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg font-medium mb-2">{stat.label}</div>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
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
