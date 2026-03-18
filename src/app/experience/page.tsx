'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const expData = {
  en: [
    {
      org: 'State Council DRC', role: 'Intern Analyst', loc: 'Beijing / Remote', period: 'Dec 2025 – Present', present: true,
      tags: ['Policy Tracking', 'Think Tank', 'Bay Area Analysis'],
      img: '/gallery/国务院发展研究中心.png', abbr: 'SC', color: '#1d1d1f',
      url: 'https://www.drc.gov.cn',
      detail: `The Development Research Center of the State Council (国务院发展研究中心) is China's highest-level government think tank, reporting directly to the State Council. Founded in 1981, it plays a central role in shaping China's economic reform agenda, with research influencing decisions ranging from industrial policy to financial regulation and regional development strategy.\n\nIn my role as an intern analyst, I am responsible for tracking and compiling enterprise going-out (企业出海) policy dynamics — monitoring key policy announcements, interpreting regulatory changes, and identifying emerging trends affecting Chinese companies expanding globally. I also participate deeply in Greater Bay Area coordination research, conducting systematic analysis of policy texts across Guangdong, Hong Kong, and Macao to support cross-regional comparison studies. Additionally, I assist in maintaining the research group's knowledge base, standardizing literature management processes to improve information sharing efficiency across the team.`
    },
    {
      org: 'HKU Centre for AI, Management and Organization', role: 'Research Assistant (Econometrics & AI)', loc: 'Hong Kong', period: 'Nov 2025 – Jan 2026', present: false,
      tags: ['OLS / IV / DID / PSM', 'Stata & R', 'ML Research'],
      img: '/gallery/HKUAI.webp', abbr: 'HK', color: '#0071e3',
      url: 'https://www.hku.hk',
      detail: `The HKU Centre for AI, Management and Organization (CAIMO) is an interdisciplinary research center at the University of Hong Kong exploring how artificial intelligence transforms organizations, labor markets, and business strategy. The center brings together economists, computer scientists, and management scholars to conduct rigorous empirical research at the frontier of AI and economics.\n\nIn this role, I supported a project building an AI-powered database of applied econometric methods used in leading accounting and economic history journals. I batch downloaded and organized 260+ replication packages from the Journal of Accounting Research (JAR) and the Journal of Economic History (JEH), ensuring all datasets and Stata/R code were correctly formatted and reproducible. I systematically catalogued the econometric methods used across the literature — OLS, IV (instrumental variables), DID (difference-in-differences), and PSM (propensity score matching) — and reproduced experimental results to validate replication accuracy. I also contributed to the literature review mapping how machine learning is beginning to complement traditional econometric approaches in empirical business research.`
    },
    {
      org: 'NetEase Interactive Entertainment', role: 'Global Business & Licensing Intern', loc: 'Guangzhou', period: 'Jul 2024 – Sept 2024', present: false,
      tags: ['Vietnam Market', 'SEGA Partnership', 'GDPR / COPPA'],
      img: '/gallery/netease.jpg', abbr: 'NE', color: '#ff3b30',
      url: 'https://ir.netease.com',
      detail: `NetEase Interactive Entertainment (网易互娱) is one of China's largest game developers and publishers, with a global portfolio spanning PC, mobile, and console titles. NetEase has become increasingly ambitious in international markets, partnering with major global IP holders and expanding its licensing footprint across Southeast Asia, Russia, Japan, and Europe.\n\nAs a Global Business & Licensing Intern, I analyzed Vietnam's gaming regulatory environment — including its game rating system, content approval requirements, and market access compliance — and completed the licensing application for NetEase's title overseas. I researched strategic partnership opportunities with Russian game publishers Astrum and Lesta, producing a detailed market report on Russia's gaming ecosystem to support strategic decision-making. I also supported the ongoing business collaboration with SEGA of Japan, compiling research on Japanese gaming industry policies and producing consulting slide decks to support effective partnership negotiations. Additionally, I studied international co-production models between Ubisoft (France) and Disney/Marvel (US), and drafted comprehensive compliance reports on the implications of GDPR (EU) and COPPA (US) regulations for the gaming industry.`
    },
    {
      org: 'UN Youth Training Program', role: 'Member of China Team', loc: 'Geneva, Switzerland', period: 'Jun 2024 – Jul 2024', present: false,
      tags: ['SDG 5 / 8 / 16', 'UN Human Rights Council', 'Mediation'],
      img: '/gallery/UNDP.png', abbr: 'UN', color: '#34aadc',
      url: 'https://www.un.org',
      detail: `The UN Youth Training Program (联合国青年人才培养计划) brought together high-achieving university students from China to Geneva for an immersive experience at the heart of global governance. The program combined site visits to UN agencies, workshops with diplomats and NGO representatives, and simulated UN proceedings across multiple committees.\n\nAs a member of the China delegation, I delivered a speech at the UN Human Rights Council advocating for SDG 16 (Peace, Justice, and Strong Institutions), connecting China's governance experience to global institutional development. In a simulated mediation exercise, I acted as mediator between China and Palestine in humanitarian aid negotiations — successfully facilitating agreement on a resolution addressing emergency aid delivery. I also represented Iran in Model UN climate negotiations, balancing economic development interests with environmental commitments. The program concluded with two SDG policy proposals I authored: one on post-COVID employment recovery and economic growth in China (SDG 8), and another analyzing the rise of Chinese feminism in the 21st century (SDG 5).`
    },
    {
      org: 'UNDP China', role: 'Sino-US Trade Project Assistant', loc: 'Shenzhen', period: 'Jan 2024 – Feb 2024', present: false,
      tags: ['China-US Trade', 'Stata Regression', '4 Policy Briefs'],
      img: '/gallery/UNDP.png', abbr: 'UN', color: '#2997ff',
      url: 'https://www.cn.undp.org',
      detail: `The United Nations Development Programme (UNDP) China office works to advance sustainable development across economic, social, and environmental dimensions. The Sino-US Trade Research Project examined the structural shifts in China-US economic interdependence over 70+ years — from the normalization of diplomatic relations in the 1970s to the ongoing decoupling pressures of the 2020s.\n\nI studied the evolution of China-US political and economic relations from 1949, with particular focus on the post-1978 reform era and the dynamics of WTO accession. Using the NBER International Trade Database, I applied Stata regression models to quantify the impact of policy variables — including tariff changes, sanctions announcements, and diplomatic incidents — on bilateral trade flows, supply chain configurations, and investment trends. I also conducted systematic textual analysis of diplomatic white papers, official media reports, and trade agreement documents to map political-economic linkages across decades. The project culminated in four co-authored policy briefs with concrete recommendations for sustainable bilateral trade frameworks and enhanced multilateral economic cooperation.`
    },
    {
      org: 'Guangdong Rongtai VC', role: 'Investment Analyst Intern', loc: 'Guangzhou', period: 'Jul 2023 – Sept 2023', present: false,
      tags: ['Due Diligence', 'Clean Energy / HealthTech', 'IPO Analysis'],
      img: '/gallery/粤港澳大湾区研究院.jpeg', abbr: 'VC', color: '#ff9500',
      url: null,
      detail: `Guangdong Rongtai Venture Capital (广东融泰私募基金管理有限公司) is a Guangzhou-based private equity fund focused on early and growth-stage investments across China's strategic emerging industries, including clean energy, healthcare technology, smart manufacturing, and digital services.\n\nAs an Investment Analyst Intern, I assessed regulatory and policy risks for investment candidates — analyzing government guidelines, market access policies, and compliance frameworks to evaluate whether each company's growth trajectory was aligned with national industrial priorities. I supported due diligence for four portfolio candidates, including financial statement validation, site inspections, and executive interviews. I was responsible for evaluating business plan viability, identifying policy and regulatory risks, and producing concise investment memos. I also conducted sector-level research on new energy vehicle policy changes, market access conditions, and government subsidy programs — helping the fund assess how evolving regulatory environments affect startup growth prospects. Additionally, I reviewed IPO case studies to understand how policy and financial regulatory frameworks shape exit strategies and valuation multiples.`
    },
  ],
  cn: [
    {
      org: '国务院发展研究中心', role: '实习分析师', loc: '北京/远程', period: '2025年12月 – 至今', present: true,
      tags: ['政策跟踪', '智库研究', '湾区分析'],
      img: '/gallery/国务院发展研究中心.png', abbr: '国', color: '#1d1d1f',
      url: 'https://www.drc.gov.cn',
      detail: `国务院发展研究中心是中国最高层级的政府智库，直属国务院领导。创立于1981年，在塑造中国经济改革议程方面发挥核心作用，研究成果影响涵盖产业政策、金融监管与区域发展战略等重大决策。\n\n作为实习分析师，我负责企业出海政策动态的跟踪与汇编——监测关键政策公告、解读监管变化、识别影响中国企业国际化扩张的新兴趋势。同时深度参与粤港澳大湾区协同发展评估，系统梳理粤、港、澳三地政策文本，支持团队完成跨区域差异对比分析。此外，我协助维护课题组知识库，规范文献管理与归档流程，显著提升了资料共享的便捷性与团队协作效率。`
    },
    {
      org: '香港大学AI管理与组织研究中心', role: '研究助理（计量经济学与AI）', loc: '香港', period: '2025年11月 – 2026年1月', present: false,
      tags: ['OLS/IV/DID/PSM', 'Stata与R', '机器学习'],
      img: '/gallery/HKUAI.webp', abbr: '港', color: '#0071e3',
      url: 'https://www.hku.hk',
      detail: `香港大学AI管理与组织研究中心（CAIMO）是一个跨学科研究平台，聚焦人工智能如何变革组织形态、劳动市场与商业战略，汇聚经济学家、计算机科学家与管理学者，在AI与经济学前沿开展严谨的实证研究。\n\n本职位中，我支持一个旨在构建应用计量经济学方法AI数据库的项目。批量下载并整理了来自《会计学研究期刊》（JAR）和《经济史期刊》（JEH）的260余份复现包，确保所有数据集与Stata/R代码格式规范、可复现。我系统梳理了文献中的主流计量方法——OLS、IV（工具变量）、DID（双重差分）和PSM（倾向得分匹配）——并复现实验结果以验证准确性。此外，我参与文献综述，梳理机器学习如何与传统计量方法结合，助力实证商业研究范式的演进。`
    },
    {
      org: '网易互娱', role: '海外授权与商务实习生', loc: '广州', period: '2024年7月 – 2024年9月', present: false,
      tags: ['越南市场', 'SEGA合作', 'GDPR/COPPA'],
      img: '/gallery/netease.jpg', abbr: '网', color: '#ff3b30',
      url: 'https://ir.netease.com',
      detail: `网易互娱是中国最大的游戏开发商与发行商之一，全球产品矩阵覆盖PC、手机与主机端。网易近年加速国际化布局，与全球顶尖IP持有方合作，在东南亚、俄罗斯、日本和欧洲全面拓展授权版图。\n\n作为海外授权与商务实习生，我分析了越南游戏监管环境——包括游戏版号审批制度、内容审查标准与市场准入合规性要求——并完成了《倩女幽魂》的海外版号申请。我深入调研俄罗斯游戏厂商Astrum和Lesta的合作意向，产出详细的俄罗斯市场研究报告以支持战略决策。同时协助推进与日本SEGA的商务合作，整理日本游戏行业政策并制作咨询幻灯片，为有效合作谈判提供支持。此外，我研究了法国育碧（Ubisoft）与美国迪士尼/漫威的跨国合拍模式，起草了关于GDPR（欧盟）和COPPA（美国）法规对游戏行业监管影响的合规报告。`
    },
    {
      org: '联合国青年人才培养计划', role: '中国代表队成员', loc: '日内瓦，瑞士', period: '2024年6月 – 2024年7月', present: false,
      tags: ['SDG 5/8/16', '联合国人权理事会', '调解谈判'],
      img: '/gallery/UNDP.png', abbr: '日', color: '#34aadc',
      url: 'https://www.un.org',
      detail: `联合国青年人才培养计划汇聚中国顶尖高校学生赴日内瓦，在全球治理的核心场域开展沉浸式体验。项目融合了对联合国各机构的实地参观、与外交官和NGO代表的工作坊，以及跨多个委员会的模拟联合国程序。\n\n作为中国代表团成员，我在联合国人权理事会发表关于SDG16（和平、正义与强大机构）的演讲，将中国治理经验与全球制度建设进行深度连接。在模拟调解中，我担任中巴人道主义援助谈判调解员，成功推动关于紧急援助交付的决议通过。我还代表伊朗参与模拟联合国气候谈判，在经济发展利益与环境承诺之间寻求平衡。项目最终以两份SDG政策提案收尾：一份聚焦后疫情时代中国就业与经济增长（SDG8），另一份分析21世纪中国女性主义的崛起及影响（SDG5）。`
    },
    {
      org: '联合国开发计划署（UNDP）中国', role: '中美贸易项目助理', loc: '深圳', period: '2024年1月 – 2024年2月', present: false,
      tags: ['中美贸易', 'Stata回归', '4份政策简报'],
      img: '/gallery/UNDP.png', abbr: '联', color: '#2997ff',
      url: 'https://www.cn.undp.org',
      detail: `联合国开发计划署（UNDP）中国办公室致力于推动经济、社会与环境可持续发展。中美贸易研究项目考察70余年来中美经济相互依存的结构性演变——从1970年代外交正常化，到2020年代日益加剧的脱钩压力。\n\n我系统研究了1949年以来中美政治经济关系的演变，重点聚焦1978年后的改革开放时期与入世动态。基于NBER国际贸易数据库，运用Stata回归模型量化政策变量——包括关税变化、制裁公告与外交事件——对双边贸易流、供应链配置与投资趋势的影响。同时深入解读历年外交白皮书、官方媒体报道及贸易协定文本，梳理政治互动与经济合作的关联机制。项目最终合著产出4份政策简报，为可持续双边贸易框架与多边经济合作提供具体政策建议。`
    },
    {
      org: '广东融泰私募基金管理有限公司', role: '投资分析师实习生', loc: '广州', period: '2023年7月 – 2023年9月', present: false,
      tags: ['尽职调查', '新能源/医疗科技', 'IPO分析'],
      img: '/gallery/粤港澳大湾区研究院.jpeg', abbr: '融', color: '#ff9500',
      url: null,
      detail: `广东融泰私募基金管理有限公司是一家总部位于广州的私募股权基金，专注于清洁能源、医疗科技、智能制造与数字服务等战略新兴产业的早期及成长期投资。\n\n作为投资分析师实习生，我评估投资候选企业的监管与政策风险——分析政府指导方针、市场准入政策与合规框架，判断各企业的成长路径是否符合国家产业优先方向。我为四家投资候选支持尽职调查，包括财务报表核实、实地考察与管理层访谈，负责评估商业计划可行性、识别政策与监管风险，并撰写简洁的投资备忘录。同时开展新能源汽车行业政策变迁、市场准入条件与政府补贴项目的专题研究，协助基金评估监管环境演变对初创企业成长前景的影响。此外，通过研究上市公司案例，深入理解政策与金融监管框架如何影响退出策略与估值乘数。`
    },
  ],
};

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = expData[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const i = params.get('i');
    if (i !== null) setSel(parseInt(i));
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="experience" dark />

      <div style={{ padding: '100px 24px 60px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Career</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 16 }}>
          {lang === 'en' ? 'Experience' : '工作经历'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
          {lang === 'en' ? "Where I've worked and what I've built" : '我的工作经历与成果'}
        </motion.p>
      </div>

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
                <div style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0 }}>
                  <img src={item.img} alt={item.abbr} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>{item.org}</div>
                  <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>{item.role}</div>
                  <div style={{ display: 'flex', gap: 5, marginTop: 6, flexWrap: 'wrap' }}>
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

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(24px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 560, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
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
                {data[sel].url && (
                  <a href={data[sel].url!} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#2997ff', marginTop: 8, textDecoration: 'none' }}>
                    {data[sel].url}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                  </a>
                )}
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 18, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{data[sel].detail}</div>
                <button onClick={() => setSel(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: '#2997ff', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
