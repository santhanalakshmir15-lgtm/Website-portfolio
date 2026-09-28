import React from 'react';
import { TRAINING_SECTION } from '../data/portfolioData';
import { 
  GraduationCap, Palette, Share2, Search, Youtube, 
  Target, Globe, MessageSquare, Mail, Users, Megaphone, ArrowUpRight 
} from 'lucide-react';

interface TrainingSectionProps {
  onInviteForWorkshop: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onInviteForWorkshop }) => {
  const getTopicIcon = (index: number) => {
    switch (index) {
      case 0: return Palette;
      case 1: return Share2;
      case 2: return Search;
      case 3: return Youtube;
      case 4: return Target;
      case 5: return Globe;
      case 6: return MessageSquare;
      case 7: return Mail;
      case 8: return Users;
      case 9: return Megaphone;
      default: return GraduationCap;
    }
  };

  return (
    <section id="training" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Trainer & Educator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {TRAINING_SECTION.headline}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              {TRAINING_SECTION.subheadline}
            </p>
          </div>

          {/* Direct CTA */}
          <button
            onClick={onInviteForWorkshop}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2 whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>{TRAINING_SECTION.ctaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Training Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAINING_SECTION.topics.map((topic, idx) => {
            const Icon = getTopicIcon(idx);
            return (
              <div
                key={topic.title}
                className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {topic.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Training Features Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900/70 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="text-purple-400 font-display font-bold text-lg">
              100% Practical & Tool-Driven
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Students work live on real accounts in Canva, Meta Ads Manager, Google Analytics, and AiSensy rather than just passive theory.
            </p>
          </div>

          <div className="space-y-1.5 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 md:px-6">
            <div className="text-purple-400 font-display font-bold text-lg">
              College & Corporate Friendly
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Curricula structured for engineering colleges, arts & science campuses, incubation centers, and startup teams.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-purple-400 font-display font-bold text-lg">
              Interactive Q&A & Project Feedback
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Personalized guidance on student portfolio creations, resume tips for marketing roles, and live campaign audits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
