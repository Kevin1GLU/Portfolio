import { useEffect } from 'react';
import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/home/hero-section';
import PortfolioGrid from '@/components/home/portfolio-grid';
import AboutSection from '@/components/home/about-section';
import ContactSection from '@/components/home/contact-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <HeroSection />
      <PortfolioGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
