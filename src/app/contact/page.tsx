'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/nefrius',
    icon: BsGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nefrius',
    icon: BsLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: BsEnvelope,
  },
];

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');

    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
      form.reset();
    } catch {
      setError('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">İletişim</h1>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Mesaj Gönder</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}

              {sent && (
                <p className="text-green-500 text-sm mt-2">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 