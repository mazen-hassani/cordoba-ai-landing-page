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
    "engagements.portfolio": "Portfolio Manager",
    "engagements.portfolioDesc": "Enterprise portfolio & project governance with real-time visibility and control.",
    "engagements.portfolioBullet1": "Strategy alignment, prioritization & funding gates",
    "engagements.portfolioBullet2": "Health, risk & issue registers with workflows",
    "engagements.portfolioBullet3": "Cross-program roadmaps and executive dashboards",
    "engagements.ticketing": "Ticketing System",
    "engagements.ticketingDesc": "Modern IT/ops ticketing with SLAs, automation, and clear service reporting.",
    "engagements.ticketingBullet1": "Incident, service request & change workflows",
    "engagements.ticketingBullet2": "SLA policies, escalations, and email/MS Teams integration",
    "engagements.ticketingBullet3": "Knowledge base, categories, and analytics out of the box",
    "engagements.cms": "CMS (AI Website Builder — no dev needed)",
    "engagements.cmsDesc": "Create and publish pages using an AI agent—no coding. Secure, scalable, and fast.",
    "engagements.cmsBullet1": "Generate pages, sections, and media via prompts",
    "engagements.cmsBullet2": "Component library, themes, and on-brand style guardrails",
    "engagements.cmsBullet3": "Roles, approvals, SEO, and instant publishing",

    // CTA
    "cta.title": "Start your project with Cordoba AI",
    "cta.description": "Share your goals and we'll provide a delivery plan and timeline.",
    "cta.button": "Contact Us",

    // Contact Page
    "contact.title": "Get in touch",
    "contact.subtitle": "Tell us about your goals. We'll reply with a delivery plan and timeline.",
    "contact.badge1": "On-prem",
    "contact.badge2": "SSO",
    "contact.badge3": "Arabic/English",
    "contact.badge4": "CI/CD",
    "contact.name": "Full name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Work email",
    "contact.emailPlaceholder": "you@company.com",
    "contact.organization": "Organization",
    "contact.organizationPlaceholder": "Company / Entity",
    "contact.phone": "Phone (optional)",
    "contact.phonePlaceholder": "+971 ...",
    "contact.projectType": "Project type",
    "contact.projectTypePlaceholder": "Choose one",
    "contact.projectTypeOption1": "Portfolio Manager",
    "contact.projectTypeOption2": "Ticketing System",
    "contact.projectTypeOption3": "AI CMS (No-Dev Builder)",
    "contact.projectTypeOption4": "Other",
    "contact.message": "Message / goals",
    "contact.messagePlaceholder": "What do you want to build or improve?",
    "contact.attachment": "Attachment (optional)",
    "contact.attachmentHelper": "Upload brief / RFP (PDF, DOCX, ≤10MB)",
    "contact.consent": "I agree to be contacted about my request.",
    "contact.submit": "Send message",
    "contact.privacyNotice": "By submitting, you agree to our Privacy Policy.",
    "contact.successTitle": "Thanks—your request was received.",
    "contact.successMessage": "We'll respond within 1 business day.",
    "contact.referenceId": "Reference ID",
    "contact.infoTitle": "Contact Information",
    "contact.emailLabel": "Email",
    "contact.emailValue": "info@cordoba-ai.com",
    "contact.office": "Office",
    "contact.officeLocation": "Remote-first company (GMT+4)",
    "contact.followUs": "Follow us",
    "contact.businessHours": "Business hours",
    "contact.weekdays": "Monday – Friday",
    "contact.weekdaysTime": "9:00 AM – 6:00 PM (GMT+4)",
    "contact.weekend": "Saturday – Sunday",
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
    "engagements.portfolio": "مدير المحفظة",
    "engagements.portfolioDesc": "حوكمة محفظة المشاريع المؤسسية مع رؤية وتحكم في الوقت الفعلي.",
    "engagements.portfolioBullet1": "مواءمة الاستراتيجية، الأولويات وبوابات التمويل",
    "engagements.portfolioBullet2": "سجلات الصحة والمخاطر والقضايا مع سير العمل",
    "engagements.portfolioBullet3": "خرائط طريق متعددة البرامج ولوحات تنفيذية",
    "engagements.ticketing": "نظام التذاكر",
    "engagements.ticketingDesc": "تذاكر تقنية المعلومات/العمليات الحديثة مع اتفاقيات مستوى الخدمة والأتمتة وتقارير واضحة.",
    "engagements.ticketingBullet1": "سير عمل الحوادث وطلبات الخدمة والتغييرات",
    "engagements.ticketingBullet2": "سياسات اتفاقيات مستوى الخدمة والتصعيد والتكامل مع البريد/MS Teams",
    "engagements.ticketingBullet3": "قاعدة المعرفة والفئات والتحليلات جاهزة",
    "engagements.cms": "نظام إدارة المحتوى (منشئ مواقع بالذكاء الاصطناعي - بدون برمجة)",
    "engagements.cmsDesc": "أنشئ واِنشر الصفحات باستخدام وكيل ذكاء اصطناعي—بدون برمجة. آمن وقابل للتطوير وسريع.",
    "engagements.cmsBullet1": "إنشاء الصفحات والأقسام والوسائط عبر الأوامر",
    "engagements.cmsBullet2": "مكتبة المكونات والقوالب وحواجز الأسلوب المتوافقة مع العلامة التجارية",
    "engagements.cmsBullet3": "الأدوار والموافقات وتحسين محركات البحث والنشر الفوري",

    // CTA
    "cta.title": "ابدأ مشروعك مع Cordoba AI",
    "cta.description": "شارك أهدافك وسنوفر خطة تسليم وجدول زمني.",
    "cta.button": "تواصل معنا",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.subtitle": "شاركنا أهدافك، وسنرسل لك خطة تنفيذ وجدولاً زمنياً.",
    "contact.badge1": "تثبيت محلي",
    "contact.badge2": "تسجيل موحد",
    "contact.badge3": "عربي/إنجليزي",
    "contact.badge4": "CI/CD",
    "contact.name": "الاسم الكامل",
    "contact.namePlaceholder": "اسمك",
    "contact.email": "البريد الوظيفي",
    "contact.emailPlaceholder": "you@company.com",
    "contact.organization": "الجهة",
    "contact.organizationPlaceholder": "الشركة / الجهة",
    "contact.phone": "الهاتف (اختياري)",
    "contact.phonePlaceholder": "+971 ...",
    "contact.projectType": "نوع المشروع",
    "contact.projectTypePlaceholder": "اختر واحداً",
    "contact.projectTypeOption1": "مدير المحفظة",
    "contact.projectTypeOption2": "نظام التذاكر",
    "contact.projectTypeOption3": "نظام إدارة المحتوى (منشئ بدون برمجة)",
    "contact.projectTypeOption4": "آخر",
    "contact.message": "الرسالة/الأهداف",
    "contact.messagePlaceholder": "ماذا تريد أن تبني أو تحسّن؟",
    "contact.attachment": "مرفق (اختياري)",
    "contact.attachmentHelper": "تحميل ملخص / طلب عرض (PDF، DOCX، ≤10MB)",
    "contact.consent": "أوافق على التواصل معي بشأن طلبي.",
    "contact.submit": "إرسال الرسالة",
    "contact.privacyNotice": "بالإرسال، فإنك توافق على سياسة الخصوصية الخاصة بنا.",
    "contact.successTitle": "شكراً—تم استلام طلبك.",
    "contact.successMessage": "سنرد خلال يوم عمل واحد.",
    "contact.referenceId": "الرقم المرجعي",
    "contact.infoTitle": "معلومات الاتصال",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.emailValue": "info@cordoba-ai.com",
    "contact.office": "المكتب",
    "contact.officeLocation": "شركة عن بُعد (غرينتش+4)",
    "contact.followUs": "تابعنا",
    "contact.businessHours": "ساعات العمل",
    "contact.weekdays": "الإثنين–الجمعة",
    "contact.weekdaysTime": "9:00 ص – 6:00 م (غرينتش+4)",
    "contact.weekend": "السبت–الأحد",
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
