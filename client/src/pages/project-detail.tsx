import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { getProjectById } from '@/lib/portfolio-data';
import { ProjectDetail } from '@/lib/types';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    const projectId = parseInt(params.id, 10);
    if (isNaN(projectId)) {
      setLocation('/');
      return;
    }

    const projectDetail = getProjectById(projectId);
    if (!projectDetail) {
      setLocation('/');
      return;
    }

    setProject(projectDetail);
    setLoading(false);
  }, [params.id, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-t-4 border-[#9370DB] border-solid rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Header with background animation */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden bg-gradient-to-r from-[#151515] via-[#1a1a1a] to-[#151515]">
          <motion.div 
            className="absolute -top-20 left-20 w-80 h-80 rounded-full bg-[#4169E1]/20 filter blur-3xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: [0, -30, 20, -10, 0],
              y: [0, 30, -20, 15, 0]
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              x: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              y: {
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          ></motion.div>

          <motion.div 
            className="absolute -bottom-20 right-20 w-96 h-96 rounded-full bg-[#9370DB]/15 filter blur-3xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: [0, 40, -30, 20, 0],
              y: [0, -30, 20, -10, 0]
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.2, 
              ease: "easeOut",
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              y: {
                duration: 22,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          ></motion.div>

          <div className="container mx-auto px-6 h-full flex items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-poppins font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] via-[#9370DB] to-[#FF00FF]">
                  {project.title}
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {project.category}
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Video and details - main content */}
            <div className="lg:col-span-3">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-xl mb-8 transform-gpu"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(65, 105, 225, 0.2), 0 10px 10px -5px rgba(147, 112, 219, 0.2)" 
                }}
              >
                <video 
                  src={project.videoSrc} 
                  controls 
                  poster={project.imageSrc}
                  className="w-full aspect-video object-cover"
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h2 
                  className="text-2xl font-poppins font-semibold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Project Overview
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {project.description}
                </motion.p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {project.technologies.map((tech, index) => (
                    <motion.div 
                      key={tech}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#4169E1] to-[#9370DB] mr-3"></div>
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>

                {project.client && (
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <span className="text-gray-400 mr-2">Client:</span>
                    <span className="text-white font-medium">{project.client}</span>
                  </motion.div>
                )}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <span className="text-gray-400 mr-2">Completed:</span>
                  <span className="text-white font-medium">{project.date}</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Side images */}
            <div className="lg:col-span-2">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {project.images.map((image, index) => (
                  <motion.div 
                    key={index}
                    className={`rounded-lg overflow-hidden shadow-lg cursor-pointer transform-gpu ${activeImageIndex === index ? 'ring-2 ring-[#9370DB]' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(65, 105, 225, 0.2), 0 10px 10px -5px rgba(147, 112, 219, 0.2)"
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="w-full aspect-video object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Back button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => setLocation('/')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4169E1] via-[#9370DB] to-[#FF00FF] text-white font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 112, 219, 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Projects
            </motion.button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}