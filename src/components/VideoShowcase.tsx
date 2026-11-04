import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Film, Sparkles } from 'lucide-react';
import { BUN_AND_MI_VIDEOS } from '../data';
import { VideoProject } from '../types';

interface VideoShowcaseProps {
  onOpenModal?: (video: VideoProject) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = () => {
  const videoProject = BUN_AND_MI_VIDEOS[0];
  const instagramUrl = videoProject.instagramUrl || 'https://www.instagram.com/reel/DcwOm5upcCX/?hl=en';
  const embedUrl = 'https://www.instagram.com/reel/DcwOm5upcCX/embed';

  return (
    <section id="video-lab" className="py-20 px-4 sm:px-6 max-w-[1200px] mx-auto">
      {/* Section Header - Monospace print tag + 32-48px whisper light heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#878581] block mb-3">
          CREATIVE DIRECTING // SPEC COMMERCIAL
        </span>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
          Commercial Reel
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#878581] max-w-lg mx-auto tracking-[-0.02em]">
          Short-form commercial video created for Bun & Mi in Santa Monica.
        </p>
      </motion.div>

      {/* ai.work Card: Carbon (#141414), 10px radius, 1px hairline border in #d4d0c9 at 12% opacity */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="aiwork-card p-6 sm:p-10 max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
          {/* Mockup Frame with 10px radius */}
          <div className="w-full max-w-[270px] shrink-0 mx-auto">
            <div className="relative aspect-[9/16] rounded-[10px] bg-[#0c0c0c] border border-[#d4d0c9]/15 shadow-2xl overflow-hidden flex flex-col">
              {/* Instagram Live Embed */}
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                allow="encrypted-media"
                title="Bun & Mi Instagram Reel"
              />

              {/* Bottom Quick Link Overlay */}
              <div className="absolute bottom-3 inset-x-3 z-20">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aiwork-btn-primary w-full text-xs py-2"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Skimmable Reel Summary */}
          <div className="flex-1 w-full text-left space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4d0c9] bg-[#0c0c0c] border border-[#d4d0c9]/15 px-2.5 py-1 rounded-[2px]">
                Bun & Mi • Santa Monica
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#878581]">
                Instagram Reel
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-[-0.02em]">
                {videoProject.title}
              </h3>
            </div>

            {/* Inset Tar Box for the Hook */}
            <div className="p-4 rounded-[6px] bg-[#0c0c0c] border border-[#d4d0c9]/10">
              <div className="text-[10px] font-mono text-[#878581] uppercase tracking-wider mb-1">
                Pattern Interrupt Hook
              </div>
              <p className="text-sm font-normal text-[#d4d0c9]">
                “{videoProject.hook}”
              </p>
            </div>

            <p className="text-sm text-[#878581] leading-relaxed tracking-[-0.02em]">
              Designed to stop the scroll in the first 2 seconds, turning a traditional Vietnamese dining ritual into a high-retention commercial that drives foot traffic.
            </p>

            {/* Direct Link Button: ai.work 100px Pill Button */}
            <div className="pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aiwork-btn-primary"
              >
                <span>View Reel on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
