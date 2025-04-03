import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#4169E1]/10 filter blur-3xl"
        initial={{ opacity: 0, scale: 0.5, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0AFFEF]/10 filter blur-3xl"
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-poppins font-bold mb-8 inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              About <motion.span 
                className="text-[#0AFFEF]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >Me</motion.span>
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="bg-[#2a2a2a]/50 backdrop-blur-sm rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I'm a passionate 3D artist and VFX specialist with over 5 years of experience creating immersive digital experiences. My work focuses on blending technical precision with artistic vision to create compelling visual narratives.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Using industry-leading software like Blender, Cinema 4D, and Houdini, I specialize in creating photorealistic environments, character design, and particle simulations that push the boundaries of digital art.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#0AFFEF]/20"
                  whileHover={{ boxShadow: "0 0 15px rgba(10, 255, 239, 0.5)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0AFFEF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="font-poppins font-medium">3D Modeling</h3>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#8A2BE2]/20"
                  whileHover={{ boxShadow: "0 0 15px rgba(138, 43, 226, 0.5)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8A2BE2]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </motion.div>
                <h3 className="font-poppins font-medium">Texturing</h3>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#4169E1]/20"
                  whileHover={{ boxShadow: "0 0 15px rgba(65, 105, 225, 0.5)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4169E1]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="font-poppins font-medium">Animation</h3>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#0AFFEF]/20"
                  whileHover={{ boxShadow: "0 0 15px rgba(10, 255, 239, 0.5)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0AFFEF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="font-poppins font-medium">VFX</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
