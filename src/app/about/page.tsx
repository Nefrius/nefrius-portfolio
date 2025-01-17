'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">Hakkımda</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Merhaba! 👋</h2>
            <p className="text-gray-300 leading-relaxed">
              Ben bir Full Stack Geliştirici ve UI/UX Tasarımcısıyım. Modern web teknolojileri
              ve kullanıcı deneyimi konularında tutkulu bir yazılımcıyım.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Yeteneklerim</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'React', 'Next.js', 'TypeScript',
                'Node.js', 'Python', 'Three.js',
                'Tailwind CSS', 'UI/UX Design', 'Git'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Deneyim</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-white/20 pl-4">
                <h3 className="font-medium">Full Stack Geliştirici</h3>
                <p className="text-sm text-gray-400">2020 - Günümüz</p>
                <p className="mt-2 text-gray-300">
                  Modern web uygulamaları geliştirme, API tasarımı ve kullanıcı deneyimi optimizasyonu.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
} 