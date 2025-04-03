import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useParallax } from '@/hooks/use-parallax';

export default function HeroSection() {
  const { getParallaxStyles } = useParallax();
  
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <motion.div 
        className="absolute inset-0"
        style={getParallaxStyles(0.1)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#8A2BE2]/10 filter blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#0AFFEF]/10 filter blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Creative
            </motion.span>
            <motion.span 
              className="block text-[#0AFFEF]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              style={{ textShadow: '0 0 10px rgba(10, 255, 239, 0.7)' }}
            >
              3D & VFX
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            >
              Portfolio
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.3,
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            Bringing imagination to life through cutting-edge 3D modeling and visual effects
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 1.6,
              ease: "backOut"
            }}
          >
            <Link href="#portfolio">
              <a 
                className="interactive inline-block bg-transparent border-2 border-[#0AFFEF] text-[#0AFFEF] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0AFFEF]/10 hover:shadow-[0_0_15px_rgba(10,255,239,0.7)] transition-all duration-300"
                onClick={scrollToPortfolio}
              >
                View Work
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <Link href="#portfolio">
          <a onClick={scrollToPortfolio} className="interactive">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </Link>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </header>
  );
}
