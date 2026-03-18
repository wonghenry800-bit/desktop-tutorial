'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const researchData = {
  en: [
    {
      title: 'Healthcare Governance in the GBA',
      role: 'Research Assistant',
      period: 'Aug 2024 – Nov 2024',
      institution: 'HK-Macao-Taiwan Development Research Association',
      loc: 'Macau',
      tag: 'Policy Analysis',
      imgs: ['/gallery/港澳药械通1.jpg', '/gallery/药械通论文截图2.png'],
      detail: `The "Hong Kong-Macao Medicine and Equipment Connect" (港澳药械通) policy represents one of the most ambitious institutional innovations in the Greater Bay Area — allowing patients in Guangdong to access pharmaceuticals and medical devices approved in Hong Kong and Macao without going through China's standard approval processes. Since launching at HKU Shenzhen Hospital in 2020, the pilot has expanded to five hospitals across Guangzhou, Zhuhai, and Zhongshan.\n\nIn this project, I conducted systematic desk research on 30+ government white papers, policy documents, and legal frameworks governing medical cooperation across GBA cities. I built a detailed chronological timeline tracing cross-border medical integration from 2015 to 2024, mapping key regulatory milestones and intergovernmental agreements. The central output was a co-authored policy analysis report: "Stepwise Administrative Delegation and Innovation: Governance Mechanisms of Hong Kong–Macao Medical Connect" — analyzing the institutional foundations, regulatory challenges, and administrative innovations of the program. The paper proposed evidence-based recommendations for strengthening cross-regional healthcare governance and expanding the policy framework to include telemedicine and pharmaceutical R&D. It is planned for publication in the Hong Kong & Macao Studies journal.`
    },
    {
      title: 'Cross-border Education in the GBA',
      role: 'Lead Researcher',
      period: 'Aug 2023 – Jan 2024',
      institution: 'Independent Study',
      loc: 'Shenzhen / Hong Kong',
      tag: 'Comparative Study',
      imgs: ['/gallery/港澳高校内地办学1.jpeg', '/gallery/港澳高校内地办学研究2.jpeg'],
      detail: `The past decade has seen an extraordinary expansion of Hong Kong and Macao universities establishing campuses on the Chinese mainland — a phenomenon with profound implications for higher education governance, student mobility, and the GBA's knowledge economy. This research examined three pioneer institutions: CUHK-Shenzhen (established 2014), HKUST(GZ) (established 2022), and the University of Macau's Hengqin campus (established 2013).\n\nThrough 15+ semi-structured interviews with university administrators, senior faculty, and student representatives, I examined how each institution navigates the tension between academic autonomy (preserving Hong Kong/Macao accreditation standards) and mainland integration (aligning with Chinese education regulations). The research analyzed governance models, curriculum design, faculty recruitment, and policy alignment across the three universities. Findings were mapped against the broader landscape of GBA cooperation — including over 8 new planned Hong Kong-Macao university campuses across Guangdong. I presented findings at a regional GBA academic symposium alongside my faculty supervisor, contributing to the policy conversation on deepening educational integration.`
    },
    {
      title: '2025 New Era Social Governance Survey (WVS Wave 8)',
      role: 'Outstanding Interviewer & Quality Inspector',
      period: 'Jun 2025 – Aug 2025',
      institution: 'World Values Survey — CUHK-Shenzhen & Nanjing University',
      loc: 'Fujian / Jilin / Liaoning / Guangdong',
      tag: 'Field Research',
      imgs: ['/gallery/新时代社会治理调查.png', '/gallery/新时代社会治理调查2.png'],
      detail: `The World Values Survey (WVS) is the world's largest non-commercial cross-national survey of human values, conducted in 100+ countries since 1981. Wave 8 in China — organized jointly by CUHK-Shenzhen's School of Humanities and Social Science and Nanjing University's School of Government — focuses on social governance attitudes, political trust, cultural values, and institutional confidence in contemporary China.\n\nAs a field interviewer, I conducted randomized household surveys across three provinces — Fujian, Jilin, and Liaoning — covering social, political, and cultural attitudes. Each interview involved collecting biological samples (saliva for DNA) alongside the structured questionnaire. I ensured data validity through tablet-based electronic questionnaires with built-in compliance controls. In my additional role as a quality inspector in Guangdong, I audited survey recordings to verify enumerator compliance, question sequencing accuracy, and data integrity. I was awarded the title of Outstanding Interviewer (优秀访员) by CUHK-Shenzhen and Nanjing University in recognition of exemplary performance throughout the project.`
    },
    {
      title: 'China-US Trade Policy Research',
      role: 'Project Assistant',
      period: 'Jan 2024 – Feb 2024',
      institution: 'United Nations Development Programme (UNDP) China',
      loc: 'Shenzhen',
      tag: 'Econometrics',
      imgs: ['/gallery/UNDP.png'],
      detail: `At UNDP China, I joined a research team studying the long-run evolution of China-US political and economic relations — from the establishment of diplomatic ties in 1979, through WTO accession in 2001, to the trade war and decoupling pressures of the 2010s-2020s. The project sought to quantify how bilateral political events translate into measurable economic effects.\n\nUsing the NBER-UN Comtrade database, I applied Stata regression models to analyze the impact of policy variables (tariff changes, sanctions announcements, diplomatic incidents) on bilateral trade flows, supply chain configurations, and investment trends. I also conducted deep textual analysis of diplomatic white papers, official media reports, and trade agreement documents across decades. The project culminated in four co-authored policy briefs with concrete recommendations for sustainable trade frameworks and multilateral economic cooperation — intended for UNDP's policy advocacy work with Chinese and international stakeholders.`
    },
    {
      title: 'Grassroots Governance in the GBA',
      role: 'Field Researcher',
      period: 'Aug 2023 – Sept 2023',
      institution: 'Independent Study',
      loc: 'Shunde / Zhuhai Hengqin',
      tag: 'Field Research',
      imgs: ['/gallery/UNDP.png'],
      detail: `This fieldwork project examined grassroots governance models at two key GBA locations: Shunde (a district of Foshan celebrated for its pragmatic, business-friendly local governance) and Zhuhai's Hengqin New Area (the special cooperation zone jointly administered by Guangdong and Macao since 2021).\n\nThrough structured interviews with local government officials, community workers, and residents, I assessed how each location manages public services, cross-border administration, and community governance. The research compared Shunde's market-oriented village collective model with Hengqin's innovative dual-governance framework — where Guangdong and Macao share administrative authority in a pilot for deeper institutional integration. The project produced a policy report with practical recommendations for enhancing local governance capacity and integrated urban-rural management across the GBA's complex jurisdictional landscape.`
    },
  ],
  cn: [
    {
      title: '粤港澳大湾区医疗治理',
      role: '研究助理',
      period: '2024年8月 – 2024年11月',
      institution: '港澳台发展研究协会',
      loc: '澳门',
      tag: '政策分析',
      imgs: ['/gallery/港澳药械通1.jpg', '/gallery/药械通论文截图2.png'],
      detail: `"港澳药械通"政策是粤港澳大湾区最具突破性的制度创新之一——允许广东患者在不经过中国标准审批流程的情况下使用港澳批准的药品和医疗器械。自2020年在香港大学深圳医院试点启动以来，已扩展至广州、珠海、中山等地共5家医院。\n\n本项目中，我系统收集并研究了30余份政府白皮书、政策文件及法律框架，梳理了2015至2024年跨境医疗合作的详细发展时间轴，标注关键监管里程碑与政府间协议。核心成果为合著政策分析报告《药械通的诞生与实施："多阶段多类型博弈"》，分析政策的制度基础、监管挑战与行政创新，提出基于循证政策的优化建议，涵盖远程医疗与医药研发等领域的政策延伸。论文计划发表于《港澳研究》杂志。`
    },
    {
      title: '港澳高校内地办学研究',
      role: '负责人',
      period: '2023年8月 – 2024年1月',
      institution: '独立研究',
      loc: '深圳/香港',
      tag: '比较研究',
      imgs: ['/gallery/港澳高校内地办学1.jpeg', '/gallery/港澳高校内地办学研究2.jpeg'],
      detail: `过去十年，香港和澳门高校在中国内地建立校区的现象显著扩张，对高等教育治理、学生流动性与大湾区知识经济产生深远影响。本研究聚焦三所先行机构：港中深（2014年）、港科大（广州）（2022年）与澳门大学横琴校区（2013年）。\n\n通过15+场与大学管理人员、资深学者及学生代表的半结构化访谈，我分析了三所院校如何在学术自主（维护港澳认证标准）与内地融合（遵循中国教育法规）之间寻求平衡。研究对比了各校的治理模式、课程设计、师资引进与政策协调路径，并结合大湾区8所以上在规划中的港澳大学内地分校的整体格局展开讨论。研究成果在区域学术研讨会上以主题演讲形式发表，为大湾区教育深度合作政策提供了学术参考。`
    },
    {
      title: '2025新时代社会治理调查（WVS第八轮）',
      role: '优秀访员与质检员',
      period: '2025年6月 – 2025年8月',
      institution: '世界价值观调查——港中深×南京大学',
      loc: '福建/吉林/辽宁/广东',
      tag: '实地调研',
      imgs: ['/gallery/新时代社会治理调查.png', '/gallery/新时代社会治理调查2.png'],
      detail: `世界价值观调查（WVS）是全球规模最大的跨国人类价值观调查，自1981年起已在100+国家开展。中国第八轮调查由港中深人文社科学院与南京大学政府管理学院联合主办，聚焦当代中国的社会治理态度、政治信任、文化价值观与制度信心。\n\n作为访问员，我在福建、吉林、辽宁三省开展随机入户调查，涵盖社会、政治与文化态度等议题，并采集生物样本（唾液DNA）。借助平板电脑电子问卷的内置合规控制，确保数据真实性。在广东担任质检员期间，我复核调查录音，核查访员合规性、问题顺序准确性与数据完整性。因在项目中表现优异，被港中深人文社科学院与南京大学政府管理学院联合授予"优秀访员"荣誉称号。`
    },
    {
      title: '中美贸易政策研究',
      role: '项目助理',
      period: '2024年1月 – 2024年2月',
      institution: '联合国开发计划署（UNDP）中国',
      loc: '深圳',
      tag: '计量经济学',
      imgs: ['/gallery/UNDP.png'],
      detail: `在UNDP中国，我参与了一个研究中美政治经济关系长期演变的课题——从1979年建交、2001年入世，到2010年代贸易战与脱钩压力的全过程，旨在量化双边政治事件如何转化为可测量的经济效应。\n\n基于NBER-联合国贸易数据库，我运用Stata回归模型分析政策变量（关税变化、制裁公告、外交事件）对双边贸易流、供应链配置与投资趋势的影响，并对历年外交白皮书、官方媒体报道及贸易协定文本进行深度文本分析。项目最终合著产出4份政策简报，提出可持续贸易框架与多边经济合作的具体建议，服务于UNDP面向中国及国际利益相关方的政策倡导工作。`
    },
    {
      title: '粤港澳基层治理调研',
      role: '实地研究员',
      period: '2023年8月 – 2023年9月',
      institution: '独立研究',
      loc: '顺德/珠海横琴',
      tag: '实地调研',
      imgs: ['/gallery/UNDP.png'],
      detail: `本项目对两处大湾区典型地点的基层治理模式进行田野调查：以务实、亲商著称的顺德（佛山市辖区），以及自2021年由粤澳双方联合管理的横琴新区（珠海）。\n\n通过与地方政府官员、社区工作者及居民的结构化访谈，评估各地在公共服务提供、跨境行政管理与社区治理方面的实践。研究对比了顺德以市场为导向的村集体经济模式与横琴创新性双轨治理框架——后者是广东与澳门在深度制度融合道路上的政策试验。研究产出政策报告，提出在大湾区复杂管辖格局下增强基层治理能力与城乡一体化管理的可行建议。`
    },
  ],
};

function ImageCarousel({ imgs, dark = false }: { imgs: string[]; dark?: boolean }) {
  const [cur, setCur] = useState(0);
  const bg = dark ? '#2c2c2e' : '#f5f5f7';
  if (imgs.length === 1) {
    return (
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: bg }}>
        <img src={imgs[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: bg, position: 'relative' }}>
      <img src={imgs[cur]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {imgs.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 18 : 6, height: 6, borderRadius: 3, background: i === cur ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
        ))}
      </div>
      <button onClick={() => setCur((cur - 1 + imgs.length) % imgs.length)} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>‹</button>
      <button onClick={() => setCur((cur + 1) % imgs.length)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>›</button>
    </div>
  );
}

export default function Research() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = researchData[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const i = params.get('i');
    if (i !== null) setSel(parseInt(i));
  }, []);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="research" />
      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Academic</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16 }}>
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
                  <img src={item.imgs[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{item.tag}</span>
                    <span style={{ fontSize: 10, color: '#aeaeb2', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.institution}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f' }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>{item.role} · {item.loc}</div>
                </div>
                <div style={{ fontSize: 11, color: '#aeaeb2', flexShrink: 0, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {item.period}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(20px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: 22, maxWidth: 580, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
              <ImageCarousel imgs={data[sel].imgs} />
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{data[sel].tag}</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em', marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{data[sel].role}</div>
                <div style={{ fontSize: 12, color: '#aeaeb2', marginTop: 2 }}>{data[sel].institution} · {data[sel].loc} · {data[sel].period}</div>
                <div style={{ fontSize: 14, color: '#4a4a4a', marginTop: 20, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{data[sel].detail}</div>
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
