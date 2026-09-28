export interface SkillItem {
  id: string;
  name: string;
  category: 'social' | 'ads' | 'content' | 'automation' | 'seo';
  description: string;
  platforms?: string[];
  tools?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  iconName: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  isProgramming?: boolean;
  description: string;
  keySkills: string[];
}

export interface ClientCreative {
  id: string;
  title: string;
  type: string;
  image: string;
  tool: string;
  objective: string;
  metric?: string;
}

export interface FreelanceProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  iconName: string;
  description: string;
  services: string[];
  image: string;
  deliverables: string[];
  creatives: ClientCreative[];
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  color: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Santhanalakshmi R",
  roleTitle: "Digital Marketing Professional & Freelancer",
  headline: "Digital Marketing That Maps the Way to Growth",
  subheadline: "Digital Marketing Professional helping businesses build their online presence, reach the right audience, generate leads, and grow through effective digital strategies.",
  
  aboutTitle: "About Me",
  aboutParagraphs: [
    "Digital Marketing professional with 2 years of experience in Social Media Marketing, SEO, Google Ads, Meta Ads, Lead Generation, WhatsApp Marketing, YouTube SEO, Email Marketing, Website Creation, and Marketing Automation. Skilled in developing result-oriented marketing strategies, creating engaging content, managing social media platforms, building websites, automating marketing processes, and executing digital campaigns to strengthen brand visibility and generate quality leads.",
    "Passionate about helping businesses grow through effective digital marketing strategies and smart automation. Also experienced as a Freelance Digital Marketing Trainer, conducting practical workshops and training sessions for students and beginners."
  ],

  profileImage: "/src/assets/images/female_marketer_avatar_1790615889718.jpg",
  email: "santhanalakshmir15@gmail.com",
  phone: "+91 80154 36625",
  rawPhone: "8015436625",
  location: "Chennai, Tamil Nadu, India · Available for Freelance & Remote Worldwide",
  
  stats: [
    { value: "2+ Years", label: "Experience", desc: "Digital Marketing Strategy" },
    { value: "10+", label: "Key Marketing Domains", desc: "Ads, SEO, Social, Automation" },
    { value: "3+", label: "Client Freelance Projects", desc: "Franchise, Tech, Construction" },
    { value: "Active", label: "Digital Marketing Trainer", desc: "Hands-on Student Workshops" }
  ],

  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/santhanalakshmir", username: "in/santhanalakshmir" }
  ],

  education: {
    degree: "B.E. Computer Science",
    institution: "Dhaanish Ahmed College of Engineering, Chennai",
    affiliation: "Anna University",
    year: "2022"
  }
};

export const DIGITAL_MARKETING_SKILLS: SkillItem[] = [
  {
    id: "smm",
    name: "Social Media Management",
    category: "social",
    description: "End-to-end management of profile identity, audience engagement, daily community management, and brand storytelling.",
    platforms: ["Instagram", "Facebook", "LinkedIn", "X"]
  },
  {
    id: "sms-plan",
    name: "Social Media Strategy & Content Planning",
    category: "social",
    description: "Formulating multi-week editorial calendars, campaign themes, hashtag research, and audience persona-targeted content."
  },
  {
    id: "meta-ads",
    name: "Meta Ads (Facebook & Instagram)",
    category: "ads",
    description: "Designing high-converting ad creatives, setting up custom audiences, lookalikes, pixel tracking, and lead-gen forms.",
    platforms: ["Meta Ads Manager"]
  },
  {
    id: "google-ads",
    name: "Google Ads",
    category: "ads",
    description: "Search, Display, and Video campaigns targeting high-intent commercial keywords with optimized quality scores and CTR.",
    platforms: ["Google Ads"]
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    category: "ads",
    description: "B2B professional targeting by job title, company size, and industry for qualified lead generation.",
    platforms: ["LinkedIn Campaign Manager"]
  },
  {
    id: "lead-gen",
    name: "Lead Generation & Marketing Campaigns",
    category: "ads",
    description: "Multi-channel funnel creation capturing inbound prospects through lead magnets, landing pages, and instant messaging."
  },
  {
    id: "youtube-seo",
    name: "YouTube SEO & Channel Optimization",
    category: "seo",
    description: "Video keyword research, clickable thumbnails, engaging descriptions, tag clusters, and audience retention tactics."
  },
  {
    id: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    category: "automation",
    description: "Broadcast outreach, automated conversational flows, follow-up sequences, and high open-rate promotional triggers.",
    tools: ["AiSensy"]
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "automation",
    description: "Drip campaigns, newsletter segmentation, automated welcome sequences, and conversion rate optimization.",
    tools: ["ConvertKit", "Flodesk", "Zoho Campaigns"]
  },
  {
    id: "graphic-design",
    name: "Graphic Design & Video Editing",
    category: "content",
    description: "Engaging social media posters, promotional banners, carousels, and short-form Reels that hook viewers.",
    tools: ["Canva", "Video Editing"]
  },
  {
    id: "seo",
    name: "Search Engine Optimization (SEO)",
    category: "seo",
    description: "On-page optimization, keyword intent mapping, meta descriptions, image SEO, and site indexing to gain organic search traffic."
  },
  {
    id: "website-creation",
    name: "Website Creation & Management",
    category: "content",
    description: "Building responsive, modern business websites, landing pages, and portfolio sites optimized for fast conversions.",
    tools: ["WordPress", "Modern Web"]
  },
  {
    id: "brand-promotion",
    name: "Content Creation & Brand Promotion",
    category: "content",
    description: "Cross-platform storytelling, course marketing, brand messaging, and consistent tone of voice across customer touchpoints."
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    category: "automation",
    description: "Connecting form captures, CRM updates, WhatsApp alerts, and email drips seamlessly without manual intervention.",
    tools: ["Pabbly Connect", "AiSensy"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Social Media Management",
    category: "Social Media",
    shortDescription: "Complete handling of your brand's presence across Instagram, Facebook, LinkedIn, and X with regular posts and community interaction.",
    iconName: "Share2",
    featured: true
  },
  {
    id: "srv-2",
    title: "Social Media Strategy",
    category: "Strategy",
    shortDescription: "Data-driven roadmaps tailored to your industry to boost organic reach, audience trust, and profile authority.",
    iconName: "Compass"
  },
  {
    id: "srv-3",
    title: "Content Planning",
    category: "Content",
    shortDescription: "Structured monthly content calendars with engaging hook ideas, educational posts, and promotional themes.",
    iconName: "Calendar"
  },
  {
    id: "srv-4",
    title: "Canva Poster & Creative Design",
    category: "Design",
    shortDescription: "High-impact visual posters, carousel decks, and promotional graphics branded precisely to your business identity.",
    iconName: "Palette",
    featured: true
  },
  {
    id: "srv-5",
    title: "Reels & Basic Video Content",
    category: "Video",
    shortDescription: "Dynamic short-form video content designed for viral discoverability, course promotion, and product highlights.",
    iconName: "Film"
  },
  {
    id: "srv-6",
    title: "SEO & YouTube SEO",
    category: "SEO",
    shortDescription: "Keyword-focused optimization for websites and YouTube channels to rank higher and attract sustained organic traffic.",
    iconName: "Search",
    featured: true
  },
  {
    id: "srv-7",
    title: "Meta Ads Campaign Management",
    category: "Paid Ads",
    shortDescription: "Targeted Facebook & Instagram ads engineered to reach your ideal demographic, test creatives, and deliver cost-effective leads.",
    iconName: "Target",
    featured: true
  },
  {
    id: "srv-8",
    title: "Google Ads Support",
    category: "Paid Ads",
    shortDescription: "PPC search campaign setup, keyword match types, and negative keywords to capture high-intent prospective buyers.",
    iconName: "TrendingUp"
  },
  {
    id: "srv-9",
    title: "Lead Generation",
    category: "Growth",
    shortDescription: "Targeted campaigns and conversion funnels designed to deliver qualified inbound customer inquiries and student sign-ups.",
    iconName: "UserCheck",
    featured: true
  },
  {
    id: "srv-10",
    title: "WhatsApp Marketing",
    category: "Messaging",
    shortDescription: "Broadcast messaging, event reminders, and automated instant replies via AiSensy to nurture leads into customers.",
    iconName: "MessageCircle"
  },
  {
    id: "srv-11",
    title: "Email Marketing",
    category: "Automation",
    shortDescription: "Custom newsletter templates, automated welcome drips, and lead nurturing sequences using ConvertKit, Flodesk, or Zoho.",
    iconName: "Mail"
  },
  {
    id: "srv-12",
    title: "Marketing Automation",
    category: "Automation",
    shortDescription: "Streamlined workflow automation linking landing page forms, CRMs, WhatsApp alerts, and email notifications using Pabbly.",
    iconName: "Cpu"
  },
  {
    id: "srv-13",
    title: "Website Creation & Management",
    category: "Web",
    shortDescription: "Clean, mobile-responsive business websites and landing pages built to showcase your offerings and convert visitors.",
    iconName: "Globe"
  },
  {
    id: "srv-14",
    title: "Digital Marketing Training & Workshops",
    category: "Training",
    shortDescription: "Practical, beginner-friendly workshops for college students and professionals covering real-world marketing tools and campaigns.",
    iconName: "GraduationCap",
    featured: true
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-5",
    role: "Social Media Marketer",
    company: "Karat and Carat Diamonds",
    period: "June 2026 – Present",
    isCurrent: true,
    isProgramming: false,
    description: "Managed social media platforms and developed marketing strategies to strengthen brand presence and customer engagement. Handled social media management, content planning, YouTube SEO, WhatsApp marketing, and lead generation. Planned and executed Meta Ads campaigns to reach target audiences, generate quality leads, and support overall business growth.",
    keySkills: ["Social Media Management", "Content Planning", "Meta Ads", "YouTube SEO", "WhatsApp Marketing", "Lead Generation"]
  },
  {
    id: "exp-4",
    role: "Digital Marketing Executive",
    company: "Pantech E Learning",
    location: "Chennai",
    period: "Nov 2024 – June 2026",
    isCurrent: false,
    isProgramming: false,
    description: "Managed email marketing campaigns using ConvertKit, Flodesk, and Zoho Campaigns, and executed WhatsApp marketing campaigns using AiSensy for audience engagement and lead generation. Created social media posters, reels, and promotional content using Canva, while managing Instagram, LinkedIn, Facebook, and X. Developed content calendars and social media strategies for courses, workshops, FDPs, internships, and webinars. Implemented YouTube SEO strategies to improve channel visibility, reach, and engagement, and used Google Analytics for performance tracking and reporting. Implemented marketing automation using Pabbly and supported Google Ads and Meta Ads activities and campaign planning.",
    keySkills: ["ConvertKit", "Flodesk", "Zoho Campaigns", "AiSensy", "Canva", "YouTube SEO", "Google Analytics", "Pabbly Automation", "Meta Ads", "Google Ads"]
  },
  {
    id: "exp-3",
    role: "Social Media Marketing Intern",
    company: "Business Optima",
    location: "Remote",
    period: "Sep 2024 – Nov 2024",
    isCurrent: false,
    isProgramming: false,
    description: "Created promotional posters and videos to support Udemy course marketing on social media. Managed Instagram and Facebook, developed content strategies, and supported marketing campaigns to improve engagement, audience growth, and course visibility.",
    keySkills: ["Course Marketing", "Canva Design", "Instagram", "Facebook", "Audience Growth", "Content Strategy"]
  },
  {
    id: "exp-2",
    role: "Digital Marketing Intern",
    company: "Shanthi IT Solutions",
    location: "Remote",
    period: "June 2024 – July 2024",
    isCurrent: false,
    isProgramming: false,
    description: "Received practical training in PPC campaigns, keyword research, ad creation, WordPress basics, SEO, email marketing, audience targeting, social media marketing, and post scheduling.",
    keySkills: ["PPC Basics", "Keyword Research", "SEO", "WordPress", "Audience Targeting", "Post Scheduling"]
  },
  {
    id: "exp-1",
    role: "Trainee Programmer Analyst",
    company: "Thapovan Info Systems Inc",
    location: "Chennai",
    period: "December 2022 – August 2023",
    isCurrent: false,
    isProgramming: true,
    description: "Worked on Android and iOS application development using Xamarin Forms, responsive UI development, debugging, manual testing, and writing test cases. Collaborated on application requirements and worked toward meeting project deadlines and customer requirements.",
    keySkills: ["Technical Background", "Testing & Debugging", "Application UI Workflow"]
  }
];

export const FREELANCE_PROJECTS: FreelanceProjectItem[] = [
  {
    id: "proj-1",
    title: "Freelance Social Media Manager & Content Creator",
    client: "Wechai – Nagercoil Franchise",
    category: "Food & Beverage Franchise",
    iconName: "Coffee",
    description: "Managed social media for Wechai's Nagercoil franchise to enhance local brand visibility. Created custom posters, reels, and videos using Canva and developed an engaging Instagram content strategy.",
    services: ["Social Media Management", "Content Creation", "Canva Design", "Instagram Marketing"],
    image: "/src/assets/images/wechai_social_creative_1790614605208.jpg",
    deliverables: [
      "Custom weekly Instagram promotional creatives & aesthetic tea photography posters",
      "Dynamic local reels highlighting customer experiences, flavors, and outlet ambiance",
      "Consistent feed aesthetic and targeted local hashtag research to drive walk-in footfall",
      "Engagement strategies capturing direct messages and customer reviews"
    ],
    creatives: [
      {
        id: "wechai-c1",
        title: "Signature Spiced Chai Promotional Poster",
        type: "Instagram Feed Post (1080×1080)",
        image: "/src/assets/images/wechai_social_creative_1790614605208.jpg",
        tool: "Canva Pro",
        objective: "Boost brand awareness and announce evening happy-hour tea discounts for college students & locals in Nagercoil.",
        metric: "+42% Profile Impressions"
      },
      {
        id: "wechai-c2",
        title: "Weekend Snack & Kulhad Chai Offer Creative",
        type: "Story & Reel Promo Flyer (1080×1920)",
        image: "/src/assets/images/wechai_tea_reel_creative_1790615050825.jpg",
        tool: "Canva Pro",
        objective: "Drive weekend footfall by showcasing hot steaming samosas paired with signature cardamom milk tea.",
        metric: "280+ Direct Walk-in Inquiries"
      }
    ]
  },
  {
    id: "proj-2",
    title: "Freelance Digital Marketing Trainer",
    client: "Leaves Technology",
    category: "EdTech & Training",
    iconName: "GraduationCap",
    description: "Conducted Digital Marketing training and workshops for college students and beginners. Provided hands-on training in Canva, SEO, Social Media, Meta Ads, YouTube SEO, WhatsApp Marketing, and Lead Generation. Guided students in digital marketing projects, campaigns, and content creation.",
    services: ["Digital Marketing Training", "Workshops", "Canva", "SEO", "Social Media", "Meta Ads"],
    image: "/src/assets/images/leaves_tech_workshop_1790614618355.jpg",
    deliverables: [
      "Hands-on live curriculum spanning Canva design, SEO audits, and Meta Ad setup",
      "Step-by-step guidance on setting up WhatsApp marketing campaigns and lead funnels",
      "Interactive Q&A sessions and real campaign case studies for college student cohorts",
      "Practical project assignments with 1-on-1 feedback on student creative portfolios"
    ],
    creatives: [
      {
        id: "leaves-c1",
        title: "Hands-on Workshop Slide Deck & Live Seminar Setup",
        type: "Keynote & Presentation Deck (1920×1080)",
        image: "/src/assets/images/leaves_tech_workshop_1790614618355.jpg",
        tool: "Canva Presentation & Google Slides",
        objective: "Walk beginners through actionable sales funnels, live Meta Ad targeting screens, and keyword tools.",
        metric: "120+ Students Trained"
      },
      {
        id: "leaves-c2",
        title: "Complete Digital Marketing Funnel Infographic",
        type: "Student Practical Guide & Handout",
        image: "/src/assets/images/leaves_tech_curriculum_creative_1790615078260.jpg",
        tool: "Canva Pro",
        objective: "Visual step-by-step framework explaining customer journey from social ad impression to WhatsApp conversion.",
        metric: "4.9/5 Workshop Rating"
      }
    ]
  },
  {
    id: "proj-3",
    title: "Freelance Digital Marketer",
    client: "Vimal Construction Architecture & Interior",
    category: "Architecture & Real Estate",
    iconName: "Building2",
    description: "Provided social media marketing support for Vimal Construction Architecture & Interior to strengthen its digital presence and showcase construction, architecture, and interior design services through social media content.",
    services: ["Social Media Marketing", "Content Planning", "Brand Promotion"],
    image: "/src/assets/images/vimal_construction_creative_1790614632393.jpg",
    deliverables: [
      "Curated visual showcase highlighting completed residential and commercial interior spaces",
      "Professional brand aesthetic emphasizing architectural precision and craftsmanship",
      "Monthly content calendar targeting homeowners and corporate clients seeking renovations",
      "Direct inquiry call-to-actions linking social profiles to WhatsApp consultation"
    ],
    creatives: [
      {
        id: "vimal-c1",
        title: "Luxury Living Room & Spatial Architecture Showcase",
        type: "Instagram Portfolio Carousel (1080×1350)",
        image: "/src/assets/images/vimal_construction_creative_1790614632393.jpg",
        tool: "Canva Pro",
        objective: "Highlight turnkey interior finishings, lighting, and premium craftsmanship to attract luxury home builders.",
        metric: "3.4x Engagement Lift"
      },
      {
        id: "vimal-c2",
        title: "Modern Modular Kitchen & Dining Renovation Carousel",
        type: "Lead Gen Ad Creative (1080×1080)",
        image: "/src/assets/images/vimal_interior_carousel_creative_1790615095112.jpg",
        tool: "Canva Pro",
        objective: "Showcase space-efficient kitchen designs with direct CTA to book a free architectural consultation.",
        metric: "24 Qualified Leads"
      }
    ]
  }
];

export const TRAINING_SECTION = {
  headline: "Digital Marketing Training & Workshops",
  subheadline: "Practical and beginner-friendly digital marketing training designed to help students and aspiring marketers gain hands-on experience.",
  topics: [
    { title: "Canva & Creative Design", desc: "Crafting eye-catching social media posters, carousels, and visual branding assets." },
    { title: "Social Media Marketing", desc: "Profile optimization, content strategy, engagement tactics, and audience growth across platforms." },
    { title: "Search Engine Optimization (SEO)", desc: "Keyword research, on-page optimization, title tags, and ranking strategies." },
    { title: "YouTube SEO", desc: "Tag optimization, video thumbnails, keyword ranking, and channel growth best practices." },
    { title: "Meta Ads & Google Ads", desc: "Setting up ad accounts, budget management, audience targeting, and running live campaigns." },
    { title: "Website Creation", desc: "Building clean, conversion-focused websites and landing pages for businesses." },
    { title: "WhatsApp Marketing", desc: "Broadcasting, contact segmentation, and setting up automated responses via AiSensy." },
    { title: "Email Marketing", desc: "Designing email newsletters, welcome flows, and lead nurture sequences." },
    { title: "Lead Generation", desc: "Strategies to attract, capture, and qualify prospective buyers and students." },
    { title: "Content Creation", desc: "Copywriting, storytelling, reel ideation, and developing consistent brand voice." }
  ],
  ctaText: "Invite Me for a Workshop"
};

export const TOOLS_PLATFORMS: ToolItem[] = [
  { name: "Canva", category: "Creative & Design", description: "Posters, banners, reels, presentation decks", color: "from-cyan-500 to-blue-500", badge: "Primary Tool" },
  { name: "Meta Ads", category: "Paid Advertising", description: "Facebook & Instagram target campaigns & lead forms", color: "from-blue-600 to-indigo-600", badge: "Campaigns" },
  { name: "Google Ads", category: "Paid Advertising", description: "PPC search, intent keyword targeting & ads", color: "from-amber-500 to-red-500", badge: "PPC" },
  { name: "LinkedIn Ads", category: "B2B Advertising", description: "Targeted professional audience outreach", color: "from-blue-700 to-blue-900" },
  { name: "Google Analytics", category: "Analytics & Tracking", description: "Audience traffic tracking, conversion reporting", color: "from-yellow-500 to-orange-500" },
  { name: "ConvertKit", category: "Email Marketing", description: "Email newsletters, landing pages & broadcast drips", color: "from-rose-500 to-pink-500" },
  { name: "Flodesk", category: "Email Marketing", description: "Aesthetic email templates, workflows & sales funnels", color: "from-purple-500 to-indigo-500" },
  { name: "Zoho Campaigns", category: "Email Marketing", description: "Automated campaign scheduling & contact lists", color: "from-red-500 to-amber-600" },
  { name: "AiSensy", category: "WhatsApp Marketing", description: "WhatsApp API broadcasting, automated chatbot flows", color: "from-emerald-500 to-green-600", badge: "Automation" },
  { name: "Pabbly", category: "Marketing Automation", description: "Connecting webhooks, CRMs, forms & notifications", color: "from-indigo-500 to-purple-600", badge: "Workflows" },
  { name: "WordPress", category: "Website & CMS", description: "Website management, content publishing, basic SEO", color: "from-blue-500 to-sky-600" },
  { name: "YouTube", category: "Video & SEO", description: "Channel optimization, tags, search ranking & growth", color: "from-red-600 to-rose-700" }
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Practical Digital Marketing Experience",
    description: "Hands-on execution across real businesses, from luxury jewelry and e-learning to local food franchises and architecture."
  },
  {
    title: "Creative Content & Design",
    description: "Strong eye for clean visual aesthetics, designing eye-catching Canva posters, carousels, and engaging reels that stop the scroll."
  },
  {
    title: "Data & Campaign Focused",
    description: "Every campaign is planned with clear objectives—generating qualified leads, improving organic reach, and tracking performance with analytics."
  },
  {
    title: "Marketing Automation Knowledge",
    description: "Expertise in connecting email drips, WhatsApp broadcasts via AiSensy, and workflow triggers using Pabbly to save hours of manual effort."
  },
  {
    title: "Hands-on Training Experience",
    description: "Experienced in simplifying complex marketing concepts into actionable, easy-to-follow workshops for students and aspiring entrepreneurs."
  }
];
