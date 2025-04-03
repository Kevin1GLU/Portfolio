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
    initial: {},
    hover: {
      x: [0, -4, 4, -4, 4, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.article 
      className="portfolio-item bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg interactive transform transition-all duration-500 hover:z-10"
      variants={itemVariants}
      animate="visible"
      initial="hidden"
      whileHover={{
        x: [0, -4, 4, -4, 4, 0],
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }}
    >
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#4169E1]/30 via-[#9370DB]/20 to-[#FF00FF]/30 opacity-0 transition-opacity duration-500 ease-in-out z-[1] hover:opacity-100" />
        
        <motion.img 
          src={item.imageSrc} 
          alt={item.alt} 
          className="w-full h-full object-cover transition-transform duration-800 ease-in-out"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-poppins font-semibold text-xl">{item.title}</h3>
          <p className="text-sm text-gray-300">{item.category}</p>
        </motion.div>
      </div>
    </motion.article>
  );
}
