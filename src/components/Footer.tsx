import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, Copy, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jamesmorva2@g.ucla.edu';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto border-t border-[#d4d0c9]/10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="aiwork-card p-8 sm:p-14 text-center relative mb-16"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#878581] block mb-4">
          CONTACT // COLLABORATION
        </span>

        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] max-w-2xl mx-auto leading-tight">
          Let’s create something that actually stops the scroll.
        </h2>

        <p className="mt-4 text-[#878581] max-w-xl mx-auto text-sm sm:text-base leading-relaxed tracking-[-0.02em]">
          Available for digital marketing internships, content strategy roles, and video production opportunities in Los Angeles and remote.
        </p>

        {/* Email & Contact Buttons: 100px Pills as strictly required by ai.work DESIGN.md */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={copyToClipboard}
            className="aiwork-btn-primary"
          >
            {copied ? <Check className="w-3.5 h-3.5 mr-2" /> : <Copy className="w-3.5 h-3.5 mr-2" />}
            <span>{copied ? 'Copied to Clipboard' : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="aiwork-btn-ghost"
          >
            <Mail className="w-3.5 h-3.5 mr-2" />
            <span>Send Direct Email</span>
          </a>
        </div>
      </motion.div>

      {/* Sub-footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#878581] pt-8 border-t border-[#d4d0c9]/10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-[4px] bg-[#141414] border border-[#d4d0c9]/15 flex items-center justify-center text-white select-none hover:border-pink-500/40 transition-colors">
            <span className="font-serif italic font-medium text-xs tracking-tight text-white hover:text-pink-400">
              JM
            </span>
          </div>
          <span className="font-mono text-[#d4d0c9]">James Michael Morva Jr.</span>
          <span>•</span>
          <span>UCLA '28 B.A. Communication</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Santa Monica College 4.0 GPA</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="hover:text-pink-400 transition-colors flex items-center gap-1 font-mono text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
