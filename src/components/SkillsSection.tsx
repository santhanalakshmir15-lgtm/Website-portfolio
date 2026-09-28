import React, { useState } from 'react';
import { DIGITAL_MARKETING_SKILLS } from '../data/portfolioData';
import { 
  Share2, Compass, Target, TrendingUp, Users, 
  Youtube, MessageSquare, Mail, Palette, 
  Search, Globe, Megaphone, Cpu, CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'social' | 'ads' | 'seo' | 'automation' | 'content'>('all');

  const filteredSkills = filter === 'all'
    ? DIGITAL_MARKETING_SKILLS
    : DIGITAL_MARKETING_SKILLS.filter(s => s.category === filter);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'smm': return Share2;
      case 'sms-plan': return Compass;
      case 'meta-ads': return Target;
      case 'google-ads': return TrendingUp;
      case 'linkedin-ads': return Users;
      case 'lead-gen': return Target;
      case 'youtube-seo': return Youtube;
      case 'whatsapp-marketing': return MessageSquare;
      case 'email-marketing': return Mail;
      case 'graphic-design': return Palette;
      case 'seo': return Search;
      case 'website-creation': return Globe;
      case 'brand-promotion': return Megaphone;
      case 'marketing-automation': return Cpu;
      default: return CheckCircle2;
    }
  };

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'social', label: 'Social Media' },
    { key: 'ads', label: 'Paid Ads & Leads' },
    { key: 'seo', label: 'SEO & YouTube' },
    { key: 'automation', label: 'Email & Automation' },
    { key: 'content', label: 'Creative & Design' },
  ] as const;

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
              Capabilities & Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Digital Marketing Skills
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Strategic, technical, and creative proficiencies built over 2+ years of execution across diverse industries.
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-white/10 rounded-xl">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === c.key
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = getSkillIcon(skill.id);
            return (
              <div
                key={skill.id}
                className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Platforms & Tools Unboxed Metadata with Separators */}
                {(skill.platforms || skill.tools) && (
                  <div className="pt-3 border-t border-white/5 text-xs text-slate-400">
                    {skill.platforms && (
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-slate-500 font-medium">Platforms:</span>
                        {skill.platforms.map((p, idx) => (
                          <React.Fragment key={p}>
                            <span className="text-slate-300 font-medium">{p}</span>
                            {idx < skill.platforms!.length - 1 && (
                              <span className="text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {skill.tools && (
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-slate-500 font-medium">Key Tools:</span>
                        {skill.tools.map((t, idx) => (
                          <React.Fragment key={t}>
                            <span className="text-purple-300 font-medium">{t}</span>
                            {idx < skill.tools!.length - 1 && (
                              <span className="text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlighted Tools Notice Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900/60 to-indigo-950/30 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-display font-bold text-white">
              Hands-on Proficiency with Industry Tools
            </h4>
            <p className="text-xs text-slate-400">
              Canva · ConvertKit · Flodesk · Zoho Campaigns · AiSensy · Pabbly · Google Analytics · WordPress
            </p>
          </div>
          <a
            href="#tools"
            className="px-4 py-2 text-xs font-semibold text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-colors whitespace-nowrap"
          >
            View Full Toolchain
          </a>
        </div>

      </div>
    </section>
  );
};
