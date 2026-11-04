import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Rocket, Users, Wrench } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RESUME_RAW_TEXT = `James Michael Morva Jr
jamesmorva2@g.ucla.edu | (310)-466-4205 | Santa Monica, CA | https://www.linkedin.com/in/james-michael-morva-jr/

EDUCATION
University of California, Los Angeles (UCLA) - Westwood, CA
Bachelor of Arts in Communication (Sept 2026 - Jun 2028)

Santa Monica College (SMC) - Santa Monica, CA
Associate of Communication Studies; Dean's List; GPA: 4.0 (Sept 2024 - Jun 2026)

EXPERIENCE
Target - Santa Monica, California
Cashier and Guest Advocate (Oct 2025 - Jun 2026)
* Guest Experience & Issue Resolution: Resolved guest concerns and de-escalated conflicts, contributing to efficient issue resolution and positive customer experiences.
* Team Collaboration: Collaborated with 20+ team members and supervisors during peak traffic periods to maintain operational efficiency and deliver consistent guest service.

PROJECTS
Bun & Mi - Los Angeles, California
Digital Marketing & Brand Strategy Consultant (Jul 2026 - Sept 2026)
* Content & Campaign Strategy: Developed digital marketing campaigns and content roadmaps for a family-owned restaurant, executing tailored content to establish a cohesive brand identity and narrative. Utilizing Instagram and Meta Ads Manager.
* Brand Positioning & Audience Growth: Directed brand strategy and messaging across digital platforms, driving 48.3k total brand impressions and achieving a 35% increase in overall audience engagement during the consulting period.

Kicks.withjay - Los Angeles, California
Co-Founder and Head of Marketing (Jun 2021 - Sept 2026)
* Business Operations & Growth: Managed the end-to-end sale of 100+ pairs of shoes, generating $5,000+ in revenue through data-driven purchasing decisions and customer-focused execution.
* Search Engine Optimization: Created and optimized product listings on eBay and GOAT using compelling descriptions and visual presentation to improve engagement and conversion rates.

EXTRACURRICULARS
Filipino Association Club - Santa Monica, California
Co-Founder & Event Coordinator (Sept 2024 - Jun 2025)
* Stakeholder Liaison & Governance: Served as primary liaison between 8-member executive board and college administration, ensuring 100% compliance with campus policies.
* Program & Event Management: Co-organized 6 major campus events and secured $1,500+ in student activity funding, driving active engagement across a 50+ member organization.

SKILLS
* Marketing & Digital Tools: Meta Ads Manager, Instagram Analytics, Canva, CapCut, Premiere Pro
* Technical & Productivity Skills: Microsoft Excel, Google Workspace, SEO Optimization, E-commerce Management (eBay, GOAT)
`;

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(RESUME_RAW_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([RESUME_RAW_TEXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'James_Michael_Morva_Jr_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0d0d0d] border border-[#d4d0c9]/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[#d4d0c9]/10 bg-[#141414]/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-[4px] bg-[#1a1a1a] border border-[#d4d0c9]/20 flex items-center justify-center text-white">
                <span className="font-serif italic font-medium text-xs tracking-tight text-white">JM</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white tracking-tight">Curriculum Vitae</h3>
                <p className="text-[11px] text-[#878581]">James Michael Morva Jr • UCLA '28</p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                title="Print or Save as PDF"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#d4d0c9] bg-[#1c1c1c] hover:bg-pink-500/20 hover:text-pink-300 border border-[#d4d0c9]/10 hover:border-pink-500/40 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-pink-400" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={handleDownload}
                title="Download plain text resume"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#d4d0c9] bg-[#1c1c1c] hover:bg-pink-500/20 hover:text-pink-300 border border-[#d4d0c9]/10 hover:border-pink-500/40 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-pink-400" />
                <span className="hidden xs:inline">Download</span>
              </button>

              <button
                onClick={handleCopy}
                title="Copy entire resume text"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#d4d0c9] bg-[#1c1c1c] hover:bg-pink-500/20 hover:text-pink-300 border border-[#d4d0c9]/10 hover:border-pink-500/40 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-pink-400" /> : <Copy className="w-3.5 h-3.5 text-pink-400" />}
                <span className="hidden xs:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#878581] hover:text-white hover:bg-white/10 rounded-full transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body / Formatted Resume */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-4 print:text-black">
            {/* Candidate Header */}
            <div className="border-b border-[#d4d0c9]/10 pb-6">
              <h1 className="text-2xl sm:text-4xl font-light text-white tracking-[-0.03em] leading-tight">
                James Michael Morva Jr
              </h1>
              <p className="text-sm font-normal text-pink-400 mt-1">
                Communication Studies & Digital Marketing Strategist • UCLA '28
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#878581]">
                <a
                  href="mailto:jamesmorva2@g.ucla.edu"
                  className="flex items-center gap-1.5 hover:text-pink-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-pink-400" />
                  <span>jamesmorva2@g.ucla.edu</span>
                </a>
                <span className="text-[#615f5c] hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-pink-400" />
                  <span>(310) 466-4205</span>
                </span>
                <span className="text-[#615f5c] hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>Santa Monica, CA</span>
                </span>
                <span className="text-[#615f5c] hidden sm:inline">•</span>
                <a
                  href="https://www.linkedin.com/in/james-michael-morva-jr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <span>linkedin.com/in/james-michael-morva-jr</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Section: Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
                <BookOpen className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-white font-medium text-sm">University of California, Los Angeles (UCLA)</span>
                    <span className="text-xs text-[#878581]">Sept 2026 – Jun 2028 | Westwood, CA</span>
                  </div>
                  <p className="text-xs text-[#d4d0c9] mt-1 font-normal">
                    Bachelor of Arts in Communication
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-white font-medium text-sm">Santa Monica College (SMC)</span>
                    <span className="text-xs text-[#878581]">Sept 2024 – Jun 2026 | Santa Monica, CA</span>
                  </div>
                  <p className="text-xs text-[#d4d0c9] mt-1 font-normal">
                    Associate of Communication Studies; <span className="text-pink-400 font-medium">Dean's List; GPA: 4.0</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-white font-medium text-sm">Target</span>
                  <span className="text-xs text-[#878581]">Oct 2025 – Jun 2026 | Santa Monica, CA</span>
                </div>
                <p className="text-xs text-pink-300 mt-0.5 font-normal">Cashier and Guest Advocate</p>
                <ul className="mt-3 space-y-2 text-xs text-[#878581] leading-relaxed list-disc list-inside">
                  <li>
                    <strong className="text-[#d4d0c9] font-medium">Guest Experience & Issue Resolution:</strong> Resolved guest concerns and de-escalated conflicts, contributing to efficient issue resolution and positive customer experiences.
                  </li>
                  <li>
                    <strong className="text-[#d4d0c9] font-medium">Team Collaboration:</strong> Collaborated with 20+ team members and supervisors during peak traffic periods to maintain operational efficiency and deliver consistent guest service.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
                <Rocket className="w-4 h-4" />
                <span>Featured Projects & Ventures</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-white font-medium text-sm">Bun & Mi</span>
                    <span className="text-xs text-[#878581]">Jul 2026 – Sept 2026 | Los Angeles, CA</span>
                  </div>
                  <p className="text-xs text-pink-300 mt-0.5 font-normal">Digital Marketing & Brand Strategy Consultant</p>
                  <ul className="mt-3 space-y-2 text-xs text-[#878581] leading-relaxed list-disc list-inside">
                    <li>
                      <strong className="text-[#d4d0c9] font-medium">Content & Campaign Strategy:</strong> Developed digital marketing campaigns and content roadmaps for a family-owned restaurant, executing tailored content to establish a cohesive brand identity and narrative utilizing Instagram and Meta Ads Manager.
                    </li>
                    <li>
                      <strong className="text-[#d4d0c9] font-medium">Brand Positioning & Audience Growth:</strong> Directed brand strategy and messaging across digital platforms, driving <span className="text-pink-400 font-semibold">48.3k total brand impressions</span> and achieving a <span className="text-pink-400 font-semibold">35% increase in overall audience engagement</span> during the consulting period.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-white font-medium text-sm">Kicks.withjay</span>
                    <span className="text-xs text-[#878581]">Jun 2021 – Sept 2026 | Los Angeles, CA</span>
                  </div>
                  <p className="text-xs text-pink-300 mt-0.5 font-normal">Co-Founder and Head of Marketing</p>
                  <ul className="mt-3 space-y-2 text-xs text-[#878581] leading-relaxed list-disc list-inside">
                    <li>
                      <strong className="text-[#d4d0c9] font-medium">Business Operations & Growth:</strong> Managed the end-to-end sale of 100+ pairs of shoes, generating <span className="text-pink-400 font-semibold">$5,000+ in revenue</span> through data-driven purchasing decisions and customer-focused execution.
                    </li>
                    <li>
                      <strong className="text-[#d4d0c9] font-medium">Search Engine Optimization:</strong> Created and optimized product listings on eBay and GOAT using compelling descriptions and visual presentation to improve engagement and conversion rates.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Extracurriculars */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
                <Users className="w-4 h-4" />
                <span>Extracurricular Leadership</span>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-white font-medium text-sm">Filipino Association Club</span>
                  <span className="text-xs text-[#878581]">Sept 2024 – Jun 2025 | Santa Monica, CA</span>
                </div>
                <p className="text-xs text-pink-300 mt-0.5 font-normal">Co-Founder & Event Coordinator</p>
                <ul className="mt-3 space-y-2 text-xs text-[#878581] leading-relaxed list-disc list-inside">
                  <li>
                    <strong className="text-[#d4d0c9] font-medium">Stakeholder Liaison & Governance:</strong> Served as primary liaison between 8-member executive board and college administration, ensuring 100% compliance with campus policies.
                  </li>
                  <li>
                    <strong className="text-[#d4d0c9] font-medium">Program & Event Management:</strong> Co-organized 6 major campus events and secured <span className="text-pink-400 font-semibold">$1,500+ in student activity funding</span>, driving active engagement across a 50+ member organization.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
                <Wrench className="w-4 h-4" />
                <span>Skills & Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                  <span className="text-xs text-pink-400 font-medium uppercase tracking-wider block mb-2">Marketing & Digital Tools</span>
                  <p className="text-xs text-[#d4d0c9] leading-relaxed">
                    Meta Ads Manager, Instagram Analytics, Canva, CapCut, Adobe Premiere Pro, Content Strategy, Audience Growth
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-[#d4d0c9]/10">
                  <span className="text-xs text-pink-400 font-medium uppercase tracking-wider block mb-2">Technical & Productivity Skills</span>
                  <p className="text-xs text-[#d4d0c9] leading-relaxed">
                    Microsoft Excel, Google Workspace, SEO Optimization, E-commerce Management (eBay, GOAT), Campaign Reporting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-[#d4d0c9]/10 bg-[#141414] flex flex-wrap items-center justify-between gap-3 text-xs text-[#878581]">
            <div className="flex items-center gap-2">
              <span className="text-pink-400 font-medium">Direct Inquiries:</span>
              <a href="mailto:jamesmorva2@g.ucla.edu" className="hover:text-white transition-colors underline">
                jamesmorva2@g.ucla.edu
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="aiwork-btn-ghost !text-xs !py-1.5 !px-3"
              >
                <Download className="w-3.5 h-3.5 mr-1 text-pink-400" />
                Download .txt
              </button>
              <button
                onClick={onClose}
                className="aiwork-btn-primary !text-xs !py-1.5 !px-4"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
