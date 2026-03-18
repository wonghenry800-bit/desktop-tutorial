'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const expData = {
  en: [
    { org: 'State Council DRC', role: 'Intern Analyst', loc: 'Beijing / Remote', period: 'Dec 2025 – Present', present: true, tags: ['Policy Tracking', 'Think Tank', 'Bay Area Analysis'], img: '/gallery/国务院发展研究中心.png', abbr: 'SC', detail: 'At the Development Research Center of the State Council — China\'s top government think tank — I track enterprise going-out policy dynamics, conduct deep analysis of GBA coordination, and maintain the research group\'s knowledge base. I compile thematic research reports and assist senior researchers in completing policy studies.', color: '#1d1d1f' },
    { org: 'HKU Centre for AI', role: 'Research Assistant (Econometrics & AI)', loc: 'Hong Kong', period: 'Nov 2025 – Jan 2026', present: false, tags: ['OLS / IV / DID / PSM', 'Stata & R', 'ML Research'], img: '/gallery/HKUAI.webp', abbr: 'HK', detail: 'At HKU\'s Centre for AI, Management and Organization, I batch downloaded and organized 260+ replication packages from top journals (JAR, JEH). I summarized mainstream econometric methods (OLS, IV, DID, PSM), reproduced experimental results using Stata and R, and contributed to an ML-based database of analytical methods.', color: '#0071e3' },
    { org: 'Guangzhou Institute of GBA', role: 'Public Policy Analyst', loc: 'Guangzhou', period: 'Jun 2025 – Sept 2025', present: false, tags: ['Regional Policy', 'Field Research', 'Gov Reports'], img: '/gallery/粤港澳大湾区研究院.jpeg', abbr: 'GZ', detail: 'Assisted in policy research for regional development across six cross-city projects (Dahailing Bay, Ring-Wushan, Zero Bay, humanoid robots). Conducted field visits to Yangjiang, attended the World Robotics Conference, and contributed to weekly Yuzhu Salon seminars on digital trade and regional integration.', color: '#30b0c7' },
    { org: 'NetEase Interactive Entertainment', role: 'Global Business & Licensing Intern', loc: 'Guangzhou', period: 'Jul 2024 – Sept 2024', present: false, tags: ['Vietnam Market', 'SEGA Partnership', 'GDPR / COPPA'], img: '/gallery/netease.jpg', abbr: 'NE', detail: 'Analyzed Vietnam gaming regulations and completed licensing for NetEase\'s overseas titles. Researched partnerships with SEGA (Japan) and Russian publishers Astrum/Lesta. Studied Ubisoft/Disney/Marvel international co-production models and drafted GDPR/COPPA compliance reports.', color: '#ff3b30' },
    { org: 'Beijing YingKe Law Firm', role: 'Legal Assistant', loc: 'Guangzhou', period: 'May 2024 – Aug 2024', present: false, tags: ['Financial Litigation', 'SPD Bank', 'Policy Research'], img: '/gallery/UNDP.png', abbr: 'YK', detail: 'Assisted in handling financial litigation cases for SPD Bank. Monitored case progression, organized legal documentation, conducted in-depth research on banking policies, and prepared case summaries with meticulous attention to detail.', color: '#5856d6' },
    { org: 'UNDP China', role: 'Sino-US Trade Project Assistant', loc: 'Shenzhen', period: 'Jan 2024 – Feb 2024', present: false, tags: ['China-US Trade', 'Stata Regression', '4 Policy Briefs'], img: '/gallery/UNDP.png', abbr: 'UN', detail: 'Studied the evolution of China-US political and economic relations from 1949. Applied Stata regression models using NBER data to analyze bilateral trade flows. Co-authored four policy briefs on sustainable trade with recommendations for global economic cooperation.', color: '#2997ff' },
    { org: 'UN Youth Training Program', role: 'Member of China Team', loc: 'Geneva, Switzerland', period: 'Jun 2024 – Jul 2024', present: false, tags: ['SDG 5 / 8 / 16', 'UN Human Rights Council', 'Mediation'], img: '/gallery/UNDP.png', abbr: 'UN', detail: 'Delivered a speech at the UN Human Rights Council advocating for SDG16. Acted as mediator in China–Palestine humanitarian aid negotiations, drafting and passing resolutions. Represented Iran in Model UN climate negotiations. Authored two SDG policy proposals on post-COVID employment (SDG8) and Chinese feminism (SDG5).', color: '#34aadc' },
    { org: 'Guangdong Rongtai VC', role: 'Investment Analyst Intern', loc: 'Guangzhou', period: 'Jul 2023 – Sept 2023', present: false, tags: ['Due Diligence', 'Clean Energy / HealthTech', 'IPO Analysis'], img: '/gallery/粤港澳大湾区研究院.jpeg', abbr: 'VC', detail: 'Assessed regulatory and policy risks for early-stage investments across clean energy, healthcare tech, smart manufacturing, and digital services. Supported due diligence for four portfolio candidates including financial validation, site inspections, and executive interviews. Analyzed IPO case studies to assess policy impact on exit strategies.', color: '#ff9500' },
  ],
  cn: [
    { org: '国务院发展研究中心', role: '实习分析师', loc: '北京/远程', period: '2025年12月 – 至今', present: true, tags: ['政策跟踪', '智库研究', '湾区分析'], img: '/gallery/国务院发展研究中心.png', abbr: '国', detail: '在国务院发展研究中心负责企业出海政策动态跟踪与汇编，深度参与湾区协同发展评估，维护课题组知识库，协助完成专题研究报告。', color: '#1d1d1f' },
    { org: '香港大学AI管理与组织研究中心', role: '研究助理（计量经济学与AI）', loc: '香港', period: '2025年11月 – 2026年1月', present: false, tags: ['OLS/IV/DID/PSM', 'Stata与R', '机器学习'], img: '/gallery/HKUAI.webp', abbr: '港', detail: '批量下载整理260+篇顶刊复现包，总结主流计量方法（OLS、IV、DID、PSM），使用Stata和R复现实验结果，构建机器学习分析方法数据库。', color: '#0071e3' },
    { org: '广州粤港澳大湾区研究院', role: '公共政策分析师', loc: '广州', period: '2025年6月 – 2025年9月', present: false, tags: ['区域政策', '实地调研', '政府报告'], img: '/gallery/粤港澳大湾区研究院.jpeg', abbr: '湾', detail: '协助六个跨城项目政策研究（大海陵湾、环五山等），实地赴阳江调研，参加上海世界机器人大会，出席渔珠沙龙系列政策研讨。', color: '#30b0c7' },
    { org: '网易互娱', role: '海外授权与商务实习生', loc: '广州', period: '2024年7月 – 2024年9月', present: false, tags: ['越南市场', 'SEGA合作', 'GDPR/COPPA'], img: '/gallery/netease.jpg', abbr: '网', detail: '分析越南游戏监管政策，完成《倩女幽魂》海外版号申请。探明俄罗斯厂商合作意向，协助SEGA商务合作，研究育碧/迪士尼跨国合拍模式并撰写合规报告。', color: '#ff3b30' },
    { org: '北京盈科律师事务所', role: '法律助理', loc: '广州', period: '2024年5月 – 2024年8月', present: false, tags: ['金融诉讼', '浦发银行', '政策研究'], img: '/gallery/UNDP.png', abbr: '律', detail: '协助处理浦发银行金融诉讼案件，监督案件进展，整理法律文件，深入研究银行业政策法规，撰写案件摘要与诉讼材料。', color: '#5856d6' },
    { org: '联合国开发计划署（UNDP）', role: '中美贸易项目助理', loc: '深圳', period: '2024年1月 – 2024年2月', present: false, tags: ['中美贸易', 'Stata回归', '4份政策简报'], img: '/gallery/UNDP.png', abbr: '联', detail: '系统研究1949年以来中美政治经济关系演变，运用NBER数据库的Stata回归模型分析双边贸易流，合著4份可持续贸易政策简报。', color: '#2997ff' },
    { org: '联合国青年人才培养计划', role: '中国代表队成员', loc: '日内瓦，瑞士', period: '2024年6月 – 2024年7月', present: false, tags: ['SDG 5/8/16', '联合国人权理事会', '调解谈判'], img: '/gallery/UNDP.png', abbr: '日', detail: '在联合国人权理事会发表关于SDG16的演讲，担任中巴人道主义援助谈判调解员并推动决议通过，代表伊朗参与气候协议谈判，撰写两份SDG政策提案。', color: '#34aadc' },
    { org: '广东融泰私募基金', role: '投资分析师实习生', loc: '广州', period: '2023年7月 – 2023年9月', present: false, tags: ['尽职调查', '新能源/医疗科技', 'IPO分析'], img: '/gallery/粤港澳大湾区研究院.jpeg', abbr: '融', detail: '评估清洁能源、医疗科技、智能制造领域初创企业的监管政策风险，支持四家投资候选的尽职调查（含实地考察、财务核查、管理层访谈），研究IPO案例中政策对退出策略的影响。', color: '#ff9500' },
  ],
};

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = expData[lang];

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="experience" dark />

      {/* Dark hero */}
      <div style={{ paddingTop: 100, paddingBottom: 60, textAlign: 'center', padding: '100px 24px 60px' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>
          Career
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 16 }}>
          {lang === 'en' ? 'Experience' : '工作经历'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
          {lang === 'en' ? "Where I've worked and what I've built" : '我的工作经历与成果'}
        </motion.p>
      </div>

      {/* White list section */}
      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', minHeight: '60vh', padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 0 }}>
            {lang === 'en' ? `${data.length} positions` : `${data.length}段经历`}
          </p>
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)', borderTop: 'none' }}>
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                onClick={() => setSel(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < data.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#86868b' }}>
                  <img src={item.img} alt={item.abbr} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>{item.org}</div>
                  <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>{item.role}</div>
                  <div style={{ display: 'flex', gap: 5, marginTop: 7, flexWrap: 'wrap' }}>
                    {item.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 100, background: 'rgba(0,0,0,0.05)', color: '#6e6e73' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ flexShrink: 0, textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#aeaeb2', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 5 }}>
                    {item.period}
                    {item.present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                  </div>
                  <div style={{ fontSize: 10, color: '#c7c7cc', marginTop: 2 }}>{item.loc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(24px)' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 520, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e' }}>
                <img src={data[sel].img} alt={data[sel].org} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>{data[sel].loc}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em' }}>{data[sel].org}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{data[sel].role}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {data[sel].period}
                  {data[sel].present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 18, lineHeight: 1.8 }}>{data[sel].detail}</div>
                <button onClick={() => setSel(null)}
                  style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: '#2997ff', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
