'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        type: 'tween',
        duration: 0.3,
      }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
} 