'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const researchData = {
  en: [
    { title: 'Healthcare Governance in GBA', role: 'Research Assistant', period: 'Aug 2024 – Nov 2024', institution: 'HK-Macao-Taiwan Development Research Association', description: 'Researched HK-Macao Medicine and Equipment Connect policy', detail: 'I conducted in-depth research on the "Hong Kong-Macao Medicine and Equipment Connect" policy. I authored a policy analysis report titled "Stepwise Administrative Delegation and Innovation: Governance Mechanisms of Hong Kong-Macao Medical Connect", planned for publication in the "Hong Kong & Macao Studies" journal.', image: '/gallery/港澳高校内地办学研究.jpeg' },
    { title: 'Cross-border Education in GBA', role: 'Lead Researcher', period: 'Aug 2023 – Jan 2024', institution: 'Independent Study', description: 'Comparative study of CUHK-Shenzhen, HKUST(GZ), and UM', detail: 'I conducted a comprehensive comparative study of three major universities in the GBA. Through 15+ stakeholder interviews and archival research, I examined institutional autonomy, academic collaboration, and policy alignment. I presented findings at a regional academic symposium.', image: '/gallery/港澳高校内地办学研究.jpeg' },
    { title: 'New Era Social Governance Survey', role: 'Field Interviewer & Quality Inspector', period: 'Jun 2025 – Aug 2025', institution: 'World Values Survey (WVS Wave 8)', description: 'Conducted household surveys on social attitudes', detail: 'I conducted randomized household surveys on social, political, and cultural attitudes in Fujian, Jilin, and Liaoning provinces. I collected biological samples and ensured data validity via tablet-based electronic questionnaires. As a secondary inspector in Guangdong, I audited survey recordings.', image: '/gallery/数字经济峰会.jpg' },
    { title: 'China-US Trade Policy', role: 'Project Assistant', period: 'Jan 2024 – Feb 2024', institution: 'UNDP China', description: 'Analyzed policy impacts on bilateral trade', detail: 'At UNDP China, I studied the evolution of China-US political and economic relations. I applied regression models using Stata to investigate policy impacts on bilateral trade flows, supply chains, and investment trends. I co-authored four policy briefs with recommendations for sustainable trade.', image: '/gallery/UNDP.png' },
  ],
  cn: [
    { title: '粤港澳大湾区医疗治理', role: '研究助理', period: '2024年8月 – 2024年11月', institution: '港澳台发展研究协会', description: '研究港澳药械通政策', detail: '我深度研究了"港澳药械通"政策，分析医疗监管如何穿越不同法律边界。撰写了政策分析报告《渐进式行政授权与创新：港澳医疗连通治理机制》，计划发表于《港澳研究》杂志。', image: '/gallery/港澳高校内地办学研究.jpeg' },
    { title: '港澳高校内地办学研究', role: '负责人', period: '2023年8月 – 2024年1月', institution: '独立研究', description: '比较港中深、港科大（广州）、澳门大学', detail: '我对大湾区三所主要高校进行了综合比较研究。通过15+利益相关者访谈和档案研究，审查了机构自主性、学术合作和政策协调。在区域学术研讨会上发表了研究结果。', image: '/gallery/港澳高校内地办学研究.jpeg' },
    { title: '新时代社会治理调查', role: '调研员/质检员', period: '2025年6月 – 2025年8月', institution: '世界价值观调查（WVS第八轮）', description: '开展入户社会态度调查', detail: '我在福建、吉林、辽宁开展入户社会、政治、文化态度调查。采集生物样本，确保数据有效性。作为广东二级质检员，审核调查录音。', image: '/gallery/数字经济峰会.jpg' },
    { title: '中美贸易政策研究', role: '项目助理', period: '2024年1月 – 2024年2月', institution: 'UNDP中国', description: '分析政策对双边贸易的影响', detail: '在UNDP中国工作期间，我研究中美政治经济关系演变。运用Stata回归模型分析政策对双边贸易流、供应链和投资趋势的影响。合著四份政策简报。', image: '/gallery/UNDP.png' },
  ],
};

export default function Research() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const data = researchData[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage="research" />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[740px] mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2997ff] mb-4">Academic</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-[48px] font-semibold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.025em', lineHeight: 1.07 }}>
              {lang === 'en' ? 'Research' : '研究经历'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-[19px] font-light text-[#6e6e73]">
              {lang === 'en' ? 'Academic exploration' : '学术探索'}
            </motion.p>
          </div>

          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#86868b] mb-5 pb-3" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>Projects</p>

          <div className="rounded-[18px] overflow-hidden" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 px-6 py-5 cursor-pointer transition-colors duration-150"
                style={{ borderBottom: i < data.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', backgroundColor: 'rgba(0,0,0,0.01)' }}
                onClick={() => setSelected(i)}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.01)')}>
                <div className="flex-shrink-0 w-12 h-12 rounded-[12px] overflow-hidden bg-[#f5f5f7]" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-[#2997ff] mb-1 truncate">{item.institution}</p>
                  <p className="text-[15px] font-medium text-[#1d1d1f] truncate" style={{ letterSpacing: '-0.01em' }}>{item.title}</p>
                  <p className="text-[13px] text-[#6e6e73] mt-0.5 truncate">{item.role}</p>
                </div>
                <p className="text-[12px] text-[#86868b] whitespace-nowrap hidden sm:block flex-shrink-0">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <motion.div initial={{ scale: 0.96, opacity: 0, y: 16 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg rounded-[22px] overflow-hidden bg-white"
              style={{ border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
              <div className="aspect-video overflow-hidden bg-[#f5f5f7]">
                <img src={data[selected].image} alt={data[selected].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <p className="text-[11px] font-medium text-[#2997ff] mb-1">{data[selected].institution}</p>
                <h2 className="text-[20px] font-semibold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>{data[selected].title}</h2>
                <p className="text-[13px] text-[#6e6e73] mt-0.5">{data[selected].role}</p>
                <p className="text-[12px] text-[#86868b] mt-0.5">{data[selected].period}</p>
                <p className="text-[14px] text-[#6e6e73] mt-5" style={{ lineHeight: '1.8' }}>{data[selected].detail}</p>
                <button onClick={() => setSelected(null)} className="mt-7 w-full py-3 rounded-full text-[13px] font-medium text-white" style={{ backgroundColor: '#1d1d1f' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3a3a3c')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1d1d1f')}>
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
