import { VideoProject, CaseStudy, ExperienceItem, EducationItem } from './types';

export const BUN_AND_MI_VIDEOS: VideoProject[] = [
  {
    id: 'egg-roll-masterclass',
    title: "The 'Perfect Bite' Egg Roll Masterclass",
    hook: "You've been eating our egg rolls wrong. Let me show you the perfect bite.",
    subtitle: "High-retention culinary tutorial & organic viral hook",
    duration: "00:35",
    aspectRatio: "9:16",
    resolution: "4K 60FPS",
    role: "Video Editor & Creative Director",
    client: "Bun & Mi (Santa Monica)",
    description:
      "A fast-paced, educational short-form TikTok & Reel concept engineered to stop the scroll. Uses an assertive pattern-interrupt hook ('You've been eating our egg rolls wrong'), rapid multi-angle cuts between the presenter in front of the Santa Monica neon sign and appetizing tabletop assembly, rhythmic sensory pacing, and a dipping sauce climax.",
    tags: ["Short-Form Video", "Viral Hook", "Audience Retention", "CapCut / Premiere", "Social Strategy"],
    metrics: [
      { label: "Target Format", value: "9:16 Reel" },
      { label: "Pacing", value: "Cut / 1.8s" },
      { label: "Concept Type", value: "Educational Hook" },
      { label: "Production", value: "Full-Day Shoot" }
    ],
    editingTechniques: [
      "Pattern-Interrupt Opening: Direct camera address with bold statement to halt swipe-through",
      "Dynamic Split Pacing: Alternating between conversational presenter and high-saturation overhead food cuts",
      "Sound Design & Foley: Enhanced crunch, sauce sizzling, and dipping splash for sensory ASMR impact",
      "Color Grading: Warmer tone curve enhancing crisp golden egg rolls, fresh mint greens, and vibrant sambal reds",
      "Paced On-Screen Captions: High-contrast kinetic text tracking speaker emphasis"
    ],
    videoSrc: '/videos/egg-roll-masterclass.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DcwOm5upcCX/?hl=en',
    posterThumb: "bun-mi-eggroll",
    transcriptHook: "You've been eating our egg rolls wrong. Let me show you the perfect bite.",
    transcriptBullets: [
      "Step 1: Crisp butter lettuce leaf foundation",
      "Step 2: Golden, steaming pork & vegetable egg roll center",
      "Step 3: Fresh aromatic mint leaves",
      "Step 4: Pickled carrots & daikon crunch",
      "Step 5: Fresh sliced cucumber spear",
      "Step 6: Scratch-made chili sambal blended into sweet fish sauce",
      "Step 7: Tight roll wrap and generous deep dunk"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bun-and-mi-campaign',
    title: 'Bun & Mi Creative Engine',
    category: 'Full-Cycle Social Media Pipeline',
    tagline: 'Bridging creative storytelling, high-volume production, and local community discovery in Santa Monica.',
    overview:
      'Developed a turnkey social media pipeline for local culinary hotspot Bun & Mi in Santa Monica. Formulated 12 distinct content angles—from educational eating rituals to allergen-conscious menu showcases. Directed full-day video production on-site, edited short-form reels for TikTok and Instagram, and established an optimized hashtag and posting cadence.',
    clientOrOrg: 'Bun & Mi (Santa Monica, CA)',
    dateRange: '2024 - 2025',
    color: '#2D68C4',
    metrics: [
      { label: 'Content Concepts', value: '12+' },
      { label: 'Production Lead', value: 'Full-Day' },
      { label: 'Formats Mastered', value: 'Reels & TikTok' },
      { label: 'Community Focus', value: 'Local Foot-Traffic' }
    ],
    highlights: [
      'Authored 12 viral video concepts targeting local food lovers, students, and health-conscious diners',
      'Directed on-site shoot managing lighting, camera talent, product staging, and sound recording',
      'Engineered rapid-paced vertical edits with kinetic captions, sound design, and color grading',
      'Crafted high-converting caption playbooks with geo-tagged hashtags for Santa Monica and West LA'
    ],
    deliverables: [
      '12 Short-Form Video Assets',
      'Overhead Food Photography Suite',
      'Sound-Designed Social Cuts',
      'Editorial Content Calendar',
      'Hashtag & Audience Playbook'
    ],
    tags: ['Video Editing', 'Creative Direction', 'Social Strategy', 'Local Growth', 'ASMR / Culinary']
  },
  {
    id: 'kicks-withjay',
    title: 'Kicks.withjay',
    category: 'E-Commerce & Digital Arbitrage',
    tagline: 'Bootstrapping a data-driven sneaker resale venture from zero capital to $5,000+ in organic revenue.',
    overview:
      'Founded and scaled an independent sneaker and streetwear resale business. Implemented predictive price analysis across StockX, GOAT, and community platforms to spot supply inefficiencies. Built a loyal buyer clientele through authentic social listings, transparent condition disclosures, and rapid fulfillment.',
    clientOrOrg: 'Independent Venture',
    dateRange: '2023 - 2025',
    color: '#10B981',
    metrics: [
      { label: 'Total Revenue', value: '$5,000+' },
      { label: 'Profit Margin Target', value: '25% - 35%' },
      { label: 'Inventory Turnover', value: '< 14 Days' },
      { label: 'Buyer Satisfaction', value: '100% Positive' }
    ],
    highlights: [
      'Built custom Excel spreadsheets to track inventory cost basis, fees, and margin forecasts in real time',
      'Created cross-platform listing optimization strategies with high-converting product imagery and copy',
      'Monitored release calendars and secondary market sentiment to time liquidation windows profitably',
      'Negotiated direct-to-consumer private transactions and built recurring repeat customers'
    ],
    deliverables: [
      'Dynamic Inventory & Profit Model',
      'High-Converting Social Listings',
      'Authentication Verification System',
      'Repeat Collector Client Roster'
    ],
    tags: ['E-Commerce', 'Financial Modeling', 'Brand Building', 'Pricing Strategy', 'Direct Sales']
  },
  {
    id: 'fac-leadership',
    title: 'Filipino Association Club',
    category: 'Campus Governance & Community Organizing',
    tagline: 'Co-Founding a student organization and bridging administrative liaison at Santa Monica College.',
    overview:
      'Co-founded the Filipino Association Club (FAC) at Santa Monica College and served as the Inter-Club Council (ICC) Delegate. Acted as the crucial bridge between student organizers, campus administration, and external collegiate networks, organizing cultural programming and cross-club initiatives.',
    clientOrOrg: 'Santa Monica College (SMC)',
    dateRange: '2024 - 2026',
    color: '#F59E0B',
    metrics: [
      { label: 'Role', value: 'Co-Founder & ICC Delegate' },
      { label: 'Campus Representation', value: 'SMC Inter-Club Council' },
      { label: 'Event Programming', value: 'Cross-Campus' },
      { label: 'Student Engagement', value: 'Active Community' }
    ],
    highlights: [
      'Represented club interests in weekly legislative Inter-Club Council voting and funding sessions',
      'Coordinated multi-club collaborative events celebrating cultural heritage, mentorship, and solidarity',
      'Managed cross-functional communication between faculty advisors, student delegates, and executive boards',
      'Created social media announcements and promotional collateral using Canva and Google Workspace'
    ],
    deliverables: [
      'Club Constitution & Bylaws',
      'ICC Funding Proposals & Budgets',
      'Campus Event Schedules',
      'Social Outreach Graphics'
    ],
    tags: ['Leadership', 'Public Speaking', 'Event Coordination', 'Governance', 'Community Building']
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Target',
    role: 'Cashier and Guest Advocate',
    period: 'Oct 2025 - Jun 2026',
    type: 'Customer Operations & Front-of-House',
    description:
      'High-volume customer advocacy and transaction operations in a fast-paced retail flagship environment.',
    achievements: [
      'Collaborated with 20+ team members during peak traffic periods to maintain seamless operational efficiency',
      'Resolved customer inquiries, returns, and digital app loyalty questions with composure and speed',
      'Recognized for exceptional attendance and consistent positive guest satisfaction ratings'
    ],
    skills: ['Conflict Resolution', 'Point of Sale (POS)', 'High-Pressure Operations', 'Team Collaboration']
  },
  {
    company: 'Independent Marketing Consultant',
    role: 'Digital Marketing & Content Strategist',
    period: '2023 - Present',
    type: 'Marketing & Media Operations',
    description:
      'Partnering with local hospitality brands and e-commerce stores to craft high-retention video marketing campaigns, data-backed promotional assets, and customer acquisition strategies.',
    achievements: [
      'Produced 12+ video campaigns for Bun & Mi resulting in heightened local brand recognition and measurable foot traffic',
      'Managed end-to-end marketing workflows: competitive research, script ideation, video production, and performance analytics',
      'Created high-impact social media assets using Premiere Pro, CapCut, and Canva'
    ],
    skills: ['Performance Marketing', 'Creative Direction', 'Data Analytics', 'Social Media Strategy', 'Copywriting']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'University of California, Los Angeles (UCLA)',
    degree: 'B.A. in Communication',
    period: 'Sept 2026 - Jun 2028',
    description:
      'Focusing on digital media systems, consumer psychology, public advocacy, persuasive communication, and contemporary marketing ecosystems.',
    accentColor: '#2D68C4',
    badge: 'UCLA Class of 2028'
  },
  {
    institution: 'Santa Monica College (SMC)',
    degree: 'A.A. in Communication Studies',
    period: 'Sept 2024 - Jun 2026',
    gpa: '4.0 GPA',
    honors: "Dean's Honor List | Honor Scholar Graduate",
    description:
      'Earned a flawless 4.0 grade point average while serving as Co-Founder and ICC Delegate for the Filipino Association Club.',
    accentColor: '#10B981',
    badge: '4.0 GPA / Dean’s List'
  }
];

export const CORE_SKILLS = [
  'Premiere Pro & CapCut',
  'Data Analytics & Metrics',
  'TikTok & Reels Pacing',
  'Short-Form Hook Strategy',
  'Microsoft Excel Modeling',
  'Canva & Visual Assets'
];
