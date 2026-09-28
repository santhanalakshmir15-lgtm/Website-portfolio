import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenWorkshopModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b1120]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5' 
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-display font-bold tracking-tight text-white hover:text-purple-300 transition-colors shrink-0"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-white ${
                  isActive ? 'text-purple-400 font-semibold' : ''
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/918015436625?text=Hi%20Santhanalakshmi,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/30 rounded-lg transition-colors cursor-pointer"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg transition-all active:scale-[0.98] shadow-md shadow-purple-600/20 whitespace-nowrap cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded-lg sm:hidden"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e172a] border-b border-white/10 px-6 py-4 space-y-3 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm text-slate-200 hover:text-purple-400 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-center"
            >
              <span>Get In Touch / Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
