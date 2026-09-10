import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowDown, Sparkles, Film, TrendingUp, Award, ExternalLink } from 'lucide-react';

interface HeroProps {
  onWatchReels: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchReels, onContactClick }) => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.35]);
  const heroY = useTransform(scrollY, [0, 450], [0, -40]);
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient canvas inspired by Air.inc */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#1E3A8A]/30 via-[#2D68C4]/20 to-teal-500/10 rounded-full blur-[140px] opacity-70" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Floating Monospace Kicker Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="tracking-wide text-zinc-400">MARKETING & STRATEGY 2026</span>
          <span className="text-zinc-600">•</span>
          <span className="text-blue-400 font-medium">UCLA '28 COMM</span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Hook the scroll.{' '}
          <span className="inline-block pr-2 pb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            Tell the story.
          </span>{' '}
          Drive the numbers.
        </motion.h1>

        {/* Subtitle / Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
        >
          I’m <strong className="text-white font-semibold">James Morva</strong>, a digital marketer blending short-form video pacing, data analytics, and performance marketing strategy.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onWatchReels}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm shadow-xl shadow-white/10 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch Bun & Mi Reel</span>
          </button>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-zinc-300 hover:text-white border border-white/10 font-semibold text-sm transition-all"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-4 h-4 text-zinc-400" />
          </a>
        </motion.div>

        {/* Floating Kinetic Tags (Air.inc workspace aesthetic) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mt-14 hidden md:flex items-center justify-center gap-3 flex-wrap"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="px-3.5 py-1.5 rounded-lg bg-[#141724]/90 border border-blue-500/20 text-xs font-mono text-blue-300 shadow-lg flex items-center gap-2"
          >
            <Film className="w-3.5 h-3.5 text-blue-400" />
            <span>Bun & Mi: Commercial Reel</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="px-3.5 py-1.5 rounded-lg bg-[#141724]/90 border border-emerald-500/20 text-xs font-mono text-emerald-300 shadow-lg flex items-center gap-2"
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kicks.withjay: $5K+ Rev</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="px-3.5 py-1.5 rounded-lg bg-[#141724]/90 border border-amber-500/20 text-xs font-mono text-amber-300 shadow-lg flex items-center gap-2"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>4.0 GPA Scholar • UCLA '28</span>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="mt-16 flex flex-col items-center gap-2 text-zinc-500 pointer-events-none"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-zinc-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
