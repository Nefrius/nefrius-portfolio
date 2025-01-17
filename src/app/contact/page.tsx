'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Background = dynamic(() => import('@/components/three/Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-dark" />
});

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Nefrius',
    icon: FaGithub,
    description: 'Açık kaynak projelerim ve katkılarım'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/enes-ba%C5%9F-8430b81b1',
    icon: FaLinkedin,
    description: 'Profesyonel profilim ve iş deneyimlerim'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@bilgesteknoloji',
    icon: FaYoutube,
    description: 'Eğitim videoları ve teknoloji içerikleri'
  }
];

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'E-posta',
    value: 'enesbas616161@gmail.com',
    href: 'mailto:enesbas616161@gmail.com'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Konum',
    value: 'İstanbul, Türkiye'
  },
  {
    icon: FaPhone,
    label: 'Telefon',
    value: '+90 (***) ***-****',
    href: 'tel:+905555555555'
  }
];

export default function ContactPage() {
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Benimle iletişime geçin ve projelerinizi hayata geçirelim
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="animate-bounce text-gray-500"
            >
              ↓ Aşağı kaydır
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
          {/* Contact Section */}
          <section className="min-h-screen pt-[100vh]">
            <div className="grid grid-cols-1 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-lg text-white hover:text-gray-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6">Sosyal Medya</h2>
                <div className="grid gap-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <link.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{link.name}</h3>
                        <p className="text-sm text-gray-400">{link.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6">İletişim Formu</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        İsim
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-colors"
                        placeholder="İsminizi girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-colors"
                        placeholder="E-posta adresinizi girin"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-colors"
                      placeholder="Mesajınızın konusunu girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-colors resize-none"
                      placeholder="Mesajınızı girin"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Gönder
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 