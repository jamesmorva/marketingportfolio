import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Star, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data';

export const EducationCards: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Education & Honors
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
          A rigorous foundation in communication theory, persuasive rhetoric, and consumer behavior.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: '-30px' }}
            transition={{ duration: 0.75, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="rounded-3xl bg-[#0F121C] border border-white/10 p-6 sm:p-8 hover:border-blue-500/40 transition-colors shadow-xl relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: edu.accentColor }}
            />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                {edu.badge}
              </span>
              <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {edu.institution}
            </h3>
            <p className="text-sm font-semibold text-blue-400 mt-1">{edu.degree}</p>

            {edu.gpa && (
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>{edu.gpa} • {edu.honors}</span>
              </div>
            )}

            <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
