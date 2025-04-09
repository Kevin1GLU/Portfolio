import { motion } from 'framer-motion';
import PortfolioItem from './portfolio-item';
import { portfolioItems } from '@/lib/portfolio-data';

export default function PortfolioGrid() {
  // Staggered animation with perspective and 3D effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Fancy title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // Animated gradient for section heading
  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 relative perspective-1000">
      {/* Background elements with animated gradients */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#4169E1]/10 filter blur-3xl"
        initial={{ opacity: 0, scale: 0.5, x: 50 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          x: 0,
          y: [0, -20, 20, 0]
        }}
        transition={{ 
          duration: 1,
          y: {
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-[#FF00FF]/10 filter blur-3xl"
        initial={{ opacity: 0, scale: 0.5, x: -50 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          x: 0,
          y: [0, 30, -20, 0]
        }}
        transition={{ 
          duration: 1,
          delay: 0.2,
          y: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold inline-block">
            Featured{" "} 
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] via-[#9370DB] to-[#FF00FF]"
              variants={gradientVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ textShadow: '0 0 20px rgba(147, 112, 219, 0.5)' }}
            >
              Projects
            </motion.span>
          </h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-[#4169E1] via-[#9370DB] to-[#FF00FF] mx-auto mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ 
                opacity: 0, 
                y: 50, 
                rotateY: -10,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="transform-gpu"
            >
              <PortfolioItem item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
