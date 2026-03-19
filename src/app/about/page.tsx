'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const eduData = {
  en: [
    {
      abbr: 'CE', school: 'China Europe International Business School (CEIBS)', prog: 'Global MBA (Full-Time)', period: '2026–2027', loc: 'Shanghai, China',
      url: 'https://www.ceibs.edu',
      imgs: ['/gallery/ceibs.jpg'],
      detail: `Founded in 1994 through a partnership between the Chinese government and the European Commission, CEIBS (中欧国际工商学院) is Asia's #1 business school — ranked #1 in Asia and #8 globally by the Financial Times MBA Rankings 2026. Headquartered in Shanghai's Pudong district with campuses in Beijing, Shenzhen, Zurich, and Accra, CEIBS is the only business school in mainland China accredited by both EQUIS and AACSB.\n\nThe CEIBS Full-Time MBA is a 16-month intensive program built around the philosophy of "China Depth, Global Breadth." The curriculum includes 16 core courses and 40+ electives spanning finance, strategy, operations, and entrepreneurship, supplemented by an Integration Consulting Project and international exchange modules at 40+ elite partner schools worldwide. With a community of 30,000+ alumni across 90+ countries, the program develops leaders who can navigate the intersection of China's economy and global business.`
    },
    {
      abbr: 'ES', school: 'ESCP Business School', prog: 'Master in Global Management (MGM)', period: '2027–2029', loc: 'Paris / Berlin / London / Madrid / Turin / Warsaw',
      url: 'https://www.escp.eu',
      imgs: ['/gallery/ESCP.jpg'],
      detail: `Founded in 1819, ESCP is the world's oldest business school and one of the most prestigious in Europe. The Master in Global Management is its flagship postgraduate program — a truly pan-European experience spanning six campuses: Paris, Berlin, London, Madrid, Turin, and Warsaw. Students rotate between at least three campuses, immersing themselves in different business cultures and regulatory environments throughout the two-year program.\n\nThe MGM curriculum focuses on strategic management, international finance, cross-cultural leadership, and digital transformation. Known for its rigorously diverse student body (typically 40+ nationalities per cohort), ESCP consistently ranks among Europe's top 5 business schools. The program is designed for graduates building careers across borders — combining deep academic rigor with real-world consulting projects and an international alumni network spanning 150+ countries.`
    },
    {
      abbr: 'CU', school: 'The Chinese University of Hong Kong, Shenzhen', prog: 'BSc in Economics (Applied Economics), Minor in Philosophy', period: '2022–2026', loc: 'Shenzhen, China',
      url: 'https://www.cuhk.edu.cn',
      imgs: ['/gallery/香港中文大学（深圳）.jpg'],
      detail: `CUHK-Shenzhen (港中深) is one of the most selective and innovative universities in the Greater Bay Area. Founded in 2014 as a mainland campus of CUHK, it combines a century-long liberal arts tradition with Shenzhen's dynamic, innovation-driven ecosystem. Full bilingual instruction in Chinese and English attracts top students from across China and internationally.\n\nThe Applied Economics track provides rigorous training spanning Advanced Micro/Macroeconomic Theory, Intermediate Econometrics, Financial Economics, Behavioral Economics, Health Economics, Development Economics, Environmental Economics & Policy, Machine Learning in Finance, Quantitative Methods for Policy Evaluation, and International Trade. The Philosophy minor adds grounding in ethics, logic, and the philosophy of social science — a rare combination that shapes how I approach policy questions. Beyond academics: founded the university's first Cantonese Club (300+ students taught), served as Academic Director of the Economics Club, and led the "Going Down to Southeast Asia" research initiative.`
    },
    {
      abbr: 'UC', school: 'University of Chicago — Harris School of Public Policy', prog: 'Data & Policy Summer Scholar Program', period: 'Summer 2024', loc: 'Chicago, USA',
      url: 'https://harris.uchicago.edu',
      imgs: ['/gallery/Chicago.png'],
      detail: `The Harris School of Public Policy at the University of Chicago is consistently ranked among the world's top public policy schools, known for its rigorous, empirical approach to policy analysis. The Data & Policy Summer Scholar Program is a highly competitive, invitation-only program for exceptional undergraduates from leading universities worldwide.\n\nThe curriculum covered advanced econometric methods, R programming (ggplot2, tidyverse), big data statistical analysis, and evidence-based policy evaluation. My capstone project — supervised by Dr. Austin Wright, a leading researcher in conflict economics — investigated the impact of socioeconomic factors on voting behavior in US elections, combining regression analysis with data visualization. This experience reinforced my conviction that rigorous quantitative methods, properly applied, can translate directly into better government decisions.`
    },
    {
      abbr: 'HU', school: 'The University of Hong Kong', prog: 'CCGL9042 — Human Political & Economic Development', period: 'Summer 2023', loc: 'Hong Kong',
      url: 'https://www.hku.hk',
      imgs: ['/gallery/University of Hong Kong.png'],
      detail: `The University of Hong Kong is Asia's leading research university and consistently ranked in the global top 30. CCGL9042, taught by Dr. Larry Baum, is an intensive course examining the sweep of human history through a political economy lens — asking how institutions, power, trade, and geography shaped civilizations from antiquity to the present day.\n\nThe course culminated in the "2023 Sustainable Development Report of the Democratic Republic of Congo," a rigorous policy analysis exploring how resource extraction, colonial legacies, and governance failures have shaped the DRC's development trajectory — and what international institutions can do to support sustainable growth. Beyond the classroom, the exchange offered access to HKU's extraordinary research community and its unique vantage point at the crossroads of China and the global economy.`
    },
  ],
  cn: [
    {
      abbr: 'CE', school: '中欧国际工商学院（CEIBS）', prog: '全球工商管理硕士（MBA）', period: '2026–2027', loc: '上海',
      url: 'https://www.ceibs.edu',
      imgs: ['/gallery/ceibs.jpg'],
      detail: `中欧国际工商学院（CEIBS）创立于1994年，由中国政府与欧盟共同发起，是亚洲排名第一的商学院——2026年《金融时报》全球MBA排名中位居亚洲第一、全球第八。总部位于上海浦东，另设北京、深圳、苏黎世和加纳阿克拉校区，是中国大陆唯一同时获得EQUIS和AACSB双重认证的商学院。\n\n中欧全日制MBA为16个月密集项目，以"中国深度、全球广度"为核心理念。课程体系涵盖16门核心课和40余门选修课，横跨金融、战略、运营与创业，并配备整合咨询项目和全球40余所合作院校的交流模块。30,000+名校友遍布90+个国家，项目致力于培养站在中国经济与全球商业交汇点的领袖人才。`
    },
    {
      abbr: 'ES', school: 'ESCP商学院', prog: '全球管理硕士（MGM）', period: '2027–2029', loc: '巴黎/柏林/伦敦/马德里/都灵/华沙',
      url: 'https://www.escp.eu',
      imgs: ['/gallery/ESCP.jpg'],
      detail: `ESCP创立于1819年，是全球历史最悠久的商学院，也是欧洲最负盛名的顶尖院校之一。全球管理硕士（MGM）是其旗舰研究生项目——真正的泛欧洲学习体验，横跨巴黎、柏林、伦敦、马德里、都灵、华沙六大校区，学生在两年项目期间至少轮转三个校区，深度沉浸于不同商业文化与监管环境。\n\nMGM课程聚焦战略管理、国际金融、跨文化领导力与数字化转型。每届学员通常来自40+个国籍，ESCP长期位列欧洲商学院前五。项目为有志于跨国职业发展的毕业生而设，将严谨的学术训练与真实咨询项目、覆盖150+国家的国际校友网络深度融合。`
    },
    {
      abbr: 'CU', school: '香港中文大学（深圳）', prog: '经济学学士（应用经济学），辅修哲学', period: '2022–2026', loc: '深圳',
      url: 'https://www.cuhk.edu.cn',
      imgs: ['/gallery/香港中文大学（深圳）.jpg'],
      detail: `港中深是粤港澳大湾区最具竞争力的高校之一，2014年作为港中大的大陆校区创办，融合百年博雅传统与深圳创新生态，全英文双语授课，吸引全国及海外顶尖学生。\n\n应用经济学专业在理论与实证方法上均有严格训练，核心课程涵盖高级宏微观经济学、中级计量经济学、金融经济学、行为经济学、健康经济学、发展经济学、环境经济学与政策、金融机器学习、政策评估量化方法及国际贸易。辅修哲学——伦理、逻辑与社会科学哲学的训练塑造了我思考政策问题的独特视角。课余创办学校首个粤语社（教授300+学生）、担任经济学会学术部长、主导"下南洋"系列调研项目。`
    },
    {
      abbr: 'UC', school: '芝加哥大学哈里斯公共政策学院', prog: '数据与政策学者暑期项目', period: '2024年暑期', loc: '芝加哥，美国',
      url: 'https://harris.uchicago.edu',
      imgs: ['/gallery/Chicago.png'],
      detail: `芝加哥大学哈里斯公共政策学院以严格的实证政策分析方法著称，长期位列全球顶尖公共政策学院。数据与政策学者暑期项目是面向全球顶尖高校优秀本科生的竞争性邀请项目。\n\n课程聚焦高级计量经济学方法、R编程（ggplot2、tidyverse）、大数据统计分析与循证政策评估。顶点项目由冲突经济学权威学者Austin Wright博士指导，研究社会经济因素对美国选举投票行为的影响，综合运用实证回归分析与数据可视化方法。这段经历深化了我的信念：严谨的量化方法，正确运用时，可以直接转化为更好的政府决策。`
    },
    {
      abbr: 'HU', school: '香港大学', prog: 'CCGL9042 政治经济学视角下的人类发展', period: '2023年暑期', loc: '香港',
      url: 'https://www.hku.hk',
      imgs: ['/gallery/University of Hong Kong.png'],
      detail: `香港大学是亚洲顶尖研究型大学，全球排名前30。CCGL9042由Larry Baum博士讲授，以政治经济学视角回顾人类历史全貌——探究制度、权力、贸易与地理如何从古至今塑造不同文明形态。\n\n课程以《2023刚果民主共和国可持续发展报告》为结课作品，深度分析资源开采、殖民历史与治理失灵如何共同影响刚果的发展轨迹，并探讨国际机构如何支持可持续增长。交流期间，港大独特的学术社群及其在中国与全球经济交汇处的独特视角令我受益匪浅。`
    },
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

const skills = ['Python', 'Stata', 'R Studio', 'LaTeX', 'MS Office', 'Machine Learning', 'Econometrics', 'Policy Evaluation', 'Data Visualization'];

const aboutCards = {
  en: [
    { icon: '🎯', t: "Hi — I'm Yijian (Henry)", b: 'Explorer navigating Economics, Philosophy, AI and Policy simultaneously. CUHK-Shenzhen senior, CEIBS MBA 2026, heading to ESCP in 2027.' },
    { icon: '🏛️', t: 'Policy at the highest levels', b: 'State Council DRC, UNDP, GBA Institute, UN Geneva — researching how rules shape real industries and lives.' },
    { icon: '📊', t: 'Data-driven thinking', b: 'HKU AI Centre, UChicago Harris. Python, Stata, R. Turning raw data into policy insight.' },
    { icon: '💼', t: 'Business & markets', b: 'NetEase gaming licensing, Rongtai VC due diligence, Beijing YingKe Law. Theory meets practice.' },
    { icon: '🌏', t: '6 languages, 3+ countries', b: 'Cantonese, Mandarin, English, Japanese, German, French. Geneva, Chicago, Hong Kong, Shenzhen.' },
    { icon: '☕', t: "Let's talk", b: "If any of this resonates, I'm always up for a coffee chat or research collaboration." },
  ],
  cn: [
    { icon: '🎯', t: '你好，我是黄一健', b: '在经济学、哲学、AI与政策之间自由穿梭的探索者。港中深大四，2026年入读中欧MBA，2027年前往ESCP深造。' },
    { icon: '🏛️', t: '政策研究在最高层', b: '国务院发展研究中心、UNDP、大湾区研究院、联合国日内瓦——研究规则如何塑造真实产业与生活。' },
    { icon: '📊', t: '数据驱动的思维', b: '港大AI中心、芝加哥大学。Python、Stata、R。将原始数据转化为政策洞见。' },
    { icon: '💼', t: '商业与市场', b: '网易互娱游戏授权、融泰私募尽调、北京盈科律所。理论与实践的结合。' },
    { icon: '🌏', t: '6种语言，3+国家', b: '粤语、普通话、英语、日语、德语、法语。日内瓦、芝加哥、香港、深圳。' },
    { icon: '☕', t: '期待交流', b: '如果有共鸣，随时欢迎咖啡聊天或研究合作。' },
  ],
};

function ImageCarousel({ imgs }: { imgs: string[] }) {
  const [cur, setCur] = useState(0);
  if (imgs.length === 1) {
    return (
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#f5f5f7' }}>
        <img src={imgs[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#f5f5f7', position: 'relative' }}>
      <img src={imgs[cur]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {imgs.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 18 : 6, height: 6, borderRadius: 3, background: i === cur ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
        ))}
      </div>
      {imgs.length > 1 && <>
        <button onClick={() => setCur((cur - 1 + imgs.length) % imgs.length)} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>‹</button>
        <button onClick={() => setCur((cur + 1) % imgs.length)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>›</button>
      </>}
    </div>
  );
}

export default function About() {
  const { lang, setLang } = useLanguage();
  const [selEdu, setSelEdu] = useState<number | null>(null);
  const edu = eduData[lang];
  const cards = aboutCards[lang];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="about" />
      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
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

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {cards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ background: i === 0 ? '#1d1d1f' : '#f5f5f7', borderRadius: 18, padding: '22px 24px', gridColumn: i === 0 ? 'span 2' : 'span 1', border: '0.5px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? '#f5f5f7' : '#1d1d1f', marginBottom: 6 }}>{c.t}</div>
                <div style={{ fontSize: 13, color: i === 0 ? 'rgba(255,255,255,0.55)' : '#6e6e73', lineHeight: 1.65 }}>{c.b}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 0 }}>
            {lang === 'en' ? 'Education' : '教育背景'}
          </p>
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)', borderTop: 'none' }}>
            {edu.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 + 0.2 }}
                onClick={() => setSelEdu(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < edu.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e2 => (e2.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e2 => (e2.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0, overflow: 'hidden' }}>
                  <img src={e.imgs[0]} alt={e.abbr} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={ev => { (ev.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.school}</div>
                  <div style={{ fontSize: 12, color: '#2997ff', marginTop: 2 }}>{e.prog}</div>
                  <div style={{ fontSize: 11, color: '#aeaeb2', marginTop: 2 }}>{e.loc}</div>
                </div>
                <div style={{ fontSize: 11, color: '#aeaeb2', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                  {e.period}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Languages' : '语言能力'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {langs.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 + 0.3 }}
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

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Technical Skills' : '技能工具'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map((s, i) => (
              <span key={i} style={{ fontSize: 13, fontWeight: 500, color: '#1d1d1f', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', padding: '7px 16px', borderRadius: 100 }}>{s}</span>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selEdu !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelEdu(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(20px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: 22, maxWidth: 560, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
              <ImageCarousel imgs={edu[selEdu].imgs} />
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em' }}>{edu[selEdu].school}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{edu[selEdu].prog}</div>
                <div style={{ fontSize: 12, color: '#aeaeb2', marginTop: 2 }}>{edu[selEdu].loc} · {edu[selEdu].period}</div>
                <a href={edu[selEdu].url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#2997ff', marginTop: 8, textDecoration: 'none' }}>
                  {edu[selEdu].url}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <div style={{ fontSize: 14, color: '#6e6e73', marginTop: 18, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{edu[selEdu].detail}</div>
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
