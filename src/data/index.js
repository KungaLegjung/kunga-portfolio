// ─── NAVIGATION ───────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Education',  id: 'education' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Contact',    id: 'contact' },
];

// ─── SKILLS (using CDN SVG logos) ─────────────────────────────────────────
// devicons CDN: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/
const D = (name, file = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${file}.svg`;

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    color: '#38bdf8',
    skills: [
      { name: 'React',       logo: D('react', 'original') },
      { name: 'JavaScript',  logo: D('javascript', 'original') },
      { name: 'HTML5',       logo: D('html5', 'original') },
      { name: 'CSS3',        logo: D('css3', 'original') },
      { name: 'Tailwind',    logo: D('tailwindcss', 'plain') },
      
    ],
  },
  {
    title: 'Backend',
    color: '#34d399',
    skills: [
      { name: 'Node.js',     logo: D('nodejs', 'original') },
      { name: 'Python',      logo: D('python', 'original') },
      { name: 'Django',      logo: D('django', 'plain') },
      { name: 'Java',        logo: D('java', 'original') },
      { name: 'FastAPI',     logo: D('fastapi', 'original') },
    ],
  },
  {
    title: 'Database & Cloud',
    color: '#fbbf24',
    skills: [
      { name: 'MongoDB',     logo: D('mongodb', 'original') },
      { name: 'MySQL',       logo: D('mysql', 'original') },
      { name: 'PostgreSQL',  logo: D('postgresql', 'original') },
      { name: 'Firebase',    logo: D('firebase', 'plain') },
      { name: 'AWS',         logo: D('amazonwebservices', 'original') },
      { name: 'Docker',      logo: D('docker', 'original') },
      { name: 'Kubernetes',  logo: D('kubernetes', 'plain') },
    ],
  },
  {
    title: 'AI / ML & Tools',
    color: '#818cf8',
    skills: [
      { name: 'TensorFlow',  logo: D('tensorflow', 'original') },
      { name: 'PyTorch',     logo: D('pytorch', 'original') },
      { name: 'NumPy',       logo: D('numpy', 'original') },
      { name: 'Pandas',      logo: D('pandas', 'original') },
      { name: 'Git',         logo: D('git', 'original') },
      { name: 'GitHub',      logo: D('github', 'original') },
      { name: 'VS Code',     logo: D('vscode', 'original') },
    ],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    icon: '🎓',
    yr: '2023 – 2025',
    deg: 'Master of Computer Applications (MCA)',
    inst: 'Dayananda Sagar College Of Engineering, Bengaluru',
    detail: 'Specialization: Advanced Software Engineering & AI/ML. Key courses: Cloud Computing, DBMS, Machine Learning, Web Technologies, Software Architecture.',
    badge: 'CGPA 8.53 / 10',
    color: '#38bdf8',
  },
  {
    icon: '🎓',
    yr: '2019 – 2022',
    deg: 'Bachelor of Computer Applications (BCA)',
    inst: 'The Dalai Lama Institute for Higher Education, Bengaluru',
    detail: 'Foundation in Algorithms, OS, Computer Networks, Discrete Mathematics. Active member of the CS Society.',
    badge: 'CGPA 7.57 / 10',
    color: '#818cf8',
  },
  // {
  //   icon: '📜',
  //   yr: '2023',
  //   deg: 'AWS Certified Cloud Practitioner',
  //   inst: 'Amazon Web Services',
  //   detail: 'Certified in core AWS services: EC2, S3, Lambda, RDS, IAM. Hands-on experience deploying cloud-native applications.',
  //   badge: 'Certified ✓',
  //   color: '#fbbf24',
  // },
  // {
  //   icon: '🤖',
  //   yr: '2023',
  //   deg: 'Deep Learning Specialization',
  //   inst: 'Coursera · deeplearning.ai',
  //   detail: '5-course specialization by Andrew Ng covering Neural Networks, CNNs, RNNs, Sequence Models and ML Project Structuring.',
  //   badge: 'Distinction',
  //   color: '#f43f5e',
  // },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    yr: 'Jun 2024 – Present',
    role: 'Full-Stack Development Intern',
    company: 'TechSprint Solutions · Pune (Remote)',
    desc: 'Building a SaaS analytics dashboard for 10k+ users using React & Node.js. Integrated REST APIs, optimized DB queries reducing load-time by 35%. Leading a 3-person frontend intern team.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS EC2', 'Redis'],
  },
  {
    yr: 'Jan – May 2024',
    role: 'Machine Learning Intern',
    company: 'DataMinds AI · Bangalore',
    desc: 'Developed NLP pipeline for sentiment analysis with 91% accuracy. Built data preprocessing scripts handling 500k records/day. Deployed models on AWS SageMaker.',
    tech: ['Python', 'TensorFlow', 'NLTK', 'AWS SageMaker', 'Pandas'],
  },
  {
    yr: 'May – Jul 2023',
    role: 'Web Development Intern',
    company: 'Infosys BPM · Pune',
    desc: 'Built internal employee portal with RBAC. Developed 12 RESTful API endpoints. Achieved 80% unit-test coverage. Received the "Best Intern" award 🏆.',
    tech: ['Angular', 'Java Spring', 'MySQL', 'JUnit'],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'SmartCampus LMS',
    type: 'FULL-STACK',
    desc: 'Learning management platform for 2000+ students with live classes, AI quiz generator, real-time notifications, and progress analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    color: '#38bdf8',
    img: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
    github: 'https://github.com/arjun-dev',
    demo: '#',
  },
  {
    title: 'FaceGuard AI',
    type: 'AI · VISION',
    desc: 'Real-time CNN-based face-recognition attendance system with 98.5% accuracy, handling 50+ simultaneous faces and auto-report generation.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
    color: '#818cf8',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    github: 'https://github.com/arjun-dev',
    demo: '#',
  },
  {
    title: 'CodeCollab IDE',
    type: 'CLOUD · RT',
    desc: 'Browser-based collaborative code editor — multi-user real-time editing, execution sandbox for 15 languages, integrated video calls.',
    tech: ['Next.js', 'WebRTC', 'Docker', 'Redis'],
    color: '#34d399',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    github: 'https://github.com/arjun-dev',
    demo: '#',
  },
  {
    title: 'StockSense Dashboard',
    type: 'ML · ANALYTICS',
    desc: 'LSTM neural network stock predictor with live data streaming, portfolio tracker, and buy/sell signal generation with confidence scores.',
    tech: ['Python', 'Keras', 'React', 'WebSocket'],
    color: '#fbbf24',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    github: 'https://github.com/arjun-dev',
    demo: '#',
  },
  {
    title: 'QuickMart E-Commerce',
    type: 'MERN · PAYMENTS',
    desc: 'Full-featured e-commerce platform with Razorpay payment gateway, admin dashboard, inventory management, and PWA mobile support.',
    tech: ['MongoDB', 'Express', 'React', 'Razorpay'],
    color: '#f43f5e',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
    github: 'https://github.com/arjun-dev',
    demo: '#',
  },
  {
    title: 'VakyaBot NLP',
    type: 'NLP · CHATBOT',
    desc: 'Hindi-English bilingual chatbot using transformer models. Understands regional context, supports voice input, WhatsApp API integration.',
    tech: ['HuggingFace', 'FastAPI', 'PyTorch', 'Twilio'],
    color: '#818cf8',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    github: 'https://github.com/arjun-dev',
    demo: '#',
  },
];

// ─── AI KB ─────────────────────────────────────────────────────────────────
export const AI_KB = {
  skills: `🔵 Frontend: React, Next.js, TypeScript, Three.js, Tailwind\n🟢 Backend: Node.js, Express, Python, Django, FastAPI\n🔴 Database: MongoDB, MySQL, PostgreSQL, Redis\n🟡 AI/ML: TensorFlow, PyTorch, OpenCV, NLP, Pandas\n☁️ Cloud: AWS (EC2/S3/Lambda), Docker, Kubernetes, Firebase`,
  projects: `🚀 6 featured projects:\n1. SmartCampus LMS — React + Node + MongoDB\n2. FaceGuard AI — CNN face recognition (98.5% acc)\n3. CodeCollab IDE — Real-time collaborative IDE\n4. StockSense — LSTM stock prediction dashboard\n5. QuickMart — MERN e-commerce + Razorpay\n6. VakyaBot — Hindi-English NLP chatbot\n\nScroll to Projects section for full details!`,
  hire: `Yes! Currently open to:\n✅ Full-time SDE / Full-Stack Developer roles\n✅ ML / AI Engineer positions\n✅ MCA project partnerships\n✅ Freelance web/ML work\n\nResponse time < 24 hrs. Let's connect!`,
  education: `🎓 MCA — Symbiosis Institute of Technology, Pune (CGPA: 8.7/10)\n💻 B.Sc. CS — University of Pune (CGPA: 8.9/10)\n📜 AWS Certified Cloud Practitioner\n🤖 Deep Learning Specialization — deeplearning.ai (Distinction)`,
  experience: `3 key internships:\n1️⃣ Full-Stack Intern @ TechSprint Solutions (Jun 2024–Present)\n2️⃣ ML Intern @ DataMinds AI, Bangalore (Jan–May 2024)\n3️⃣ Web Dev Intern @ Infosys BPM, Pune → Won "Best Intern" 🏆`,
  contact: `📧 kungalegjung2014@gmail.com\n🔗 linkedin.com/in/arjunsharma-dev\n🐙 github.com/kungalegjung\n📱 +91 98765 43210`,
  default: `I can help with:\n• Skills & technologies\n• Projects I've built\n• Education & certifications\n• Work experience\n• Hiring / availability\n• Contact information\n\nJust ask! 👾`,
};

export function getAIReply(q) {
  q = q.toLowerCase();
  if (/skill|tech|lang|stack|know|tools/.test(q)) return AI_KB.skills;
  if (/project|built|made|portfolio|show/.test(q))  return AI_KB.projects;
  if (/hire|job|intern|freelance|avail|opportun|work with/.test(q)) return AI_KB.hire;
  if (/edu|study|mca|college|degree|cert|course|uni/.test(q)) return AI_KB.education;
  if (/exp|intern|company|work history|past/.test(q)) return AI_KB.experience;
  if (/contact|email|phone|reach|linkedin|github/.test(q)) return AI_KB.contact;
  if (/hello|hi|hey|namaste|who|about you/.test(q))
    return `👋 Hey! I'm Kunga's AI assistant. I can tell you all about his skills, projects, education, experience, or how to hire him. What would you like to know?`;
  return AI_KB.default;
}
