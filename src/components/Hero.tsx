import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowDown, ExternalLink } from 'lucide-react';

interface HeroProps {
  onWatchReels: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchReels }) => {
  const { scrollY } = useScroll();
  // Keep the indicator fading on scroll, but the words and content remain 100% solid and opaque
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#000000]">
      {/* Subtle, restrained ambient lighting - no loud neon gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#141414] rounded-full blur-[140px] opacity-60" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto text-center relative z-10 flex flex-col items-center pt-2 sm:pt-4">
        {/* Monospace Section Tag (ai.work signature: 10px uppercase, plain text, Ash color) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#878581]">
            DIRECTOR // STRATEGIST // UCLA '28
          </span>
        </motion.div>

        {/* Hero Headline: ai.work signature 300 Weight (whisper-light), tight -0.035em tracking */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.035em] text-[#ffffff] leading-[1.02] max-w-4xl"
        >
          Hook the scroll. <br />
          <span className="font-light text-[#d4d0c9]">
            Tell the story.
          </span>
        </motion.h1>

        {/* Subtitle / Positioning Statement - #878581 (Ash) & #d4d0c9 (Bone) */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[#878581] max-w-xl font-normal leading-relaxed tracking-[-0.02em]"
        >
          Digital marketing strategist and short-form video creator. Blending narrative rhythm, quantitative discipline, and operational execution.
        </motion.p>

        {/* Action Buttons: 100px Pill buttons as strictly required by ai.work DESIGN.md */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onWatchReels}
            className="aiwork-btn-primary"
          >
            <span>Watch Commercial Reel</span>
            <Play className="w-3 h-3 ml-2 fill-current" />
          </button>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="aiwork-btn-ghost"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </motion.div>

        {/* Integration Logo Chips Row (ai.work signature: single horizontal row, transparent, Bone text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-[#d4d0c9]/10 w-full max-w-3xl flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#878581]"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#615f5c]">TOOLING & CHANNELS:</span>
          <span className="text-[#d4d0c9] hover:text-white transition-colors">Premiere Pro</span>
          <span className="text-[#615f5c]">•</span>
          <span className="text-[#d4d0c9] hover:text-white transition-colors">TikTok & Reels</span>
          <span className="text-[#615f5c]">•</span>
          <span className="text-[#d4d0c9] hover:text-white transition-colors">Meta Ads Manager</span>
          <span className="text-[#615f5c]">•</span>
          <span className="text-[#d4d0c9] hover:text-white transition-colors">Analytics</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="mt-12 flex flex-col items-center gap-2 text-[#878581] pointer-events-none"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#615f5c]">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#878581]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

