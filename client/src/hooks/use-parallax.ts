import { useEffect, useState } from 'react';

interface ParallaxPosition {
  x: number;
  y: number;
}

export function useParallax() {
  const [position, setPosition] = useState<ParallaxPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getParallaxStyles = (depth: number = 0.1) => {
    const moveX = (position.x * 100 * depth) - (50 * depth);
    const moveY = (position.y * 100 * depth) - (50 * depth);
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      willChange: 'transform',
    };
  };

  return { getParallaxStyles };
}
