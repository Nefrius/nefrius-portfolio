'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export default function Skeleton({ 
  className = '', 
  variant = 'rectangular' 
}: SkeletonProps) {
  const baseClasses = 'relative overflow-hidden bg-white/5';
  const variantClasses = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4 w-3/4',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          translateX: ['0%', '200%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
} 