'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const campusData = {
  en: [
    { title: 'President, Cantonese Club', org: 'CUHK-Shenzhen', period: 'Sep 2023 – Present', present: true, badge: '300+ students', img: '/gallery/粤语社.jpg', detail: "Founded the first Cantonese class for beginners at CUHK-Shenzhen, using the Hong Kong Language Society's Cantonese phonetic scheme. Organized two annual Cantonese song festivals, stand-up comedy shows, and dim sum DIY activities promoting Cantonese culture. Invited Lingnan culture professors for lecture series and participated in CUHK speech data entry work.", color: '#ff9500' },
    { title: 'Academic Director, Economics Club', org: 'CUHK-Shenzhen', period: 'Sep 2023 – Aug 2024', present: false, badge: '50+ weekly reports', img: '/gallery/经济学会.jpg', detail: 'Analyzed domestic and international economic and political hotspots. Collaborated with members to produce 50+ weekly economics academic reports. Invited economists from inside and outside the university for themed lectures. Reviewed economics papers for the university journal The Lakeside Economist. Served as TA for Behavioral Economics.', color: '#2997ff' },
    { title: 'Project Manager, "Going Down to Southeast Asia"', org: 'CUHK-Shenzhen Social Practice Center', period: 'Mar 2025 – Present', present: true, badge: '2 research teams', img: '/gallery/下南洋.jpg', detail: "Leading CUHK-Shenzhen's summer social research series to Singapore and Malaysia. Established projects on Singapore-Hong Kong housing policy comparison, healthcare systems, and Peranakan culture. Contacted Singapore Chinese Cultural Centre and Singapore Federation of Chinese Clan Associations. Recruiting teams from CUHK Sha Tin and Shenzhen campuses for joint fieldwork.", color: '#30d158' },
    { title: 'L\'Oréal Brainstorm — Team Leader', org: 'L\'Oréal China Competition', period: 'Dec 2022 – Apr 2023', present: false, badge: 'Top 100 / 2500 teams', img: '/gallery/ESCP.jpg', detail: "Led a cross-university team (Shenzhen University + University of Sydney) to conduct SWOT and PEST analysis of L'Oréal China. Created a Metaverse-based virtual beauty platform concept incorporating ESG, SDG, ethnic beauty design, and children's education elements. Ranked Top 100 out of 2500 teams in the mainland China competition.", color: '#ff375f' },
  ],
  cn: [
    { title: '粤语社社长', org: '香港中文大学（深圳）', period: '2023年9月 – 至今', present: true, badge: '教授300+学生', img: '/gallery/粤语社.jpg', detail: '创办港中深首个零基础粤语课堂，采用香港语言学会粤语拼音方案教学。举办2届年度粤语歌会、栋笃笑脱口秀及港点DIY活动，推动粤文化年轻化传承。邀请岭南文化教授举办系列讲座，参与港中大语音数据录入工作。', color: '#ff9500' },
    { title: '经济学会学术部长', org: '香港中文大学（深圳）', period: '2023年9月 – 2024年8月', present: false, badge: '50+期周报', img: '/gallery/经济学会.jpg', detail: '分析国内外经济政治热点，与成员协作产出50+期经济学周报。邀请校内外经济学者进行主题讲座，审稿校刊《神仙湖畔经济学人》经济学论文，担任行为经济学本科生教学助理。', color: '#2997ff' },
    { title: '"下南洋"项目经理人', org: '港中深社会实践中心', period: '2025年3月 – 至今', present: true, badge: '2支调研团队', img: '/gallery/下南洋.jpg', detail: '主导港中深"下南洋"暑期社会调研系列，立项新加坡与香港房屋政策比较、医疗体系与娘惹文化研究。联系新加坡华族文化中心与宗乡会馆联合总会，招募中大沙田与深圳校区联合调研团队。', color: '#30d158' },
    { title: '欧莱雅Brainstorm队长', org: '欧莱雅中国商赛', period: '2022年12月 – 2023年4月', present: false, badge: 'Top 100 / 2500队', img: '/gallery/ESCP.jpg', detail: '带领深圳大学+悉尼大学跨校团队对欧莱雅中国进行SWOT与PEST分析，打造融合元宇宙、ESG、SDG、民族美妆与儿童教育的虚拟美妆平台方案，荣获大陆赛区2500队伍Top 100。', color: '#ff375f' },
  ],
};

export default function Campus() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = campusData[lang];

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="campus" dark />

      <div style={{ padding: '100px 24px 60px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Student Life</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 16 }}>
          {lang === 'en' ? 'Campus Life' : '校园活动'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
          {lang === 'en' ? 'Leadership · Culture · Community' : '领导力 · 文化 · 社群'}
        </motion.p>
      </div>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {data.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              onClick={() => setSel(i)}
              style={{ background: '#111', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#111')}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#222' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
              <div style={{ padding: '16px 18px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.01em', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>{item.period}{item.present && <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#30d158', marginLeft: 6, verticalAlign: 'middle' }} />}</div>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: item.color, color: '#fff' }}>{item.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 520, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e' }}>
                <img src={data[sel].img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff' }}>{data[sel].badge}</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {data[sel].period}{data[sel].present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 18, lineHeight: 1.8 }}>{data[sel].detail}</div>
                <button onClick={() => setSel(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: data[sel].color, color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
