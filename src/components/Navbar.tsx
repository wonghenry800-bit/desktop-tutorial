'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'cn';

const labels = {
  en: { about: 'About', experience: 'Experience', research: 'Research', campus: 'Campus', photos: 'Photos', contact: 'Contact' },
  cn: { about: '关于', experience: '经历', research: '科研', campus: '校园', photos: '相册', contact: '联系' },
};

const drops = {
  en: {
    about: [{ t: 'Introduction', h: '/about' }, { t: 'Education', h: '/about#education' }],
    experience: [{ t: 'NetEase', h: '/experience?i=0' }, { t: 'UNDP', h: '/experience?i=1' }, { t: 'State Council', h: '/experience?i=2' }, { t: 'HKU AI', h: '/experience?i=3' }],
    research: [{ t: 'Healthcare GBA', h: '/research?i=0' }, { t: 'Cross-border Edu', h: '/research?i=1' }, { t: 'WVS Survey', h: '/research?i=2' }, { t: 'China-US Trade', h: '/research?i=3' }],
    campus: [{ t: 'Cantonese Club', h: '/campus?i=0' }, { t: 'Economics Club', h: '/campus?i=1' }, { t: 'Southeast Asia', h: '/campus?i=2' }],
    photos: [{ t: 'All Photos', h: '/photos' }],
    contact: [{ t: 'Say Hello', h: '/contact' }],
  },
  cn: {
    about: [{ t: '个人介绍', h: '/about' }, { t: '教育背景', h: '/about#education' }],
    experience: [{ t: '网易互娱', h: '/experience?i=0' }, { t: 'UNDP', h: '/experience?i=1' }, { t: '国务院', h: '/experience?i=2' }, { t: '港大AI中心', h: '/experience?i=3' }],
    research: [{ t: '医疗治理', h: '/research?i=0' }, { t: '跨境教育', h: '/research?i=1' }, { t: 'WVS调查', h: '/research?i=2' }, { t: '中美贸易', h: '/research?i=3' }],
    campus: [{ t: '粤语社', h: '/campus?i=0' }, { t: '经济学会', h: '/campus?i=1' }, { t: '下南洋', h: '/campus?i=2' }],
    photos: [{ t: '全部照片', h: '/photos' }],
    contact: [{ t: '联系我', h: '/contact' }],
  },
};

const navItems = ['about', 'experience', 'research', 'campus', 'photos', 'contact'] as const;

export default function Navbar({
  lang, setLang, currentPage, dark = false,
}: {
  lang: Language; setLang: (l: Language) => void; currentPage: string; dark?: boolean;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const t = labels[lang];
  const d = drops[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const bg = dark
    ? scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)'
    : scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0)';
  const border = dark
    ? scrolled ? 'rgba(255,255,255,0.1)' : 'transparent'
    : scrolled ? 'rgba(0,0,0,0.08)' : 'transparent';
  const textColor = dark ? '#f5f5f7' : '#1d1d1f';
  const mutedColor = dark ? 'rgba(255,255,255,0.5)' : '#6e6e73';
  const dropBg = dark ? 'rgba(28,28,30,0.96)' : 'rgba(255,255,255,0.96)';
  const dropBorder = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const dropText = dark ? '#f5f5f7' : '#1d1d1f';
  const dropDivider = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: bg,
      backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      borderBottom: `0.5px solid ${border}`,
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/avatar.jpg" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} alt="" />
          <span style={{ fontSize: 14, fontWeight: 600, color: textColor, letterSpacing: '-0.01em' }}>
            {lang === 'cn' ? '黄一健' : 'Yijian'}
          </span>
        </Link>

        <div style={{ display: 'flex' }}>
          {navItems.map(key => (
            <div key={key} style={{ position: 'relative' }}
              onMouseEnter={() => setHovered(key)} onMouseLeave={() => setHovered(null)}>
              <Link href={`/${key}`} style={{
                display: 'block', padding: '0 12px', fontSize: 12, fontWeight: 500,
                color: currentPage === key ? textColor : mutedColor,
                textDecoration: 'none', lineHeight: '44px',
                transition: 'color 0.15s',
              }}>
                {t[key]}
              </Link>
              <AnimatePresence>
                {hovered === key && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 8, minWidth: 160, zIndex: 200 }}>
                    <div style={{ background: dropBg, border: `0.5px solid ${dropBorder}`, borderRadius: 14, overflow: 'hidden', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
                      {d[key].map((item, i) => (
                        <Link key={i} href={item.h} style={{
                          display: 'block', padding: '10px 16px', fontSize: 13, color: dropText,
                          textAlign: 'center', textDecoration: 'none',
                          borderBottom: i < d[key].length - 1 ? `0.5px solid ${dropDivider}` : 'none',
                          transition: 'background 0.1s',
                        }}
                          onMouseEnter={e => (e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          onClick={() => setHovered(null)}>
                          {item.t}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <button onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 500, color: mutedColor, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = textColor)}
          onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}>
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
