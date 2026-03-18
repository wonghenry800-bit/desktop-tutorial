'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const eduData = {
  en: [
    { abbr: 'ES', school: 'ESCP Business School', prog: 'Master in Global Management', period: '2027–2029', loc: 'Paris / Berlin / London', detail: 'Founded in 1819, the world\'s oldest business school. The MGM program spans multiple European campuses, preparing students for senior leadership in international organizations across finance, strategy, and global operations.', img: '/gallery/ESCP.jpg' },
    { abbr: 'CU', school: 'CUHK-Shenzhen', prog: 'BSc Economics (Applied Economics)', period: '2022–2026', loc: 'Shenzhen, China', detail: 'Combining CUHK\'s liberal arts tradition with Shenzhen\'s innovation spirit. Coursework in advanced econometrics, ML in finance, policy evaluation, behavioral economics, and Chinese economy. Minor in Philosophy.', img: '/gallery/香港中文大学（深圳）.jpg' },
    { abbr: 'UC', school: 'University of Chicago — Harris', prog: 'Data & Policy Summer Scholar', period: 'Summer 2024', loc: 'Chicago, USA', detail: 'Highly competitive summer program at one of the world\'s top policy schools. Capstone project on socioeconomic factors affecting US voting behavior, supervised by Dr. Austin Wright. Methods: R, ggplot2, econometric analysis.', img: '/gallery/Chicago.png' },
    { abbr: 'HU', school: 'University of Hong Kong', prog: 'CCGL9042 — Human Political & Economic Development', period: 'Summer 2023', loc: 'Hong Kong', detail: 'Intensive course examining world history through political economy. Produced the "2023 Sustainable Development Report of the Democratic Republic of Congo" as final presentation under Dr. Larry Baum.', img: '/gallery/University of Hong Kong.png' },
  ],
  cn: [
    { abbr: 'ES', school: 'ESCP欧洲高等商学院', prog: '全球管理硕士', period: '2027–2029', loc: '巴黎 / 柏林 / 伦敦', detail: '创立于1819年，世界最古老的商学院。MGM项目横跨多个欧洲校区，培养学生在金融、战略与全球运营领域的高级领导力。', img: '/gallery/ESCP.jpg' },
    { abbr: 'CU', school: '香港中文大学（深圳）', prog: '经济学学士（应用经济学）', period: '2022–2026', loc: '深圳', detail: '融合港中大博雅传统与深圳创新精神。课程涵盖高级计量经济学、金融机器学习、政策评估、行为经济学及中国经济。辅修哲学。', img: '/gallery/香港中文大学（深圳）.jpg' },
    { abbr: 'UC', school: '芝加哥大学哈里斯公共政策学院', prog: '数据与政策学者暑期项目', period: '2024年暑期', loc: '芝加哥，美国', detail: '顶尖政策学院的高选拔暑期项目。在Austin Wright教授指导下完成关于社会经济因素影响美国投票行为的顶点项目，运用R和计量分析方法。', img: '/gallery/Chicago.png' },
    { abbr: 'HU', school: '香港大学', prog: 'CCGL9042 政治经济学视角下的人类发展', period: '2023年暑期', loc: '香港', detail: '从政治经济学视角探索世界历史的密集课程。在Larry Baum教授指导下完成《2023刚果民主共和国可持续发展报告》。', img: '/gallery/University of Hong Kong.png' },
  ],
};

const langs = [
  { name: 'Cantonese / 粤语', level: 'Native', pct: 100, color: '#1d1d1f' },
  { name: 'Mandarin / 普通话', level: 'Native', pct: 100, color: '#1d1d1f' },
  { name: 'English', level: 'Proficient', pct: 92, color: '#2997ff' },
  { name: '日本語', level: 'Proficient', pct: 80, color: '#2997ff' },
  { name: 'Deutsch', level: 'Intermediate', pct: 55, color: '#86868b' },
  { name: 'Français', level: 'Basic', pct: 30, color: '#aeaeb2' },
];

const skills = ['Python', 'Stata', 'R Studio', 'LaTeX', 'MS Office', 'Machine Learning', 'Econometrics', 'Policy Evaluation'];

const aboutCards = {
  en: [
    { icon: '🎯', t: "Hi — I'm Yijian (Henry)", b: 'Explorer navigating Economics, Philosophy, AI and Policy simultaneously. Senior at CUHK-Shenzhen, heading to ESCP in 2027.' },
    { icon: '🏛️', t: 'Policy at the highest levels', b: 'State Council DRC, UNDP, GBA Institute, UN Geneva — researching how rules shape real industries and lives.' },
    { icon: '📊', t: 'Data-driven thinking', b: 'HKU AI Centre, UChicago Harris. Python, Stata, R. Turning raw data into policy insight.' },
    { icon: '💼', t: 'Business & markets', b: 'NetEase gaming licensing, Rongtai VC due diligence, Beijing YingKe Law Firm. Theory meets practice.' },
    { icon: '🌏', t: '6 languages, 3+ countries', b: 'Cantonese, Mandarin, English, Japanese, German, French. Geneva, Chicago, Hong Kong, Shenzhen.' },
    { icon: '☕', t: "Let's talk", b: "If any of this resonates, I'm always up for a coffee chat or research collaboration." },
  ],
  cn: [
    { icon: '🎯', t: '你好，我是黄一健', b: '在经济学、哲学、AI与政策之间自由穿梭的探索者。港中深大四，2027年前往ESCP深造。' },
    { icon: '🏛️', t: '政策研究在最高层', b: '国务院发展研究中心、UNDP、大湾区研究院、联合国日内瓦——研究规则如何塑造真实产业与生活。' },
    { icon: '📊', t: '数据驱动的思维', b: '港大AI中心、芝加哥大学。Python、Stata、R。将原始数据转化为政策洞见。' },
    { icon: '💼', t: '商业与市场', b: '网易互娱游戏授权、融泰私募尽调、北京盈科律所。理论与实践的结合。' },
    { icon: '🌏', t: '6种语言，3+国家', b: '粤语、普通话、英语、日语、德语、法语。日内瓦、芝加哥、香港、深圳。' },
    { icon: '☕', t: '期待交流', b: '如果有共鸣，随时欢迎咖啡聊天或研究合作。' },
  ],
};

export default function About() {
  const { lang, setLang } = useLanguage();
  const [selEdu, setSelEdu] = useState<number | null>(null);
  const edu = eduData[lang];
  const cards = aboutCards[lang];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="about" />

      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
        {/* Hero */}
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 80 }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Profile</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 18 }}>
            {lang === 'en' ? 'About Me' : '关于我'}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            style={{ fontSize: 18, fontWeight: 300, color: '#6e6e73' }}>
            {lang === 'en' ? 'Researcher · Analyst · Builder' : '研究者 · 分析师 · 创造者'}
          </motion.p>
        </div>

        {/* About cards */}
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {cards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ background: i === 0 ? '#1d1d1f' : '#f5f5f7', borderRadius: 18, padding: '22px 24px', gridColumn: i === 0 ? 'span 2' : 'span 1', border: '0.5px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? '#f5f5f7' : '#1d1d1f', marginBottom: 6, letterSpacing: '-0.01em' }}>{c.t}</div>
                <div style={{ fontSize: 13, color: i === 0 ? 'rgba(255,255,255,0.55)' : '#6e6e73', lineHeight: 1.65 }}>{c.b}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Education' : '教育背景'}
          </p>
          <div style={{ borderRadius: 18, overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)' }}>
            {edu.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 + 0.2 }}
                onClick={() => setSelEdu(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < edu.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e2 => (e2.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e2 => (e2.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={e.img} alt={e.abbr} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={ev => { (ev.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.school}</div>
                  <div style={{ fontSize: 12, color: '#2997ff', marginTop: 2 }}>{e.prog}</div>
                  <div style={{ fontSize: 11, color: '#aeaeb2', marginTop: 2 }}>{e.loc}</div>
                </div>
                <div style={{ fontSize: 11, color: '#aeaeb2', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {e.period}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Languages' : '语言能力'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {langs.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 + 0.3 }}
                style={{ background: '#f5f5f7', borderRadius: 14, padding: '14px 16px', border: '0.5px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f' }}>{l.name}</div>
                <div style={{ fontSize: 11, color: '#86868b', marginTop: 2 }}>{l.level}</div>
                <div style={{ height: 3, borderRadius: 2, background: '#e5e5ea', marginTop: 10, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${l.pct}%`, background: l.color, borderRadius: 2 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Technical Skills' : '技能工具'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map((s, i) => (
              <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 + 0.3 }}
                style={{ fontSize: 13, fontWeight: 500, color: '#1d1d1f', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', padding: '7px 16px', borderRadius: 100 }}>
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </main>

      {/* Education Modal */}
      <AnimatePresence>
        {selEdu !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelEdu(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(20px)' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: 22, maxWidth: 520, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#f5f5f7' }}>
                <img src={edu[selEdu].img} alt={edu[selEdu].school} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em' }}>{edu[selEdu].school}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{edu[selEdu].prog}</div>
                <div style={{ fontSize: 12, color: '#aeaeb2', marginTop: 2 }}>{edu[selEdu].loc} · {edu[selEdu].period}</div>
                <div style={{ fontSize: 14, color: '#6e6e73', marginTop: 18, lineHeight: 1.75 }}>{edu[selEdu].detail}</div>
                <button onClick={() => setSelEdu(null)}
                  style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: '#1d1d1f', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  {lang === 'en' ? 'Close' : '关闭'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
