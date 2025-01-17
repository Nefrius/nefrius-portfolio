'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      map: (() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        
        const context = canvas.getContext('2d')!;
        const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.4)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 32, 32);
        
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
      })()
    });

    const starPositions: number[] = [];
    const starColors: number[] = [];
    const colorPalette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xaaaaaa),
      new THREE.Color(0x888888)
    ];

    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      starPositions.push(x, y, z);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors.push(color.r, color.g, color.b);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Camera position
    camera.position.z = 3;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth camera movement
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.rotation.y += (targetX - camera.rotation.y) * 0.05;
      camera.rotation.x += (targetY - camera.rotation.x) * 0.05;

      // Rotate stars slowly
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.0001;

      // Animate star colors
      const colors = starGeometry.attributes.color.array as Float32Array;
      const originalColors = starColors.slice(); // Orijinal renkleri saklayalım
      
      for (let i = 0; i < colors.length; i += 3) {
        const brightness = 0.7 + 0.3 * Math.sin(Date.now() * 0.001 + i);
        colors[i] = originalColors[i] * brightness;
        colors[i + 1] = originalColors[i + 1] * brightness;
        colors[i + 2] = originalColors[i + 2] * brightness;
      }
      starGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)'
      }}
    />
  );
} 