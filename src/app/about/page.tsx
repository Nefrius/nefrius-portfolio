'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaMobileAlt, FaDatabase, FaRobot } from 'react-icons/fa';

const Background = dynamic(() => import('@/components/three/Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-dark" />
});

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Bilges Teknoloji",
    period: "2021 - Şimdi",
    description: "Modern web uygulamaları geliştirme, mikroservis mimarisi, cloud native çözümler ve DevOps pratikleri.",
    technologies: ["Next.js", "Node.js", "Docker", "AWS", "PostgreSQL"]
  },
  {
    title: "Full Stack Developer",
    company: "Freelancer",
    period: "2019 - 2021",
    description: "E-ticaret platformları, B2B uygulamalar ve özel yazılım çözümleri geliştirme.",
    technologies: ["React", "Express.js", "MongoDB", "Firebase"]
  },
  {
    title: "Frontend Developer",
    company: "Startup Projects",
    period: "2018 - 2019",
    description: "Responsive ve kullanıcı dostu arayüzler, single page applications geliştirme.",
    technologies: ["React", "TypeScript", "SASS"]
  }
];

const education = [
  {
    degree: "Bilgisayar Mühendisliği",
    school: "İstanbul Teknik Üniversitesi",
    period: "2014 - 2018",
    description: "Algoritma, veri yapıları, yazılım mühendisliği ve yapay zeka üzerine kapsamlı eğitim."
  }
];

const specializations = [
  {
    title: "Frontend Geliştirme",
    icon: FaCode,
    items: [
      "Modern JavaScript (ES6+) ve TypeScript",
      "React, Next.js ve Vue.js ile SPA/SSR uygulamaları",
      "Responsive tasarım ve modern CSS (TailwindCSS, SASS)",
      "State yönetimi (Redux, Zustand, Context API)",
      "Test yazımı (Jest, React Testing Library)"
    ]
  },
  {
    title: "Backend Geliştirme",
    icon: FaServer,
    items: [
      "Node.js ve Express.js ile RESTful API geliştirme",
      "GraphQL API tasarımı ve implementasyonu",
      "Mikroservis mimarisi ve Docker konteynerizasyonu",
      "AWS servisleri (EC2, S3, Lambda, RDS)",
      "API güvenliği ve performans optimizasyonu"
    ]
  },
  {
    title: "Mobil Geliştirme",
    icon: FaMobileAlt,
    items: [
      "React Native ile cross-platform uygulama geliştirme",
      "Native modül entegrasyonu",
      "Push notification ve real-time veri senkronizasyonu",
      "Offline-first yaklaşımı ve local storage yönetimi",
      "App Store ve Play Store yayınlama süreçleri"
    ]
  },
  {
    title: "Veritabanı & DevOps",
    icon: FaDatabase,
    items: [
      "PostgreSQL ve MongoDB veritabanı tasarımı",
      "Firebase ve Supabase ile backend-as-a-service",
      "CI/CD pipeline kurulumu (GitHub Actions)",
      "Kubernetes ile konteyner orkestrasyon",
      "Monitoring ve logging (ELK Stack)"
    ]
  },
  {
    title: "Yapay Zeka & ML",
    icon: FaRobot,
    items: [
      "TensorFlow ve PyTorch ile derin öğrenme",
      "Doğal dil işleme ve bilgisayarlı görü",
      "Makine öğrenimi modellerinin web servislerine entegrasyonu",
      "Veri analizi ve görselleştirme",
      "Model optimizasyonu ve deployment"
    ]
  }
];

export default function AboutPage() {
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
              Hakkımda
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Yazılım geliştirme tutkum ve deneyimlerim
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
          {/* About Section */}
          <section className="min-h-screen pt-[100vh]">
            <div className="grid grid-cols-1 gap-8">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6">Merhaba!</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Ben Enes Baş, modern web ve mobil uygulamalar geliştiren tutkulu bir yazılım geliştiricisiyim. 
                    Frontend ve backend geliştirme, yapay zeka entegrasyonu gibi alanlarda çeşitli yenilikçi projelerde çalıştım.
                  </p>
                  <p>
                    Frontend tarafında React, React Native, Next.js ve Vue.js konularında uzmanım. 
                    Sezgisel ve duyarlı kullanıcı arayüzleri oluşturmak için TailwindCSS, SASS ve CSS Modules gibi araçları kullanıyorum.
                  </p>
                  <p>
                    Backend tarafında Node.js, Express.js ve Supabase ile güvenli ve ölçeklenebilir çözümler sunuyorum. 
                    RESTful API&apos;ler tasarlama, GraphQL servisleri oluşturma ve PostgreSQL, MongoDB, Firebase gibi veritabanlarını yönetme deneyimim var.
                  </p>
                  <p>
                    Yapay zeka ve makine öğrenimi konularına özel ilgi duyuyorum. 
                    TensorFlow, Keras ve scikit-learn gibi frameworkler ile tahmine dayalı modelleme, doğal dil işleme ve bilgisayarlı görü projeleri geliştiriyorum.
                  </p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaBriefcase className="w-6 h-6 text-gray-400" />
                  <h2 className="text-2xl font-bold">Deneyim</h2>
                </div>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10">
                      <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-2" />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-gray-400 mb-2">{exp.company} • {exp.period}</p>
                      <p className="text-gray-500 mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="w-6 h-6 text-gray-400" />
                  <h2 className="text-2xl font-bold">Eğitim</h2>
                </div>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10">
                      <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-2" />
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-gray-400 mb-2">{edu.school} • {edu.period}</p>
                      <p className="text-gray-500">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Specializations */}
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <spec.icon className="w-6 h-6 text-gray-400" />
                    <h2 className="text-2xl font-bold">{spec.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {spec.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 