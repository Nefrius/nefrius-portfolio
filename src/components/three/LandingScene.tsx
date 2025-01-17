'use client';

import { useEffect, useRef } from 'react';

export default function LandingScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Canvas boyutlarını ayarla
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Yıldızları oluştur
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      speed: Math.random() * 0.2 + 0.1,
      brightness: Math.random(),
      color: `hsl(0, 0%, ${Math.random() * 40 + 60}%)` // Gri-beyaz tonları
    }));

    // Animasyon fonksiyonu
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Yıldız parlaklığını güncelle
        star.brightness = Math.sin(Date.now() * star.speed * 0.001) * 0.2 + 0.8;
        
        // Yıldızı çiz
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 1.5
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = star.brightness;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Yıldızı hareket ettir
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
          star.size = Math.random() * 2;
          star.speed = Math.random() * 0.2 + 0.1;
          star.color = `hsl(0, 0%, ${Math.random() * 40 + 60}%)`; // Yeni renk
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#000000' }}
    />
  );
} 