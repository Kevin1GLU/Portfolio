import { useCursor } from '@/hooks/use-cursor';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const { position, isHovering } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Don't render custom cursor on mobile
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="custom-cursor fixed w-5 h-5 rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          backgroundColor: '#0AFFEF'
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 1.5 : 1,
          opacity: 1,
        }}
        initial={{ 
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          x: { duration: 0, ease: "linear" },
          y: { duration: 0, ease: "linear" },
          scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3 }
        }}
      />

      <motion.div
        className="custom-cursor-follower fixed w-10 h-10 rounded-full z-[9998] pointer-events-none"
        style={{
          backgroundColor: 'rgba(10, 255, 239, 0.2)'
        }}
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          scale: isHovering ? 1.5 : 1,
          opacity: 1,
        }}
        initial={{ 
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          x: { duration: 0.04, ease: "linear" },
          y: { duration: 0.04, ease: "linear" },
          scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3 }
        }}
      />
    </>
  );
}
