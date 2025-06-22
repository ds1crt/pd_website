import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBook, FaHeart } from 'react-icons/fa';
// Import your profile photo
import profilePhoto from '../assets/profile-photo.jpg';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Section = ({ children, delay = 0, className = '' }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

const AboutPage = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                    {/* --- IMAGE MODIFIED --- */}
                    <img 
                        src={profilePhoto} 
                        alt="Berra Shahin" 
                        className="rounded-full shadow-2xl object-cover w-full aspect-square" 
                    />
                </div>
                
                <p className="text-lg text-secondary leading-relaxed">
                    Dokuz Eylül Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden yüksek onur derecesiyle mezun oldum. Mezuniyetimin ardından İzmir’de anaokulu danışmanlığının yanı sıra çocuk, ergen ve ebeveynlere çeşitli konularda danışmanlık verdim. Şu anda online çalışmalarımın yanında Bursa’da yüz yüze çalışmalarımı sürdürmekteyim.
                </p>
            </div>
        </Section>
        {/* --- END OF MODIFIED SECTION --- */}
        
        <Section delay={0.2} className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 flex items-center gap-3">
                <FaGraduationCap /> EĞİTİM
            </h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-secondary">Dokuz Eylül Üniversitesi | İzmir</h3>
                    <p className="text-slate-600">Psikolojik Danışmanlık ve Rehberlik (Lisans) | 2019-2023</p>
                    <p className="text-slate-500 text-sm">Yüksek Onur Derecesi | GANO: 3.66</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-secondary">İstanbul Üniversitesi | İstanbul</h3>
                    <p className="text-slate-600">Çocuk Gelişimi (Lisans) | Açık ve Uzaktan Eğitim Fakültesi | 2020-2025</p>
                    <p className="text-slate-500 text-sm">GANO: 3.26</p>
                </div>
            </div>
        </Section>

        <Section delay={0.4} className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 flex items-center gap-3">
                <FaCertificate /> EĞİTİM VE SERTİFİKALAR
            </h2>
            <ul className="list-disc list-inside space-y-2 text-secondary">
                <li>Çocuk ve Ergen Odaklı BDT Uygulamaları Eğitimi - Dr. Nevin Dölek</li>
                <li>Moxo Dikkat Testi Uygulayıcı Eğitimi - Türk PDR Derneği & Moxo Türkiye</li>
                <li>WISC-R Testi Uygulayıcı Eğitimi - Psk. Dan. Osman Erkan</li>
                <li>Objektif Çocuk Değerlendirme Testleri Uygulayıcı Eğitimi - Psk. Dan. Osman Erkan</li>
                <li>Oyun Terapisi Uygulayıcı Eğitimi - Psk. Dan. Mehlika Zeynep Yurt</li>
                <li>Resim Analizi Uygulayıcı Eğitimi - Psk. Dan. Mehlika Zeynep Yurt</li>
                <li>Çocukların Psikolojik Değerlendirilmesi ve Görüşme Teknikleri – Psk. Dan. Yusuf Menki</li>
                <li>Tercih ve Kariyer Danışmanlığı Uygulayıcı Eğitimi - Ev Okulu Derneği</li>
                <li>Afet Psikolojik Destek Programı - Ev Okulu Derneği</li>
                <li>Yeşilay Türkiye Bağımlılıkla Mücadele Akran Uygulayıcı Eğitimi</li>
            </ul>
        </Section>

        <Section delay={0.6} className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 flex items-center gap-3">
                <FaBook /> AKADEMİK YAYINLAR
            </h2>
            <p className="text-secondary">
            6 Şubat 2023 Kahramanmaraş Depremlerinden Etkilenen Çocukların Yaşam Doyumları ve Umut Düzeylerinin İncelenmesi Üzerine Nicel Bir Araştırma. Araştırma Dokuz Eylül Üniversitesi Buca Eğitim Fakültesi Dergisi’nin 63. sayısında yayınlanmıştır, ayrıca 2. Uluslararası Ege Sosyal ve Beşeri Bilimler Kongresi’nde sözlü bildiri olarak sunulmuştur. 
            <a 
                href="https://doi.org/10.53444/deubefd.1559745" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500 hover:underline ml-1"
            >
                (Doi linkine buradan ulaşabilirsiniz)
            </a>
            </p>
        </Section>

        <Section delay={0.8} className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 flex items-center gap-3">
                <FaHeart /> GÖNÜLLÜ ÇALIŞMALAR
            </h2>
            <ul className="list-disc list-inside space-y-2 text-secondary">
                <li>UCİM Çocuk İstismarı ile Mücadele Derneği (2019-Halen) - Bursa Koordinatörlüğü</li>
                <li>Dokuz Eylül Üniversitesi Çocuk Hakları Topluluğu - Yönetim Kurulu Başkanı (2021-2023)</li>
                <li>Online Gönüllü Platformu - Yönetim Kurulu Üyesi ve Üniversite Temsilcisi (2020-2023)</li>
                <li>Ulusal PDR Öğrencileri Yapılanması (UPÖY) - İzmir Medya ve İletişim Sorumlusu (2020-2022)</li>
                <li>Türk PDR Derneği - Öğrenci Konseyi Örgütlenme Sekreterliği Üyesi (2020-2021)</li>
            </ul>
        </Section>
    </div>
  </PageWrapper>
);

export default AboutPage;