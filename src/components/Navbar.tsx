import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
      {/* Top micro progress bar in pink */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-pink-600 via-pink-400 to-pink-300 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <nav
        className={`mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#000000]/90 backdrop-blur-md border-b border-[#d4d0c9]/10'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo: Italicized JM */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-normal tracking-tight group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-[6px] bg-[#141414] border border-[#d4d0c9]/15 flex items-center justify-center text-[#d4d0c9] group-hover:text-pink-400 group-hover:border-pink-500/40 transition-all select-none">
              <span className="font-serif italic font-medium text-sm tracking-tight text-white group-hover:text-pink-400 transition-colors">
                JM
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-white font-normal tracking-[-0.02em] group-hover:text-pink-400 transition-colors text-sm">james morva</span>
              <span className="text-pink-400/80 font-mono text-[10px] uppercase tracking-wider">jr</span>
            </div>
          </a>

          {/* Center Navigation Links - Whisper-quiet, no heavy card capsule, 12-13px white/bone text */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-normal text-[#878581] hover:text-pink-400 transition-colors tracking-[-0.02em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Status Tag & ai.work 100px Pill Button */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Live Availability Tag - Pink highlight */}
            <div className="flex items-center space-x-2 text-[10px] font-mono text-pink-400/90">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
              <span className="uppercase tracking-wider">UCLA '28</span>
            </div>

            <button
              onClick={onContactClick}
              className="aiwork-btn-primary"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
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
            className="sm:hidden mt-3 p-4 rounded-[10px] bg-[#141414] border border-[#d4d0c9]/15 shadow-2xl space-y-3"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-[#878581] hover:text-white rounded-[6px] hover:bg-[#0c0c0c] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-[#d4d0c9]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="aiwork-btn-primary w-full"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
