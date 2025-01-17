'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımda', href: '/about' },
  { name: 'Projeler', href: '/projects' },
  { name: 'İletişim', href: '/contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-gray-300 transition-colors"
        aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
      >
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-64 bg-gray-900 shadow-lg p-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Menüyü Kapat"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
              <nav className="mt-8">
                <ul className="space-y-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className={`block py-2 text-lg ${
                            isActive
                              ? 'text-white font-medium'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 