/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FreelanceProjectsSection } from './components/FreelanceProjectsSection';
import { TrainingSection } from './components/TrainingSection';
import { ToolsAndEducationSection } from './components/ToolsAndEducationSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'services', 'projects', 'experience', 'training', 'tools', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('top');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleInviteForWorkshop = () => {
    setSelectedService('Digital Marketing Training & Workshops');
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Fixed Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onOpenWorkshopModal={handleInviteForWorkshop}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onSelectService={handleSelectService} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Digital Marketing Skills */}
        <SkillsSection />

        {/* 4. Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Freelance Projects / Portfolio */}
        <FreelanceProjectsSection />

        {/* 5. Work Experience (Digital Marketing focus, compact programming) */}
        <ExperienceSection />

        {/* 7. Training & Workshops */}
        <TrainingSection onInviteForWorkshop={handleInviteForWorkshop} />

        {/* 9 & 8. Tools & Platforms + Education */}
        <ToolsAndEducationSection />

        {/* 10. Why Work With Me */}
        <WhyWorkWithMeSection />

        {/* 11. Contact / Hire Me */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
