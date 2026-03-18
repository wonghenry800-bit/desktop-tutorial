'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: '/gallery/港大高桌.jpeg', captionEn: 'HKU Gala Dinner', captionCn: '港大高桌晚宴', date: '2025' },
  { src: '/gallery/礼服.jpg', captionEn: 'Formal Attire', captionCn: '礼服照', date: '2025' },
  { src: '/gallery/CUHKSZ SME Career Mentor.jpg', captionEn: 'Career Mentor', captionCn: '职业导师', date: '2024' },
  { src: '/gallery/与张念群部长合影.jpg', captionEn: 'With Minister', captionCn: '与部长合影', date: '2024' },
  { src: '/gallery/于香港大美督.jpg', captionEn: 'Tai Mei Tuk', captionCn: '大美督', date: '2024' },
  { src: '/gallery/于香港天后诞.jpg', captionEn: 'Tin Hau Festival', captionCn: '天后诞', date: '2024' },
  { src: '/gallery/马来西亚.jpg', captionEn: 'Malaysia', captionCn: '马来西亚', date: '2024' },
  { src: '/gallery/数字经济峰会.jpg', captionEn: 'Digital Economy Summit', captionCn: '数字经济峰会', date: '2024' },
  { src: '/gallery/粤语社.jpg', captionEn: 'Cantonese Club', captionCn: '粤语社', date: '2024' },
  { src: '/gallery/经济学会.jpg', captionEn: 'Economics Club', captionCn: '经济学会', date: '2024' },
  { src: '/gallery/下南洋.jpg', captionEn: 'Going to Southeast Asia', captionCn: '下南洋', date: '2025' },
  { src: '/gallery/ESCP.jpg', captionEn: 'ESCP Business School', captionCn: 'ESCP商学院', date: '2025' },
];

export default function Photos() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage="photos" />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2997ff] mb-4">Gallery</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-[48px] font-semibold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.025em', lineHeight: 1.07 }}>
              {lang === 'en' ? 'Photos' : '相册'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-[19px] font-light text-[#6e6e73]">
              {lang === 'en' ? 'Captured moments' : '记录的瞬间'}
            </motion.p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {photos.map((photo, i) => (
              <motion.div key={photo.src} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="break-inside-avoid mb-4 cursor-pointer group"
                onClick={() => setSelected(i)}>
                <div className="relative rounded-[14px] overflow-hidden bg-[#f5f5f7]"
                  style={{ border: '0.5px solid rgba(0,0,0,0.06)' }}>
                  <img src={photo.src} alt={lang === 'en' ? photo.captionEn : photo.captionCn}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
                    <p className="text-white text-[13px] font-medium">{lang === 'en' ? photo.captionEn : photo.captionCn}</p>
                    <p className="text-white/60 text-[11px]">{photo.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
              <img src={photos[selected].src} alt={lang === 'en' ? photos[selected].captionEn : photos[selected].captionCn}
                className="max-w-full max-h-[78vh] object-contain rounded-[14px]" />
              <div className="text-center mt-5">
                <p className="text-white text-[17px] font-medium">{lang === 'en' ? photos[selected].captionEn : photos[selected].captionCn}</p>
                <p className="text-white/40 text-[13px] mt-1">{photos[selected].date}</p>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
