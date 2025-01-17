'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımda', href: '/about' },
  { name: 'Projeler', href: '/projects' },
  { name: 'İletişim', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative py-2 text-sm ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavItem"
                          className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-white"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 