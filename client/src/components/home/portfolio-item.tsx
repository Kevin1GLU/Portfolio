import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PortfolioItem as PortfolioItemType } from '@/lib/types';
import { useState, useRef } from 'react';
import { Link } from 'wouter';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform values for parallax tilt
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  // Transform values for inner content
  const imgX = useTransform(x, [-100, 100], [-15, 15]);
  const imgY = useTransform(y, [-100, 100], [-15, 15]);
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    x.set(mouseX);
    y.set(mouseY);
  };
  
  // Reset on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

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

  // Shake animation for hover - will show when initially hovering
  const shakeAnimation = {
    x: [0, -5, 5, -4, 4, -3, 3, -2, 2, -1, 1, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1]
    }
  };

  return (
    <Link href={`/project/${item.id}`}>
      <motion.article 
        className="portfolio-item bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg interactive transform-gpu transition-all duration-500 hover:z-10 cursor-pointer"
        variants={itemVariants}
        animate="visible"
        initial="hidden"
        whileHover={shakeAnimation}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
          boxShadow: isHovered 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="h-64 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#4169E1]/30 via-[#9370DB]/20 to-[#FF00FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[1]" 
            style={{ transform: 'translateZ(20px)' }}
          />
          
          <motion.img 
            src={item.imageSrc} 
            alt={item.alt} 
            className="w-full h-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-110"
            style={{ 
              x: isHovered ? imgX : 0,
              y: isHovered ? imgY : 0,
              transformStyle: 'preserve-3d',
              transform: 'translateZ(0px)'
            }}
          />
          
          {/* Title overlay - show on whole item hover */}
          <motion.div 
            className="absolute inset-0 z-10 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              transform: 'translateZ(40px)',
              transformStyle: 'preserve-3d'
            }}
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
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
}
