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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0D101A] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              {study.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">{study.dateRange}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {study.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-medium">
            {study.tagline}
          </p>

          <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-lg font-black text-white font-mono">{m.value}</p>
                <p className="text-[10px] font-mono text-zinc-500 uppercase">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Executive Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {study.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                Key Strategic Highlights
              </h4>
              <ul className="space-y-2">
                {study.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                Deliverables & Assets Created
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
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
