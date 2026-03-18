'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const researchData = {
  en: [
    { title: 'Healthcare Governance in GBA', role: 'Research Assistant', period: 'Aug 2024 – Nov 2024', institution: 'HK-Macao-Taiwan Development Research Association', loc: 'Macau', tag: 'Policy Analysis', img: '/gallery/港澳高校内地办学研究.jpeg', detail: 'Researched the "Hong Kong-Macao Medicine and Equipment Connect" policy. Compiled 30+ government white papers, built a chronological timeline of cross-border medical integration from 2015–2024. Co-authored "Stepwise Administrative Delegation and Innovation: Governance Mechanisms of Hong Kong–Macao Medical Connect", planned for publication in Hong Kong & Macao Studies journal.' },
    { title: 'Cross-border Education in GBA', role: 'Lead Researcher', period: 'Aug 2023 – Jan 2024', institution: 'Independent Study', loc: 'Shenzhen', tag: 'Comparative Study', img: '/gallery/港澳高校内地办学研究.jpeg', detail: 'Comparative analysis of CUHK-Shenzhen, HKUST(GZ), and University of Macau (Hengqin). Conducted 15+ stakeholder interviews with administrators and scholars. Examined institutional autonomy, academic collaboration, and policy alignment. Presented findings at a regional GBA academic symposium.' },
    { title: 'New Era Social Governance Survey', role: 'Field Interviewer & Quality Inspector', period: 'Jun 2025 – Aug 2025', institution: 'World Values Survey (WVS Wave 8)', loc: 'Fujian / Jilin / Liaoning', tag: 'Field Research', img: '/gallery/数字经济峰会.jpg', detail: 'Conducted randomized household surveys on social, political, and cultural attitudes across three provinces. Collected biological samples (saliva). Ensured data validity via tablet-based electronic questionnaires. Audited survey recordings in Guangdong as secondary inspector, reviewing enumerator compliance and data quality.' },
    { title: 'China-US Trade Policy Research', role: 'Project Assistant', period: 'Jan 2024 – Feb 2024', institution: 'UNDP China', loc: 'Shenzhen', tag: 'Econometrics', img: '/gallery/UNDP.png', detail: 'Studied China-US political and economic relations from 1949 to present. Applied Stata regression models with NBER data to analyze policy impacts on bilateral trade flows, supply chains, and investment trends. Co-authored four policy briefs with recommendations for sustainable trade and global economic cooperation.' },
    { title: 'Grassroots Governance in GBA', role: 'Field Researcher', period: 'Aug 2023 – Sept 2023', institution: 'Independent Study', loc: 'Shunde / Zhuhai Hengqin', tag: 'Field Research', img: '/gallery/港澳高校内地办学研究.jpeg', detail: 'Fieldwork in Shunde and Zhuhai Hengqin to assess grassroots governance and cross-border public service models. Interviewed local officials and residents, analyzed governance effectiveness and service delivery. Produced a policy report with recommendations to enhance local governance capacity.' },
  ],
  cn: [
    { title: '粤港澳大湾区医疗治理', role: '研究助理', period: '2024年8月 – 2024年11月', institution: '港澳台发展研究协会', loc: '澳门', tag: '政策分析', img: '/gallery/港澳高校内地办学研究.jpeg', detail: '深度研究"港澳药械通"政策，收集30+份政府白皮书，构建2015-2024年跨境医疗合作时间轴。合著政策分析报告《药械通的诞生与实施："多阶段多类型博弈"》，计划发表于《港澳研究》杂志。' },
    { title: '港澳高校内地办学研究', role: '负责人', period: '2023年8月 – 2024年1月', institution: '独立研究', loc: '深圳', tag: '比较研究', img: '/gallery/港澳高校内地办学研究.jpeg', detail: '对比研究港中深、港科大（广州）与澳门大学（横琴）的定位与办学历程。访谈15+名高校管理人员及学者，审查机构自主性、学术合作与政策协调。在区域学术研讨会上发表研究结果。' },
    { title: '新时代社会治理调查', role: '调研员/质检员', period: '2025年6月 – 2025年8月', institution: '世界价值观调查（WVS第八轮）', loc: '福建/吉林/辽宁', tag: '实地调研', img: '/gallery/数字经济峰会.jpg', detail: '在三省开展入户社会、政治、文化态度随机调查，采集生物样本（唾液），采用平板电子问卷确保数据有效性。作为广东二级质检员复核问卷录音与调查流程。' },
    { title: '中美贸易政策研究', role: '项目助理', period: '2024年1月 – 2024年2月', institution: 'UNDP中国', loc: '深圳', tag: '计量经济学', img: '/gallery/UNDP.png', detail: '系统研究1949年以来中美政治经济关系演变，运用NBER数据库的Stata回归模型分析政策对双边贸易流、供应链与投资趋势的影响，合著4份可持续贸易政策简报。' },
    { title: '粤港澳基层治理调研', role: '实地研究员', period: '2023年8月 – 2023年9月', institution: '独立研究', loc: '顺德/珠海横琴', tag: '实地调研', img: '/gallery/港澳高校内地办学研究.jpeg', detail: '在顺德和珠海横琴开展实地调研，评估基层治理与跨境公共服务模式。访谈地方官员与居民，分析治理效能与服务提供，撰写政策建议报告。' },
  ],
};

export default function Research() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = researchData[lang];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="research" />
      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Academic</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16 }}>
              {lang === 'en' ? 'Research' : '研究经历'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              style={{ fontSize: 18, fontWeight: 300, color: '#6e6e73' }}>
              {lang === 'en' ? 'Policy · Econometrics · Field Studies' : '政策 · 计量 · 实地调研'}
            </motion.p>
          </div>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 0 }}>Projects</p>
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)', borderTop: 'none' }}>
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                onClick={() => setSel(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < data.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0 }}>
                  <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{item.tag}</span>
                    <span style={{ fontSize: 10, color: '#aeaeb2' }}>{item.institution}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f' }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>{item.role} · {item.loc}</div>
                </div>
                <div style={{ fontSize: 11, color: '#aeaeb2', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: 22, maxWidth: 520, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#f5f5f7' }}>
                <img src={data[sel].img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{data[sel].tag}</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em', marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{data[sel].role} · {data[sel].institution}</div>
                <div style={{ fontSize: 12, color: '#aeaeb2', marginTop: 2 }}>{data[sel].loc} · {data[sel].period}</div>
                <div style={{ fontSize: 14, color: '#6e6e73', marginTop: 18, lineHeight: 1.8 }}>{data[sel].detail}</div>
                <button onClick={() => setSel(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: '#1d1d1f', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
