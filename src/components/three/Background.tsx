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
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const starsVertices = [];
    const colors = [];
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);

      // Rastgele parlaklık
      const intensity = Math.random();
      colors.push(intensity, intensity, intensity);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Camera position
    camera.position.z = 5;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      stars.rotation.y += 0.0005;
      stars.rotation.x += (targetY - stars.rotation.x) * 0.01;
      stars.rotation.y += (targetX - stars.rotation.y) * 0.01;

      // Yıldızların parlaklığını değiştir
      const time = Date.now() * 0.001;
      const colors = starsGeometry.attributes.color.array as Float32Array;
      for (let i = 0; i < colors.length; i += 3) {
        const intensity = 0.5 + 0.5 * Math.sin(time + i);
        colors[i] = colors[i + 1] = colors[i + 2] = intensity;
      }
      starsGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (!container) return;
      
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      scene.remove(stars);
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ background: 'radial-gradient(circle at center, #000000 0%, #000000 100%)' }}
    />
  );
} 