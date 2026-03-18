'use client';

import { useLanguage } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

const c = {
  en: { name: 'Yijian Huang', t1: 'Economics.', t2: 'Policy.', t3: 'Impact.', sub: 'CUHK-Shenzhen · UChicago Harris · UN Geneva · State Council DRC', cta1: 'Explore my work', cta2: 'Get in touch', scroll: 'Scroll' },
  cn: { name: '黄一健', t1: '经济学。', t2: '政策。', t3: '影响力。', sub: '港中深 · 芝加哥大学 · 联合国日内瓦 · 国务院发展研究中心', cta1: '了解我的经历', cta2: '联系我', scroll: '向下滚动' },
};

const stats = {
  en: [{ n: '6+', l: 'Internships' }, { n: '4', l: 'Policy briefs' }, { n: '6', l: 'Languages' }, { n: '3+', l: 'Countries' }],
  cn: [{ n: '6+', l: '实习经历' }, { n: '4', l: '政策简报' }, { n: '6', l: '语言' }, { n: '3+', l: '国家' }],
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const t = c[lang];
  const s = stats[lang];

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="home" dark />

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background accent */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,151,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 760, width: '100%', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            style={{ marginBottom: 40 }}>
            <img src="/avatar.jpg" alt="Yijian"
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.15)' }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 24 }}>
            {t.t1}<br />{t.t2}<br />
            <span style={{ color: '#2997ff' }}>{t.t3}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em', marginBottom: 40, lineHeight: 1.6 }}>
            {t.sub}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 80 }}>
            <Link href="/experience"
              style={{ padding: '12px 28px', background: '#f5f5f7', color: '#1d1d1f', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}>
              {t.cta1}
            </Link>
            <Link href="/contact"
              style={{ padding: '12px 28px', background: 'rgba(255,255,255,0.08)', color: '#f5f5f7', borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)' }}>
              {t.cta2}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.08)' }}>
            {s.map((item, i) => (
              <div key={i} style={{ padding: '24px 16px', textAlign: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em' }}>{item.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.scroll}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
}
