import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/VideoShowcase';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCards } from './components/EducationCards';
import { VideoModal } from './components/VideoModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Footer } from './components/Footer';
import { VideoProject, CaseStudy } from './types';

export function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-white selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Navbar with spinning logo connected to scroll */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main>
        {/* Kinetic Hero */}
        <Hero
          onWatchReels={() => scrollToSection('video-lab')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Featured Video Production Lab (Bun & Mi) */}
        <VideoShowcase onOpenModal={(video) => setSelectedVideo(video)} />

        {/* Operational Case Studies */}
        <ProjectsGrid onSelectCaseStudy={(study) => setSelectedStudy(study)} />

        {/* Experience & Skills Stack */}
        <ExperienceTimeline />

        {/* Education & Academic Honors */}
        <EducationCards />
      </main>

      {/* Footer */}
      <Footer />

      {/* Expanded Video Reel Cinema Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </div>
  );
}

export default App;
