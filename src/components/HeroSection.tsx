import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Tagline */}
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 tracking-wide uppercase mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{PERSONAL_INFO.roleTitle}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* The 3 Buttons Requested by User: Hire Me, View My Work, Let's Connect */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-purple-600/25 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-purple-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Small Highlights Requested by User */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xl font-bold font-display text-white">2+ Years</div>
                <div className="text-xs font-medium text-purple-400">Experience</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xl font-bold font-display text-white">360°</div>
                <div className="text-xs font-medium text-purple-400">Digital Marketing</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xl font-bold font-display text-white">Verified</div>
                <div className="text-xs font-medium text-purple-400">Freelance Projects</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xl font-bold font-display text-white">Trainer</div>
                <div className="text-xs font-medium text-purple-400">Workshops & Cohorts</div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[380px]">
              
              {/* Decorative backlight */}
              <div 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/30 to-blue-600/20 blur-xl opacity-70 -z-10" 
                aria-hidden="true" 
              />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl aspect-[4/5]">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950/40 to-indigo-950 p-8 text-center">
                          <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 p-1 shadow-lg shadow-purple-600/30 mb-3 flex items-center justify-center">
                            <div class="w-full h-full rounded-full bg-[#0b1120] flex items-center justify-center text-purple-300 font-display text-3xl font-bold">SR</div>
                          </div>
                          <div class="text-white font-display text-xl font-bold">${PERSONAL_INFO.name}</div>
                          <div class="text-xs text-purple-300 mt-1 font-medium">${PERSONAL_INFO.roleTitle}</div>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 space-y-1.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-display font-bold text-sm tracking-wide">
                      {PERSONAL_INFO.name}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Work
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    Social Media Manager · Meta & Google Ads · Freelance Trainer
                  </p>
                </div>
              </div>

              {/* Fast credibility badge */}
              <div className="mt-4 flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-900/60 border border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Result-driven campaigns & creative content</span>
                </div>
                <a
                  href="#contact"
                  className="text-purple-400 hover:text-purple-300 font-medium font-sans underline"
                >
                  Hire Now
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll link */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <span>Learn More About My Journey</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
