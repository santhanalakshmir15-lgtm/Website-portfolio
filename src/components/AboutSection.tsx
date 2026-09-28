import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Target, Sparkles, Workflow, GraduationCap, ArrowUpRight, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Strategy & Performance Campaigns",
      desc: "Planning targeted Meta Ads, Google Ads, and SEO to connect brands with their ideal buyers and drive real customer acquisition."
    },
    {
      icon: Sparkles,
      title: "Engaging Content & Creative Design",
      desc: "Designing aesthetic Canva posters, carousels, and high-retention video reels tailored to brand guidelines."
    },
    {
      icon: Workflow,
      title: "Smart Marketing Automation",
      desc: "Setting up automated WhatsApp flows with AiSensy, email sequences with ConvertKit/Flodesk, and webhooks via Pabbly."
    },
    {
      icon: GraduationCap,
      title: "Workshops & Practical Training",
      desc: "Equipping college students and aspiring marketers with hands-on digital skills through interactive sessions."
    }
  ];

  const highlights = [
    "Social Media Marketing & Content Calendars",
    "Meta Ads & Google Search Ads",
    "Search Engine Optimization (SEO) & YouTube SEO",
    "Lead Generation & Multi-Channel Funnels",
    "WhatsApp Marketing (AiSensy) & Email Automation",
    "Canva Creative Poster & Reel Design"
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {PERSONAL_INFO.aboutTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Visual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Prose + Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-white/10 space-y-5 shadow-xl">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                {PERSONAL_INFO.aboutParagraphs[0]}
              </p>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {PERSONAL_INFO.aboutParagraphs[1]}
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                What I Bring to the Table
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all shadow-md shadow-purple-600/20"
              >
                <span>Explore Available Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white underline transition-colors"
              >
                Inquire for Freelance Work
              </a>
            </div>
          </div>

          {/* Right Column: 4 Visual Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
