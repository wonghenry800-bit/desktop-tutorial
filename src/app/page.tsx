'use client';

import { useLanguage } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

const content = {
  en: {
    name: 'Yijian Huang',
    title: 'Economics & Policy',
    subtitle: 'CUHK-Shenzhen · UChicago · UN Youth Program',
    about: 'About',
    experience: 'Experience',
    scroll: 'Scroll to explore',
  },
  cn: {
    name: '黄一健',
    title: '经济学与政策',
    subtitle: '港中深 · 芝加哥大学 · 联合国青年项目',
    about: '关于',
    experience: '经历',
    scroll: '向下滚动',
  },
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage="home" />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-[680px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10"
          >
            <img
              src="/avatar.jpg"
              alt="Yijian Huang"
              className="w-28 h-28 rounded-full mx-auto object-cover"
              style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[56px] md:text-[72px] font-semibold text-[#1d1d1f] leading-none mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            {t.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[22px] font-light text-[#6e6e73] mb-3"
          >
            {t.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-[15px] text-[#86868b] mb-14 tracking-wide"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex justify-center gap-3"
          >
            <Link
              href="/about"
              className="px-7 py-3 rounded-full text-[15px] font-medium text-white transition-colors duration-200"
              style={{ backgroundColor: '#1d1d1f' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3a3a3c')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1d1d1f')}
            >
              {t.about}
            </Link>
            <Link
              href="/experience"
              className="px-7 py-3 rounded-full text-[15px] font-medium text-[#1d1d1f] transition-colors duration-200"
              style={{ backgroundColor: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.1)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e8e8ed')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
            >
              {t.experience}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-14"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
}
