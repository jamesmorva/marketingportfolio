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
    <section id="case-studies" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>OPERATIONAL CASE STUDIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Proof of Execution
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
          Real campaigns, financial models, and campus governance initiatives delivered with quantitative discipline.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: '-30px' }}
            transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            onClick={() => onSelectCaseStudy(study)}
            className="group cursor-pointer rounded-3xl bg-[#0F121C] border border-white/10 p-6 sm:p-8 hover:border-blue-500/40 transition-colors duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            {/* Top glowing ambient highlight on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all duration-300" />

            <div>
              {/* Category pill & Arrow */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono tracking-wide text-zinc-400 uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                  {study.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-blue-600 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                {study.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {study.tagline}
              </p>

              {/* Key Metrics Grid */}
              <div className="my-6 grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                {study.metrics.slice(0, 2).map((metric, mIdx) => (
                  <div key={mIdx}>
                    <p className="text-lg font-black text-white font-mono">{metric.value}</p>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom tags & date */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
              <span className="font-mono text-[11px]">{study.dateRange}</span>
              <span className="text-blue-400 font-medium group-hover:underline text-[11px] flex items-center gap-1">
                View Case Study &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
