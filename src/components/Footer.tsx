import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, Copy, ExternalLink, Sparkles, ArrowUp } from 'lucide-react';

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
    <footer id="contact" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-gradient-to-b from-[#121624] to-[#0A0D14] border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OPEN FOR COLLABORATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto">
          Let’s create something that actually stops the scroll.
        </h2>

        <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Seeking digital marketing internships, content strategy roles, and video production opportunities in Los Angeles or remote.
        </p>

        {/* Email & Contact Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={copyToClipboard}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Send Direct Email</span>
          </a>
        </div>
      </motion.div>

      {/* Sub-footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-zinc-400 font-semibold">James Michael Morva Jr.</span>
          <span>•</span>
          <span>UCLA '28 B.A. Communication</span>
          <span>•</span>
          <span>Santa Monica College 4.0 GPA</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
