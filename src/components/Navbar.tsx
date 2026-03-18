'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'cn';

const navLabels = {
  en: { about: 'About', experience: 'Experience', research: 'Research', campus: 'Campus', photos: 'Photos', contact: 'Contact' },
  cn: { about: '关于', experience: '经历', research: '科研', campus: '校园', photos: '相册', contact: '联系' },
};

const dropdownContent = {
  en: {
    about: [{ title: 'Introduction', href: '/about' }, { title: 'Education', href: '/about#education' }, { title: 'Skills', href: '/about#skills' }],
    experience: [{ title: 'NetEase', href: '/experience?item=0' }, { title: 'UNDP', href: '/experience?item=1' }, { title: 'Rongtai VC', href: '/experience?item=2' }, { title: 'HKU AI', href: '/experience?item=3' }, { title: 'GBA Institute', href: '/experience?item=4' }, { title: 'State Council', href: '/experience?item=5' }],
    research: [{ title: 'Healthcare GBA', href: '/research?item=0' }, { title: 'Cross-border Education', href: '/research?item=1' }, { title: 'Social Survey', href: '/research?item=2' }, { title: 'China-US Trade', href: '/research?item=3' }],
    campus: [{ title: 'Cantonese Club', href: '/campus?item=0' }, { title: 'Economics Club', href: '/campus?item=1' }, { title: 'Southeast Asia', href: '/campus?item=2' }],
    photos: [{ title: 'All Photos', href: '/photos' }],
    contact: [{ title: 'Email', href: '/contact' }, { title: 'Phone', href: '/contact' }],
  },
  cn: {
    about: [{ title: '个人介绍', href: '/about' }, { title: '教育背景', href: '/about#education' }, { title: '技能', href: '/about#skills' }],
    experience: [{ title: '网易互娱', href: '/experience?item=0' }, { title: 'UNDP', href: '/experience?item=1' }, { title: '融泰私募', href: '/experience?item=2' }, { title: '港大AI中心', href: '/experience?item=3' }, { title: '大湾区研究院', href: '/experience?item=4' }, { title: '国务院', href: '/experience?item=5' }],
    research: [{ title: '医疗治理', href: '/research?item=0' }, { title: '跨境教育', href: '/research?item=1' }, { title: '社会调查', href: '/research?item=2' }, { title: '中美贸易', href: '/research?item=3' }],
    campus: [{ title: '粤语社', href: '/campus?item=0' }, { title: '经济学会', href: '/campus?item=1' }, { title: '下南洋', href: '/campus?item=2' }],
    photos: [{ title: '全部照片', href: '/photos' }],
    contact: [{ title: '邮箱', href: '/contact' }, { title: '电话', href: '/contact' }],
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
  const t = navLabels[lang];
  const items = dropdownContent[lang];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
      }}
    >
      <div className="max-w-[980px] mx-auto px-6 h-[44px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setHovered(null)}>
          <img src="/avatar.jpg" alt="Avatar" className="w-6 h-6 rounded-full object-cover" />
          <span className="text-[14px] font-medium text-[#1d1d1f]">{lang === 'cn' ? '黄一健' : 'Yijian'}</span>
        </Link>

        {/* Center Nav */}
        <div className="flex items-center">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className="block px-4 text-[12px] font-medium transition-colors duration-150"
                style={{ color: currentPage === item.key ? '#1d1d1f' : '#6e6e73', lineHeight: '44px' }}
              >
                {t[item.key as keyof typeof t]}
              </Link>

              <AnimatePresence>
                {hovered === item.key && items[item.key as keyof typeof items]?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-48"
                  >
                    <div
                      className="rounded-[14px] overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '0.5px solid rgba(0,0,0,0.1)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      }}
                    >
                      {items[item.key as keyof typeof items]?.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[13px] text-[#1d1d1f] text-center transition-colors duration-100"
                          style={{ borderBottom: idx < items[item.key as keyof typeof items].length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none' }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                          onClick={() => setHovered(null)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Lang Toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
          className="text-[12px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
        >
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </motion.nav>
  );
}
