"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "th";

const STORAGE_KEY = "portfolio-locale";

type Dictionary = {
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    universityPortfolio: string;
    age: string;
    viewWork: string;
    emailMe: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    hint: string;
    open: string;
  };
  about: {
    eyebrow: string;
    title: string;
    targetPrograms: string;
    school: string;
    grade: string;
    location: string;
    dateOfBirth: string;
    age: string;
    years: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    hint: string;
    email: string;
    telephone: string;
  };
  footer: {
    template: string;
  };
  content: {
    headline: string;
    bio: string;
    location: string;
    targetPrograms: string[];
  };
  projectCopy: Record<
    string,
    {
      title: string;
      category: string;
      role: string;
      summary: string;
      highlights: string[];
      skills: string[];
    }
  >;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      universityPortfolio: "University Portfolio",
      age: "Age",
      viewWork: "View work",
      emailMe: "Email me",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects & experience",
      hint: "Edit data/projects.json to replace these placeholders with your real work.",
      open: "Open →",
    },
    about: {
      eyebrow: "About",
      title: "Who I am",
      targetPrograms: "Target programs",
      school: "School",
      grade: "Grade",
      location: "Location",
      dateOfBirth: "Date of Birth",
      age: "Age",
      years: "years",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk admissions",
      hint: "Update these details in data/contact.json. Age updates automatically from your date of birth.",
      email: "Email",
      telephone: "Telephone",
    },
    footer: {
      template: "M.6 University Portfolio Template",
    },
    content: {
      headline:
        "Designer who builds apps, games, and interfaces that people actually want to use.",
      bio: "M.6 student at Assumption College Rayong. I design digital products — from English learning games to polished app interfaces — and I'm aiming for university programs where design, tech, and creativity meet.",
      location: "Rayong, Thailand",
      targetPrograms: ["Digital Design", "Interactive Media", "Computer Science"],
    },
    projectCopy: {
      "proj-001": {
        title: "LexiQuest — English Learning Game",
        category: "Game Design",
        role: "Game & UI Designer",
        summary:
          "An English vocabulary adventure game where players clear levels by matching words, beating timed quizzes, and unlocking story chapters. Built to make language practice feel like play, not homework.",
        highlights: [
          "Designed level flow, scoring, and reward loops for teens",
          "Crafted character art direction and in-game UI screens",
          "Playtested with classmates and tightened difficulty curves",
        ],
        skills: ["Game Design", "UX", "English Content", "Prototyping"],
      },
      "proj-002": {
        title: "Aether — Mobile App Interface",
        category: "App Design",
        role: "Product Designer",
        summary:
          "A full mobile app UI concept with dark-blue visual system, smooth onboarding, and clean navigation. Focused on hierarchy, micro-interactions, and a look that feels premium — not childish.",
        highlights: [
          "Mapped user flows from splash to core features",
          "Built a reusable component system in Figma",
          "Delivered high-fidelity screens ready for handoff",
        ],
        skills: ["UI Design", "Figma", "Design Systems", "Motion"],
      },
      "proj-003": {
        title: "Studio Site — Personal Brand Web",
        category: "Web Design",
        role: "Designer & Builder",
        summary:
          "A university-application portfolio site with a steel-blue atmosphere, bold typography, and project storytelling. Designed so admissions reviewers get the vibe in the first scroll.",
        highlights: [
          "Art-directed layout, type, and color for a cool mature tone",
          "Structured case-study style project pages",
          "Shipped a responsive Next.js front end",
        ],
        skills: ["Web Design", "Next.js", "Branding", "Frontend"],
      },
      "proj-004": {
        title: "PhraseRun — Speaking Challenge Mini-App",
        category: "EdTech / Design",
        role: "Concept & Visual Designer",
        summary:
          "A fast-paced English speaking drill app concept: listen, repeat, race the clock. Visuals lean neon-on-navy arcade energy so practice sessions feel competitive and addictive.",
        highlights: [
          "Defined core loop: prompt → speak → score → streak",
          "Designed HUD, progress rings, and streak badges",
          "Packaged pitch deck + mockups for school showcase",
        ],
        skills: ["EdTech", "Interaction Design", "Visual Design", "Pitching"],
      },
    },
  },
  th: {
    nav: {
      work: "ผลงาน",
      about: "เกี่ยวกับ",
      contact: "ติดต่อ",
    },
    hero: {
      universityPortfolio: "พอร์ตโฟลิโอเข้ามหาวิทยาลัย",
      age: "อายุ",
      viewWork: "ดูผลงาน",
      emailMe: "ส่งอีเมล",
    },
    projects: {
      eyebrow: "ผลงานคัดสรร",
      title: "โปรเจกต์และประสบการณ์",
      hint: "แก้ไข data/projects.json เพื่อใส่ผลงานจริงของคุณแทนตัวอย่างเหล่านี้",
      open: "เปิด →",
    },
    about: {
      eyebrow: "เกี่ยวกับ",
      title: "ฉันเป็นใคร",
      targetPrograms: "หลักสูตรที่สนใจ",
      school: "โรงเรียน",
      grade: "ระดับชั้น",
      location: "ที่อยู่",
      dateOfBirth: "วันเกิด",
      age: "อายุ",
      years: "ปี",
    },
    contact: {
      eyebrow: "ติดต่อ",
      title: "คุยเรื่องการสมัครเรียนได้เลย",
      hint: "อัปเดตรายละเอียดใน data/contact.json อายุจะคำนวณอัตโนมัติจากวันเกิดของคุณ",
      email: "อีเมล",
      telephone: "โทรศัพท์",
    },
    footer: {
      template: "เทมเพลตพอร์ตโฟลิโอ ม.6 สมัครมหาวิทยาลัย",
    },
    content: {
      headline:
        "นักออกแบบที่สร้างแอป เกม และอินเทอร์เฟซที่คนอยากใช้งานจริง",
      bio: "นักเรียน ม.6 โรงเรียนอัสสัมชัญระยอง ออกแบบผลิตภัณฑ์ดิจิทัล — จากเกมเรียนภาษาอังกฤษไปจนถึงอินเทอร์เฟซแอปที่ขัดเกลา — และมุ่งสู่หลักสูตรมหาวิทยาลัยที่ออกแบบ เทคโนโลยี และความคิดสร้างสรรค์มาบรรจบกัน",
      location: "ระยอง ประเทศไทย",
      targetPrograms: ["ดิจิทัลดีไซน์", "มีเดียเชิงโต้ตอบ", "วิทยาการคอมพิวเตอร์"],
    },
    projectCopy: {
      "proj-001": {
        title: "LexiQuest — เกมเรียนภาษาอังกฤษ",
        category: "ออกแบบเกม",
        role: "นักออกแบบเกมและ UI",
        summary:
          "เกมผจญภัยคำศัพท์ภาษาอังกฤษ ที่ผู้เล่นเคลียร์ด่านด้วยการจับคู่คำ สอบควิซจับเวลา และปลดล็อกตอนเรื่อง ออกแบบให้การฝึกภาษาสนุกเหมือนเล่นเกม ไม่ใช่การบ้าน",
        highlights: [
          "ออกแบบโฟลว์ด่าน คะแนน และระบบรางวัลสำหรับวัยรุ่น",
          "กำหนดทิศทางศิลปะตัวละครและหน้าจอ UI ในเกม",
          "ทดสอบกับเพื่อนในชั้นแล้วปรับความยากให้สมดุล",
        ],
        skills: ["ออกแบบเกม", "UX", "คอนเทนต์ภาษาอังกฤษ", "โพรโทไทป์"],
      },
      "proj-002": {
        title: "Aether — อินเทอร์เฟซแอปมือถือ",
        category: "ออกแบบแอป",
        role: "โปรดักต์ดีไซเนอร์",
        summary:
          "คอนเซ็ปต์ UI แอปมือถือครบชุด ระบบสีน้ำเงินเข้ม ออนบอร์ดดิ้งลื่นไหล และการนำทางที่ชัด โฟกัสลำดับชั้นภาพ ไมโครอินเทอร์แอคชัน และลุคพรีเมียม ไม่ดูเด็ก",
        highlights: [
          "แมปยูสเซอร์โฟลว์จากสแปลชถึงฟีเจอร์หลัก",
          "สร้างระบบคอมโพเนนต์ใช้ซ้ำได้ใน Figma",
          "ส่งมอบหน้าจอความละเอียดสูงพร้อมส่งต่อนักพัฒนา",
        ],
        skills: ["ออกแบบ UI", "Figma", "ดีไซน์ซิสเต็ม", "โมชัน"],
      },
      "proj-003": {
        title: "Studio Site — เว็บแบรนด์ส่วนตัว",
        category: "ออกแบบเว็บ",
        role: "นักออกแบบและผู้สร้าง",
        summary:
          "เว็บพอร์ตโฟลิโอสมัครมหาวิทยาลัย บรรยากาศสีน้ำเงินเหล็ก ตัวอักษชัด และเล่าเรื่องโปรเจกต์ได้ ออกแบบให้นักคัดเลือกเห็นคาแร็กเตอร์ตั้งแต่เลื่อนหน้าแรก",
        highlights: [
          "กำกับเลย์เอาต์ ฟอนต์ และสี ให้โทนเย็นและดูโต",
          "จัดโครงหน้าโปรเจกต์แบบเคสสตัดี้",
          "ส่งมอบฟรอนต์เอนด์ Next.js ที่รองรับมือถือ",
        ],
        skills: ["ออกแบบเว็บ", "Next.js", "แบรนด์ดิ้ง", "ฟรอนต์เอนด์"],
      },
      "proj-004": {
        title: "PhraseRun — มินิแอปท้าทายการพูด",
        category: "EdTech / ออกแบบ",
        role: "คอนเซ็ปต์และวิชวลดีไซเนอร์",
        summary:
          "คอนเซ็ปต์แอปฝึกพูดภาษาอังกฤษจังหวะเร็ว: ฟัง พูดตาม แข่งกับเวลา วิชวลแนวอาร์เคดนีออนบนพื้นกรมท่าเรือ ทำให้การฝึกรู้สึกแข่งขันและติดใจ",
        highlights: [
          "กำหนดลูปหลัก: โจทย์ → พูด → คะแนน → สตรีค",
          "ออกแบบ HUD วงแหวนความคืบหน้า และแบดจ์สตรีค",
          "จัดชุดพิตช์เด็คและม็อกอัปสำหรับโชว์งานโรงเรียน",
        ],
        skills: ["EdTech", "ออกแบบอินเทอร์แอคชัน", "วิชวลดีไซน์", "พิตช์"],
      },
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "th") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "th" : "en");
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggleLocale, t: dictionaries[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
