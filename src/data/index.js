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
    title: 'Personal Portfolio Website',
    type: 'FRONTEND · SPA',
    desc: 'Seven-section single-page app with animated HTML5 Canvas backgrounds (matrix rain, particle nodes, circuit grid) running at 60fps, an AI chatbot, and zero-backend EmailJS contact form.',
    tech: ['React 18', 'Vite', 'HTML5 Canvas', 'EmailJS'],
    color: '#38bdf8',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    github: 'https://github.com/KungaLegjung',
    demo: 'https://kunga-portfolio.vercel.app',
  },
  {
    title: 'Tourist Transport Data Framework',
    type: 'FULL-STACK · JAVA',
    desc: 'Role-based access system (Admin/User) with session management, a MySQL schema for transport routes and bookings, and an admin dashboard with query-tuned data retrieval.',
    tech: ['Java', 'MySQL', 'RBAC', 'Session Management'],
    color: '#34d399',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    github: 'https://github.com/KungaLegjung/Framework-for-Identification-and-Analysis-of-Tourist-Transport-Data.git',
    demo: '#',
  },
  {
    title: 'IT Support Analytics Dashboard',
    type: 'BI · ANALYTICS',
    desc: 'Power BI dashboards tracking IT support performance across 4 countries — 8+ charts, 5 KPIs, 14 SLA breaches flagged, and 29+ incidents categorised to support escalation decisions.',
    tech: ['Power BI', 'DAX', 'Excel', 'Power Query'],
    color: '#818cf8',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    github: 'https://github.com/KungaLegjung/Optimizing-IT-Support-Team-Performance-Using-Analytics.git',
    demo: '#',
  },
  {
    title: 'Sales Analysis Dashboard',
    type: 'BI · DATA VIZ',
    desc: 'Analysed 700K+ sales records across 4 years, surfacing regional and category-level trends with 10+ Power BI charts, KPI cards, and top-5 profit-driving product categories.',
    tech: ['Power BI', 'DAX', 'Excel', 'Data Cleaning'],
    color: '#fbbf24',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    github: 'https://github.com/KungaLegjung/Sales-Analytics-Dashboard.git',
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
