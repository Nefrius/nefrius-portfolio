'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import HoverCard from '@/components/ui/HoverCard';
import { FiCode, FiMonitor, FiSmartphone } from 'react-icons/fi';

const Background = dynamic(() => import('@/components/three/Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-dark" />,
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    title: 'Full Stack Geliştirme',
    description: 'Modern web teknolojileri ile uçtan uca çözümler',
    icon: FiCode,
  },
  {
    title: 'Web Uygulamaları',
    description: 'Performanslı ve ölçeklenebilir web uygulamaları',
    icon: FiMonitor,
  },
  {
    title: 'Responsive Tasarım',
    description: 'Tüm cihazlarda mükemmel görünen tasarımlar',
    icon: FiSmartphone,
  },
];

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={<div className="fixed inset-0 bg-dark" />}>
          <Background />
        </Suspense>
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-3xl text-center space-y-8">
          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Merhaba, Ben <span className="text-light">İsminiz</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl sm:text-2xl text-light-muted"
          >
            Full Stack Geliştirici & UI/UX Tasarımcı
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="/projects"
              className="px-6 py-3 bg-light text-dark rounded-lg hover:bg-light/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projelerimi Gör
            </motion.a>
            <motion.a
              href="/contact"
              className="px-6 py-3 bg-dark-lighter text-light rounded-lg hover:bg-dark-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              İletişime Geç
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Neler Yapıyorum?
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={index * 0.2}>
                <HoverCard>
                  <div className="bg-dark-lighter backdrop-blur-sm p-6 h-full">
                    <feature.icon className="w-8 h-8 mb-4 text-light" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-light-muted">{feature.description}</p>
                  </div>
                </HoverCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-dark-accent">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              İstatistikler
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Proje' },
              { number: '5+', label: 'Yıl Deneyim' },
              { number: '100%', label: 'Müşteri Memnuniyeti' },
              { number: '24/7', label: 'Destek' },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={index * 0.1}>
                <HoverCard glowColor="rgba(255, 255, 255, 0.1)">
                  <div className="text-center p-6 bg-dark-lighter backdrop-blur-sm">
                    <div className="text-3xl sm:text-4xl font-bold text-light mb-2">
                      {stat.number}
                    </div>
                    <div className="text-light-muted">{stat.label}</div>
                  </div>
                </HoverCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
