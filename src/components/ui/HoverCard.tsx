'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function HoverCard({ 
  children, 
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.5)' // varsayılan olarak mavi renk
}: HoverCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 50%)`,
        }}
        whileHover={{ opacity: 0.15 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      />
      {children}
    </motion.div>
  );
} 