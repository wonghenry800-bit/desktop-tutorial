'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const campusData = {
  en: [
    { title: 'President, Cantonese Club', period: 'Sep 2023 – Present', description: 'Founded first Cantonese class at CUHK-Shenzhen', achievement: '300+ students taught', detail: "As the founder and president of the Cantonese Club, I established the first Cantonese class for beginners at CUHK-Shenzhen. I used the Hong Kong Language Society's Cantonese phonetic scheme to help students learn basic Cantonese. I organized two annual Cantonese song festivals, stand-up comedy shows, and dim sum DIY activities.", image: '/gallery/粤语社.jpg', present: true },
    { title: 'Academic Director, Economics Club', period: 'Sep 2023 – Aug 2024', description: 'Analyzed economic hotspots and produced weekly reports', achievement: '50+ weekly reports', detail: 'As Academic Director of the Economics Club, I analyzed domestic and international economic and political hotspots. I collaborated with academic members to produce weekly economics reports. I invited economists from inside and outside the university to give lectures.', image: '/gallery/经济学会.jpg', present: false },
    { title: 'Project Manager, "Going Down to Southeast Asia"', period: 'Mar 2025 – Present', description: 'Leading research teams to Singapore and Malaysia', achievement: '2 research teams', detail: "As Project Manager of the 'Going Down to Southeast Asia' series, I'm promoting summer social research projects at CUHK-Shenzhen. I've established projects comparing housing policies and healthcare systems in Singapore and Hong Kong, as well as research on Peranakan culture.", image: '/gallery/下南洋.jpg', present: true },
  ],
  cn: [
    { title: '粤语社社长', period: '2023年9月 – 至今', description: '创办港中深首个零基础粤语课堂', achievement: '教授300+学生', detail: '作为粤语社创始人兼社长，我创办了港中深首个零基础粤语课堂。采用香港语言学会粤语拼音方案，帮助学生学习基础粤语。组织了两届年度粤语歌会、栋笃笑脱口秀和港点DIY活动。', image: '/gallery/粤语社.jpg', present: true },
    { title: '经济学会学术部长', period: '2023年9月 – 2024年8月', description: '分析经济热点，产出周报', achievement: '50+期周报', detail: '作为经济学会学术部长，我分析国内外经济政治热点。与学术部成员协作产出经济学周报，邀请校内外经济学学者进行经济学主题讲座。', image: '/gallery/经济学会.jpg', present: false },
    { title: '"下南洋"项目经理人', period: '2025年3月 – 至今', description: '带领调研团队前往新加坡和马来西亚', achievement: '2支调研团队', detail: '作为"下南洋"系列项目经理人，我推动港中深暑期社会调研项目。建立新加坡与香港住房政策、医疗体系比较研究及娘惹文化研究项目。', image: '/gallery/下南洋.jpg', present: true },
  ],
};

export default function Campus() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const data = campusData[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage="campus" />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[740px] mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2997ff] mb-4">Student Life</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-[48px] font-semibold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.025em', lineHeight: 1.07 }}>
              {lang === 'en' ? 'Campus Life' : '校园活动'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-[19px] font-light text-[#6e6e73]">
              {lang === 'en' ? 'Leadership & community' : '领导力与社区'}
            </motion.p>
          </div>

          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#86868b] mb-5 pb-3" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>Activities</p>

          <div className="rounded-[18px] overflow-hidden" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 px-6 py-5 cursor-pointer transition-colors duration-150"
                style={{ borderBottom: i < data.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', backgroundColor: 'rgba(0,0,0,0.01)' }}
                onClick={() => setSelected(i)}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.01)')}>
                <div className="flex-shrink-0 w-12 h-12 rounded-[12px] overflow-hidden bg-[#f5f5f7]" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-[#1d1d1f] truncate" style={{ letterSpacing: '-0.01em' }}>{item.title}</p>
                  <p className="text-[13px] text-[#6e6e73] mt-0.5 truncate">{item.description}</p>
                  <span className="inline-block mt-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full text-[#2997ff]" style={{ backgroundColor: 'rgba(41,151,255,0.1)' }}>
                    {item.achievement}
                  </span>
                </div>
                <div className="flex-shrink-0 hidden sm:flex items-center gap-2">
                  <p className="text-[12px] text-[#86868b] whitespace-nowrap">{item.period}</p>
                  {item.present && <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />}
                </div>
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
                <h2 className="text-[20px] font-semibold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>{data[selected].title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[12px] text-[#86868b]">{data[selected].period}</p>
                  {data[selected].present && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                </div>
                <span className="inline-block mt-3 text-[11px] font-medium px-2.5 py-1 rounded-full text-[#2997ff]" style={{ backgroundColor: 'rgba(41,151,255,0.1)' }}>
                  {data[selected].achievement}
                </span>
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
