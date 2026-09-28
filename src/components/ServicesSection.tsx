import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { 
  Share2, Compass, Calendar, Palette, Film, 
  Search, Target, TrendingUp, UserCheck, MessageCircle, 
  Mail, Cpu, Globe, GraduationCap, ArrowUpRight 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Social Media', 'Design & Video', 'Paid Ads & SEO', 'Automation & Web', 'Training'];

  const getServiceCategoryFilter = (category: string) => {
    switch (category) {
      case 'Social Media':
      case 'Strategy':
      case 'Content':
        return 'Social Media';
      case 'Design':
      case 'Video':
        return 'Design & Video';
      case 'Paid Ads':
      case 'SEO':
      case 'Growth':
        return 'Paid Ads & SEO';
      case 'Messaging':
      case 'Automation':
      case 'Web':
        return 'Automation & Web';
      case 'Training':
        return 'Training';
      default:
        return 'Other';
    }
  };

  const filteredServices = activeTab === 'All'
    ? SERVICES
    : SERVICES.filter(s => getServiceCategoryFilter(s.category) === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return Share2;
      case 'Compass': return Compass;
      case 'Calendar': return Calendar;
      case 'Palette': return Palette;
      case 'Film': return Film;
      case 'Search': return Search;
      case 'Target': return Target;
      case 'TrendingUp': return TrendingUp;
      case 'UserCheck': return UserCheck;
      case 'MessageCircle': return MessageCircle;
      case 'Mail': return Mail;
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      case 'GraduationCap': return GraduationCap;
      default: return Target;
    }
  };

  return (
    <section id="services" className="py-24 border-t border-white/5 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
              Client Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Digital Marketing Services
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Tailored services for growing businesses, startups, creators, and institutions looking to amplify their digital impact.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-lg group-hover:text-purple-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Available for Freelance</span>
                  <button
                    onClick={() => {
                      onSelectService(service.title);
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border border-purple-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-1">
              Need a Custom Digital Marketing Package?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Whether you need monthly social media retainers, ad campaign setups, or a tailored workshop series, let's craft a solution suited to your budget and growth targets.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all shadow-lg shadow-purple-600/30 shrink-0 cursor-pointer"
          >
            Request Custom Proposal
          </a>
        </div>

      </div>
    </section>
  );
};
