'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

interface Campus {
  title: string;
  period: string;
  description: string;
  achievement: string;
  detail: string;
  image: string;
}

const campusData: { en: Campus[]; cn: Campus[] } = {
  en: [
    {
      title: 'President, Cantonese Club',
      period: 'Sep 2023 - Present',
      description: 'Founded first Cantonese class at CUHK-Shenzhen',
      achievement: '300+ students taught',
      detail: 'As the founder and president of the Cantonese Club, I established the first Cantonese class for beginners at CUHK-Shenzhen. I used the Hong Kong Language Society\'s Cantonese phonetic scheme to help students learn basic Cantonese. I organized two annual Cantonese song festivals, stand-up comedy shows, and dim sum DIY activities.',
      image: '/gallery/粤语社.jpg',
    },
    {
      title: 'Academic Director, Economics Club',
      period: 'Sep 2023 - Aug 2024',
      description: 'Analyzed economic hotspots and produced weekly reports',
      achievement: '50+ weekly reports',
      detail: 'As Academic Director of the Economics Club, I analyzed domestic and international economic and political hotspots. I collaborated with academic members to produce weekly economics reports. I invited economists from inside and outside the university to give lectures.',
      image: '/gallery/经济学会.jpg',
    },
    {
      title: 'Project Manager, "Going Down to Southeast Asia"',
      period: 'Mar 2025 - Present',
      description: 'Leading research teams to Singapore and Malaysia',
      achievement: '2 research teams',
      detail: 'As Project Manager of the "Going Down to Southeast Asia" series, I\'m promoting summer social research projects at CUHK-Shenzhen. I\'ve established projects comparing housing policies and healthcare systems in Singapore and Hong Kong, as well as research on Peranakan culture.',
      image: '/gallery/下南洋.jpg',
    },
  ],
  cn: [
    {
      title: '粤语社社长',
      period: '2023年9月 - 至今',
      description: '创办港中深首个零基础粤语课堂',
      achievement: '教授300+学生',
      detail: '作为粤语社创始人兼社长，我创办了港中深首个零基础粤语课堂。采用香港语言学会粤语拼音方案，帮助学生学习基础粤语。组织了两届年度粤语歌会、栋笃笑脱口秀和港点DIY活动。',
      image: '/gallery/粤语社.jpg',
    },
    {
      title: '经济学会学术部长',
      period: '2023年9月 - 2024年8月',
      description: '分析经济热点，产出周报',
      achievement: '50+期周报',
      detail: '作为经济学会学术部长，我分析国内外经济政治热点。与学术部成员协作产出经济学周报，邀请校内外经济学学者进行经济学主题讲座。',
      image: '/gallery/经济学会.jpg',
    },
    {
      title: '"下南洋"项目经理人',
      period: '2025年3月 - 至今',
      description: '带领调研团队前往新加坡和马来西亚',
      achievement: '2支调研团队',
      detail: '作为"下南洋"系列项目经理人，我推动港中深暑期社会调研项目。建立新加坡与香港住房政策、医疗体系比较研究及娘惹文化研究项目。',
      image: '/gallery/下南洋.jpg',
    },
  ],
};

export default function Campus() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const item = params.get('item');
    if (item !== null) {
      setSelected(parseInt(item));
    }
  }, []);

  const data = campusData[lang];
  const title = lang === 'en' ? 'Campus Life' : '校园活动';
  const subtitle = lang === 'en' ? 'Leadership & community' : '领导力与社区';

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="campus" />
      
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
                  <h3 className="text-[15px] font-semibold text-white truncate">{item.title}</h3>
                  <p className="text-[13px] text-white/60 mt-2 line-clamp-2">{item.description}</p>
                  <p className="text-[12px] text-white/40 mt-1">{item.period}</p>
                  
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[11px]">
                      {item.achievement}
                    </span>
                  </div>
                  
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
                <h2 className="text-[20px] font-semibold text-white">{data[selected].title}</h2>
                <p className="text-[13px] text-white/50 mt-1">{data[selected].period}</p>
                
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[11px]">
                    {data[selected].achievement}
                  </span>
                </div>
                
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
