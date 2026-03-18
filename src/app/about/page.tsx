'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

interface Education {
  school: string;
  program: string;
  period: string;
  description: string;
  detail: string;
  image: string;
}

const educationData: { en: Education[]; cn: Education[] } = {
  en: [
    {
      school: 'ESCP Europe Business School',
      program: 'Master in Global Management',
      period: '2027 - 2029',
      description: 'Top-ranked European business school, multidisciplinary management program',
      detail: 'ESCP Business School was founded in 1819 and is the world\'s oldest business school. The Master in Global Management is a prestigious program that prepares students for leadership roles in international organizations. The curriculum covers finance, marketing, operations, and strategic management across multiple European campuses.',
      image: '/gallery/ESCP.jpg',
    },
    {
      school: 'The Chinese University of Hong Kong, Shenzhen',
      program: 'BSc in Economics (Applied Economics)',
      period: '2022 - 2026',
      description: 'One of the top universities in the GBA, economics with data analysis focus',
      detail: 'CUHK-Shenzhen combines the liberal arts tradition of CUHK with the innovative spirit of Shenzhen. The Economics program emphasizes quantitative methods, data analysis, and policy evaluation. Students gain strong foundations in microeconomics, macroeconomics, econometrics, and their applications in real-world policy and business scenarios.',
      image: '/gallery/香港中文大学（深圳）.jpg',
    },
    {
      school: 'The University of Hong Kong',
      program: 'CCGL9042 - Human Political and Economic Development',
      period: 'Summer 2023',
      description: 'Exchange program exploring world history from political economy perspective',
      detail: 'HKU\'s CCGL9042 course, taught by Dr. Larry Baum, explores world history through the lens of political economy. The course covers the evolution of civilizations, global trade systems, and development patterns. Students analyze case studies including the Democratic Republic of Congo\'s sustainable development challenges.',
      image: '/gallery/University of Hong Kong.png',
    },
    {
      school: 'University of Chicago - Harris School of Public Policy',
      program: 'Data and Policy Summer Scholar Program',
      period: 'Summer 2024',
      description: 'Elite summer program focusing on data-driven policy analysis',
      detail: 'The Data and Policy Summer Scholar Program at UChicago Harris is a highly competitive program for undergraduate students. Students learn advanced econometric methods, R programming for data analysis, and policy evaluation techniques. The capstone project, supervised by Dr. Austin Wright, investigated socioeconomic factors affecting voting behavior in US elections.',
      image: '/gallery/Chicago.png',
    },
  ],
  cn: [
    {
      school: 'ESCP欧洲高等商学院',
      program: '全球管理硕士 Master in Global Management',
      period: '2027 - 2029',
      description: '欧洲顶尖商学院，多学科管理课程',
      detail: 'ESCP商学院创立于1819年，是世界上最古老的商学院。全球管理硕士项目是备受认可的项目，培养学生在国际组织中担任领导角色。课程涵盖财务、市场、运营和跨多个欧洲校区的战略管理。',
      image: '/gallery/ESCP.jpg',
    },
    {
      school: '香港中文大学（深圳）',
      program: '经济学学士（应用经济学）',
      period: '2022 - 2026',
      description: '粤港澳大湾区顶尖高校，经济学与数据分析',
      detail: '港中深融合了港中大的博雅教育传统与深圳的创新精神。经济学项目强调定量方法、数据分析和政策评估。学生将在微观经济学、宏观经济学、计量经济学及其在实际政策和企业场景中的应用方面获得坚实基础。',
      image: '/gallery/香港中文大学（深圳）.jpg',
    },
    {
      school: '香港大学',
      program: 'CCGL9042 政治经济学视角下的人类发展',
      period: '2023年暑期',
      description: '交换生项目，从政治经济学角度探索世界历史',
      detail: '港大CCGL9042课程由Larry Baum教授讲授，从政治经济学视角探索世界历史。课程涵盖文明演变、全球贸易体系和发展模式。学生分析刚果民主共和国可持续发展等案例研究。',
      image: '/gallery/University of Hong Kong.png',
    },
    {
      school: '芝加哥大学哈里斯公共政策学院',
      program: '数据与政策学者暑期项目',
      period: '2024年暑期',
      description: '精英暑期项目，专注数据驱动政策分析',
      detail: '芝加哥大学哈里斯学院的数据与政策学者暑期项目是一个竞争激烈的本科项目。学生学习高级计量经济学方法、R数据分析和政策评估技术。在Austin Wright教授指导下研究的 capstone 项目调查了影响美国选举的社会经济因素。',
      image: '/gallery/Chicago.png',
    },
  ],
};

interface Section {
  emoji: string;
  title: string;
  content: string;
}

const aboutData: { en: Section[]; cn: Section[] } = {
  en: [
    { emoji: '🎯', title: "Hi, I'm Yijian Huang", content: 'You can also call me Henry. An explorer freely navigating between Economics, Philosophy, AI, and Policy.' },
    { emoji: '📖', title: 'My life is a book with several chapters open', content: 'Policy research, business analysis, entrepreneurship, AI practice — I\'m reading all simultaneously.' },
    { emoji: '🏛️', title: 'Policy is about understanding how rules shape outcomes', content: 'At the State Council DRC, HK-Macao-Taiwan Association, and UNDP, I\'ve researched how policies cross boundaries to affect real industries and lives.' },
    { emoji: '💼', title: 'Business is about validating ideas in the real world', content: 'At NetEase and Rongtai VC, I learned to analyze markets and evaluate companies. Now building Tevo Group in intelligent retail.' },
    { emoji: '🤖', title: 'AI is my tool for thinking and building', content: 'I use AI to assist research and enjoy building with Cursor and ChatGPT. AI is essential for understanding this era.' },
    { emoji: '☕', title: "Let's connect", content: 'If any of my journey resonates with you, I\'m ready for a coffee chat. Thanks for visiting!' },
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

export default function About() {
  const { lang, setLang } = useLanguage();
  const [showEducation, setShowEducation] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eduIndex = params.get('edu');
    if (eduIndex !== null) {
      setSelectedEdu(parseInt(eduIndex));
      setShowEducation(true);
    }
  }, []);

  const data = aboutData[lang];
  const eduData = educationData[lang];
  const title = lang === 'en' ? 'About Me' : '关于我';

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="about" />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-white text-center mb-4"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-white/20 rounded-full mx-auto mb-12"
          />

          {/* Brief Intro Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="bg-[#111] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h2 className="text-[16px] font-semibold text-white">{item.title}</h2>
                    <p className="text-[14px] text-white/60 mt-2 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-white">
                {lang === 'en' ? 'Education' : '教育背景'}
              </h2>
              <button
                onClick={() => setShowEducation(!showEducation)}
                className="px-5 py-2 bg-[#007AFF] text-white text-[13px] font-medium rounded-full hover:bg-[#0056CC] transition-colors"
              >
                {showEducation ? (lang === 'en' ? 'Show Less' : '收起') : (lang === 'en' ? 'View All' : '查看全部')}
              </button>
            </div>

            {/* Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {eduData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  className="bg-[#111] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                  onClick={() => setSelectedEdu(i)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={edu.image} 
                      alt={edu.school}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] font-semibold text-white truncate">{edu.school}</h3>
                    <p className="text-[13px] text-blue-400 mt-1 truncate">{edu.program}</p>
                    <p className="text-[12px] text-white/40 mt-1">{edu.period}</p>
                    <p className="text-[12px] text-white/50 mt-3 line-clamp-2">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-16"
          >
            <p className="text-[15px] text-white/50">{lang === 'cn' ? '黄一健' : '— Yijian Huang'}</p>
            <p className="text-[13px] text-white/30 mt-1">{lang === 'cn' ? '于深圳，2026年春' : 'Shenzhen, Spring 2026'}</p>
          </motion.div>
        </div>
      </main>

      {/* Education Detail Modal */}
      <AnimatePresence>
        {selectedEdu !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEdu(null)}
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
                  src={eduData[selectedEdu].image}
                  alt={eduData[selectedEdu].school}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-[20px] font-semibold text-white">{eduData[selectedEdu].school}</h2>
                <p className="text-[14px] text-blue-400 mt-1">{eduData[selectedEdu].program}</p>
                <p className="text-[12px] text-white/40 mt-1">{eduData[selectedEdu].period}</p>
                
                <div className="mt-5">
                  <p className="text-[14px] text-white/70 leading-relaxed">
                    {eduData[selectedEdu].detail}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedEdu(null)}
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
