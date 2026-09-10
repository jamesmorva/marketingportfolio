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
    <section id="video-lab" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-2.5">
          <Film className="w-3 h-3" />
          <span>VIDEO PRODUCTION // BUN & MI</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Commercial Reel
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
          Short-form commercial video created for Bun & Mi in Santa Monica.
        </p>
      </motion.div>

      {/* Compact Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-[#0E121D] border border-white/10 p-5 sm:p-7 shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Instagram Phone Mockup */}
          <div className="w-full max-w-[260px] shrink-0 mx-auto">
            <div className="relative aspect-[9/16] rounded-[28px] bg-black border-[4px] border-[#222736] shadow-2xl overflow-hidden flex flex-col">
              {/* Speaker notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-[#141724] rounded-full z-20 pointer-events-none" />

              {/* Instagram Live Embed */}
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                allow="encrypted-media"
                title="Bun & Mi Instagram Reel"
              />

              {/* Bottom Quick Link Overlay */}
              <div className="absolute bottom-2 inset-x-2 z-20">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-medium flex items-center justify-center gap-1.5 shadow hover:opacity-90 transition-opacity"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Skimmable Reel Summary */}
          <div className="flex-1 w-full text-left space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                Bun & Mi • Santa Monica
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                Instagram Reel
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {videoProject.title}
              </h3>
            </div>

            {/* Pattern Interrupt Hook */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>The Hook</span>
              </div>
              <p className="text-sm font-semibold text-white">
                “{videoProject.hook}”
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Designed to stop the scroll in the first 2 seconds, turning a traditional Vietnamese dining ritual into a high-retention commercial that drives foot traffic.
            </p>

            {/* Direct Link Button */}
            <div className="pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
              >
                <span>View Reel on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
