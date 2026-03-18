'use client';

import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage="contact" />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[560px] mx-auto">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2997ff] mb-4">Connect</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-[48px] font-semibold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.025em', lineHeight: 1.07 }}>
              {lang === 'en' ? 'Get in Touch' : '联系我'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-[19px] font-light text-[#6e6e73]">
              {lang === 'en' ? "I'd love to hear from you." : '期待与你的交流。'}
            </motion.p>
          </div>

          <div className="space-y-3">
            <motion.a href="mailto:Yijianhuang@link.cuhk.edu.cn"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="flex items-center gap-5 px-6 py-5 rounded-[18px] transition-colors duration-150 group"
              style={{ backgroundColor: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.06)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ebebf0')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}>
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-[#86868b] uppercase tracking-wide mb-0.5">{lang === 'en' ? 'Email' : '邮箱'}</p>
                <p className="text-[15px] font-medium text-[#1d1d1f] truncate group-hover:text-[#2997ff] transition-colors">Yijianhuang@link.cuhk.edu.cn</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>

            <motion.a href="tel:+8613631379946"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex items-center gap-5 px-6 py-5 rounded-[18px] transition-colors duration-150 group"
              style={{ backgroundColor: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.06)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ebebf0')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f5f5f7')}>
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-[#86868b] uppercase tracking-wide mb-0.5">{lang === 'en' ? 'Phone' : '电话'}</p>
                <p className="text-[15px] font-medium text-[#1d1d1f] group-hover:text-[#2997ff] transition-colors">+86 136 3137 9946</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-[13px] text-[#86868b] mt-12">
            {lang === 'en' ? 'Based in Shenzhen · Open to opportunities worldwide' : '深圳 · 欢迎全球合作'}
          </motion.p>
        </div>
      </main>
    </div>
  );
}
