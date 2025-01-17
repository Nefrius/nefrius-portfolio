'use client';

import { motion } from 'framer-motion';

interface HoverCardProps {
  children: React.ReactNode;
}

export default function HoverCard({ children }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="rounded-lg overflow-hidden"
    >
      {children}
    </motion.div>
  );
} 