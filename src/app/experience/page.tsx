'use client';

import { useState } from 'react';
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
      period: 'Jul 2024 – Sept 2024',
      description: ['Vietnam gaming market analysis', 'SEGA partnership research', 'GDPR/COPPA compliance'],
      detail: 'At NetEase Interactive Entertainment, I was responsible for analyzing Vietnam gaming regulations and completing overseas game licensing applications. I researched partnership opportunities with major Japanese publishers like SEGA and Russian game companies. Additionally, I studied international co-production models and GDPR/COPPA compliance requirements for the gaming industry.',
      image: '/gallery/netease.jpg',
    },
    {
      company: 'UNDP China',
      role: 'Sino-US Trade Project Assistant',
      period: 'Jan 2024 – Feb 2024',
      description: ['China-US relations research', 'Stata econometric analysis', 'Policy brief writing'],
      detail: 'Working at UNDP China, I studied the evolution of China-US political and economic relations. I applied regression models using Stata to analyze policy impacts on bilateral trade flows. I co-authored four policy briefs on sustainable trade, providing recommendations for global economic cooperation.',
      image: '/gallery/UNDP.png',
    },
    {
      company: 'Guangdong Rongtai VC',
      role: 'Investment Analyst Intern',
      period: 'Jul 2023 – Sept 2023',
      description: ['Due diligence support', 'Industry research', 'Investment memos'],
      detail: 'At Guangdong Rongtai Venture Capital, I assessed regulatory and policy risks for early-stage investments across clean energy, healthcare tech, and smart manufacturing. I conducted industry policy research and market analysis, supporting due diligence for portfolio candidates.',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: 'HKU Centre for AI',
      role: 'Research Assistant',
      period: 'Nov 2025 – Jan 2026',
      description: ['Econometric methods research', 'Literature review', 'Data replication'],
      detail: 'At HKU Centre for AI, Management and Organization, I batch downloaded and organized replication data from academic literature. I summarized applied econometric methods including OLS, IV, DID, and PSM. I reproduced experimental results using Stata and R.',
      image: '/gallery/HKUAI.webp',
    },
    {
      company: 'Guangzhou Institute of GBA',
      role: 'Public Policy Analyst',
      period: 'Jun 2025 – Sept 2025',
      description: ['Regional policy research', 'Field investigations', 'Report writing'],
      detail: 'At the Guangzhou Institute of GBA, I assisted in regional development and sci-tech zone policy research. I collected and organized government documents for cross-city projects, conducted field visits to Yangjiang, and attended the World Robotics Conference to gather primary research data.',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: 'State Council DRC',
      role: 'Intern Analyst',
      period: 'Dec 2025 – Present',
      description: ['Policy tracking', 'Enterprise research', 'Bay Area analysis'],
      detail: 'At the Development Research Center of the State Council, I engage in think tank information collection, article compilation, thematic research, and report writing. I assist in completing related research projects on enterprise going-out policies and Bay Area coordination.',
      image: '/gallery/国务院发展研究中心.png',
    },
  ],
  cn: [
    {
      company: '网易互娱',
      role: '海外授权与商务实习生',
      period: '2024年7月 – 2024年9月',
      description: ['越南游戏市场分析', 'SEGA合作调研', 'GDPR/COPPA合规'],
      detail: '在网易互娱工作期间，我负责分析越南游戏监管政策，完成海外游戏版号申请。调研了与日本SEGA及俄罗斯游戏公司的合作意向，研究国际合拍模式及GDPR、COPPA合规要求。',
      image: '/gallery/netease.jpg',
    },
    {
      company: '联合国开发计划署（UNDP）',
      role: '中美贸易项目助理',
      period: '2024年1月 – 2024年2月',
      description: ['中美关系研究', 'Stata计量分析', '政策简报撰写'],
      detail: '在UNDP中国工作期间，我研究中美政治经济关系演变。运用Stata回归模型分析政策对双边贸易的影响，合著四份可持续贸易政策简报。',
      image: '/gallery/UNDP.png',
    },
    {
      company: '广东融泰私募',
      role: '投资分析师实习生',
      period: '2023年7月 – 2023年9月',
      description: ['尽职调查支持', '行业研究', '投资备忘录'],
      detail: '在广东融泰私募工作期间，我评估初创企业的监管与政策风险，进行行业政策研究与市场分析，支持投资尽职调查工作。',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: '香港大学AI研究中心',
      role: '研究助理',
      period: '2025年11月 – 2026年1月',
      description: ['计量方法研究', '文献综述', '数据复现'],
      detail: '在香港大学AI管理与组织研究中心，我批量下载整理学术文献复现数据，总结应用计量经济学方法（OLS、IV、DID、PSM），使用Stata和R复现实验结果。',
      image: '/gallery/HKUAI.webp',
    },
    {
      company: '广州粤港澳大湾区研究院',
      role: '公共政策分析师',
      period: '2025年6月 – 2025年9月',
      description: ['区域政策研究', '实地调研', '报告撰写'],
      detail: '在广州粤港澳大湾区研究院，我协助区域发展与科技园区政策研究，整理跨城项目政府文档，实地调研阳江并参加世界机器人大会。',
      image: '/gallery/粤港澳大湾区研究院.jpeg',
    },
    {
      company: '国务院发展研究中心',
      role: '实习分析师',
      period: '2025年12月 – 至今',
      description: ['政策跟踪', '企业研究', '湾区分析'],
      detail: '在国务院发展研究中心，我负责智库信息收集、文章汇编、专题研究和报告撰写，协助完成企业出海政策动态跟踪与湾区协同发展评估。',
      image: '/gallery/国务院发展研究中心.png',
    },
  ],
};

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const data = experienceData[lang];
  const title = lang === 'en' ? 'Experience' : '工作经历';
  const subtitle = lang === 'en' ? "Where I've worked" : '我的工作经历';
  const close = lang === 'en' ? 'Close' : '关闭';
  const isPresent = (period: string) =>
    period.includes('Present') || period.includes('至今');

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="experience" />

      <main className="pt-32 pb-24 px-6">
        {/* Hero */}
        <div className="max-w-[740px] mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2997ff] mb-4"
          >
            Career
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[48px] md:text-[56px] font-semibold text-white mb-4"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.07 }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[19px] font-light text-white/40"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* List */}
        <div className="max-w-[740px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/25 mb-5 pb-3 border-b border-white/10">
            Professional
          </p>

          <div
            className="rounded-[18px] overflow-hidden"
            style={{ border: '0.5px solid rgba(255,255,255,0.1)' }}
          >
            {data.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 px-6 py-5 cursor-pointer transition-colors duration-200 hover:bg-white/[0.05]"
                style={{
                  borderBottom:
                    i < data.length - 1
                      ? '0.5px solid rgba(255,255,255,0.07)'
                      : 'none',
                  backgroundColor: 'rgba(255,255,255,0.015)',
                }}
                onClick={() => setSelected(i)}
              >
                {/* Logo */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-[12px] overflow-hidden bg-white/5"
                  style={{ border: '0.5px solid rgba(255,255,255,0.1)' }}
                >
                  <img
                    src={item.image}
                    alt={item.company}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-white truncate" style={{ letterSpacing: '-0.01em' }}>
                    {item.company}
                  </p>
                  <p className="text-[13px] text-white/45 mt-0.5 truncate">
                    {item.role}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.description.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-white/35 px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="flex-shrink-0 hidden sm:flex items-center gap-2">
                  <p className="text-[12px] text-white/25 whitespace-nowrap">
                    {item.period}
                  </p>
                  {isPresent(item.period) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-y-auto"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg my-8 rounded-[22px] overflow-hidden"
              style={{
                backgroundColor: '#1c1c1e',
                border: '0.5px solid rgba(255,255,255,0.12)',
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={data[selected].image}
                  alt={data[selected].company}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h2 className="text-[20px] font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>
                  {data[selected].company}
                </h2>
                <p className="text-[14px] text-[#2997ff] mt-1">
                  {data[selected].role}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[12px] text-white/30">
                    {data[selected].period}
                  </p>
                  {isPresent(data[selected].period) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  )}
                </div>

                <p className="text-[14px] text-white/55 mt-5" style={{ lineHeight: '1.8' }}>
                  {data[selected].detail}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-7 w-full py-3 rounded-full text-[13px] font-medium text-white transition-colors duration-200"
                  style={{ backgroundColor: '#2997ff' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor = '#0077ed')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor = '#2997ff')
                  }
                >
                  {close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
