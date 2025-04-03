import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#1a1a1a] py-8 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/">
            <motion.div 
              className="text-2xl font-poppins font-bold tracking-wide interactive inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                KEVIN'S
              </motion.span>
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] via-[#9370DB] to-[#FF00FF]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                PORTFOLIO
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.p 
          className="text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
