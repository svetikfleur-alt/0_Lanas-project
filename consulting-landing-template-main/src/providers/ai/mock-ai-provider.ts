import { ArchetypeKey, IdentityAnalysis, Locale } from "@/types/identity";

import { AnalyzeIdentityInput, AIProvider } from "./types";

const labels: Record<
  Locale,
  Record<ArchetypeKey, { title: string; summary: string; visual: string; business: string }>
> = {
  ru: {
    queen: {
      title: "Архетип Королева",
      summary: "Вы транслируете статус, ясность позиции и собранную внутреннюю опору.",
      visual: "Премиальная структура, выразительный силуэт, сдержанный блеск и уверенная пластика.",
      business: "Контент должен усиливать авторитет, ценность и ощущение лидерского масштаба.",
    },
    mentor: {
      title: "Архетип Наставник",
      summary: "Ваш образ строится на доверии, глубине и способности вести через опыт.",
      visual: "Мягкая интеллектуальная эстетика, спокойная палитра, тактильные фактуры и открытый взгляд.",
      business: "Контенту полезны рамки, методология и ощущение безопасного сопровождения.",
    },
    creator: {
      title: "Архетип Творец",
      summary: "Ваша сила в оригинальности, смелой подаче и способности запускать воображение.",
      visual: "Артистичные формы, контраст, необычные детали и ощущение живого эксперимента.",
      business: "Контент должен показывать процесс, авторский почерк и нестандартный угол зрения.",
    },
  },
  uk: {
    queen: {
      title: "Архетип Королева",
      summary: "Ви транслюєте статус, ясність позиції та зібрану внутрішню опору.",
      visual: "Преміальна структура, виразний силует, стриманий блиск і впевнена пластика.",
      business: "Контент має підсилювати авторитет, цінність і відчуття лідерського масштабу.",
    },
    mentor: {
      title: "Архетип Наставниця",
      summary: "Ваш образ будується на довірі, глибині та здатності вести через досвід.",
      visual: "М'яка інтелектуальна естетика, спокійна палітра, тактильні фактури та відкритий погляд.",
      business: "Контенту корисні рамка, методологія та відчуття безпечного супроводу.",
    },
    creator: {
      title: "Архетип Творчиня",
      summary: "Ваша сила в оригінальності, сміливій подачі та здатності запускати уяву.",
      visual: "Артистичні форми, контраст, незвичні деталі та відчуття живого експерименту.",
      business: "Контент має показувати процес, авторський почерк і нестандартний кут зору.",
    },
  },
  en: {
    queen: {
      title: "Queen Archetype",
      summary: "You project status, decisiveness, and a composed sense of inner authority.",
      visual: "Premium structure, defined silhouettes, controlled shine, and poised body language.",
      business: "Content should reinforce authority, value, and the feeling of strategic leadership.",
    },
    mentor: {
      title: "Mentor Archetype",
      summary: "Your image builds trust, depth, and the ability to guide through experience.",
      visual: "Soft intellectual styling, calm palettes, tactile materials, and an open gaze.",
      business: "Content works best with clear frameworks, teaching moments, and safe guidance.",
    },
    creator: {
      title: "Creator Archetype",
      summary: "Your strength is originality, expressive presence, and the ability to spark imagination.",
      visual: "Artful forms, contrast, unexpected details, and a sense of active experimentation.",
      business: "Content should show process, authorship, and a fresh perspective on familiar topics.",
    },
  },
  es: {
    queen: {
      title: "Arquetipo Reina",
      summary: "Proyectas estatus, claridad de posición y una autoridad interna bien sostenida.",
      visual: "Estructura premium, silueta definida, brillo controlado y una presencia segura.",
      business: "El contenido debe reforzar autoridad, valor y sensación de liderazgo estratégico.",
    },
    mentor: {
      title: "Arquetipo Mentora",
      summary: "Tu imagen genera confianza, profundidad y capacidad de guiar desde la experiencia.",
      visual: "Estética intelectual suave, paleta serena, materiales táctiles y mirada abierta.",
      business: "El contenido funciona mejor con marcos claros, enseñanza y acompañamiento confiable.",
    },
    creator: {
      title: "Arquetipo Creadora",
      summary: "Tu fuerza está en la originalidad, la expresión valiente y la imaginación activa.",
      visual: "Formas artísticas, contraste, detalles inesperados y una sensación de experimento vivo.",
      business: "El contenido debe mostrar proceso, firma autoral y una mirada diferente.",
    },
  },
};

const archetypeSignals: Record<string, ArchetypeKey> = {
  authority: "queen",
  curiosity: "creator",
  elegant: "queen",
  experimental: "creator",
  guide: "mentor",
  premium: "queen",
  trust: "mentor",
  warm: "mentor",
};

export class MockAIProvider implements AIProvider {
  async analyzeIdentity(input: AnalyzeIdentityInput): Promise<IdentityAnalysis> {
    const signal = Object.values(input.answers)
      .map((answer) => archetypeSignals[answer])
      .find(Boolean);

    const archetype = signal ?? "mentor";
    const localized = labels[input.locale][archetype];
    const visualPreference = input.answers.visual_preference ?? "refined";
    const audienceImpact = input.answers.audience_impact ?? "trust";

    return {
      archetype,
      title: localized.title,
      summary: localized.summary,
      strengths: [
        `${localized.title} signal is already visible in your current positioning.`,
        `Your answers consistently point to ${audienceImpact}-oriented communication.`,
        "There is enough alignment to build a coherent visual direction for the first MVP package.",
      ],
      blindSpots: [
        "Visual signals are stronger than the current packaging of your expertise.",
        "The public-facing image still needs a tighter connection between style and offer.",
      ],
      visualDirection: localized.visual,
      businessDirection: localized.business,
      imageBrief: `Portrait concept for a ${archetype} identity with ${visualPreference} styling, clear feminine presence, and a focus on ${audienceImpact}.`,
    };
  }
}
