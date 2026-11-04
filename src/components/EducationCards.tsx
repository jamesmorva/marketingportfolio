import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Star, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data';

export const EducationCards: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#878581] block mb-3">
          ACADEMIC // FOUNDATION
        </span>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
          Education & Honors
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#878581] max-w-xl tracking-[-0.02em]">
          Rigorous foundation in communication theory, consumer behavior, and media production rhetoric.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="aiwork-card p-6 sm:p-8 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4d0c9] bg-[#0c0c0c] border border-[#d4d0c9]/10 px-2.5 py-1 rounded-[2px]">
                  {edu.badge}
                </span>
                <span className="text-[10px] font-mono text-[#878581] uppercase tracking-wider">{edu.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-white tracking-[-0.02em]">
                {edu.institution}
              </h3>
              <p className="text-xs font-mono text-[#878581] mt-1">{edu.degree}</p>

              {edu.gpa && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#0c0c0c] border border-[#1fe274]/20 text-[11px] font-mono text-[#1fe274]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1fe274]" />
                  <span>{edu.gpa} • {edu.honors}</span>
                </div>
              )}

              <p className="mt-4 text-xs sm:text-sm text-[#878581] leading-relaxed tracking-[-0.02em]">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
