export const R5 = [
  {
    key: "reduce",
    title: "Reduce",
    icon: "leaf",
    tone: "leaf",
    points: [
      "Use resources wisely.",
      "Avoid unnecessary consumption.",
      "Save energy and water.",
      "Choose sustainable products.",
    ],
  },
  {
    key: "reuse",
    title: "Reuse",
    icon: "refresh",
    tone: "ocean",
    points: [
      "Use products multiple times.",
      "Repair instead of replacing.",
      "Donate usable items.",
      "Promote a sharing culture.",
    ],
  },
  {
    key: "retrieve",
    title: "Retrieve",
    icon: "magnet",
    tone: "sun",
    points: [
      "Recover valuable materials from waste.",
      "Separate biodegradable and non-biodegradable waste.",
      "Compost organic waste.",
      "Recover metals, plastics, and electronic components.",
    ],
  },
  {
    key: "redesign",
    title: "Redesign",
    icon: "pencil",
    tone: "ocean",
    points: [
      "Design products for durability.",
      "Reduce packaging waste.",
      "Encourage eco-friendly product innovation.",
      "Improve product life cycle.",
    ],
  },
  {
    key: "recycle",
    title: "Recycle",
    icon: "recycle",
    tone: "leaf",
    points: [
      "Convert waste into useful products.",
      "Reduce landfill waste.",
      "Save natural resources.",
      "Support a circular economy.",
    ],
  },
] as const;

export const JOURNEY = [
  { title: "Waste Generated", desc: "Homes, schools, markets and industries produce mixed waste every day." },
  { title: "Segregation", desc: "Wet, dry, e-waste and hazardous waste are separated at the source." },
  { title: "R5 Process", desc: "Reduce, Reuse, Retrieve, Redesign and Recycle are applied to each stream." },
  { title: "Recovered Resources", desc: "Compost, metals, plastics and components return to the economy." },
  { title: "Clean Environment", desc: "Less landfill, cleaner air, healthier soil and safer water." },
  { title: "Sustainable Future", desc: "A circular society where nothing valuable is ever thrown away." },
];

export const BENEFITS = [
  { emoji: "🌍", title: "Cleaner Environment", value: 92, unit: "%", note: "Reduction in visible litter in pilot zones" },
  { emoji: "♻️", title: "Less Landfill Waste", value: 68, unit: "%", note: "Waste diverted from landfill through R5" },
  { emoji: "💧", title: "Resource Conservation", value: 45, unit: "%", note: "Raw material demand avoided" },
  { emoji: "🌱", title: "Climate Protection", value: 30, unit: "%", note: "Lower greenhouse gas emissions" },
  { emoji: "⚡", title: "Energy Saving", value: 74, unit: "%", note: "Energy saved recycling aluminium" },
  { emoji: "🌎", title: "Sustainable Development", value: 12, unit: " SDGs", note: "Goals supported by the R5 model" },
];

export const SMART = [
  { title: "AI-based waste segregation", desc: "Computer vision sorts plastics, metals and organics on a moving belt." },
  { title: "Smart dustbins", desc: "Auto-lid bins compact waste and signal when they are full." },
  { title: "IoT sensors", desc: "Fill-level, odour and weight sensors stream live bin data." },
  { title: "Waste tracking", desc: "Each collection route is traced from source to processing plant." },
  { title: "Data analytics", desc: "Dashboards reveal hotspots and optimise pickup schedules." },
  { title: "Circular economy", desc: "Recovered material is matched with industries that need it." },
  { title: "Community participation", desc: "Apps reward households for correct segregation." },
];

export const QUIZ = [
  {
    q: "What does the second R in R5 stand for?",
    options: ["Remove", "Reuse", "Return", "Rebuild"],
    answer: 1,
  },
  {
    q: "Which waste can be composted?",
    options: ["Plastic bottles", "Vegetable peels", "Batteries", "Glass jars"],
    answer: 1,
  },
  {
    q: "Why is recycling important?",
    options: [
      "It makes waste disappear instantly",
      "It saves natural resources and energy",
      "It increases landfill size",
      "It replaces the need for segregation",
    ],
    answer: 1,
  },
  {
    q: "What is e-waste?",
    options: [
      "Waste from electronic devices",
      "Waste from restaurants",
      "Waste water from factories",
      "Waste paper from offices",
    ],
    answer: 0,
  },
  {
    q: "Which step comes before recycling?",
    options: ["Landfilling", "Segregation", "Incineration", "Packaging"],
    answer: 1,
  },
];

export const TEAM = [
  {
    name: "Sarthak Sahu",
    role: "Team Captain",
    school: "Sunbeam School, Mau",
    cls: "Class IX",
    responsibilities: [
      "Project planning",
      "Research coordination",
      "Presentation",
      "Website development",
      "Team management",
    ],
    skills: ["captain", "research", "innovation", "teamwork"] as const,
    tone: "leaf",
  },
  {
    name: "Advay Kumar Pathak",
    role: "Team Member",
    school: "Sunbeam School, Mau",
    cls: "Class IX",
    responsibilities: [
      "Research",
      "Data collection",
      "Content preparation",
      "Idea development",
      "Project implementation",
    ],
    skills: ["research", "innovation", "teamwork"] as const,
    tone: "ocean",
  },
  {
    name: "Sumaya Firdous",
    role: "Eco Club Manager",
    school: "Sunbeam School, Mau",
    cls: "Class IX",
    responsibilities: [
      "Eco club coordination",
      "Student engagement",
      "Activity planning",
      "Awareness campaigns",
      "Green initiatives",
    ],
    skills: ["teamwork", "innovation"] as const,
    tone: "sun",
  },
];

export const MENTOR = {
  name: "Krishna Prasad Gupta",
  role: "Mentor",
  school: "Sunbeam School, Mau",
  note: "Guiding the team with expertise, encouragement and a passion for sustainability.",
};

export const ECO_TIPS = [
  "Carry a cloth bag — one bag can replace 500 plastic bags a year.",
  "Compost your kitchen waste; it is nearly 50% of household waste.",
  "Repair before you replace — repairing saves both money and resources.",
  "Recycling one aluminium can saves enough energy to run a TV for 3 hours.",
  "Segregate at source: mixed waste is far harder to recover.",
  "Say no to single-use plastic cutlery and straws.",
];

export const FAQS: { q: string; a: string }[] = [
  { q: "What is R5?", a: "R5 stands for Reduce, Reuse, Retrieve, Redesign and Recycle — a five-step framework to manage waste sustainably." },
  { q: "Why did you choose this topic?", a: "Rapid urbanisation and irrational consumption have made waste one of the biggest environmental challenges of our time." },
  { q: "How is Retrieve different from Recycle?", a: "Retrieve is about recovering valuable materials such as metals, compost and components from waste. Recycle converts those materials into new products." },
  { q: "What technology does the project use?", a: "AI-based segregation, smart dustbins, IoT sensors, waste tracking and data analytics dashboards." },
  { q: "Who can use this model?", a: "Schools, housing societies, markets and municipal bodies can all apply the R5 model at their own scale." },
];
