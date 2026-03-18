'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Language = 'en' | 'cn';

const content = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      research: 'Research',
      campus: 'Campus',
      photos: 'Photos',
      contact: 'Contact',
    },
  },
  cn: {
    nav: {
      about: '关于',
      experience: '经历',
      research: '科研',
      campus: '校园',
      photos: '相册',
      contact: '联系',
    },
  },
};

const dropdownContent = {
  en: {
    about: [
      { title: 'Introduction', href: '/about' },
      { title: 'Education', href: '/about#education' },
      { title: 'Skills', href: '/about#skills' },
    ],
    experience: [
      { title: 'NetEase', href: '/experience?item=0' },
      { title: 'UNDP', href: '/experience?item=1' },
      { title: 'Rongtai VC', href: '/experience?item=2' },
      { title: 'HKU AI', href: '/experience?item=3' },
      { title: 'GBA Institute', href: '/experience?item=4' },
      { title: 'State Council', href: '/experience?item=5' },
    ],
    research: [
      { title: 'Healthcare GBA', href: '/research?item=0' },
      { title: 'Cross-border Education', href: '/research?item=1' },
      { title: 'Social Survey', href: '/research?item=2' },
      { title: 'China-US Trade', href: '/research?item=3' },
    ],
    campus: [
      { title: 'Cantonese Club', href: '/campus?item=0' },
      { title: 'Economics Club', href: '/campus?item=1' },
      { title: 'Southeast Asia', href: '/campus?item=2' },
    ],
    photos: [
      { title: 'All Photos', href: '/photos' },
    ],
    contact: [
      { title: 'Email', href: '/contact' },
      { title: 'Phone', href: '/contact' },
    ],
  },
  cn: {
    about: [
      { title: '个人介绍', href: '/about' },
      { title: '教育背景', href: '/about#education' },
      { title: '技能', href: '/about#skills' },
    ],
    experience: [
      { title: '网易互娱', href: '/experience?item=0' },
      { title: 'UNDP', href: '/experience?item=1' },
      { title: '融泰私募', href: '/experience?item=2' },
      { title: '港大AI中心', href: '/experience?item=3' },
      { title: '大湾区研究院', href: '/experience?item=4' },
      { title: '国务院', href: '/experience?item=5' },
    ],
    research: [
      { title: '医疗治理', href: '/research?item=0' },
      { title: '跨境教育', href: '/research?item=1' },
      { title: '社会调查', href: '/research?item=2' },
      { title: '中美贸易', href: '/research?item=3' },
    ],
    campus: [
      { title: '粤语社', href: '/campus?item=0' },
      { title: '经济学会', href: '/campus?item=1' },
      { title: '下南洋', href: '/campus?item=2' },
    ],
    photos: [
      { title: '全部照片', href: '/photos' },
    ],
    contact: [
      { title: '邮箱', href: '/contact' },
      { title: '电话', href: '/contact' },
    ],
  },
};

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'experience', href: '/experience' },
  { key: 'research', href: '/research' },
  { key: 'campus', href: '/campus' },
  { key: 'photos', href: '/photos' },
  { key: 'contact', href: '/contact' },
];

export default function Navbar({ lang, setLang, currentPage }: { lang: Language; setLang: (l: Language) => void; currentPage: string }) {
  const t = content[lang].nav;
  const items = dropdownContent[lang];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
          onClick={() => setHovered(null)}
        >
          <img 
            src="/avatar.jpg" 
            alt="Avatar"
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="text-[15px] font-semibold text-white">{lang === 'cn' ? '黄一健' : 'Yijian'}</span>
        </Link>

        {/* Center Nav */}
        <div className="flex items-center justify-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.key}
              className="relative"
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className={`block px-5 py-2 text-[13px] font-medium transition-colors ${
                  currentPage === item.key
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {t[item.key as keyof typeof t]}
              </Link>
              
              {/* Apple-style dropdown */}
              {hovered === item.key && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 pt-6 w-60"
                >
                  <div className="bg-[#1d1d1f] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    {items[item.key as keyof typeof items]?.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className="block px-5 py-3.5 text-[13px] text-white/80 hover:bg-white/10 hover:text-white text-center transition-colors"
                        onClick={() => setHovered(null)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Lang Toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
          className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
        >
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </motion.nav>
  );
}
