import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080d19] py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <a 
              href="#top" 
              className="text-lg font-display font-bold text-white hover:text-purple-400 transition-colors"
            >
              {PERSONAL_INFO.name}
            </a>
            <p className="text-slate-400 text-xs">
              Digital Marketing | Mapping the Way to Digital Growth
            </p>
          </div>

          {/* Social Links - LinkedIn Only */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/santhanalakshmir"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5] text-sky-200 hover:text-white border border-[#0077b5]/40 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Professional Portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
