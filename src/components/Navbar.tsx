'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'cn';

const labels = {
  en: { about: 'About', experience: 'Experience', research: 'Research', campus: 'Campus', photos: 'Photos', contact: 'Contact' },
  cn: { about: '关于', experience: '经历', research: '科研', campus: '校园', photos: '相册', contact: '联系' },
};

// Items link directly to their specific page/section; clicking the nav label itself goes to main page
const drops = {
  en: {
    about: [{ t: 'Introduction', h: '/about' }, { t: 'Education', h: '/about#education' }, { t: 'Languages & Skills', h: '/about#skills' }],
    experience: [
      { t: 'State Council DRC', h: '/experience?i=0' },
      { t: 'HKU Centre for AI', h: '/experience?i=1' },
      { t: 'NetEase Interactive', h: '/experience?i=2' },
      { t: 'UN Youth Program', h: '/experience?i=3' },
      { t: 'UNDP China', h: '/experience?i=4' },
      { t: 'Rongtai VC', h: '/experience?i=5' },
    ],
    research: [
      { t: 'Healthcare Governance GBA', h: '/research?i=0' },
      { t: 'Cross-border Education', h: '/research?i=1' },
      { t: 'WVS Social Survey', h: '/research?i=2' },
      { t: 'China-US Trade Policy', h: '/research?i=3' },
    ],
    campus: [
      { t: 'Cantonese Club', h: '/campus?i=0' },
      { t: 'Economics Club', h: '/campus?i=1' },
      { t: '"Go South" Project', h: '/campus?i=2' },
    ],
    photos: [{ t: 'All Photos', h: '/photos' }],
    contact: [{ t: 'Email & Phone', h: '/contact' }],
  },
  cn: {
    about: [{ t: '个人介绍', h: '/about' }, { t: '教育背景', h: '/about#education' }, { t: '语言与技能', h: '/about#skills' }],
    experience: [
      { t: '国务院发展研究中心', h: '/experience?i=0' },
      { t: '香港大学AI中心', h: '/experience?i=1' },
      { t: '网易互娱', h: '/experience?i=2' },
      { t: '联合国青年项目', h: '/experience?i=3' },
      { t: 'UNDP中国', h: '/experience?i=4' },
      { t: '融泰私募', h: '/experience?i=5' },
    ],
    research: [
      { t: '粤港澳医疗治理', h: '/research?i=0' },
      { t: '港澳高校内地办学', h: '/research?i=1' },
      { t: '新时代社会治理调查', h: '/research?i=2' },
      { t: '中美贸易政策', h: '/research?i=3' },
    ],
    campus: [
      { t: '粤语社', h: '/campus?i=0' },
      { t: '经济学会', h: '/campus?i=1' },
      { t: '"下南洋"项目', h: '/campus?i=2' },
    ],
    photos: [{ t: '全部照片', h: '/photos' }],
    contact: [{ t: '邮件与电话', h: '/contact' }],
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
    ? scrolled ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0)'
    : scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0)';
  const border = dark
    ? scrolled ? 'rgba(255,255,255,0.1)' : 'transparent'
    : scrolled ? 'rgba(0,0,0,0.08)' : 'transparent';
  const textColor = dark ? '#f5f5f7' : '#1d1d1f';
  const mutedColor = dark ? 'rgba(255,255,255,0.5)' : '#6e6e73';
  const dropBg = dark ? 'rgba(28,28,30,0.97)' : 'rgba(255,255,255,0.97)';
  const dropBorder = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const dropText = dark ? '#f5f5f7' : '#1d1d1f';
  const dropMuted = dark ? 'rgba(255,255,255,0.4)' : '#86868b';
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
              {/* Clicking the label goes to main section page */}
              <Link href={`/${key}`} style={{
                display: 'block', padding: '0 12px', fontSize: 12, fontWeight: 500,
                color: currentPage === key ? textColor : mutedColor,
                textDecoration: 'none', lineHeight: '44px',
                transition: 'color 0.15s',
              }}>
                {t[key]}
              </Link>

              <AnimatePresence>
                {hovered === key && d[key].length > 0 && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 8, minWidth: 180, zIndex: 200 }}>
                    <div style={{
                      background: dropBg, border: `0.5px solid ${dropBorder}`, borderRadius: 14, overflow: 'hidden',
                      backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                    }}>
                      {/* Section header — clicks go to main page */}
                      <Link href={`/${key}`}
                        style={{ display: 'block', padding: '8px 16px 6px', fontSize: 10, fontWeight: 700, color: dropMuted, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', borderBottom: `0.5px solid ${dropDivider}` }}
                        onClick={() => setHovered(null)}>
                        {t[key]}
                      </Link>
                      {/* Each item — clicks go directly to specific entry */}
                      {d[key].map((item, i) => (
                        <Link key={i} href={item.h}
                          style={{
                            display: 'block', padding: '10px 16px', fontSize: 13, color: dropText,
                            textDecoration: 'none',
                            borderBottom: i < d[key].length - 1 ? `0.5px solid ${dropDivider}` : 'none',
                            transition: 'background 0.1s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)')}
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
