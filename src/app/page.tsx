'use client';

import { useLanguage } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const content = {
  en: {
    home: {
      name: 'Yijian Huang',
      title: 'Economics & Policy',
      subtitle: 'CUHK-Shenzhen • UChicago • UN Youth Program',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
    },
  },
  cn: {
    home: {
      name: '黄一健',
      title: '经济学与政策',
      subtitle: '港中深 • 芝加哥大学 • 联合国青年项目',
    },
    nav: {
      about: '关于',
      experience: '经历',
    },
  },
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const t = content[lang].home;
  const navT = content[lang].nav;

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="home" />
      
      <section className="min-h-screen flex flex-col items-center justify-center pt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src="/avatar.jpg" 
              alt="Yijian Huang"
              className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-gray-700 shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight"
          >
            {t.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[20px] text-gray-300 mb-3 font-light"
          >
            {t.title}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[15px] text-gray-500 mb-12"
          >
            {t.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/about"
              className="px-8 py-3 bg-white text-black rounded-full text-[15px] font-medium hover:bg-gray-200 transition-colors"
            >
              {navT.about}
            </a>
            <a
              href="/experience"
              className="px-8 py-3 bg-gray-800 text-white rounded-full text-[15px] font-medium hover:bg-gray-700 transition-colors border border-gray-700"
            >
              {navT.experience}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </section>
    </div>
  );
}
