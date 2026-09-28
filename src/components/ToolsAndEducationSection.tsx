import React, { useState } from 'react';
import { TOOLS_PLATFORMS, PERSONAL_INFO, ToolItem } from '../data/portfolioData';
import { GraduationCap, Wrench, CheckCircle2, ArrowUpRight, X, ExternalLink, Sparkles } from 'lucide-react';

export const ToolsAndEducationSection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  // High-fidelity vector logos for each marketing platform
  const renderPlatformLogo = (toolName: string) => {
    switch (toolName) {
      case 'Canva':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00C4CC] via-[#7D2AE8] to-[#00C4CC] p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <circle cx="50" cy="50" r="46" fill="url(#canva-grad)" />
                <path
                  d="M62 42C59 36 53 34 46 34C34 34 26 43 26 54C26 64 34 71 45 71C53 71 59 67 63 60L56 56C53 60 49 63 45 63C38 63 34 58 34 52C34 45 39 41 46 41C50 41 54 43 56 47L62 42Z"
                  fill="white"
                />
                <defs>
                  <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C4CC" />
                    <stop offset="100%" stopColor="#7D2AE8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        );

      case 'Meta Ads':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0668E1] via-[#0081FB] to-[#0064E0] p-0.5 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <path
                  d="M50 38C42 27 28 27 20 37C11 47 13 63 24 70C31 75 41 73 49 62C51 59 52 57 54 57C56 57 58 60 60 63C68 74 78 76 85 70C96 62 98 46 88 37C80 27 66 28 58 39L54 44L50 38Z"
                  stroke="#0081FB"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        );

      case 'Google Ads':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FBBC04] via-[#4285F4] to-[#34A853] p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                {/* Yellow diagonal bar */}
                <rect x="22" y="32" width="16" height="48" rx="8" transform="rotate(-35 22 32)" fill="#FBBC04" />
                {/* Blue diagonal bar */}
                <rect x="48" y="16" width="16" height="48" rx="8" transform="rotate(35 48 16)" fill="#4285F4" />
                {/* Green circle */}
                <circle cx="28" cy="70" r="10" fill="#34A853" />
              </svg>
            </div>
          </div>
        );

      case 'LinkedIn Ads':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[#0077b5] p-0.5 shadow-md shadow-[#0077b5]/30 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0077b5] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-7 h-7" fill="white">
                <circle cx="30" cy="30" r="10" />
                <rect x="20" y="44" width="20" height="40" rx="3" />
                <path d="M50 44H66V51C69 46 76 43 83 43C95 43 100 50 100 64V84H80V66C80 60 78 56 72 56C66 56 63 60 63 66V84H45V44H50Z" />
              </svg>
            </div>
          </div>
        );

      case 'Google Analytics':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E37400] to-[#F9AB00] p-0.5 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <rect x="20" y="58" width="14" height="24" rx="4" fill="#F9AB00" />
                <rect x="42" y="38" width="14" height="44" rx="4" fill="#E37400" />
                <rect x="64" y="20" width="14" height="62" rx="4" fill="#F9AB00" />
                <circle cx="27" cy="48" r="7" fill="#F9AB00" />
              </svg>
            </div>
          </div>
        );

      case 'ConvertKit':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FB6970] to-[#FF8C92] p-0.5 shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <path
                  d="M20 32C20 28 24 25 28 27L50 40L72 27C76 25 80 28 80 32V68C80 72 76 76 72 76H28C24 76 20 72 20 68V32Z"
                  fill="#FB6970"
                />
                <path d="M22 34L50 52L78 34" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        );

      case 'Flodesk':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6366F1] to-[#A855F7] p-0.5 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <span className="font-serif italic font-bold text-2xl text-purple-300">
                f
              </span>
            </div>
          </div>
        );

      case 'Zoho Campaigns':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E42528] via-[#009245] to-[#29ABE2] p-0.5 shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <div className="grid grid-cols-2 gap-1 w-7 h-7">
                <div className="bg-[#E42528] rounded-[3px]" />
                <div className="bg-[#009245] rounded-[3px]" />
                <div className="bg-[#29ABE2] rounded-[3px]" />
                <div className="bg-[#F7931E] rounded-[3px]" />
              </div>
            </div>
          </div>
        );

      case 'AiSensy':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#25D366] via-[#128C7E] to-[#075E54] p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <circle cx="50" cy="50" r="42" fill="#25D366" />
                <path
                  d="M50 24C36 24 24 35 24 49C24 55 26 60 30 65L26 78L40 74C43 75 46 76 50 76C64 76 76 65 76 51C76 37 64 24 50 24Z"
                  fill="white"
                />
                {/* Lightning Bolt */}
                <path d="M52 34L40 50H50L46 64L60 46H49L52 34Z" fill="#128C7E" />
              </svg>
            </div>
          </div>
        );

      case 'Pabbly':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6C5CE7] to-[#A29BFE] p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <rect x="22" y="22" width="22" height="22" rx="6" fill="#6C5CE7" />
                <rect x="56" y="22" width="22" height="22" rx="6" fill="#A29BFE" />
                <rect x="39" y="56" width="22" height="22" rx="6" fill="#FD79A8" />
                <line x1="33" y1="44" x2="50" y2="56" stroke="white" strokeWidth="4" />
                <line x1="67" y1="44" x2="50" y2="56" stroke="white" strokeWidth="4" />
              </svg>
            </div>
          </div>
        );

      case 'WordPress':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[#21759B] p-0.5 shadow-md shadow-[#21759B]/20 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <circle cx="50" cy="50" r="44" stroke="#21759B" strokeWidth="6" />
                <path
                  d="M26 44L40 76L46 58L42 44H26ZM58 44L48 76L57 48C57 45 56 44 54 44H58ZM76 44L62 76L70 44H76ZM38 34C42 34 46 36 46 40C46 44 42 47 38 47H34V34H38Z"
                  fill="#21759B"
                />
                <circle cx="50" cy="50" r="38" stroke="#21759B" strokeWidth="3" />
              </svg>
            </div>
          </div>
        );

      case 'YouTube':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF0000] to-[#CC0000] p-0.5 shadow-md shadow-red-600/30 group-hover:scale-110 transition-transform">
            <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
                <rect x="15" y="28" width="70" height="44" rx="14" fill="#FF0000" />
                <polygon points="44,40 64,50 44,60" fill="white" />
              </svg>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-white text-base">
            {toolName.substring(0, 2).toUpperCase()}
          </div>
        );
    }
  };

  const getToolUseCases = (name: string): string[] => {
    switch (name) {
      case 'Canva':
        return [
          'High-converting Instagram carousel designs and promotional posters',
          'Course marketing banners and webinar presentation slide decks',
          'Brand asset consistency across Wechai, Pantech & Leaves Technology'
        ];
      case 'Meta Ads':
        return [
          'Targeted lead generation campaigns with custom & lookalike audiences',
          'Pixel tracking, Retargeting funnels, and Instagram Story ad creative testing',
          'Delivered quality buyer leads for Karat and Carat Diamonds & Franchise partners'
        ];
      case 'Google Ads':
        return [
          'High-intent commercial keyword research and Search PPC campaigns',
          'Quality score optimization, negative keyword filtering, and CTR enhancements',
          'Course & education enrollment ad funnels for regional student cohorts'
        ];
      case 'LinkedIn Ads':
        return [
          'B2B audience targeting by job title, company size, and enterprise industry',
          'Sponsored InMail outreach and professional lead generation forms',
          'Brand positioning for executive workshops and corporate training offerings'
        ];
      case 'Google Analytics':
        return [
          'Traffic attribution analysis, user journey tracking, and conversion goal setups',
          'Bounce rate diagnosis, page-level engagement, and campaign ROI reporting',
          'Informed creative adjustments based on real-time visitor behavioral metrics'
        ];
      case 'ConvertKit':
        return [
          'Automated welcome email drips, broadcast newsletters, and audience tagging',
          'Lead magnet delivery sequences with optimized email deliverability',
          'Managed high-volume student email outreach campaigns at Pantech E Learning'
        ];
      case 'Flodesk':
        return [
          'Aesthetic, visually engaging email marketing templates with high click rates',
          'Intuitive sales funnel workflows and branded visual storytelling',
          'Customer nurture sequences for creative, retail, and design clients'
        ];
      case 'Zoho Campaigns':
        return [
          'Enterprise contact list management, contact segmentation, and bounce tracking',
          'Scheduled webinar and FDP promotional campaigns with automated follow-ups',
          'Compliance-friendly mass email distribution with detailed engagement audits'
        ];
      case 'AiSensy':
        return [
          'WhatsApp Cloud API broadcast campaigns with 90%+ open rates',
          'Automated conversational reply flows, instant lead qualification & alerts',
          'Live event reminder sequences for webinars, courses, and retail inquiries'
        ];
      case 'Pabbly':
        return [
          'Zero-code automation connecting website forms to CRMs, Google Sheets & WhatsApp',
          'Instant notification routing to sales teams upon prospect form submission',
          'Eliminated hours of manual lead entry and customer follow-up delays'
        ];
      case 'WordPress':
        return [
          'Business website creation, landing page building, and content publishing',
          'On-page SEO setup, meta description configuration, and site indexing',
          'Conversion-focused layout structuring for service providers and franchisees'
        ];
      case 'YouTube':
        return [
          'YouTube SEO: Video title optimization, high-CTR thumbnails, and tag clusters',
          'Audience retention strategies, description copywriting, and playlist curation',
          'Channel growth and discovery for educational courses and brand video assets'
        ];
      default:
        return ['Campaign optimization, execution, and performance reporting'];
    }
  };

  return (
    <section id="tools" className="py-24 border-t border-white/5 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* Tools & Platforms Grid */}
        <div>
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
              <Wrench className="w-4 h-4 text-purple-400" />
              <span>Marketing Stack & Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Tools & Platforms
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Official software, advertising networks, and automation platforms leveraged daily for high-impact marketing execution.
            </p>
          </div>

          {/* Grid with Genuine Vector Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TOOLS_PLATFORMS.map((tool) => (
              <div
                key={tool.name}
                onClick={() => setSelectedTool(tool)}
                className="group p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/5 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between text-center items-center shadow-lg cursor-pointer select-none"
              >
                {/* SVG Platform Logo */}
                <div className="mb-3.5">
                  {renderPlatformLogo(tool.name)}
                </div>

                <div className="space-y-1 w-full">
                  <div className="font-display font-bold text-white text-sm group-hover:text-purple-300 transition-colors truncate">
                    {tool.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans leading-tight truncate">
                    {tool.category}
                  </div>
                </div>

                {tool.badge ? (
                  <div className="mt-3 text-[10px] font-mono text-purple-300 bg-purple-950/70 border border-purple-500/30 px-2 py-0.5 rounded-full">
                    {tool.badge}
                  </div>
                ) : (
                  <div className="mt-3 text-[10px] text-slate-600 font-mono group-hover:text-purple-400 transition-colors">
                    Click to inspect
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tool Deep Dive Inspector Modal */}
        {selectedTool && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedTool(null)}
          >
            <div
              className="relative w-full max-w-lg bg-[#0f172a] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-7 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  {renderPlatformLogo(selectedTool.name)}
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {selectedTool.name}
                    </h3>
                    <p className="text-xs text-purple-400 font-mono">
                      {selectedTool.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTool(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Platform Overview
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedTool.description}
                </p>
              </div>

              {/* Practical Use Cases by Santhanalakshmi */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>How I Use {selectedTool.name} For Clients</span>
                </div>
                <div className="space-y-2 p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
                  {getToolUseCases(selectedTool.name).map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Proficiency: Advanced / Daily Use
                </span>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Education Section - Simple and Professional */}
        <div id="education" className="pt-12 border-t border-white/5">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Education
            </h2>
          </div>

          <div className="max-w-2xl p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 shrink-0 mt-1 sm:mt-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-sm text-purple-400 font-medium font-sans">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  {PERSONAL_INFO.education.affiliation}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
              <span className="text-xs font-mono text-slate-400">Graduation Year</span>
              <span className="text-base sm:text-lg font-display font-bold text-white">
                {PERSONAL_INFO.education.year}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
