'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const aboutData = {
  en: [
    { emoji: '🎯', title: "Hi, I'm Yijian Huang", content: "You can also call me Henry. An explorer freely navigating between Economics, Philosophy, AI, and Policy." },
    { emoji: '📖', title: 'My life is a book with several chapters open', content: "Policy research, business analysis, entrepreneurship, AI practice — I'm reading all simultaneously." },
    { emoji: '🏛️', title: 'Policy is about understanding how rules shape outcomes', content: "At the State Council DRC, HK-Macao-Taiwan Association, and UNDP, I've researched how policies cross boundaries to affect real industries and lives." },
    { emoji: '💼', title: 'Business is about validating ideas in the real world', content: "At NetEase and Rongtai VC, I learned to analyze markets and evaluate companies. Now building Tevo Group in intelligent retail." },
    { emoji: '🤖', title: 'AI is my tool for thinking and building', content: "I use AI to assist research and enjoy building with Cursor and ChatGPT. AI is essential for understanding this era." },
    { emoji: '☕', title: "Let's connect", content: "If any of my journey resonates with you, I'm ready for a coffee chat. Thanks for visiting!" },
  ],
  cn: [
    { emoji: '🎯', title: '你好，我是黄一健', content: '也可以叫我 Henry。一个在经济学、哲学、AI与政策之间自由穿梭的探索者。' },
    { emoji: '📖', title: '我的生活像一本同时打开好几章的书', content: '政策研究、商业分析、创业、AI实践，我同时在读。' },
    { emoji: '🏛️', title: '政策是理解规则如何塑造结果', content: '在国务院港澳台协会和UNDP，我研究政策如何跨越边界影响真实产业和生活。' },
    { emoji: '💼', title: '商业是在现实世界中验证想法', content: '在网易和融泰私募，我学习分析市场和评估公司。现在参与智能零售创业项目Tevo Group。' },
    { emoji: '🤖', title: 'AI是我的思考和构建工具', content: '我用AI辅助研究，享受用Cursor和ChatGPT构建。AI是理解这个时代的必备视角。' },
    { emoji: '☕', title: '期待与您交流', content: '如果我的经历与您产生共鸣，我随时准备一杯咖啡的时间。感谢访问！' },
  ],
};

const educationData = {
  en: [
    { school: 'ESCP Europe Business School', program: 'Master in Global Management', period: '2027 – 2029', description: "Top-ranked European business school, multidisciplinary management program", detail: "ESCP Business School was founded in 1819 and is the world's oldest business school. The Master in Global Management prepares students for leadership roles in international organizations across multiple European campuses.", image: '/gallery/ESCP.jpg' },
    { school: 'CUHK, Shenzhen', program: 'BSc in Economics (Applied Economics)', period: '2022 – 2026', description: 'One of the top universities in the GBA, economics with data analysis focus', detail: "CUHK-Shenzhen combines the liberal arts tradition of CUHK with the innovative spirit of Shenzhen. The Economics program emphasizes quantitative methods, data analysis, and policy evaluation.", image: '/gallery/香港中文大学（深圳）.jpg' },
    { school: 'The University of Hong Kong', program: 'CCGL9042 – Human Political & Economic Development', period: 'Summer 2023', description: 'Exchange program exploring world history from political economy perspective', detail: "HKU's CCGL9042 course explores world history through the lens of political economy, covering the evolution of civilizations, global trade systems, and development patterns.", image: '/gallery/University of Hong Kong.png' },
    { school: 'UChicago Harris School of Public Policy', program: 'Data and Policy Summer Scholar Program', period: 'Summer 2024', description: 'Elite summer program focusing on data-driven policy analysis', detail: "A highly competitive program for undergraduates. Students learn advanced econometric methods, R programming, and policy evaluation techniques. Capstone project supervised by Dr. Austin Wright.", image: '/gallery/Chicago.png' },
  ],
  cn: [
    { school: 'ESCP欧洲高等商学院', program: '全球管理硕士', period: '2027 – 2029', description: '欧洲顶尖商学院，多学科管理课程', detail: 'ESCP商学院创立于1819年，是世界上最古老的商学院。全球管理硕士项目培养学生在国际组织中担任领导角色。', image: '/gallery/ESCP.jpg' },
    { school: '香港中文大学（深圳）', program: '经济学学士（应用经济学）', period: '2022 – 2026', description: '粤港澳大湾区顶尖高校，经济学与数据分析', detail: '港中深融合了港中大的博雅教育传统与深圳的创新精神。经济学项目强调定量方法、数据分析和政策评估。', image: '/gallery/香港中文大学（深圳）.jpg' },
    { school: '香港大学', program: 'CCGL9042 政治经济学视角下的人类发展', period: '2023年暑期', description: '交换生项目，从政治经济学角度探索世界历史', detail: '港大CCGL9042课程从政治经济学视角探索世界历史，涵盖文明演变、全球贸易体系和发展模式。', image: '/gallery/University of Hong Kong.png' },
    { school: '芝加哥大学哈里斯公共政策学院', program: '数据与政策学者暑期项目', period: '2024年暑期', description: '精英暑期项目，专注数据驱动政策分析', detail: '竞争激烈的本科项目，学习高级计量经济学方法、R数据分析和政策评估技术。在Austin Wright教授指导下完成capstone项目。', image: '/gallery/Chicago.png' },
  ],
};

export default function About() {
  const { lang, setLang } = useLanguage();
  const [selectedEdu, setSelectedEdu] = useState<number | null>(null);
  const data = aboutData[lang];
  const eduData = educationData[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage="about" />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[740px] mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2997ff] mb-4">Profile</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-[48px] font-semibold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.025em', lineHeight: 1.07 }}>
              {lang === 'en' ? 'About Me' : '关于我'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-[19px] font-light text-[#6e6e73]">
              {lang === 'en' ? 'Explorer. Researcher. Builder.' : '探索者 · 研究者 · 创造者'}
            </motion.p>
          </div>

          {/* About cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20">
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
                className="rounded-[18px] p-6 transition-colors duration-200"
                style={{ backgroundColor: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.06)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ebebf0')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
              >
                <span className="text-[24px] mb-3 block">{item.emoji}</span>
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#86868b] mb-5 pb-3" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
              {lang === 'en' ? 'Education' : '教育背景'}
            </p>
            <div
              className="rounded-[18px] overflow-hidden"
              style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}
            >
              {eduData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.3 }}
                  className="flex items-center gap-4 px-6 py-5 cursor-pointer transition-colors duration-150"
                  style={{
                    borderBottom: i < eduData.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                  }}
                  onClick={() => setSelectedEdu(i)}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.01)')}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-[12px] overflow-hidden bg-[#f5f5f7]" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
                    <img src={edu.image} alt={edu.school} className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-medium text-[#1d1d1f] truncate" style={{ letterSpacing: '-0.01em' }}>{edu.school}</p>
                    <p className="text-[13px] text-[#2997ff] mt-0.5 truncate">{edu.program}</p>
                  </div>
                  <p className="text-[12px] text-[#86868b] whitespace-nowrap hidden sm:block">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Signature */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center mt-16">
            <p className="text-[14px] text-[#86868b]">{lang === 'cn' ? '黄一健' : '— Yijian Huang'}</p>
            <p className="text-[12px] text-[#b0b0b5] mt-1">{lang === 'cn' ? '于深圳，2026年春' : 'Shenzhen, Spring 2026'}</p>
          </motion.div>
        </div>
      </main>

      {/* Education Modal */}
      <AnimatePresence>
        {selectedEdu !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEdu(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <motion.div initial={{ scale: 0.96, opacity: 0, y: 16 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg rounded-[22px] overflow-hidden bg-white"
              style={{ border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
              <div className="aspect-video overflow-hidden bg-[#f5f5f7]">
                <img src={eduData[selectedEdu].image} alt={eduData[selectedEdu].school} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>{eduData[selectedEdu].school}</h2>
                <p className="text-[14px] text-[#2997ff] mt-1">{eduData[selectedEdu].program}</p>
                <p className="text-[12px] text-[#86868b] mt-1">{eduData[selectedEdu].period}</p>
                <p className="text-[14px] text-[#6e6e73] mt-5" style={{ lineHeight: '1.8' }}>{eduData[selectedEdu].detail}</p>
                <button onClick={() => setSelectedEdu(null)}
                  className="mt-7 w-full py-3 rounded-full text-[13px] font-medium text-white"
                  style={{ backgroundColor: '#1d1d1f' }}
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
