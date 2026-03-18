'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

interface Research {
  title: string;
  role: string;
  period: string;
  institution: string;
  description: string;
  detail: string;
  image: string;
}

const researchData: { en: Research[]; cn: Research[] } = {
  en: [
    {
      title: 'Healthcare Governance in GBA',
      role: 'Research Assistant',
      period: 'Aug 2024 - Nov 2024',
      institution: 'HK-Macao-Taiwan Development Research Association',
      description: 'Researched HK-Macao Medicine and Equipment Connect policy',
      detail: 'I conducted in-depth research on the "Hong Kong-Macao Medicine and Equipment Connect" policy, analyzing how healthcare regulations cross different legal boundaries. I authored a policy analysis report titled "Stepwise Administrative Delegation and Innovation: Governance Mechanisms of Hong Kong-Macao Medical Connect", which is planned for publication in the "Hong Kong & Macao Studies" journal.',
      image: '/gallery/港澳高校内地办学研究.jpeg',
    },
    {
      title: 'Cross-border Education in GBA',
      role: 'Lead Researcher',
      period: 'Aug 2023 - Jan 2024',
      institution: 'Independent Study',
      description: 'Comparative study of CUHK-Shenzhen, HKUST(GZ), and UM',
      detail: 'I conducted a comprehensive comparative study of three major universities in the GBA: CUHK-Shenzhen, HKUST(GZ), and University of Macau. Through 15+ stakeholder interviews and archival research, I examined institutional autonomy, academic collaboration, and policy alignment. I presented findings at a regional academic symposium.',
      image: '/gallery/港澳高校内地办学研究.jpeg',
    },
    {
      title: 'New Era Social Governance Survey',
      role: 'Field Interviewer & Quality Inspector',
      period: 'Jun 2025 - Aug 2025',
      institution: 'World Values Survey (WVS Wave 8)',
      description: 'Conducted household surveys on social attitudes',
      detail: 'I conducted randomized household surveys on social, political, and cultural attitudes in Fujian, Jilin, and Liaoning provinces. I collected biological samples and ensured data validity via tablet-based electronic questionnaires. As a secondary inspector in Guangdong, I audited survey recordings.',
      image: '/gallery/数字经济峰会.jpg',
    },
    {
      title: 'China-US Trade Policy',
      role: 'Project Assistant',
      period: 'Jan 2024 - Feb 2024',
      institution: 'UNDP China',
      description: 'Analyzed policy impacts on bilateral trade',
      detail: 'At UNDP China, I studied the evolution of China-US political and economic relations. I applied regression models using Stata to investigate policy impacts on bilateral trade flows, supply chains, and investment trends. I co-authored four policy briefs with recommendations for sustainable trade.',
      image: '/gallery/UNDP.png',
    },
  ],
  cn: [
    {
      title: '粤港澳大湾区医疗治理',
      role: '研究助理',
      period: '2024年8月 - 2024年11月',
      institution: '港澳台发展研究协会',
      description: '研究港澳药械通政策',
      detail: '我深度研究了"港澳药械通"政策，分析医疗监管如何穿越不同法律边界。撰写了政策分析报告《渐进式行政授权与创新：港澳医疗连通治理机制》，计划发表于《港澳研究》杂志。',
      image: '/gallery/港澳高校内地办学研究.jpeg',
    },
    {
      title: '港澳高校内地办学研究',
      role: '负责人',
      period: '2023年8月 - 2024年1月',
      institution: '独立研究',
      description: '比较港中深、港科大（广州）、澳门大学',
      detail: '我对大湾区三所主要高校进行了综合比较研究。通过15+利益相关者访谈和档案研究，审查了机构自主性、学术合作和政策协调。在区域学术研讨会上发表了研究结果。',
      image: '/gallery/港澳高校内地办学研究.jpeg',
    },
    {
      title: '新时代社会治理调查',
      role: '调研员/质检员',
      period: '2025年6月 - 2025年8月',
      institution: '世界价值观调查（WVS第八轮）',
      description: '开展入户社会态度调查',
      detail: '我在福建、吉林、辽宁开展入户社会、政治、文化态度调查。采集生物样本，确保数据有效性。作为广东二级质检员，审核调查录音。',
      image: '/gallery/数字经济峰会.jpg',
    },
    {
      title: '中美贸易政策研究',
      role: '项目助理',
      period: '2024年1月 - 2024年2月',
      institution: 'UNDP中国',
      description: '分析政策对双边贸易的影响',
      detail: '在UNDP中国工作期间，我研究中美政治经济关系演变。运用Stata回归模型分析政策对双边贸易流、供应链和投资趋势的影响。',
      image: '/gallery/UNDP.png',
    },
  ],
};

export default function Research() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const item = params.get('item');
    if (item !== null) {
      setSelected(parseInt(item));
    }
  }, []);

  const data = researchData[lang];
  const title = lang === 'en' ? 'Research' : '研究经历';
  const subtitle = lang === 'en' ? 'Academic exploration' : '学术探索';

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="research" />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-white text-center mb-2"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-center mb-12"
          >
            {subtitle}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                
                <div className="p-5">
                  <p className="text-[11px] text-blue-400 uppercase tracking-wider">{item.institution}</p>
                  <h3 className="text-[15px] font-semibold text-white mt-1">{item.title}</h3>
                  <p className="text-[12px] text-white/40 mt-1">{item.period}</p>
                  
                  <p className="text-[12px] text-white/50 mt-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <button
                    className="mt-4 w-full py-2 bg-[#007AFF] text-white text-[12px] font-medium rounded-full hover:bg-[#0056CC] transition-colors"
                  >
                    {lang === 'en' ? 'View Details' : '查看详情'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] rounded-2xl max-w-xl w-full my-8 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={data[selected].image}
                  alt={data[selected].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <p className="text-[11px] text-blue-400 uppercase tracking-wider">{data[selected].institution}</p>
                <h2 className="text-[20px] font-semibold text-white mt-1">{data[selected].title}</h2>
                <p className="text-[12px] text-white/40 mt-1">{data[selected].period}</p>
                
                <div className="mt-5">
                  <p className="text-[14px] text-white/70 leading-relaxed">
                    {data[selected].detail}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 w-full py-2.5 bg-[#007AFF] text-white text-[13px] font-medium rounded-full hover:bg-[#0056CC] transition-colors"
                >
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
