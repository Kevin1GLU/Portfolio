import { motion } from 'framer-motion';
import { PortfolioItem as PortfolioItemType } from '@/lib/types';
import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import VanillaTilt from 'vanilla-tilt';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize vanilla-tilt effect when component mounts
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // maximum tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets
        scale: 1.1, // 2 = 200%, 1.5 = 150%, etc.
        speed: 1000, // Speed of the enter/exit transition
        glare: true, // if it should have a "glare" effect
        "max-glare": 0.3, // the maximum "glare" opacity
        gyroscope: false, // disable gyroscope for cleaner effect on desktop
        reset: true, // whether the tilt should reset when mouse leaves
        easing: "cubic-bezier(.03,.98,.52,.99)", // easing for a smoother effect
      });
    }

    // Clean up
    return () => {
      if (tiltRef.current) {
        // @ts-ignore - vanilla-tilt doesn't export the destroy method in types
        (tiltRef.current as any)._vanillaTilt?.destroy();
      }
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Shake animation for hover - will show when initially hovering (more subtle)
  const shakeAnimation = {
    x: [0, -3, 3, -2, 2, -1, 1, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1]
    }
  };

  return (
    <Link href={`/project/${item.id}`}>
      <motion.div
        ref={containerRef}
        className="portfolio-item-container h-64 mb-6"
        variants={itemVariants}
        animate="visible"
        initial="hidden"
        whileHover={shakeAnimation}
      >
        <div 
          ref={tiltRef}
          className="js-tilt portfolio-item h-full bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transform-gpu transition-all duration-300 hover:z-10 cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="h-full overflow-hidden relative group">
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-tl from-[#4169E1]/30 via-[#9370DB]/20 to-[#FF00FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[1]" 
              style={{ transform: 'translateZ(60px)' }}
            />
            
            {/* Thumbnail image */}
            <img 
              src={item.imageSrc} 
              alt={item.alt} 
              className="w-full h-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-110"
              style={{ transform: 'translateZ(30px)' }}
            />
            
            {/* Title overlay - show on whole item hover */}
            <div 
              className="absolute inset-0 z-10 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ transform: 'translateZ(70px)' }}
            >
              <motion.h3 
                className="font-poppins font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] via-[#9370DB] to-[#FF00FF]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {item.category}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
