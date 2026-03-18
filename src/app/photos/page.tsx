'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const content = {
  en: { title: 'Photos', subtitle: 'Captured moments' },
  cn: { title: '相册', subtitle: '记录的瞬间' },
};

const photos = [
  { src: '/gallery/港大高桌.jpeg', caption: 'HKU Gala Dinner', date: '2025' },
  { src: '/gallery/礼服.jpg', caption: 'Formal Attire', date: '2025' },
  { src: '/gallery/CUHKSZ SME Career Mentor.jpg', caption: 'Career Mentor', date: '2024' },
  { src: '/gallery/与张念群部长合影.jpg', caption: 'With Minister', date: '2024' },
  { src: '/gallery/于香港大美督.jpg', caption: 'Tai Mei Tuk', date: '2024' },
  { src: '/gallery/于香港天后诞.jpg', caption: 'Tin Hau Festival', date: '2024' },
  { src: '/gallery/马来西亚.jpg', caption: 'Malaysia', date: '2024' },
  { src: '/gallery/数字经济峰会.jpg', caption: 'Digital Economy Summit', date: '2024' },
  { src: '/gallery/粤语社.jpg', caption: 'Cantonese Club', date: '2024' },
  { src: '/gallery/经济学会.jpg', caption: 'Economics Club', date: '2024' },
  { src: '/gallery/下南洋.jpg', caption: 'Going to Southeast Asia', date: '2025' },
  { src: '/gallery/ESCP.jpg', caption: 'ESCP Business School', date: '2025' },
];

export default function Photos() {
  const { lang, setLang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="photos" />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-white text-center mb-2"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-center mb-12"
          >
            {t.subtitle}
          </motion.p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(i)}
                className="break-inside-avoid cursor-pointer mb-4"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#111]">
                  <img 
                    src={photo.src} 
                    alt={photo.caption}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-[13px] font-medium">{photo.caption}</p>
                    <p className="text-white/50 text-[11px]">{photo.date}</p>
                  </div>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <img 
                src={photos[selected].src}
                alt={photos[selected].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <p className="text-white text-[18px] font-medium">{photos[selected].caption}</p>
                <p className="text-white/50 text-[12px] mt-1">{photos[selected].date}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
