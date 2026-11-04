import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  if (!study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-3xl bg-[#141414] border border-[#d4d0c9]/15 rounded-[10px] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-[100px] bg-[#0c0c0c] border border-[#d4d0c9]/15 text-[#878581] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4d0c9] bg-[#0c0c0c] border border-[#d4d0c9]/10 px-2.5 py-1 rounded-[2px]">
              {study.category}
            </span>
            <span className="text-[10px] font-mono text-[#878581] uppercase tracking-wider">{study.dateRange}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-[-0.03em]">
            {study.title}
          </h2>
          <p className="mt-2 text-sm text-[#878581] leading-relaxed tracking-[-0.02em]">
            {study.tagline}
          </p>

          <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-[6px] bg-[#0c0c0c] border border-[#d4d0c9]/10 text-center">
                <p className="text-base font-normal text-white font-mono tracking-tight">{m.value}</p>
                <p className="text-[10px] font-mono text-[#878581] uppercase tracking-wider mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] font-mono text-[#878581] uppercase tracking-wider mb-2">
                Executive Overview
              </h4>
              <p className="text-xs sm:text-sm text-[#d4d0c9] leading-relaxed tracking-[-0.02em]">
                {study.overview}
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-mono text-[#878581] uppercase tracking-wider mb-3">
                Key Strategic Highlights
              </h4>
              <ul className="space-y-2">
                {study.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1fe274] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono text-[#878581] uppercase tracking-wider mb-3">
                Deliverables & Assets Created
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-[2px] bg-[#0c0c0c] border border-[#d4d0c9]/10 text-[10px] font-mono text-[#878581]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
