'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Language context
type Language = 'en' | 'cn';

const content = {
  en: {
    nav: {
      about: 'About',
      internships: 'Internships',
      research: 'Research',
      campus: 'Campus',
      hobbies: 'Hobbies',
      contact: 'Contact',
    },
    hero: {
      name: 'Yijian Huang',
      title: 'Economics & Policy Research',
      subtitle: 'CUHK-Shenzhen | University of Chicago | UN Youth Program',
      cta: 'Explore My Journey',
    },
    about: {
      title: 'About Me',
      intro: 'A passionate economics student with experience in policy research, international organizations, and data-driven analysis.',
      education: 'Education',
      skills: 'Core Skills',
      skillList: ['Economics Research', 'Data Analysis', 'Policy Evaluation', 'Machine Learning', 'International Relations'],
    },
    internships: {
      title: 'Internship Experience',
    },
    research: {
      title: 'Research Experience',
    },
    campus: {
      title: 'Campus Experience',
    },
    hobbies: {
      title: 'Interests & Hobbies',
    },
    contact: {
      title: 'Get In Touch',
      email: 'Email',
      phone: 'Phone',
      message: 'Feel free to reach out for collaborations or just to say hi!',
    },
  },
  cn: {
    nav: {
      about: '关于我',
      internships: '实习经历',
      research: '科研经历',
      campus: '校园经历',
      hobbies: '兴趣爱好',
      contact: '联系方式',
    },
    hero: {
      name: '黄一健',
      title: '经济学与政策研究',
      subtitle: '港中深 | 芝加哥大学 | 联合国青年项目',
      cta: '探索我的旅程',
    },
    about: {
      title: '关于我',
      intro: '热爱经济学，专注于政策研究、国际组织和数据分析。',
      education: '教育背景',
      skills: '核心技能',
      skillList: ['经济研究', '数据分析', '政策评估', '机器学习', '国际关系'],
    },
    internships: {
      title: '实习经历',
    },
    research: {
      title: '科研经历',
    },
    campus: {
      title: '校园经历',
    },
    hobbies: {
      title: '兴趣爱好',
    },
    contact: {
      title: '联系我',
      email: '邮箱',
      phone: '电话',
      message: '欢迎合作或交流！',
    },
  },
};

// Experience data
const internships = [
  {
    company: 'NetEase Interactive Entertainment',
    role: 'Global Business & Licensing Intern',
    period: 'Jul 2024 - Sept 2024',
    location: 'Guangzhou, China',
    description: [
      'Analyzed Vietnam gaming regulations and completed overseas game licensing',
      'Researched partnership opportunities with SEGA (Japan) and Russian game publishers',
      'Studied international co-production models and GDPR/COPPA compliance',
    ],
  },
  {
    company: 'Guangdong Rongtai Venture Capital',
    role: 'Investment Analyst Intern',
    period: 'Jul 2023 - Sept 2023',
    location: 'Guangzhou, China',
    description: [
      'Assessed regulatory and policy risks for early-stage investments',
      'Conducted industry policy research and market analysis',
      'Supported due diligence for portfolio candidates',
    ],
  },
  {
    company: 'UNDP China',
    role: 'Sino-US Trade Project Assistant',
    period: 'Jan 2024 - Feb 2024',
    location: 'Guangzhou, China',
    description: [
      'Studied China-US political and economic relations evolution',
      'Applied regression models using Stata for policy impact analysis',
      'Co-authored four policy briefs on sustainable trade',
    ],
  },
  {
    company: 'HKU Centre for AI, Management & Organization',
    role: 'Research Assistant (Econometrics & AI)',
    period: 'Nov 2025 - Jan 2026',
    location: 'Hong Kong, China',
    description: [
      'Batch downloaded and organized replication data from academic literature',
      'Summarized applied econometric methods (OLS, IV, DID, PSM)',
      'Reproduced experimental results using Stata and R',
    ],
  },
  {
    company: 'Guangzhou Institute of GBA',
    role: 'Public Policy Analyst',
    period: 'Jun 2025 - Sept 2025',
    location: 'Guangzhou, China',
    description: [
      'Assisted in regional development and sci-tech zone policy research',
      'Collected and organized government documents for cross-city projects',
      'Conducted field visits and attended World Robotics Conference',
    ],
  },
];

const research = [
  {
    title: 'Healthcare Governance in GBA',
    role: 'Research Assistant',
    period: 'Aug 2024 - Nov 2024',
    institution: 'HK-Macao-Taiwan Development Research Association',
    description: 'Researched "Hong Kong-Macao Medicine and Equipment Connect" policy; authored policy analysis report planned for publication in "Hong Kong & Macao Studies"',
  },
  {
    title: 'Cross-border Education in GBA',
    role: 'Lead Researcher',
    period: 'Aug 2023 - Jan 2024',
    institution: 'Independent Study',
    description: 'Comparative study of CUHK-Shenzhen, HKUST(GZ), and University of Macau; conducted 15+ stakeholder interviews; presented at regional academic symposium',
  },
  {
    title: 'New Era Social Governance Survey (WVS Wave 8)',
    role: 'Field Interviewer & Quality Inspector',
    period: 'Jun 2025 - Aug 2025',
    institution: 'World Values Survey',
    description: 'Conducted household surveys in Fujian, Jilin, Liaoning; collected biological samples; audited survey quality in Guangdong',
  },
];

const campus = [
  {
    title: 'President, Cantonese Club',
    period: 'Sep 2023 - Present',
    description: 'Established first Cantonese class at CUHK-Shenzhen; organized Cantonese song festivals, stand-up comedy shows, and dim sum DIY activities',
  },
  {
    title: 'Academic Director, Economics Club',
    period: 'Sep 2023 - Aug 2024',
    description: 'Analyzed economic and political hotspots; produced weekly economics reports; invited scholars for lectures; reviewed papers for university journal',
  },
  {
    title: 'Project Manager, "Going Down to Southeast Asia"',
    period: 'Mar 2025 - Present',
    description: 'Leading research teams to Singapore and Malaysia for housing policy and healthcare system comparisons; contacting social organizations for research invitations',
  },
];

const hobbies = [
  { icon: '🏓', name: 'Table Tennis' },
  { icon: '🎾', name: 'Tennis' },
  { icon: '🏊', name: 'Swimming' },
  { icon: '🪘', name: 'Drums' },
  { icon: '🗣️', name: 'Language Learning' },
  { icon: '📚', name: 'Philosophy & History' },
];

// Components
function Navbar({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const t = content[lang].nav;
  const sections = ['about', 'internships', 'research', 'campus', 'hobbies', 'contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-white font-semibold text-lg"
        >
          Y.Huang
        </motion.a>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              whileHover={{ color: '#007AFF' }}
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {t[section as keyof typeof t]}
            </motion.a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
          className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium"
        >
          {lang === 'en' ? '中文' : 'EN'}
        </motion.button>
      </div>
    </motion.nav>
  );
}

function Hero({ lang }: { lang: Language }) {
  const t = content[lang].hero;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          {t.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-blue-400 mb-2"
        >
          {t.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg mb-8"
        >
          {t.subtitle}
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-medium"
        >
          {t.cta}
        </motion.a>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        ↓
      </motion.div>
    </section>
  );
}

function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function About({ lang }: { lang: Language }) {
  const t = content[lang].about;

  return (
    <Section id="about">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-8"
      >
        {t.title}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard>
          <p className="text-gray-300 leading-relaxed text-lg">{t.intro}</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white mb-4">{t.education}</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-medium">CUHK-Shenzhen</p>
              <p className="text-gray-400">Economics (Applied Economics)</p>
              <p className="text-gray-500 text-sm">2022 - 2026</p>
            </div>
            <div>
              <p className="text-white font-medium">University of Chicago</p>
              <p className="text-gray-400">Data and Policy Scholar Program</p>
              <p className="text-gray-500 text-sm">Summer 2024</p>
            </div>
            <div>
              <p className="text-white font-medium">HKU</p>
              <p className="text-gray-400">Human Political & Economic Development</p>
              <p className="text-gray-500 text-sm">Summer 2023</p>
            </div>
          </div>
        </GlassCard>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4">{t.skills}</h3>
        <div className="flex flex-wrap gap-3">
          {t.skillList.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function Internships({ lang }: { lang: Language }) {
  const t = content[lang].internships;

  return (
    <Section id="internships" className="bg-black/20">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        {t.title}
      </motion.h2>
      <div className="space-y-6">
        {internships.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                  <p className="text-blue-400">{item.role}</p>
                </div>
                <div className="text-right text-gray-500 text-sm">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {item.description.map((desc, j) => (
                  <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Research({ lang }: { lang: Language }) {
  const t = content[lang].research;

  return (
    <Section id="research">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        {t.title}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {research.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                <span>🔬</span>
                <span>{item.institution}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.period}</p>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Campus({ lang }: { lang: Language }) {
  const t = content[lang].campus;

  return (
    <Section id="campus" className="bg-black/20">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        {t.title}
      </motion.h2>
      <div className="space-y-6">
        {campus.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-1">{item.description}</p>
                </div>
                <p className="text-gray-500 text-sm mt-4 md:mt-0">{item.period}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Hobbies({ lang }: { lang: Language }) {
  const t = content[lang].hobbies;

  return (
    <Section id="hobbies">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12"
      >
        {t.title}
      </motion.h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {hobbies.map((hobby, i) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <GlassCard className="text-center py-8">
              <div className="text-4xl mb-3">{hobby.icon}</div>
              <p className="text-gray-300 text-sm">{hobby.name}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact({ lang }: { lang: Language }) {
  const t = content[lang].contact;

  return (
    <Section id="contact" className="bg-black/20">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        {t.title}
      </motion.h2>
      <div className="max-w-2xl mx-auto">
        <GlassCard>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t.email}</p>
                <p className="text-white">Yijianhuang@link.cuhk.edu.cn</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t.phone}</p>
                <p className="text-white">+86 13631379946</p>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-center mt-8">{t.message}</p>
        </GlassCard>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
        <p>© 2026 Yijian Huang. Built with Apple ✨</p>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Internships lang={lang} />
      <Research lang={lang} />
      <Campus lang={lang} />
      <Hobbies lang={lang} />
      <Contact lang={lang} />
      <Footer />
    </div>
  );
}
