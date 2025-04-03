import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import MobileMenu from './mobile-menu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        className="fixed w-full top-0 left-0 z-50 bg-[#121212]/40 border-b border-[#2a2a2a] backdrop-blur-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="text-2xl font-poppins font-bold tracking-wide interactive">
                <span className="text-white">ALEX</span>
                <span className="text-[#0AFFEF]">STUDIO</span>
              </a>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="#portfolio">
                <a className="text-white hover:text-[#0AFFEF] transition-colors duration-300 interactive">WORK</a>
              </Link>
              <Link href="#about">
                <a className="text-white hover:text-[#0AFFEF] transition-colors duration-300 interactive">ABOUT</a>
              </Link>
              <Link href="#process">
                <a className="text-white hover:text-[#0AFFEF] transition-colors duration-300 interactive">PROCESS</a>
              </Link>
              <Link href="#contact">
                <a className="text-white hover:text-[#0AFFEF] transition-colors duration-300 interactive">CONTACT</a>
              </Link>
            </div>
            
            <button 
              className="md:hidden text-white focus:outline-none interactive" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
