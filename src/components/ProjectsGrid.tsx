import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';

interface ProjectsGridProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectCaseStudy }) => {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#878581] block mb-3">
          PROOF // OPERATIONAL EXECUTION
        </span>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
          Case Studies & Results
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#878581] max-w-xl tracking-[-0.02em]">
          E-commerce scaling, quantitative investment operations, and campus governance delivered with measurable impact.
        </p>
      </motion.div>

      {/* Grid: 3-column equal-width Skill Cards as specified in ai.work DESIGN.md */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((study, idx) => {
          // Pink highlight spectrum: #ec4899, #f472b6, #db2777
          const barColors = ['#ec4899', '#f472b6', '#db2777'];
          const accentColor = barColors[idx % barColors.length];

          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => onSelectCaseStudy(study)}
              className="aiwork-card p-6 sm:p-7 cursor-pointer flex flex-col justify-between group hover:border-pink-500/40"
            >
              <div>
                {/* Category tag & Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono tracking-wider text-pink-300 uppercase bg-[#0c0c0c] border border-pink-500/20 px-2.5 py-1 rounded-[2px]">
                    {study.category}
                  </span>
                  <div className="w-7 h-7 rounded-[100px] bg-[#0c0c0c] border border-[#d4d0c9]/15 group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-white flex items-center justify-center text-[#878581] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Tagline in Bone / White text */}
                <h3 className="text-lg sm:text-xl font-normal text-white tracking-[-0.02em] group-hover:text-[#d4d0c9] transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#878581] leading-relaxed tracking-[-0.02em]">
                  {study.tagline}
                </p>

                {/* Stat Proof Points with ai.work signature vertical bar accent */}
                <div className="my-6 space-y-3">
                  {study.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 rounded-[6px] bg-[#0c0c0c] border-l-2 flex items-center justify-between"
                      style={{ borderLeftColor: accentColor }}
                    >
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#878581]">
                        {metric.label}
                      </span>
                      <span className="text-base font-normal text-white font-mono tracking-tight">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom metadata */}
              <div className="pt-4 border-t border-[#d4d0c9]/10 flex items-center justify-between text-xs text-[#878581]">
                <span className="font-mono text-[10px] uppercase tracking-wider">{study.dateRange}</span>
                <span className="text-[#d4d0c9] text-[11px] group-hover:text-pink-400 transition-colors flex items-center gap-1 font-mono">
                  Inspect &rarr;
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
