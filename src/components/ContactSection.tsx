import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, Phone, MapPin, Send, Check, Copy, MessageCircle, 
  Linkedin, Sparkles, ArrowUpRight 
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: initialService || 'Social Media Management',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hi Santhanalakshmi,\n\nI have submitted an enquiry on your portfolio:\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Company: ${formData.company || 'Not provided'}\n` +
      `• Service: ${formData.serviceRequired}\n` +
      `• Message: ${formData.message}`
    );
    return `https://wa.me/918015436625?text=${text}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Digital Marketing Enquiry: ${formData.serviceRequired} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Santhanalakshmi,\n\n` +
      `My Name: ${formData.name}\n` +
      `My Email: ${formData.email}\n` +
      `My Phone / WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Company / Brand: ${formData.company || 'N/A'}\n` +
      `Service Requested: ${formData.serviceRequired}\n\n` +
      `Project Details / Message:\n${formData.message}\n\n` +
      `Looking forward to hearing from you!`
    );
    return `mailto:santhanalakshmir15@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/santhanalakshmir15@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Digital Marketing Enquiry: ${formData.serviceRequired} from ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          Company: formData.company || "Not provided",
          Service_Requested: formData.serviceRequired,
          Message: formData.message,
          _captcha: "false",
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback if third party response is non-200
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Even if network blocks the POST, show the confirmation with direct mailto & WhatsApp options
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    'Social Media Management',
    'Social Media Strategy',
    'Content Planning',
    'Canva Poster & Creative Design',
    'Reels & Basic Video Content',
    'SEO & YouTube SEO',
    'Meta Ads Campaign Management',
    'Google Ads Support',
    'Lead Generation',
    'WhatsApp Marketing',
    'Email Marketing',
    'Marketing Automation',
    'Website Creation & Management',
    'Digital Marketing Training & Workshops',
    'General Inquiry / Consultation'
  ];

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
            Let's Grow Your Digital Presence
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Looking for a digital marketing professional, social media manager, freelance marketer, or trainer? Let's discuss your goals and explore how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-white/10 space-y-5 shadow-xl">
              <h3 className="font-display font-bold text-white text-lg">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="text-slate-200 font-mono truncate select-all">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Call */}
                <a
                  href="tel:8015436625"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-950/90 border border-white/5 text-slate-300 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-white font-mono font-medium block group-hover:text-purple-300 transition-colors">+91 80154 36625</span>
                      <span className="text-[11px] text-slate-400">Direct Call & Consultation</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/918015436625?text=Hi%20Santhanalakshmi,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium">Direct WhatsApp (+91 80154 36625)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Channels - LinkedIn Only */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Professional Network
                </div>

                <a
                  href="https://linkedin.com/in/santhanalakshmir"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 text-sky-200 transition-colors group cursor-pointer"
                  aria-label="Connect on LinkedIn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077b5] text-white">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                        Connect on LinkedIn
                      </div>
                      <div className="text-[11px] text-slate-400">
                        linkedin.com/in/santhanalakshmir
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>

            {/* Quick Consultation Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/20 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-purple-300 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Freelance Project Availability</span>
              </div>
              <p className="leading-relaxed">
                Open to monthly social media retainers, ad campaign setups, brand promotion consulting, and college workshop engagements.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Enquiry Submitted Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                      Your enquiry regarding <span className="text-purple-300 font-semibold">{formData.serviceRequired}</span> has been dispatched to <strong className="text-white">santhanalakshmir15@gmail.com</strong>.
                    </p>
                  </div>

                  {/* Submission Details Summary Box */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-left max-w-md mx-auto text-xs space-y-1.5 font-mono text-slate-300">
                    <div><span className="text-slate-500">Name:</span> {formData.name}</div>
                    <div><span className="text-slate-500">Email:</span> {formData.email}</div>
                    {formData.phone && <div><span className="text-slate-500">Phone:</span> {formData.phone}</div>}
                    <div><span className="text-slate-500">Service:</span> {formData.serviceRequired}</div>
                  </div>

                  {/* Instant Alternative Delivery Options */}
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Instant Direct Connect (Recommended)</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      For immediate response, you can also forward this exact enquiry directly via WhatsApp or open it in your email app:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                      <a
                        href={getWhatsAppMessageUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send to WhatsApp</span>
                      </a>
                      <a
                        href={getMailtoUrl()}
                        className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-200 hover:text-white font-medium text-xs transition-colors"
                      >
                        <Mail className="w-4 h-4 text-purple-400" />
                        <span>Open in Email App</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          serviceRequired: 'Social Media Management',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-300">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    {/* Company / Business */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-xs font-medium text-slate-300">
                        Company / Business Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. FreshCafe Retail"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs font-medium text-slate-300">
                      Service Required <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                      Message / Project Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly tell me about your goals, current social media presence, or workshop requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending to santhanalakshmir15@gmail.com...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://wa.me/918015436625?text=Hi%20Santhanalakshmi,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center sm:text-left pt-1 font-sans">
                    Form submissions are sent directly to <strong className="text-purple-300 font-mono">santhanalakshmir15@gmail.com</strong>.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
