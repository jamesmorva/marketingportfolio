import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Video Work', href: '#video-lab' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro progress bar */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-[#2D68C4] via-[#60A5FA] to-[#34D399] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <nav
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0B0D13]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Simple Italicized JM Logo */}
          <a
            href="#"
            className="flex items-center space-x-1 font-bold tracking-tighter text-2xl italic group focus:outline-none"
          >
            <span className="text-white group-hover:text-[#2D68C4] transition-colors">JM</span>
            <span className="text-[#2D68C4] text-3xl leading-none font-sans not-italic">.</span>
          </a>

          {/* Center Navigation Pills */}
          <div className="hidden md:flex items-center space-x-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Status Pill & Contact Button */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Live Availability Badge */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available UCLA '28</span>
            </div>

            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#2D68C4] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden mt-3 p-4 rounded-2xl bg-[#0F121C] border border-white/10 shadow-2xl space-y-3"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-[#2D68C4] text-white text-xs font-semibold"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
