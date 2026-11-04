import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Cpu } from 'lucide-react';
import { CORE_SKILLS } from '../data';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#878581] block mb-3">
          TRAJECTORY // SKILLS
        </span>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
          Experience & Competencies
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#878581] max-w-xl tracking-[-0.02em]">
          Frontline customer advocacy and high-volume operations paired with precision video editing and creative tooling.
        </p>
      </motion.div>

      {/* Balanced 2-Column Grid of ai.work Skill Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Target Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="aiwork-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#d4d0c9]/10">
              <div>
                <h3 className="text-lg sm:text-xl font-normal text-white tracking-[-0.02em] flex items-center gap-2">
                  <span>Target</span>
                  <span className="text-xs font-mono text-[#878581]">/ Operations</span>
                </h3>
                <p className="text-xs font-mono text-[#d4d0c9] mt-1">Cashier and Guest Advocate</p>
              </div>
              <span className="self-start sm:self-auto text-[10px] font-mono text-[#878581] uppercase tracking-wider bg-[#0c0c0c] border border-[#d4d0c9]/10 px-2.5 py-1 rounded-[2px]">
                Oct 2025 - Jun 2026
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#878581] leading-relaxed tracking-[-0.02em]">
              High-volume customer advocacy and transaction operations in a fast-paced retail flagship environment.
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1fe274] shrink-0 mt-1.5" />
                <span>Collaborated with 20+ team members during peak traffic periods to maintain seamless operational efficiency</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1fe274] shrink-0 mt-1.5" />
                <span>Resolved customer inquiries, returns, and digital app loyalty questions with composure and speed</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1fe274] shrink-0 mt-1.5" />
                <span>Recognized for exceptional attendance and consistent positive guest satisfaction ratings</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#d4d0c9]/10 flex flex-wrap gap-2">
            {['Conflict Resolution', 'Point of Sale (POS)', 'High-Pressure Operations', 'Team Collaboration'].map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-[2px] bg-[#0c0c0c] border border-[#d4d0c9]/10 text-[10px] font-mono uppercase tracking-wider text-[#878581]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Core Production Stack */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aiwork-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#d4d0c9]/10">
              <div>
                <h3 className="text-lg sm:text-xl font-normal text-white tracking-[-0.02em] flex items-center gap-2">
                  <span>Core Production Stack</span>
                  <span className="text-xs font-mono text-[#878581]">/ Tooling</span>
                </h3>
                <p className="text-xs font-mono text-[#d4d0c9] mt-1">Video Editing & Creative Execution</p>
              </div>
              <span className="self-start sm:self-auto text-[10px] font-mono text-[#1fe274] uppercase tracking-wider bg-[#0c0c0c] border border-[#1fe274]/20 px-2.5 py-1 rounded-[2px]">
                Active Stack
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#878581] leading-relaxed tracking-[-0.02em]">
              Software toolkit and production competencies applied across high-retention commercial video editing and creative strategy.
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8f0] shrink-0 mt-1.5" />
                <span>Short-form commercial video assembly, multi-track audio sync, and kinetic pacing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8f0] shrink-0 mt-1.5" />
                <span>Pattern-interrupt hook strategy, first-2-second retention optimization, and visual framing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d4d0c9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8f0] shrink-0 mt-1.5" />
                <span>Spreadsheet modeling, quantitative performance analysis, and social asset creation</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#d4d0c9]/10 flex flex-wrap gap-2">
            {CORE_SKILLS.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-[2px] bg-[#0c0c0c] border border-[#d4d0c9]/10 text-[10px] font-mono uppercase tracking-wider text-[#878581] hover:text-[#d4d0c9] transition-colors"
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
