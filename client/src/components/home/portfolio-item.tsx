import { motion } from 'framer-motion';
import { PortfolioItem as PortfolioItemType } from '@/lib/types';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
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

  // Shake animation for hover
  const shakeAnimation = {
    x: [0, -5, 5, -4, 4, -3, 3, -2, 2, -1, 1, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1]
    }
  };

  return (
    <motion.article 
      className="portfolio-item bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg interactive transform transition-all duration-500 hover:z-10"
      variants={itemVariants}
      animate="visible"
      initial="hidden"
      whileHover={shakeAnimation}
    >
      <div className="h-64 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#4169E1]/30 via-[#9370DB]/20 to-[#FF00FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[1]" />
        
        <motion.img 
          src={item.imageSrc} 
          alt={item.alt} 
          className="w-full h-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-110"
          transition={{ duration: 0.8 }}
        />
        
        {/* Title overlay - show on whole item hover */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  );
}
