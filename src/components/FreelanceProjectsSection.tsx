import React, { useState } from 'react';
import { FREELANCE_PROJECTS, FreelanceProjectItem, ClientCreative } from '../data/portfolioData';
import { 
  Eye, ArrowUpRight, CheckCircle2, X, PlusCircle, 
  Coffee, GraduationCap, Building2, Sparkles, Image as ImageIcon,
  Tag, BarChart3, Layers
} from 'lucide-react';

export const FreelanceProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FreelanceProjectItem | null>(null);
  const [activeCreativeIdx, setActiveCreativeIdx] = useState<number>(0);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return Coffee;
      case 'GraduationCap': return GraduationCap;
      case 'Building2': return Building2;
      default: return Sparkles;
    }
  };

  const handleOpenProject = (proj: FreelanceProjectItem, creativeIndex: number = 0) => {
    setSelectedProject(proj);
    setActiveCreativeIdx(creativeIndex);
  };

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Freelance Projects & Client Creatives
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Selected freelance engagements showcasing bespoke client creatives, social media strategy, Canva designs, and practical training workshops.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FREELANCE_PROJECTS.map((proj: FreelanceProjectItem) => {
            const ProjectIcon = getProjectIcon(proj.iconName);

            return (
              <div
                key={proj.id}
                className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-purple-500/40 overflow-hidden transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Media Image / Screenshot Showcase */}
                  <div 
                    className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer"
                    onClick={() => handleOpenProject(proj, 0)}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-950 text-center">
                              <span class="text-xs font-mono text-purple-400 mb-1">CLIENT CREATIVE</span>
                              <span class="text-sm font-display font-bold text-white">${proj.client}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                    
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Client Creatives</span>
                      </span>
                    </div>

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-mono font-medium text-purple-300 border border-white/10">
                      <ProjectIcon className="w-3.5 h-3.5 text-purple-400" />
                      <span>{proj.category}</span>
                    </div>

                    {/* Creative Assets Counter */}
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-purple-400" />
                      <span>{proj.creatives.length} Creatives</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Client Header with Custom Icon */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-1.5">
                      <div className="p-1 rounded-md bg-purple-500/10 text-purple-400">
                        <ProjectIcon className="w-3.5 h-3.5" />
                      </div>
                      <span>Client: {proj.client}</span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-purple-300 transition-colors mb-2.5">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                      {proj.description}
                    </p>

                    {/* Client Creatives Thumbnail Strip */}
                    <div className="space-y-2 mb-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                      <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-purple-400" />
                          <span>Client Creatives Preview</span>
                        </span>
                        <span className="text-purple-400 text-[10px]">Click to expand</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {proj.creatives.map((creative, cIdx) => (
                          <div
                            key={creative.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenProject(proj, cIdx);
                            }}
                            className="group/item relative rounded-lg overflow-hidden border border-white/10 aspect-[4/3] bg-slate-900 cursor-pointer hover:border-purple-400 transition-colors"
                          >
                            <img
                              src={creative.image}
                              alt={creative.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                              <span className="text-[10px] text-white font-medium leading-tight truncate">
                                {creative.title}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services Delivered - Unboxed text with separator */}
                    <div className="pt-3 border-t border-white/5">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Services Provided:
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                        {proj.services.map((srv, idx) => (
                          <React.Fragment key={srv}>
                            <span className="text-purple-300 font-medium">{srv}</span>
                            {idx < proj.services.length - 1 && (
                              <span className="text-slate-600" aria-hidden="true">|</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenProject(proj, 0)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-purple-600 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Client Creatives & Results</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Creatives Upload Placeholder Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-white">
                More Social Media Creatives, Reels & Campaign Ad Samples Available
              </h4>
              <p className="text-xs text-slate-400">
                Canva posters, festive banners, video reels, and client campaign reports can be shared during our initial consultation.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Full Creative Portfolio
          </a>
        </div>

        {/* Modal Lightbox for Project & Client Creatives Showcase */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-3xl bg-[#0f172a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0b1120]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                    {(() => {
                      const Icon = getProjectIcon(selectedProject.iconName);
                      return <Icon className="w-4 h-4" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                      {selectedProject.client}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Creative Switcher Selector */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Select Client Creative Sample</span>
                    <span className="text-purple-400">
                      Creative {activeCreativeIdx + 1} of {selectedProject.creatives.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.creatives.map((c, i) => (
                      <button
                        key={c.id}
                        onClick={() => setActiveCreativeIdx(i)}
                        className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                          activeCreativeIdx === i
                            ? 'bg-purple-950/60 border-purple-500 text-white shadow-md'
                            : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-950">
                          <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-xs font-bold truncate text-white">{c.title}</div>
                          <div className="text-[10px] text-purple-300 font-mono truncate">{c.type}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Creative Display Card */}
                {selectedProject.creatives[activeCreativeIdx] && (
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
                    <div className="rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-white/10">
                      <img
                        src={selectedProject.creatives[activeCreativeIdx].image}
                        alt={selectedProject.creatives[activeCreativeIdx].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-display font-bold text-white">
                          {selectedProject.creatives[activeCreativeIdx].title}
                        </h4>
                        {selectedProject.creatives[activeCreativeIdx].metric && (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                            <BarChart3 className="w-3.5 h-3.5" />
                            <span>{selectedProject.creatives[activeCreativeIdx].metric}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1 text-purple-300">
                          <Tag className="w-3 h-3" />
                          <span>{selectedProject.creatives[activeCreativeIdx].type}</span>
                        </span>
                        <span className="text-slate-600" aria-hidden="true">·</span>
                        <span className="text-slate-300">
                          Designed with: <strong className="text-white">{selectedProject.creatives[activeCreativeIdx].tool}</strong>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                        <strong className="text-slate-400 font-medium">Campaign Purpose: </strong>
                        {selectedProject.creatives[activeCreativeIdx].objective}
                      </p>
                    </div>
                  </div>
                )}

                {/* Key Deliverables */}
                <div>
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Work Completed & Deliverables
                  </h5>
                  <div className="space-y-2">
                    {selectedProject.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services List */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-500 font-medium">Services Provided:</span>
                  {selectedProject.services.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-[#0b1120] flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Freelance Client Engagement · {selectedProject.client}
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors cursor-pointer"
                >
                  Hire for Similar Work
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
