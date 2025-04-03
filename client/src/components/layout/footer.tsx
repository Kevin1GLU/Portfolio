import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#1a1a1a] py-8 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="text-center">
          <Link href="/">
            <a className="text-2xl font-poppins font-bold tracking-wide interactive">
              <span className="text-white">ALEX</span>
              <span className="text-[#0AFFEF]">STUDIO</span>
            </a>
          </Link>
        </div>
        <p className="text-gray-500 mt-6">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}
