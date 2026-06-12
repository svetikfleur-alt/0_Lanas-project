import { Locale } from "@/types/identity";

type ProblemCard = {
  title: string;
  text: string;
};

type FaqItem = {
  q: string;
  a: string;
};

export type LandingContent = {
  site: {
    brand: string;
    start: string;
  };
  hero: {
    badge: string;
    titleAccent: string;
    titleMain: string;
    text: string;
    primary: string;
    secondary: string;
  };
  problem: {
    title: string;
    text: string;
    cards: ProblemCard[];
  };
  steps: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  identity: {
    eyebrow: string;
    title: string;
    text: string;
    textSecondary: string;
    bullets: string[];
  };
  author: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    text: string;
    badge: string;
    name: string;
    price: string;
    oldPrice: string;
    currency: string;
    features: string[];
    cta: string;
    telegram: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    text: string;
    primary: string;
    telegram: string;
  };
  footer: {
    copyright: string;
  };
};

const ru: LandingContent = {
  site: {
    brand: "StyleSelf",
    start: "Начать",
  },
  hero: {
    badge: "AI-гайд для фотосессии",
    titleAccent: "Хватит угадывать.",
    titleMain: "Узнай свой стиль до съёмки.",
    text:
      "AI-бот задаёт вопросы, раскрывает твой настоящий визуальный образ и выдаёт готовый план фотосессии — без чужих шаблонов и без потери себя.",
    primary: "Получить доступ",
    secondary: "Как это работает",
  },
  problem: {
    title: "Знакомо?",
    text:
      "Большинство людей идут на фотосессию без чёткого понимания себя — и получают красивые, но «пустые» снимки.",
    cards: [
      {
        title: "Я не знаю, чего хочу",
        text:
          "Приходишь на съёмку без идеи — и фотограф выбирает за тебя. В итоге красивые кадры, но будто не о тебе.",
      },
      {
        title: "Образ не совпадает с тобой",
        text:
          "Видела классные референсы, но на фото выглядишь чужой. Стиль есть — твоего там нет.",
      },
      {
        title: "Фотосессия не работает",
        text:
          "Потратила деньги и время, а контент не «продаёт» тебя. Люди не понимают, кто ты и что ты делаешь.",
      },
      {
        title: "Снова разочарование",
        text:
          "После очередной съёмки — ощущение, что это снова не то. Замкнутый круг из итераций без результата.",
      },
    ],
  },
  steps: {
    eyebrow: "Как это работает",
    title: "Три шага к фотосессии, которая говорит о тебе",
    text:
      "Никаких таблиц и шаблонов. Просто диалог — и ты знаешь, кем хочешь быть на фото.",
    items: [
      {
        title: "AI задаёт вопросы",
        text:
          "Telegram-бот ведёт тебя через умные вопросы о личности, целях и желаемом образе. Не знаешь ответа — покажем примеры.",
      },
      {
        title: "Профиль без масок",
        text:
          "AI сохраняет твою идентичность: никаких навязанных трендов. Профиль строится вокруг того, кто ты есть — не кем нужно казаться.",
      },
      {
        title: "Готовый план съёмки",
        text:
          "Образы, локации, реквизит, настроение. Приходишь к фотографу с чётким ТЗ — и снимки наконец говорят именно о тебе.",
      },
    ],
  },
  identity: {
    eyebrow: "Сохранение идентичности",
    title: "Никаких чужих масок",
    text:
      "Большинство инструментов стилизации толкают тебя в чужие тренды. StyleSelf работает иначе: AI выявляет, кто ты есть на самом деле, и строит образ вокруг этого.",
    textSecondary: "Твоя идентичность — основа. Стиль — инструмент её выражения.",
    bullets: [
      "Образ, который чувствуется как «ты»",
      "Без навязанных архетипов",
      "Работает для личного бренда и для себя",
    ],
  },
  author: {
    eyebrow: "Об авторе",
    title: "Привет, я Надя",
    paragraphs: [
      "Я занимаюсь визуальным брендингом и помогаю людям находить свой стиль — не чужой, не «трендовый», а именно их. Фотосессия — это инструмент. Но без понимания себя он не работает.",
      "Я создала этот AI-гайд, потому что устала видеть, как люди тратят деньги на съёмки и остаются разочарованными. Теперь любой может пройти через мою методологию — в формате диалога с ботом, без ценника консультации.",
    ],
    bullets: [
      "Более 5 лет в сфере визуального контента и личного брендинга",
      "Помогла 200+ клиентам создать фотосессии, которые действительно работают",
      "Автор методологии AI-диагностики стиля для фотосессий",
      "Спикер на профессиональных конференциях по визуальному маркетингу",
    ],
  },
  pricing: {
    eyebrow: "Доступ",
    title: "Один формат, всё включено",
    text: "Полный доступ к материалу, персональному разбору и маршруту подготовки к фотосессии.",
    badge: "Самый популярный выбор",
    name: "StyleSelf — полный доступ",
    price: "2999",
    oldPrice: "4990",
    currency: "₽",
    features: [
      "AI выявляет твои реальные сильные стороны",
      "Помогает раскрыться через стиль и самоподачу",
      "Готовит тебя морально и визуально к съёмке",
      "Помогает выбрать по характеру и архетипу",
      "Гайд по выбору поз и фону под твой стиль",
    ],
    cta: "Получить доступ за 2999 ₽",
    telegram: "Написать в Telegram",
  },
  faq: {
    title: "Частые вопросы",
    items: [
      {
        q: "Сколько стоит?",
        a: "Базовый доступ открывается после разовой оплаты. Внутри — полный маршрут подготовки к фотосессии и доступ к материалам.",
      },
      {
        q: "Это приложение?",
        a: "Нет. Основной сценарий проходит через Telegram и веб-страницу, без отдельного приложения и сложной регистрации.",
      },
      {
        q: "А если я ничего не понимаю в моде?",
        a: "Именно для этого и нужен бот: он задаёт вопросы, показывает примеры и помогает прийти к образу без стилистического бэкграунда.",
      },
      {
        q: "Как это работает технически?",
        a: "Ты проходишь guided flow, AI собирает твой визуальный профиль и на его основе выдаёт план съёмки, mood и рекомендации.",
      },
      {
        q: "Сколько времени займёт прохождение?",
        a: "Первый понятный результат можно получить за один вечер, без длинного онбординга и тяжелого обучения.",
      },
      {
        q: "Подходит ли для личного бренда?",
        a: "Да. Методика полезна и для экспертов, и для контент-съёмок, и для личных фотосессий без коммерческой задачи.",
      },
      {
        q: "Что если результат не понравится?",
        a: "Внутри маршрут построен так, чтобы двигаться поэтапно: от понимания себя к съёмочному решению, а не к случайному визуалу.",
      },
    ],
  },
  cta: {
    title: "Твоя фотосессия начинается с тебя — а не с камеры",
    text:
      "Узнай свой стиль сейчас. Приходи на съёмку с образом, который ощущается как твой, а не придуманным на ходу.",
    primary: "Получить доступ за 2999 ₽",
    telegram: "Написать в Telegram",
  },
  footer: {
    copyright: "© 2026 StyleSelf",
  },
};

const uk: LandingContent = {
  site: {
    brand: "StyleSelf",
    start: "Почати",
  },
  hero: {
    badge: "AI-гайд для фотосесії",
    titleAccent: "Досить вгадувати.",
    titleMain: "Дізнайся свій стиль до зйомки.",
    text:
      "AI-бот ставить запитання, розкриває твій справжній візуальний образ і видає готовий план фотосесії — без чужих шаблонів і без втрати себе.",
    primary: "Отримати доступ",
    secondary: "Як це працює",
  },
  problem: {
    title: "Знайомо?",
    text:
      "Більшість людей ідуть на фотосесію без чіткого розуміння себе — і отримують красиві, але «порожні» кадри.",
    cards: [
      {
        title: "Я не знаю, чого хочу",
        text:
          "Приходиш на зйомку без ідеї — і фотограф обирає за тебе. У підсумку кадри красиві, але ніби не про тебе.",
      },
      {
        title: "Образ не збігається з тобою",
        text:
          "Бачила класні референси, але на фото виглядаєш чужою. Стиль є — твого там немає.",
      },
      {
        title: "Фотосесія не працює",
        text:
          "Витратила гроші й час, а контент не «продає» тебе. Люди не розуміють, хто ти і чим займаєшся.",
      },
      {
        title: "Знову розчарування",
        text:
          "Після чергової зйомки — відчуття, що це знову не те. Замкнене коло ітерацій без результату.",
      },
    ],
  },
  steps: {
    eyebrow: "Як це працює",
    title: "Три кроки до фотосесії, яка говорить про тебе",
    text:
      "Жодних таблиць і шаблонів. Просто діалог — і ти знаєш, ким хочеш бути на фото.",
    items: [
      {
        title: "AI ставить запитання",
        text:
          "Telegram-бот веде тебе через розумні запитання про особистість, цілі та бажаний образ. Не знаєш відповіді — покажемо приклади.",
      },
      {
        title: "Профіль без масок",
        text:
          "AI зберігає твою ідентичність: жодних нав'язаних трендів. Профіль будується навколо того, ким ти є, а не ким «треба» здаватися.",
      },
      {
        title: "Готовий план зйомки",
        text:
          "Образи, локації, реквізит, настрій. Приходиш до фотографа з чітким ТЗ — і кадри нарешті говорять саме про тебе.",
      },
    ],
  },
  identity: {
    eyebrow: "Збереження ідентичності",
    title: "Жодних чужих масок",
    text:
      "Більшість інструментів стилізації штовхають тебе в чужі тренди. StyleSelf працює інакше: AI виявляє, хто ти є насправді, і будує образ навколо цього.",
    textSecondary: "Твоя ідентичність — основа. Стиль — інструмент її вираження.",
    bullets: [
      "Образ, який відчувається як «ти»",
      "Без нав'язаних архетипів",
      "Працює для особистого бренду і для себе",
    ],
  },
  author: {
    eyebrow: "Про автора",
    title: "Привіт, я Надя",
    paragraphs: [
      "Я займаюся візуальним брендингом і допомагаю людям знаходити свій стиль — не чужий, не «трендовий», а саме їхній. Фотосесія — це інструмент. Але без розуміння себе він не працює.",
      "Я створила цей AI-гайд, бо втомилася бачити, як люди витрачають гроші на зйомки і залишаються розчарованими. Тепер будь-хто може пройти через мою методологію — у форматі діалогу з ботом, без ціни консультації.",
    ],
    bullets: [
      "Понад 5 років у сфері візуального контенту й особистого брендингу",
      "Допомогла 200+ клієнтам створити фотосесії, які справді працюють",
      "Автор методології AI-діагностики стилю для фотосесій",
      "Спікер на професійних конференціях із візуального маркетингу",
    ],
  },
  pricing: {
    eyebrow: "Доступ",
    title: "Один формат, усе включено",
    text: "Повний доступ до матеріалу, персонального розбору та маршруту підготовки до фотосесії.",
    badge: "Найпопулярніший вибір",
    name: "StyleSelf — повний доступ",
    price: "2999",
    oldPrice: "4990",
    currency: "₽",
    features: [
      "AI виявляє твої реальні сильні сторони",
      "Допомагає розкритися через стиль і самоподачу",
      "Готує тебе морально й візуально до зйомки",
      "Допомагає обрати образ за характером і архетипом",
      "Гайд з вибору поз і фону під твій стиль",
    ],
    cta: "Отримати доступ за 2999 ₽",
    telegram: "Написати в Telegram",
  },
  faq: {
    title: "Часті питання",
    items: [
      {
        q: "Скільки коштує?",
        a: "Базовий доступ відкривається після разової оплати. Усередині — повний маршрут підготовки до фотосесії та доступ до матеріалів.",
      },
      {
        q: "Це застосунок?",
        a: "Ні. Основний сценарій проходить через Telegram і веб-сторінку, без окремого застосунку та складної реєстрації.",
      },
      {
        q: "А якщо я нічого не розумію в моді?",
        a: "Саме для цього і потрібен бот: він ставить запитання, показує приклади й допомагає прийти до образу без стилістичного бекграунду.",
      },
      {
        q: "Як це працює технічно?",
        a: "Ти проходиш guided flow, AI збирає твій візуальний профіль і на його основі видає план зйомки, mood і рекомендації.",
      },
      {
        q: "Скільки часу займає проходження?",
        a: "Перший зрозумілий результат можна отримати за один вечір, без довгого онбордингу й важкого навчання.",
      },
      {
        q: "Чи підходить для особистого бренду?",
        a: "Так. Методика корисна і для експертів, і для контент-зйомок, і для особистих фотосесій без комерційної задачі.",
      },
      {
        q: "Що якщо результат не сподобається?",
        a: "Усередині маршрут побудований так, щоб рухатися поетапно: від розуміння себе до зйомочного рішення, а не до випадкового візуалу.",
      },
    ],
  },
  cta: {
    title: "Твоя фотосесія починається з тебе — а не з камери",
    text:
      "Дізнайся свій стиль зараз. Приходь на зйомку з образом, який відчувається як твій, а не придуманий на ходу.",
    primary: "Отримати доступ за 2999 ₽",
    telegram: "Написати в Telegram",
  },
  footer: {
    copyright: "© 2026 StyleSelf",
  },
};

const en: LandingContent = {
  site: {
    brand: "StyleSelf",
    start: "Start",
  },
  hero: {
    badge: "AI guide for your photoshoot",
    titleAccent: "Stop guessing.",
    titleMain: "Know your style before the shoot.",
    text:
      "The AI bot asks the right questions, uncovers your real visual identity, and gives you a ready-made photoshoot plan without borrowed templates and without losing yourself.",
    primary: "Get access",
    secondary: "How it works",
  },
  problem: {
    title: "Does this sound familiar?",
    text:
      "Most people go into a photoshoot without a clear sense of self — and end up with images that are beautiful but empty.",
    cards: [
      {
        title: "I don't know what I want",
        text:
          "You arrive without a concept, and the photographer chooses for you. The result is polished, but it does not feel like you.",
      },
      {
        title: "The image does not match you",
        text:
          "You saved strong references, but in the photos you still look чужой? The style exists — your identity does not.",
      },
      {
        title: "The photoshoot does not work",
        text:
          "You spent time and money, but the content still does not communicate who you are and what you do.",
      },
      {
        title: "Another disappointment",
        text:
          "After one more shoot, you feel that it is still not right. The same loop of iterations with no real outcome.",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Three steps to a photoshoot that speaks about you",
    text:
      "No spreadsheets and no templates. Just a guided dialogue — and clarity about who you want to be in the frame.",
    items: [
      {
        title: "The AI asks questions",
        text:
          "The Telegram bot guides you through smart questions about personality, goals, and the image you want to create. If you are unsure, it shows examples.",
      },
      {
        title: "A profile without masks",
        text:
          "The AI protects your identity instead of forcing trends on you. The profile is built around who you are, not who you are expected to appear as.",
      },
      {
        title: "A ready shoot plan",
        text:
          "Looks, locations, props, and mood. You come to the photographer with a clear brief, and the images finally say something true about you.",
      },
    ],
  },
  identity: {
    eyebrow: "Preserving identity",
    title: "No borrowed masks",
    text:
      "Most styling tools push you toward borrowed trends. StyleSelf works differently: the AI identifies who you really are and builds the image around that.",
    textSecondary: "Your identity is the foundation. Style is the tool that expresses it.",
    bullets: [
      "A look that actually feels like you",
      "No imposed archetypes",
      "Works for personal branding and for yourself",
    ],
  },
  author: {
    eyebrow: "About the author",
    title: "Hi, I'm Nadya",
    paragraphs: [
      "I work in visual branding and help people find a style that is truly theirs — not borrowed, not trend-driven, but their own. A photoshoot is only a tool. Without self-understanding, it does not work.",
      "I created this AI guide because I got tired of seeing people spend money on shoots and still feel disappointed. Now anyone can go through my method in a dialogue with a bot, without the price of a private consultation.",
    ],
    bullets: [
      "More than 5 years in visual content and personal branding",
      "Helped 200+ clients build photoshoots that actually work",
      "Author of an AI-based style diagnosis method for photoshoots",
      "Speaker at professional conferences on visual marketing",
    ],
  },
  pricing: {
    eyebrow: "Access",
    title: "One format, everything included",
    text: "Full access to the material, personal analysis, and a clear route for preparing your photoshoot.",
    badge: "Most popular choice",
    name: "StyleSelf — full access",
    price: "2999",
    oldPrice: "4990",
    currency: "₽",
    features: [
      "AI identifies your real strengths",
      "Helps you unfold through style and self-presentation",
      "Prepares you emotionally and visually for the shoot",
      "Helps you choose an image through personality and archetype",
      "Guide to poses and backgrounds that fit your style",
    ],
    cta: "Get access for 2999 ₽",
    telegram: "Write in Telegram",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does it cost?",
        a: "The base access opens after a one-time payment. Inside you get the full preparation route and access to the materials.",
      },
      {
        q: "Is this an app?",
        a: "No. The main flow runs through Telegram and the web page, without a separate app or complicated sign-up.",
      },
      {
        q: "What if I know nothing about fashion?",
        a: "That is exactly why the bot exists: it asks questions, shows references, and helps you get to a coherent image without a styling background.",
      },
      {
        q: "How does it work technically?",
        a: "You go through a guided flow, the AI builds your visual profile, and based on that it returns a shoot plan, mood, and recommendations.",
      },
      {
        q: "How long does it take?",
        a: "You can get your first clear result in a single evening, without heavy onboarding or long training.",
      },
      {
        q: "Is it suitable for personal branding?",
        a: "Yes. The method works for experts, content shoots, and personal sessions that are not tied to a commercial goal.",
      },
      {
        q: "What if I do not like the result?",
        a: "The journey is designed step by step: from understanding yourself to a shooting direction, not to random visuals.",
      },
    ],
  },
  cta: {
    title: "Your photoshoot starts with you — not with the camera",
    text:
      "Discover your style now. Show up to the shoot with an image that truly feels like yours, not something improvised on the spot.",
    primary: "Get access for 2999 ₽",
    telegram: "Write in Telegram",
  },
  footer: {
    copyright: "© 2026 StyleSelf",
  },
};

const es: LandingContent = {
  site: {
    brand: "StyleSelf",
    start: "Empezar",
  },
  hero: {
    badge: "Guía AI para tu sesión",
    titleAccent: "Deja de adivinar.",
    titleMain: "Descubre tu estilo antes de la sesión.",
    text:
      "El bot con IA hace las preguntas correctas, revela tu identidad visual real y te entrega un plan listo para la sesión — sin plantillas ajenas y sin perderte a ti misma.",
    primary: "Obtener acceso",
    secondary: "Cómo funciona",
  },
  problem: {
    title: "¿Te suena familiar?",
    text:
      "La mayoría de las personas llega a una sesión sin una comprensión clara de sí mismas — y termina con fotos bonitas, pero vacías.",
    cards: [
      {
        title: "No sé lo que quiero",
        text:
          "Llegas sin una idea clara y el fotógrafo decide por ti. El resultado puede verse bien, pero no habla de ti.",
      },
      {
        title: "La imagen no coincide contigo",
        text:
          "Guardaste referencias bonitas, pero en la foto sigues sintiéndote ajena. Hay estilo, pero no está tu identidad.",
      },
      {
        title: "La sesión no funciona",
        text:
          "Invertiste tiempo y dinero, pero el contenido no comunica quién eres ni qué haces.",
      },
      {
        title: "Otra decepción",
        text:
          "Después de otra sesión sientes que todavía no es eso. El mismo círculo de iteraciones sin resultado.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos hacia una sesión que habla de ti",
    text:
      "Sin tablas ni plantillas. Solo un diálogo guiado — y claridad sobre quién quieres ser en la imagen.",
    items: [
      {
        title: "La IA hace preguntas",
        text:
          "El bot de Telegram te guía con preguntas inteligentes sobre personalidad, objetivos e imagen. Si dudas, te muestra ejemplos.",
      },
      {
        title: "Un perfil sin máscaras",
        text:
          "La IA conserva tu identidad en lugar de imponerte tendencias. El perfil se construye alrededor de quien eres, no de quien deberías parecer.",
      },
      {
        title: "Plan listo para la sesión",
        text:
          "Looks, locaciones, props y mood. Llegas al fotógrafo con un brief claro, y las imágenes finalmente hablan de ti.",
      },
    ],
  },
  identity: {
    eyebrow: "Conservar tu identidad",
    title: "Sin máscaras prestadas",
    text:
      "La mayoría de las herramientas de estilización te empuja hacia tendencias ajenas. StyleSelf funciona distinto: la IA detecta quién eres de verdad y construye la imagen alrededor de eso.",
    textSecondary: "Tu identidad es la base. El estilo es la herramienta que la expresa.",
    bullets: [
      "Una imagen que realmente se siente como tú",
      "Sin arquetipos impuestos",
      "Funciona para marca personal y también para ti misma",
    ],
  },
  author: {
    eyebrow: "Sobre la autora",
    title: "Hola, soy Nadya",
    paragraphs: [
      "Trabajo con branding visual y ayudo a las personas a encontrar un estilo que realmente les pertenece — no prestado, no dictado por tendencias, sino propio. Una sesión es solo una herramienta. Sin comprensión de una misma, no funciona.",
      "Creé esta guía AI porque me cansé de ver cómo la gente gastaba dinero en sesiones y seguía decepcionada. Ahora cualquiera puede recorrer mi metodología en diálogo con un bot, sin pagar una consulta privada.",
    ],
    bullets: [
      "Más de 5 años en contenido visual y marca personal",
      "Ayudé a más de 200 clientes a crear sesiones que sí funcionan",
      "Autora de una metodología de diagnóstico de estilo con IA para sesiones",
      "Ponente en conferencias profesionales sobre marketing visual",
    ],
  },
  pricing: {
    eyebrow: "Acceso",
    title: "Un solo formato, todo incluido",
    text: "Acceso completo al material, análisis personal y una ruta clara para preparar tu sesión.",
    badge: "La opción más elegida",
    name: "StyleSelf — acceso completo",
    price: "2999",
    oldPrice: "4990",
    currency: "₽",
    features: [
      "La IA detecta tus fortalezas reales",
      "Te ayuda a expresarte a través del estilo y la presencia",
      "Te prepara emocional y visualmente para la sesión",
      "Te ayuda a elegir una imagen según tu carácter y arquetipo",
      "Guía de poses y fondos que encajan con tu estilo",
    ],
    cta: "Obtener acceso por 2999 ₽",
    telegram: "Escribir en Telegram",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuánto cuesta?",
        a: "El acceso base se abre tras un pago único. Dentro tienes la ruta completa de preparación y acceso a los materiales.",
      },
      {
        q: "¿Es una app?",
        a: "No. El flujo principal funciona a través de Telegram y la web, sin app separada ni registro complicado.",
      },
      {
        q: "¿Y si no sé nada de moda?",
        a: "Precisamente para eso existe el bot: hace preguntas, muestra ejemplos y te ayuda a llegar a una imagen coherente sin background en estilismo.",
      },
      {
        q: "¿Cómo funciona técnicamente?",
        a: "Pasas por un guided flow, la IA construye tu perfil visual y a partir de eso te devuelve un plan de sesión, mood y recomendaciones.",
      },
      {
        q: "¿Cuánto tiempo lleva?",
        a: "Puedes obtener el primer resultado claro en una sola tarde, sin onboarding pesado ni entrenamiento largo.",
      },
      {
        q: "¿Sirve para marca personal?",
        a: "Sí. La metodología funciona para expertos, sesiones de contenido y sesiones personales sin un objetivo comercial.",
      },
      {
        q: "¿Y si no me gusta el resultado?",
        a: "El recorrido está pensado paso a paso: desde comprenderte hasta definir la dirección de la sesión, no hacia imágenes aleatorias.",
      },
    ],
  },
  cta: {
    title: "Tu sesión empieza contigo — no con la cámara",
    text:
      "Descubre tu estilo ahora. Llega a la sesión con una imagen que realmente se sienta tuya, no improvisada en el último momento.",
    primary: "Obtener acceso por 2999 ₽",
    telegram: "Escribir en Telegram",
  },
  footer: {
    copyright: "© 2026 StyleSelf",
  },
};

export function getLandingContent(locale: Locale): LandingContent {
  switch (locale) {
    case "uk":
      return uk;
    case "en":
      return en;
    case "es":
      return es;
    case "ru":
    default:
      return ru;
  }
}
