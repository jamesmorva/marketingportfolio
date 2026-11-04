import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Film, CheckCircle2 } from 'lucide-react';
import { VideoProject } from '../types';

interface VideoModalProps {
  video: VideoProject | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container: ai.work style (10px radius, Carbon background) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-[#141414] border border-[#d4d0c9]/15 rounded-[10px] shadow-2xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-[100px] bg-[#0c0c0c] border border-[#d4d0c9]/15 text-[#878581] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4d0c9] bg-[#0c0c0c] border border-[#d4d0c9]/10 px-2.5 py-1 rounded-[2px]">
              {video.client}
            </span>
            <span className="text-[10px] font-mono text-[#878581] uppercase tracking-wider">{video.duration} • {video.aspectRatio}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-light text-white tracking-[-0.03em]">
            {video.title}
          </h2>

          {video.instagramUrl && (
            <div className="mt-3 flex items-center gap-3">
              <a
                href={video.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aiwork-btn-primary text-xs"
              >
                <span className="w-2 h-2 rounded-full bg-pink-400 group-hover:animate-ping" />
                <span>Watch Official Reel on Instagram</span>
                <span className="text-[10px] text-pink-400">↗</span>
              </a>
            </div>
          )}

          {/* Embedded Cinema Player */}
          {video.videoSrc && (
            <div className="my-5 rounded-[6px] overflow-hidden bg-[#0c0c0c] border border-[#d4d0c9]/10 flex justify-center max-h-[360px]">
              <video
                src={video.videoSrc.startsWith('http') || video.videoSrc.startsWith('blob:') ? video.videoSrc : `./${video.videoSrc.replace(/^\/+/, '')}`}
                controls
                autoPlay
                playsInline
                loop
                className="h-[360px] w-auto max-w-full object-contain"
              />
            </div>
          )}

          {/* Hook Callout */}
          <div className="my-5 p-4 rounded-[6px] bg-[#0c0c0c] border border-[#d4d0c9]/10">
            <span className="text-[10px] font-mono tracking-wider text-[#878581] uppercase">
              Video Hook
            </span>
            <p className="mt-1 text-sm font-normal text-[#d4d0c9]">
              “{video.transcriptHook}”
            </p>
          </div>

          {/* Storyboard Summary */}
          <div className="p-4 rounded-[6px] bg-[#0c0c0c] border border-[#d4d0c9]/10 mb-6">
            <h4 className="text-[10px] font-mono text-[#878581] uppercase tracking-wider mb-2.5">
              Scene Progression
            </h4>
            <ul className="space-y-2">
              {video.transcriptBullets.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#d4d0c9]">
                  <span className="w-4 h-4 rounded-[2px] bg-[#141414] border border-[#d4d0c9]/10 text-[#878581] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-[#d4d0c9]/10">
            {video.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-[4px] bg-[#0c0c0c] border border-[#d4d0c9]/10 text-center">
                <p className="text-sm font-normal text-white font-mono">{m.value}</p>
                <p className="text-[9px] font-mono text-[#878581] uppercase mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
