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
    "header.cta": "Contact Us",

    // Hero
    "hero.title": "AI-Powered Software.",
    "hero.titleSub": "Enterprise-Grade Delivery.",
    "hero.description": "Production-ready software at record speed. We combine AI agents, expert engineers, and proven processes to deliver secure, scalable solutions—from idea to launch in weeks, not months.",
    "hero.cta1": "Contact Us",
    "hero.cta2": "Request a Proposal",
    "hero.badge1": "On-prem",
    "hero.badge2": "SSO",
    "hero.badge3": "Arabic/English",
    "hero.badge4": "CI/CD",

    // Value Props
    "valueProps.title": "Why teams choose Cordoba AI",
    "valueProps.speed": "Speed, without shortcuts",
    "valueProps.speedDesc": "From idea to first release in weeks powered by AI agents and automation.",
    "valueProps.quality": "Quality you can trust",
    "valueProps.qualityDesc": "Code reviews, test coverage, and CI/CD gates.",
    "valueProps.security": "Security by design",
    "valueProps.securityDesc": "SSO, least-privilege access, encrypted secrets, audit logs.",
    "valueProps.scale": "Built to scale",
    "valueProps.scaleDesc": "Cloud or on-prem architectures for performance, reliability, and cost.",

    // Capabilities
    "capabilities.title": "What we build",
    "capabilities.digitalServices": "Digital Services & Portals",
    "capabilities.digitalServicesDesc": "Workflows, forms, SLAs, ePayments.",
    "capabilities.internalPlatforms": "Internal Platforms",
    "capabilities.internalPlatformsDesc": "Innovation, performance, PMO/portfolio, audits, HR workflows.",
    "capabilities.dataAI": "Data & AI",
    "capabilities.dataAIDesc": "Dashboards, ML/GenAI copilots, automations with AI agents.",
    "capabilities.integrations": "Integrations",
    "capabilities.integrationsDesc": "SAP, ESB/iPaaS, GRP/ERP, payment gateways.",
    "capabilities.mobileWeb": "Mobile & Web Apps",
    "capabilities.mobileWebDesc": "Responsive, accessible, bilingual (AR/EN).",

    // Process
    "process.title": "How we deliver—fast and safe",
    "process.discover": "Discover",
    "process.discoverDesc": "Scope, stakeholders, success metrics, and risk assessment.",
    "process.design": "Design",
    "process.designDesc": "UX wireframes, architecture blueprints, security requirements.",
    "process.build": "Build",
    "process.buildDesc": "AI-assisted development with expert engineers and daily progress updates.",
    "process.assure": "Assure",
    "process.assureDesc": "QA testing, security scans, performance benchmarks.",
    "process.launch": "Launch",
    "process.launchDesc": "Cutover planning, deployment, observability setup.",
    "process.evolve": "Evolve",
    "process.evolveDesc": "SLAs, optimizations, feature enhancements.",

    // Outcomes
    "outcomes.title": "Outcomes that matter",
    "outcomes.kpi1": "4–8 weeks",
    "outcomes.kpi1Desc": "to first production release",
    "outcomes.kpi2": ">99.9% uptime",
    "outcomes.kpi2Desc": "targets",
    "outcomes.kpi3": "30–50% faster",
    "outcomes.kpi3Desc": "delivery via AI agents + automation",
    "outcomes.quote": "Cordoba AI delivered our innovation platform in 6 weeks. Their AI-powered approach and expert team exceeded our expectations.",
    "outcomes.quoteAuthor": "Technology Director",
    "outcomes.quoteCompany": "GCC Government Entity",

    // Featured Engagements
    "engagements.title": "Selected engagements",
    "engagements.innovation": "Innovation Platform",
    "engagements.innovationDesc": "Streamlined idea management and leadership insights.",
    "engagements.innovationBullet1": "Challenge submissions and idea scoring",
    "engagements.innovationBullet2": "KPI tracking and performance dashboards",
    "engagements.innovationBullet3": "Leadership analytics and reporting",
    "engagements.pmo": "Performance & PMO Suite",
    "engagements.pmoDesc": "Enterprise portfolio and project management.",
    "engagements.pmoBullet1": "Strategy maps and KPI frameworks",
    "engagements.pmoBullet2": "Portfolio and project tracking",
    "engagements.pmoBullet3": "Risk and issue management",
    "engagements.citizen": "Citizen Service Portal",
    "engagements.citizenDesc": "Digital government services platform.",
    "engagements.citizenBullet1": "Smart forms and workflow automation",
    "engagements.citizenBullet2": "SLA tracking and ePayment integration",
    "engagements.citizenBullet3": "Analytics and citizen satisfaction metrics",

    // CTA
    "cta.title": "Start your project with Cordoba AI",
    "cta.description": "Share your goals and we'll provide a delivery plan and timeline.",
    "cta.button": "Contact Us",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.description": "Share your goals and we'll provide a delivery plan and timeline.",
    "contact.formTitle": "Send us a Message",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Work email",
    "contact.emailPlaceholder": "you@company.com",
    "contact.organization": "Organization",
    "contact.organizationPlaceholder": "Your organization",
    "contact.phone": "Phone (optional)",
    "contact.phonePlaceholder": "+966 XX XXX XXXX",
    "contact.projectType": "Project type",
    "contact.projectTypePlaceholder": "Select a project type",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "How can we help?",
    "contact.message": "Message / Goals",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.attachment": "Attachment",
    "contact.consent": "I agree to be contacted about my inquiry",
    "contact.submit": "Contact Us",
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
    "footer.company": "Company",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.security": "Security",
    "footer.rights": "Cordoba AI - All rights reserved.",
    "footer.language": "Language",
  },
  ar: {
    // Header
    "header.cta": "تواصل معنا",

    // Hero
    "hero.title": "برمجيات مدعومة بالذكاء الاصطناعي.",
    "hero.titleSub": "تسليم على مستوى المؤسسات.",
    "hero.description": "برمجيات جاهزة للإنتاج بسرعة قياسية. نجمع بين وكلاء الذكاء الاصطناعي والمهندسين الخبراء والعمليات المثبتة لتقديم حلول آمنة وقابلة للتطوير—من الفكرة إلى الإطلاق في أسابيع، وليس شهورًا.",
    "hero.cta1": "تواصل معنا",
    "hero.cta2": "طلب عرض",
    "hero.badge1": "تثبيت محلي",
    "hero.badge2": "تسجيل موحد",
    "hero.badge3": "عربي/إنجليزي",
    "hero.badge4": "CI/CD",

    // Value Props
    "valueProps.title": "لماذا تختار الفرق Cordoba AI",
    "valueProps.speed": "السرعة، بدون اختصارات",
    "valueProps.speedDesc": "من الفكرة إلى الإصدار الأول في أسابيع بفضل وكلاء الذكاء الاصطناعي والأتمتة.",
    "valueProps.quality": "جودة يمكنك الوثوق بها",
    "valueProps.qualityDesc": "مراجعات الكود، تغطية الاختبارات، وبوابات CI/CD.",
    "valueProps.security": "الأمان بالتصميم",
    "valueProps.securityDesc": "تسجيل موحد، وصول بأقل الامتيازات، أسرار مشفرة، سجلات التدقيق.",
    "valueProps.scale": "مبني للتطوير",
    "valueProps.scaleDesc": "بنى سحابية أو محلية للأداء والموثوقية والتكلفة.",

    // Capabilities
    "capabilities.title": "ما نبنيه",
    "capabilities.digitalServices": "الخدمات الرقمية والبوابات",
    "capabilities.digitalServicesDesc": "سير العمل، النماذج، اتفاقيات مستوى الخدمة، المدفوعات الإلكترونية.",
    "capabilities.internalPlatforms": "المنصات الداخلية",
    "capabilities.internalPlatformsDesc": "الابتكار، الأداء، إدارة المحافظ/المشاريع، التدقيق، سير عمل الموارد البشرية.",
    "capabilities.dataAI": "البيانات والذكاء الاصطناعي",
    "capabilities.dataAIDesc": "لوحات المعلومات، مساعدي التعلم الآلي/الذكاء الاصطناعي التوليدي، الأتمتة مع وكلاء الذكاء الاصطناعي.",
    "capabilities.integrations": "التكاملات",
    "capabilities.integrationsDesc": "SAP، ESB/iPaaS، GRP/ERP، بوابات الدفع.",
    "capabilities.mobileWeb": "تطبيقات الموبايل والويب",
    "capabilities.mobileWebDesc": "متجاوبة، سهلة الوصول، ثنائية اللغة (عربي/إنجليزي).",

    // Process
    "process.title": "كيف نسلّم—بسرعة وأمان",
    "process.discover": "الاكتشاف",
    "process.discoverDesc": "النطاق، أصحاب المصلحة، مقاييس النجاح، تقييم المخاطر.",
    "process.design": "التصميم",
    "process.designDesc": "إطارات UX، مخططات البنية، متطلبات الأمان.",
    "process.build": "البناء",
    "process.buildDesc": "تطوير بمساعدة الذكاء الاصطناعي مع مهندسين خبراء وتحديثات يومية.",
    "process.assure": "التأكد",
    "process.assureDesc": "اختبارات ضمان الجودة، فحوصات الأمان، معايير الأداء.",
    "process.launch": "الإطلاق",
    "process.launchDesc": "تخطيط النقل، النشر، إعداد المراقبة.",
    "process.evolve": "التطوير",
    "process.evolveDesc": "اتفاقيات مستوى الخدمة، التحسينات، تحسينات الميزات.",

    // Outcomes
    "outcomes.title": "نتائج مهمة",
    "outcomes.kpi1": "4-8 أسابيع",
    "outcomes.kpi1Desc": "للإصدار الأول في الإنتاج",
    "outcomes.kpi2": ">99.9% وقت تشغيل",
    "outcomes.kpi2Desc": "أهداف",
    "outcomes.kpi3": "30-50% أسرع",
    "outcomes.kpi3Desc": "التسليم عبر وكلاء الذكاء الاصطناعي + الأتمتة",
    "outcomes.quote": "قدمت Cordoba AI منصة الابتكار الخاصة بنا في 6 أسابيع. نهجهم المدعوم بالذكاء الاصطناعي وفريقهم الخبير تجاوز توقعاتنا.",
    "outcomes.quoteAuthor": "مدير التكنولوجيا",
    "outcomes.quoteCompany": "كيان حكومي في دول مجلس التعاون الخليجي",

    // Featured Engagements
    "engagements.title": "مشاريع مختارة",
    "engagements.innovation": "منصة الابتكار",
    "engagements.innovationDesc": "إدارة الأفكار المبسطة ورؤى القيادة.",
    "engagements.innovationBullet1": "تقديم التحديات وتسجيل الأفكار",
    "engagements.innovationBullet2": "تتبع مؤشرات الأداء ولوحات الأداء",
    "engagements.innovationBullet3": "تحليلات القيادة وإعداد التقارير",
    "engagements.pmo": "حزمة الأداء وإدارة المشاريع",
    "engagements.pmoDesc": "إدارة محفظة ومشاريع المؤسسة.",
    "engagements.pmoBullet1": "خرائط الإستراتيجية وأطر مؤشرات الأداء",
    "engagements.pmoBullet2": "تتبع المحفظة والمشاريع",
    "engagements.pmoBullet3": "إدارة المخاطر والقضايا",
    "engagements.citizen": "بوابة خدمات المواطنين",
    "engagements.citizenDesc": "منصة خدمات حكومية رقمية.",
    "engagements.citizenBullet1": "نماذج ذكية وأتمتة سير العمل",
    "engagements.citizenBullet2": "تتبع اتفاقيات مستوى الخدمة وتكامل المدفوعات الإلكترونية",
    "engagements.citizenBullet3": "التحليلات ومقاييس رضا المواطنين",

    // CTA
    "cta.title": "ابدأ مشروعك مع Cordoba AI",
    "cta.description": "شارك أهدافك وسنوفر خطة تسليم وجدول زمني.",
    "cta.button": "تواصل معنا",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.description": "شارك أهدافك وسنوفر خطة تسليم وجدول زمني.",
    "contact.formTitle": "أرسل لنا رسالة",
    "contact.name": "الاسم",
    "contact.namePlaceholder": "اسمك",
    "contact.email": "البريد الإلكتروني للعمل",
    "contact.emailPlaceholder": "you@company.com",
    "contact.organization": "المنظمة",
    "contact.organizationPlaceholder": "منظمتك",
    "contact.phone": "الهاتف (اختياري)",
    "contact.phonePlaceholder": "+966 XX XXX XXXX",
    "contact.projectType": "نوع المشروع",
    "contact.projectTypePlaceholder": "اختر نوع المشروع",
    "contact.subject": "الموضوع",
    "contact.subjectPlaceholder": "كيف يمكننا المساعدة؟",
    "contact.message": "الرسالة / الأهداف",
    "contact.messagePlaceholder": "أخبرنا عن مشروعك...",
    "contact.attachment": "مرفق",
    "contact.consent": "أوافق على التواصل معي بشأن استفساري",
    "contact.submit": "تواصل معنا",
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
    "footer.company": "الشركة",
    "footer.about": "حول",
    "footer.careers": "الوظائف",
    "footer.contact": "اتصل بنا",
    "footer.privacy": "الخصوصية",
    "footer.terms": "الشروط",
    "footer.security": "الأمان",
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
