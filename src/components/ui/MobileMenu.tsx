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

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: -20,
  },
  open: {
    opacity: 1,
    y: 0,
  }
};

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
        className="p-2 text-light hover:text-light-muted transition-colors"
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
              className="fixed inset-0 bg-dark"
              onClick={toggleMenu}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-16 left-0 right-0 bg-dark-lighter backdrop-blur-lg border-b border-white/10 shadow-lg"
            >
              <nav className="max-w-7xl mx-auto px-4 py-6">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        variants={itemVariants}
                        className="overflow-hidden"
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className={`block py-3 px-4 rounded-lg text-lg transition-colors ${
                            isActive
                              ? 'bg-dark-accent text-light font-medium'
                              : 'text-light-muted hover:bg-dark-accent/50 hover:text-light'
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