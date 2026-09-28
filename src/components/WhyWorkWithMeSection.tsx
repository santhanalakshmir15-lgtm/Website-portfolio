import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck, HeartHandshake, Zap, Sparkles } from 'lucide-react';

export const WhyWorkWithMeSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return CheckCircle2;
      case 1: return Sparkles;
      case 2: return ShieldCheck;
      case 3: return Zap;
      case 4: return HeartHandshake;
      default: return CheckCircle2;
    }
  };

  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            A grounded, authentic, and results-focused approach to growing your digital presence without empty buzzwords or hype.
          </p>
        </div>

        {/* 5 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-lg group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg group-hover:text-purple-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-purple-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Transparent & Committed Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
