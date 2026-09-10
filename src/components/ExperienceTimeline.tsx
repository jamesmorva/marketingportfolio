import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Cpu } from 'lucide-react';
import { CORE_SKILLS } from '../data';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>OPERATIONAL TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Experience & Execution
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
          Retail frontline guest operations paired with video editing and creative production tooling.
        </p>
      </motion.div>

      {/* Balanced 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Target Section */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15, margin: '-30px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="rounded-3xl bg-[#0F121C] border border-white/10 p-6 sm:p-8 hover:border-blue-500/30 transition-colors shadow-xl h-full flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Target</span>
                  <span className="text-xs font-mono font-normal text-zinc-500">/ Operations</span>
                </h3>
                <p className="text-sm font-semibold text-blue-400 mt-0.5">Cashier and Guest Advocate</p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                Oct 2025 - Jun 2026
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              High-volume customer advocacy and transaction operations in a fast-paced retail flagship environment.
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Collaborated with 20+ team members during peak traffic periods to maintain seamless operational efficiency</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Resolved customer inquiries, returns, and digital app loyalty questions with composure and speed</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Recognized for exceptional attendance and consistent positive guest satisfaction ratings</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {['Conflict Resolution', 'Point of Sale (POS)', 'High-Pressure Operations', 'Team Collaboration'].map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Core Production Stack (Evened Out with Target) */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15, margin: '-30px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="rounded-3xl bg-[#0F121C] border border-white/10 p-6 sm:p-8 hover:border-blue-500/30 transition-colors shadow-xl h-full flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Core Production Stack</span>
                  <span className="text-xs font-mono font-normal text-zinc-500">/ Tooling</span>
                </h3>
                <p className="text-sm font-semibold text-blue-400 mt-0.5">Video Editing & Creative Execution</p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                Active Stack
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Software toolkit and production competencies applied across high-retention commercial video editing and creative strategy.
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Short-form commercial video assembly, multi-track audio sync, and kinetic pacing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Pattern-interrupt hook strategy, first-2-second retention optimization, and visual framing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Spreadsheet modeling, quantitative performance analysis, and social asset creation</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {CORE_SKILLS.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-zinc-400 hover:text-white hover:border-blue-500/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
