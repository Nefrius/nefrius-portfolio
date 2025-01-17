'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 