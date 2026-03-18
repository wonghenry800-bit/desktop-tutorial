'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  detail: string;
  image: string;
}

const experienceData: { en: Experience[]; cn: Experience[] } = {
  en: [
    {
      company: 'NetEase Interactive Entertainment',
      role: 'Global Business & Licensing Intern',
      period: 'Jul 2024 - Sept 2024',
      description: ['Vietnam gaming market analysis', 'SEGA partnership research', 'GDPR/COPPA compliance'],
      detail: 'At NetEase Interactive Entertainment, I was responsible for analyzing Vietnam gaming regulations and completing overseas game licensing applications. I researched partnership opportunities with major Japanese publishers like SEGA and Russian game companies. Additionally, I studied international co-production models and GDPR/COPPA compliance requirements for the gaming industry.',
      image: '/gallery/netease.jpg',
    },
    {
      company: 'UNDP China',
      role: 'Sino-US Trade Project Assistant',
      period: 'Jan 2024 - Feb 2024',
      description: ['China-US relations research', 'Stata econometric analysis', 'Policy brief writing'],
      detail: 'Working at UNDP China, I studied the evolution of China-US political and economic relations. I applied regression models using Stata to analyze policy impacts on bilateral trade flows. I co-authored four policy briefs on sustainable trade, providing recommendations for global economic cooperation.',
      image: '/gallery/UNDP.png',
    },
    {
      company: 'Guangdong Rongtai VC',
      role: 'Investment Analyst Intern',
      period: 'Jul 2023 - Sept 2023',
      description: ['Due diligence support', 'Industry research', 'Investment memos'],
      detail: 'At Guangdong Rongtai Venture Capital, I assessed regulatory and policy risks for early-stage investments across clean energy, healthcare tech, and smart manufacturing. I conducted industry policy research and market analysis, supporting due diligence for portfolio candidates.',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: 'HKU Centre for AI',
      role: 'Research Assistant',
      period: 'Nov 2025 - Jan 2026',
      description: ['Econometric methods research', 'Literature review', 'Data replication'],
      detail: 'At HKU Centre for AI, Management and Organization, I batch downloaded and organized replication data from academic literature. I summarized applied econometric methods including OLS, IV, DID, and PSM. I reproduced experimental results using Stata and R.',
      image: '/gallery/HKUAI.webp',
    },
    {
      company: 'Guangzhou Institute of GBA',
      role: 'Public Policy Analyst',
      period: 'Jun 2025 - Sept 2025',
      description: ['Regional policy research', 'Field investigations', 'Report writing'],
      detail: 'At the Guangzhou Institute of GBA, I assisted in regional development and sci-tech zone policy research. I collected and organized government documents for cross-city projects, conducted field visits to Yangjiang, and attended the World Robotics Conference to gather primary research data.',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: 'State Council DRC',
      role: 'Intern Analyst',
      period: 'Dec 2025 - Present',
      description: ['Policy tracking', 'Enterprise research', 'Bay Area analysis'],
      detail: 'At the Development Research Center of the State Council, I engage in think tank information collection, article compilation, thematic research, and report writing. I assist in completing related research projects on enterprise going-out policies and Bay Area coordination.',
      image: '/gallery/国务院发展研究中心.png',
    },
  ],
  cn: [
    {
      company: '网易互娱',
      role: '海外授权与商务实习生',
      period: '2024年7月 - 2024年9月',
      description: ['越南游戏市场分析', 'SEGA合作调研', 'GDPR/COPPA合规'],
      detail: '在网易互娱工作期间，我负责分析越南游戏监管政策，完成海外游戏版号申请。调研了与日本SEGA及俄罗斯游戏公司的合作意向，研究国际合拍模式及GDPR、COPPA合规要求。',
      image: '/gallery/netease.jpg',
    },
    {
      company: '联合国开发计划署（UNDP）',
      role: '中美贸易项目助理',
      period: '2024年1月 - 2024年2月',
      description: ['中美关系研究', 'Stata计量分析', '政策简报撰写'],
      detail: '在UNDP中国工作期间，我研究中美政治经济关系演变。运用Stata回归模型分析政策对双边贸易的影响，合著四份可持续贸易政策简报。',
      image: '/gallery/UNDP.png',
    },
    {
      company: '广东融泰私募',
      role: '投资分析师实习生',
      period: '2023年7月 - 2023年9月',
      description: ['尽职调查支持', '行业研究', '投资备忘录'],
      detail: '在广东融泰私募工作期间，我评估初创企业的监管与政策风险，进行行业政策研究与市场分析，支持投资尽职调查工作。',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: '香港大学AI研究中心',
      role: '研究助理',
      period: '2025年11月 - 2026年1月',
      description: ['计量方法研究', '文献综述', '数据复现'],
      detail: '在香港大学AI管理与组织研究中心，我批量下载整理学术文献复现数据，总结应用计量经济学方法（OLS、IV、DID、PSM），使用Stata和R复现实验结果。',
      image: '/gallery/HKUAI.webp',
    },
    {
      company: '广州粤港澳大湾区研究院',
      role: '公共政策分析师',
      period: '2025年6月 - 2025年9月',
      description: ['区域政策研究', '实地调研', '报告撰写'],
      detail: '在广州粤港澳大湾区研究院，我协助区域发展与科技园区政策研究，整理跨城项目政府文档，实地调研阳江并参加世界机器人大会。',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: '国务院发展研究中心',
      role: '实习分析师',
      period: '2025年12月 - 至今',
      description: ['政策跟踪', '企业研究', '湾区分析'],
      detail: '在国务院发展研究中心，我负责智库信息收集、文章汇编、专题研究和报告撰写，协助完成企业出海政策动态跟踪与湾区协同发展评估。',
      image: '/gallery/国务院发展研究中心.png',
    },
  ],
};

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const item = params.get('item');
    if (item !== null) {
      setSelected(parseInt(item));
    }
  }, []);

  const data = experienceData[lang];
  const title = lang === 'en' ? 'Experience' : '工作经历';
  const subtitle = lang === 'en' ? 'Where I\'ve worked' : '我的工作经历';

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="experience" />
      
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
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.company}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-white truncate">{item.company}</h3>
                  <p className="text-[13px] text-blue-400 mt-1 truncate">{item.role}</p>
                  <p className="text-[12px] text-white/40 mt-1">{item.period}</p>
                  
                  <p className="text-[12px] text-white/50 mt-3 line-clamp-2">
                    {item.description.join(' • ')}
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
                  alt={data[selected].company}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-[20px] font-semibold text-white">{data[selected].company}</h2>
                <p className="text-[14px] text-blue-400 mt-1">{data[selected].role}</p>
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
