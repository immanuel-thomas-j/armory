import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles Geometry
    const count = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Palette Colors (Strict Compliance)
    const colorMint = new THREE.Color('#D9E8E2');
    const colorGold = new THREE.Color('#FFC801');
    const colorTeal = new THREE.Color('#114C5A');

    for (let i = 0; i < count; i++) {
      // Distributed positions in 3D space
      positions[i * 3] = (Math.random() - 0.5) * 45; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 28; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25; // Z

      // Color distribution from palette
      const rand = Math.random();
      let chosenColor = colorMint;
      if (rand < 0.20) {
        chosenColor = colorGold;
      } else if (rand < 0.45) {
        chosenColor = colorTeal;
      }
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture (Glowing Circle)
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    if (ctx) {
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Material
    const material = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      map: texture,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Points Object
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Sub-constellation connection lines
    const linesCount = 14;
    const linesGroup = new THREE.Group();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x114C5A,
      transparent: true,
      opacity: 0.12
    });

    for (let i = 0; i < linesCount; i++) {
      const lineGeom = new THREE.BufferGeometry();
      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 25
      );
      const p2 = new THREE.Vector3(
        p1.x + (Math.random() - 0.5) * 8,
        p1.y + (Math.random() - 0.5) * 8,
        p1.z + (Math.random() - 0.5) * 8
      );
      lineGeom.setFromPoints([p1, p2]);
      const line = new THREE.Line(lineGeom, lineMaterial);
      linesGroup.add(line);
    }
    scene.add(linesGroup);

    // Interactivity state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 120;
      mouseY = (event.clientY - window.innerHeight / 2) / 120;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation variables
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse-following camera drift
      targetX = targetX + (mouseX - targetX) * 0.04;
      targetY = targetY + (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 0.4 + Math.sin(elapsedTime * 0.04) * 1.5;
      camera.position.y = -targetY * 0.4 + Math.cos(elapsedTime * 0.04) * 1.5;
      camera.lookAt(scene.position);

      // Spin constellation
      points.rotation.y = elapsedTime * 0.015;
      points.rotation.x = elapsedTime * 0.008;

      linesGroup.rotation.y = elapsedTime * 0.015;
      linesGroup.rotation.x = elapsedTime * 0.008;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup assets on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.65
      }}
    />
  );
}
