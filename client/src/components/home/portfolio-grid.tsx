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
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-poppins font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-[#0AFFEF]">Projects</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
