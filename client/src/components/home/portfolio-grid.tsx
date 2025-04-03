import { motion } from 'framer-motion';
import PortfolioItem from './portfolio-item';
import { portfolioItems } from '@/lib/portfolio-data';

export default function PortfolioGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#4169E1]/5 filter blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      ></motion.div>
      
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-poppins font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Featured <motion.span 
            className="text-[#0AFFEF]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >Projects</motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
