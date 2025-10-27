"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.cta": "Build with Cordoba AI",

    // Hero
    "hero.title": "Enterprise Software",
    "hero.titleSub": "Built for Scale",
    "hero.description": "Transform your business with AI-powered software development. We deliver production-ready solutions that perform at scale, with quality and speed that set new standards.",
    "hero.cta1": "Start Building",
    "hero.cta2": "View Case Studies",

    // Features
    "features.badge": "Modern Stack",
    "features.title": "Built for Performance",
    "features.description": "Enterprise-grade software development with cutting-edge AI technology. Fast, reliable, and scalable solutions that grow with your business.",
    "features.modernStack": "Modern Stack",
    "features.modernStackDesc": "Built with the latest technologies. React, TypeScript, Node.js, Python, and AI frameworks that deliver exceptional performance.",
    "features.tested": "Tested & Secure",
    "features.testedDesc": "Comprehensive testing suite, security audits, and compliance certifications. Code you can trust in production.",
    "features.fast": "Lightning Fast",
    "features.fastDesc": "Optimized builds, edge deployment, and CDN integration. Sub-100ms response times globally.",
    "features.ai": "AI-Powered",
    "features.aiDesc": "Intelligent code generation, automated testing, and smart deployments. Build 10x faster with AI assistance.",
    "features.scaling": "Auto Scaling",
    "features.scalingDesc": "Handle traffic spikes effortlessly. From zero to millions of requests with automatic resource management.",
    "features.support": "24/7 Support",
    "features.supportDesc": "Expert engineering team available around the clock. Real humans, real solutions, real fast.",

    // CTA
    "cta.title": "From idea to release—",
    "cta.titleSub": "powered by AI Agents.",
    "cta.description": "Work with our team to deliver your first production-ready build.",
    "cta.button": "Talk to an expert",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.description": "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "contact.formTitle": "Send us a Message",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "you@example.com",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "How can we help?",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Your message...",
    "contact.submit": "Send Message",
    "contact.infoTitle": "Contact Information",
    "contact.emailLabel": "Email",
    "contact.office": "Office",
    "contact.officeLocation": "Remote-First Company",
    "contact.followUs": "Follow Us",
    "contact.businessHours": "Business Hours",
    "contact.weekdays": "Monday - Friday",
    "contact.weekdaysTime": "9:00 AM - 6:00 PM",
    "contact.weekend": "Saturday - Sunday",
    "contact.weekendTime": "Closed",

    // Footer
    "footer.platform": "Platform",
    "footer.features": "Features",
    "footer.integrations": "Integrations",
    "footer.security": "Security",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.resources": "Resources",
    "footer.community": "Community",
    "footer.terms": "Terms of service",
    "footer.vulnerability": "Report a vulnerability",
    "footer.social": "Social",
    "footer.rights": "Cordoba AI - All rights reserved.",
    "footer.language": "Language",
  },
  ar: {
    // Header
    "header.cta": "ابنِ مع Cordoba AI",

    // Hero
    "hero.title": "برمجيات مؤسسية",
    "hero.titleSub": "مبنية للتطوير",
    "hero.description": "حوّل عملك بتطوير البرمجيات المدعوم بالذكاء الاصطناعي. نقدم حلولاً جاهزة للإنتاج تعمل بكفاءة، بجودة وسرعة تضع معايير جديدة.",
    "hero.cta1": "ابدأ البناء",
    "hero.cta2": "شاهد دراسات الحالة",

    // Features
    "features.badge": "تقنيات حديثة",
    "features.title": "مبني للأداء",
    "features.description": "تطوير برمجيات على مستوى المؤسسات بتقنية ذكاء اصطناعي متطورة. حلول سريعة وموثوقة وقابلة للتطوير تنمو مع عملك.",
    "features.modernStack": "تقنيات حديثة",
    "features.modernStackDesc": "مبني بأحدث التقنيات. React و TypeScript و Node.js و Python وأطر الذكاء الاصطناعي التي تقدم أداءً استثنائياً.",
    "features.tested": "مختبر وآمن",
    "features.testedDesc": "مجموعة اختبارات شاملة، وتدقيق أمني، وشهادات امتثال. كود يمكنك الوثوق به في الإنتاج.",
    "features.fast": "سريع للغاية",
    "features.fastDesc": "بناء محسّن، نشر على الحافة، وتكامل CDN. أوقات استجابة أقل من 100 مللي ثانية عالمياً.",
    "features.ai": "مدعوم بالذكاء الاصطناعي",
    "features.aiDesc": "توليد الكود الذكي، والاختبار التلقائي، والنشر الذكي. ابنِ أسرع بـ 10 مرات بمساعدة الذكاء الاصطناعي.",
    "features.scaling": "توسع تلقائي",
    "features.scalingDesc": "تعامل مع ارتفاع حركة المرور بسهولة. من صفر إلى ملايين الطلبات مع إدارة الموارد التلقائية.",
    "features.support": "دعم على مدار الساعة",
    "features.supportDesc": "فريق هندسي خبير متاح على مدار الساعة. بشر حقيقيون، حلول حقيقية، سريع حقاً.",

    // CTA
    "cta.title": "من الفكرة إلى الإطلاق—",
    "cta.titleSub": "مدعوم بوكلاء الذكاء الاصطناعي.",
    "cta.description": "اعمل مع فريقنا لتسليم أول بناء جاهز للإنتاج.",
    "cta.button": "تحدث إلى خبير",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.description": "لديك أسئلة؟ نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
    "contact.formTitle": "أرسل لنا رسالة",
    "contact.name": "الاسم",
    "contact.namePlaceholder": "اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.emailPlaceholder": "you@example.com",
    "contact.subject": "الموضوع",
    "contact.subjectPlaceholder": "كيف يمكننا المساعدة؟",
    "contact.message": "الرسالة",
    "contact.messagePlaceholder": "رسالتك...",
    "contact.submit": "إرسال الرسالة",
    "contact.infoTitle": "معلومات الاتصال",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.office": "المكتب",
    "contact.officeLocation": "شركة عن بُعد",
    "contact.followUs": "تابعنا",
    "contact.businessHours": "ساعات العمل",
    "contact.weekdays": "الاثنين - الجمعة",
    "contact.weekdaysTime": "9:00 صباحاً - 6:00 مساءً",
    "contact.weekend": "السبت - الأحد",
    "contact.weekendTime": "مغلق",

    // Footer
    "footer.platform": "المنصة",
    "footer.features": "الميزات",
    "footer.integrations": "التكاملات",
    "footer.security": "الأمان",
    "footer.company": "الشركة",
    "footer.about": "حول",
    "footer.contact": "اتصل بنا",
    "footer.resources": "الموارد",
    "footer.community": "المجتمع",
    "footer.terms": "شروط الخدمة",
    "footer.vulnerability": "الإبلاغ عن ثغرة أمنية",
    "footer.social": "التواصل الاجتماعي",
    "footer.rights": "Cordoba AI - جميع الحقوق محفوظة.",
    "footer.language": "اللغة",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguageState(saved);
      updateHTMLAttributes(saved);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      const detected = browserLang.startsWith("ar") ? "ar" : "en";
      setLanguageState(detected);
      updateHTMLAttributes(detected);
      localStorage.setItem("language", detected);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    updateHTMLAttributes(lang);
  };

  const updateHTMLAttributes = (lang: Language) => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Always provide the context, even during SSR
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
