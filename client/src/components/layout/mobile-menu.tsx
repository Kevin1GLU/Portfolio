import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 } 
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const handleLinkClick = (href: string) => {
    onClose();
    
    // Smooth scroll for hash links
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#121212] z-50 overflow-hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          style={{
            background: 'linear-gradient(45deg, #121212 0%, #1a1a1a 100%)',
          }}
        >
          <motion.div 
            className="absolute top-40 -left-10 w-80 h-80 rounded-full bg-[#4169E1]/10 filter blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-40 -right-10 w-80 h-80 rounded-full bg-[#9370DB]/10 filter blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          ></motion.div>
          <div className="h-full flex flex-col items-center justify-center space-y-8 text-2xl font-poppins">
            <motion.button 
              className="absolute top-6 right-6 text-white interactive"
              onClick={onClose}
              variants={itemVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.div variants={itemVariants}>
              <Link href="#portfolio">
                <a onClick={() => handleLinkClick('#portfolio')} className="text-white hover:text-[#9370DB] transition-colors duration-300 interactive">
                  WORK
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="#about">
                <a onClick={() => handleLinkClick('#about')} className="text-white hover:text-[#4169E1] transition-colors duration-300 interactive">
                  ABOUT
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="#process">
                <a onClick={() => handleLinkClick('#process')} className="text-white hover:text-[#9370DB] transition-colors duration-300 interactive">
                  PROCESS
                </a>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="#contact">
                <a onClick={() => handleLinkClick('#contact')} className="text-white hover:text-[#FF00FF] transition-colors duration-300 interactive">
                  CONTACT
                </a>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
