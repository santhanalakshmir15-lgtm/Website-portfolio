import React from 'react';
import { WORK_EXPERIENCES, ExperienceItem } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, Check } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            A comprehensive record of my digital marketing journey across e-learning, luxury brands, agencies, and internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {WORK_EXPERIENCES.map((exp: ExperienceItem) => {
            // Keep programming experience compact and visually subordinate as requested
            if (exp.isProgramming) {
              return (
                <div key={exp.id} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 border-2 border-[#0b1120]" />

                  {/* Compact container */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900/30 border border-white/5 text-slate-400 text-xs sm:text-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-300">{exp.role}</span>
                        <span className="text-slate-600" aria-hidden="true">·</span>
                        <span className="text-slate-400">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-slate-600" aria-hidden="true">·</span>
                            <span className="text-slate-500">{exp.location}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            }

            // Digital Marketing experiences receive full rich card treatment
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div className={`absolute -left-[33px] sm:-left-[41px] top-2 w-4 h-4 rounded-full border-2 border-[#0b1120] transition-colors ${
                  exp.isCurrent ? 'bg-purple-500 shadow-md shadow-purple-500/50' : 'bg-slate-500'
                }`} />

                {/* Card */}
                <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  exp.isCurrent 
                    ? 'bg-slate-900/80 border-purple-500/30 shadow-xl shadow-purple-950/20' 
                    : 'bg-slate-900/40 border-white/5 hover:border-white/15'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="text-[11px] font-semibold text-purple-300 bg-purple-950/80 border border-purple-500/40 px-2 py-0.5 rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-purple-400 font-medium mt-1">
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-slate-600" aria-hidden="true">·</span>
                            <span className="text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-500" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {exp.description}
                  </p>

                  {/* Key Skills Unboxed Metadata */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    <span className="text-slate-500 font-medium">Core Skills:</span>
                    {exp.keySkills.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span className="text-slate-300">{skill}</span>
                        {idx < exp.keySkills.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
