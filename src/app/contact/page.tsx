'use client';

import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

const content = {
  en: { title: 'Contact', message: "I'd love to hear from you!", email: 'Email', phone: 'Phone' },
  cn: { title: '联系', message: '期待与你的交流！', email: '邮箱', phone: '电话' },
};

export default function Contact() {
  const { lang, setLang } = useLanguage();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} currentPage="contact" />
      
      <main className="pt-20 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold text-white text-center mb-4"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-center mb-16"
          >
            {t.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <motion.a
              href="mailto:Yijianhuang@link.cuhk.edu.cn"
              whileHover={{ scale: 1.02, backgroundColor: '#1a1a1a' }}
              className="block bg-[#111] rounded-2xl p-8 text-center group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p className="text-[12px] text-white/40 uppercase tracking-wider mb-2">{t.email}</p>
              <p className="text-[16px] text-white group-hover:text-blue-400 transition-colors">
                Yijianhuang@link.cuhk.edu.cn
              </p>
            </motion.a>

            <motion.a
              href="tel:+8613631379946"
              whileHover={{ scale: 1.02, backgroundColor: '#1a1a1a' }}
              className="block bg-[#111] rounded-2xl p-8 text-center group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <p className="text-[12px] text-white/40 uppercase tracking-wider mb-2">{t.phone}</p>
              <p className="text-[16px] text-white group-hover:text-blue-400 transition-colors">
                +86 13631379946
              </p>
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/30 text-center mt-16 text-[13px]"
          >
            {lang === 'en' ? "I'd love to hear from you!" : '期待与你的交流！'}
          </motion.p>
        </div>
      </main>
    </div>
  );
}
