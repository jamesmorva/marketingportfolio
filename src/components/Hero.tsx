import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowDown, ExternalLink, FileText } from 'lucide-react';
import { TRADEMARK_DATA_URI } from '../assets/trademarkDataUri';

interface HeroProps {
  onWatchReels: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchReels }) => {
  const { scrollY } = useScroll();
  // Keep the indicator fading on scroll, but the words and content remain 100% solid and opaque
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#000000]">
      {/* Subtle, restrained ambient lighting aura on dark canvas */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#141414] rounded-full blur-[140px] opacity-70" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        {/* Split Hero Layout matching ai.work reference: Left column = Title & Hook, Right column = Big Trademark Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Title, Positioning Statement, and Action Buttons (lg:col-span-7) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Section Tag - Consistent with primary Inter sans typography */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#878581]">
                DIRECTOR // STRATEGIST // UCLA '28
              </span>
            </motion.div>

            {/* Hero Headline: ai.work signature 300 Weight (whisper-light), tight -0.035em tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.035em] text-[#ffffff] leading-[1.04] max-w-xl"
            >
              Hook the scroll. <br />
              <span className="font-light text-[#878581]">
                Tell the story.
              </span>
            </motion.h1>

            {/* Subtitle / Positioning Statement - Ash & Bone text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm sm:text-base text-[#878581] max-w-lg font-normal leading-relaxed tracking-[-0.02em]"
            >
              Autonomous video production and digital marketing strategist. Blending narrative rhythm, quantitative discipline, and operational execution.
            </motion.p>

            {/* Action Buttons: 100px Pill buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="/assets/aistudio/James_Michael_Morva_Jr_86977775."
                target="_blank"
                rel="noopener noreferrer"
                className="aiwork-btn-primary"
              >
                <FileText className="w-3.5 h-3.5 mr-2" />
                <span>View Resume</span>
              </a>

              <a
                href="https://www.linkedin.com/in/james-michael-morva-jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="aiwork-btn-ghost"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Big Trademark Logo matching the ai.work reference (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end select-none relative"
          >
            {/* Ambient subtle backglow */}
            <div className="absolute w-72 h-72 bg-[#141414] rounded-full blur-3xl -z-10 opacity-50" />

            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center">
              <img
                src={TRADEMARK_DATA_URI}
                alt="James Morva Trademark Logo"
                className="w-full h-auto object-contain transition-all duration-300 hover:brightness-125"
              />
            </div>
          </motion.div>
        </div>

        {/* Integration Logo Chips Row - Consistent with website typography (Inter sans) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-8 border-t border-[#d4d0c9]/10 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-normal text-[#878581] tracking-[-0.01em]"
        >
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#615f5c]">TOOLING & CHANNELS:</span>
            <span className="text-[#d4d0c9] hover:text-pink-400 transition-colors">Premiere Pro</span>
            <span className="text-[#615f5c]">•</span>
            <span className="text-[#d4d0c9] hover:text-pink-400 transition-colors">TikTok & Reels</span>
            <span className="text-[#615f5c]">•</span>
            <span className="text-[#d4d0c9] hover:text-pink-400 transition-colors">Meta Ads Manager</span>
            <span className="text-[#615f5c]">•</span>
            <span className="text-[#d4d0c9] hover:text-pink-400 transition-colors">Performance Analytics</span>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-2 text-[#878581] pointer-events-none">
            <span className="text-[11px] tracking-widest uppercase text-[#615f5c]">Scroll</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#878581]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

