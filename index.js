document.documentElement.classList.add("motion-ready");

const translations = {
  ru: {
    site: {
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
          title: "«Я не знаю, чего хочу»",
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
            "Потратил(а) деньги и время, а контент не «продаёт» тебя. Люди не понимают, кто ты и что ты делаешь.",
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
            "AI сохраняет твою идентичность: никаких навязанных трендов. Профиль строится вокруг того, кто ты есть — не кем нужно «казаться».",
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
      textSecondary:
        "Твоя идентичность — основа. Стиль — инструмент её выражения.",
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
      title: "Один формат — всё включено",
      text:
        "Никаких скрытых платежей. Оплатил — сразу получаешь доступ к Telegram-боту и маршруту подготовки.",
      badge: "Самый популярный выбор",
      name: "StyleSelf — полный доступ",
      subtitle: "Разовая оплата, без подписки",
      price: "2999",
      oldPrice: "5990",
      discount: "−50%",
      features: [
        "AI-диалог для раскрытия твоего стиля",
        "Профиль визуального образа с сохранением идентичности",
        "Готовый план фотосессии: образы, локации, настроение",
        "Рекомендации по гардеробу и реквизиту",
        "Советы по выбору фотографа под твой стиль",
        "Доступ к боту на 30 дней",
      ],
      cta: "Получить доступ за 2999",
      telegram: "Написать в Telegram",
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Как я получу доступ после оплаты?",
          a: "Сразу после оплаты ты переходишь к следующему шагу и получаешь доступ к материалу и ссылке на Telegram-бота.",
        },
        {
          q: "Сколько времени займёт прохождение?",
          a: "Первый понятный результат можно получить за один вечер. Без длинного онбординга и тяжёлой подготовки.",
        },
        {
          q: "Подходит ли для личного бренда?",
          a: "Да. Методика полезна и для экспертов, и для контент-съёмок, и для личных фотосессий без коммерческой задачи.",
        },
        {
          q: "Что если результат не понравится?",
          a: "Внутри всё построено поэтапно: от понимания себя к съёмочному решению, а не к случайному визуалу. Ты можешь пройти маршрут спокойно и без спешки.",
        },
        {
          q: "Это приложение?",
          a: "Нет. Основной сценарий проходит через веб-страницу и Telegram, без отдельного приложения и сложной регистрации.",
        },
        {
          q: "А если я ничего не понимаю в стиле?",
          a: "Именно для этого и нужен бот: он задаёт вопросы, показывает примеры и помогает прийти к образу без стилистического бэкграунда.",
        },
      ],
    },
    cta: {
      title: "Твоя фотосессия начинается с тебя — а не с камеры",
      text:
        "Узнай свой стиль сейчас. Приди на съёмку с образом, который ощущается как ты.",
      primary: "Получить доступ за 2999",
      meta: "Гарантия возврата 7 дней • Одна оплата • Без подписки",
    },
    footer: {
      how: "Как работает",
      access: "Доступ",
      copy: "© 2026 StyleSelf",
    },
  },
  uk: {
    site: {
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
          title: "«Я не знаю, чого хочу»",
          text:
            "Приходиш на зйомку без ідеї — і фотограф обирає за тебе. У підсумку красиві кадри, але ніби не про тебе.",
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
            "AI зберігає твою ідентичність: жодних нав'язаних трендів. Профіль будується навколо того, ким ти є, а не ким треба «здаватися».",
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
      textSecondary:
        "Твоя ідентичність — основа. Стиль — інструмент її вираження.",
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
        "Я створила цей AI-гайд, бо втомилася бачити, як люди витрачають гроші на зйомки й залишаються розчарованими. Тепер будь-хто може пройти через мою методологію — у форматі діалогу з ботом, без вартості консультації.",
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
      title: "Один формат — усе включено",
      text:
        "Жодних прихованих платежів. Оплатив — одразу отримуєш доступ до Telegram-бота та маршруту підготовки.",
      badge: "Найпопулярніший вибір",
      name: "StyleSelf — повний доступ",
      subtitle: "Разова оплата, без підписки",
      price: "2999",
      oldPrice: "5990",
      discount: "−50%",
      features: [
        "AI-діалог для розкриття твого стилю",
        "Профіль візуального образу зі збереженням ідентичності",
        "Готовий план фотосесії: образи, локації, настрій",
        "Рекомендації щодо гардероба й реквізиту",
        "Поради щодо вибору фотографа під твій стиль",
        "Доступ до бота на 30 днів",
      ],
      cta: "Отримати доступ за 2999",
      telegram: "Написати в Telegram",
    },
    faq: {
      title: "Часті питання",
      items: [
        {
          q: "Як я отримаю доступ після оплати?",
          a: "Одразу після оплати ти переходиш до наступного кроку й отримуєш доступ до матеріалу та посилання на Telegram-бота.",
        },
        {
          q: "Скільки часу займає проходження?",
          a: "Перший зрозумілий результат можна отримати за один вечір. Без довгого онбордингу та складної підготовки.",
        },
        {
          q: "Чи підходить для особистого бренду?",
          a: "Так. Методика корисна і для експертів, і для контент-зйомок, і для особистих фотосесій без комерційної задачі.",
        },
        {
          q: "Що якщо результат не сподобається?",
          a: "Усередині все побудовано поетапно: від розуміння себе до рішення для зйомки, а не до випадкового візуалу.",
        },
        {
          q: "Це застосунок?",
          a: "Ні. Основний сценарій проходить через веб-сторінку й Telegram, без окремого застосунку та складної реєстрації.",
        },
        {
          q: "А якщо я нічого не розумію в стилі?",
          a: "Саме для цього і потрібен бот: він ставить запитання, показує приклади й допомагає прийти до образу без стилістичного бекграунду.",
        },
      ],
    },
    cta: {
      title: "Твоя фотосесія починається з тебе — а не з камери",
      text:
        "Дізнайся свій стиль зараз. Прийди на зйомку з образом, який відчувається як ти.",
      primary: "Отримати доступ за 2999",
      meta: "Гарантія повернення 7 днів • Одна оплата • Без підписки",
    },
    footer: {
      how: "Як це працює",
      access: "Доступ",
      copy: "© 2026 StyleSelf",
    },
  },
  en: {
    site: {
      start: "Start",
    },
    hero: {
      badge: "AI guide for your photoshoot",
      titleAccent: "Stop guessing.",
      titleMain: "Know your style before the shoot.",
      text:
        "The AI bot asks the right questions, uncovers your real visual identity, and gives you a ready photoshoot plan — without borrowed templates and without losing yourself.",
      primary: "Get access",
      secondary: "How it works",
    },
    problem: {
      title: "Does this feel familiar?",
      text:
        "Most people walk into a photoshoot without a clear understanding of themselves — and end up with images that are beautiful but empty.",
      cards: [
        {
          title: "“I don't know what I want”",
          text:
            "You show up without a concept, and the photographer decides for you. The result is polished, but it does not feel like you.",
        },
        {
          title: "The image does not match you",
          text:
            "You saved beautiful references, but in the final photos you still feel like someone else. There is style, but not your identity.",
        },
        {
          title: "The photoshoot does not work",
          text:
            "You spent time and money, but the content still does not communicate who you are and what you do.",
        },
        {
          title: "Another disappointment",
          text:
            "After another shoot, the feeling is the same: it is still not right. The same loop of iterations without a real result.",
        },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Three steps to a photoshoot that speaks about you",
      text:
        "No spreadsheets and no templates. Just a dialogue — and clarity about who you want to be in the frame.",
      items: [
        {
          title: "The AI asks questions",
          text:
            "The Telegram bot guides you through smart questions about personality, goals, and the image you want. If you are unsure, it shows examples.",
        },
        {
          title: "A profile without masks",
          text:
            "The AI preserves your identity: no imposed trends. The profile is built around who you are — not who you are expected to appear as.",
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
        "Most styling tools push you toward borrowed trends. StyleSelf works differently: the AI reveals who you really are and builds the image around that.",
      textSecondary:
        "Your identity is the foundation. Style is the tool that expresses it.",
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
        "I work in visual branding and help people find a style that is truly theirs — not borrowed, not trend-driven, but genuinely their own. A photoshoot is a tool. Without self-understanding, it does not work.",
        "I created this AI guide because I got tired of seeing people spend money on shoots and still leave disappointed. Now anyone can go through my method in a dialogue with a bot, without the price of a private consultation.",
      ],
      bullets: [
        "More than 5 years in visual content and personal branding",
        "Helped 200+ clients create photoshoots that actually work",
        "Author of an AI-based style diagnosis method for photoshoots",
        "Speaker at professional conferences on visual marketing",
      ],
    },
    pricing: {
      eyebrow: "Access",
      title: "One format — everything included",
      text:
        "No hidden fees. Pay once and immediately get access to the Telegram bot and the preparation route.",
      badge: "Most popular choice",
      name: "StyleSelf — full access",
      subtitle: "One-time payment, no subscription",
      price: "2999",
      oldPrice: "5990",
      discount: "−50%",
      features: [
        "AI dialogue to uncover your style",
        "A visual identity profile that preserves who you are",
        "A ready photoshoot plan: looks, locations, and mood",
        "Wardrobe and props recommendations",
        "Guidance on choosing the right photographer for your style",
        "30 days of access to the bot",
      ],
      cta: "Get access for 2999",
      telegram: "Write in Telegram",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "How do I get access after payment?",
          a: "Right after payment you move to the next step and receive access to the material and the Telegram bot link.",
        },
        {
          q: "How long does the flow take?",
          a: "You can get your first clear result in a single evening. No heavy onboarding and no long preparation.",
        },
        {
          q: "Is it suitable for personal branding?",
          a: "Yes. The method works for experts, content shoots, and personal sessions that are not tied to a commercial goal.",
        },
        {
          q: "What if I do not like the result?",
          a: "Everything is built step by step: from understanding yourself to a shooting direction, not to random visuals.",
        },
        {
          q: "Is this an app?",
          a: "No. The main flow runs through the webpage and Telegram, without a separate app or complicated registration.",
        },
        {
          q: "What if I know nothing about style?",
          a: "That is exactly why the bot exists: it asks questions, shows examples, and helps you get to a coherent image without a styling background.",
        },
      ],
    },
    cta: {
      title: "Your photoshoot starts with you — not with the camera",
      text:
        "Discover your style now. Show up to the shoot with an image that actually feels like you.",
      primary: "Get access for 2999",
      meta: "7-day refund guarantee • One payment • No subscription",
    },
    footer: {
      how: "How it works",
      access: "Access",
      copy: "© 2026 StyleSelf",
    },
  },
  es: {
    site: {
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
      title: "¿Te resulta familiar?",
      text:
        "La mayoría de las personas llega a una sesión sin una comprensión clara de sí mismas — y termina con fotos bonitas, pero vacías.",
      cards: [
        {
          title: "“No sé qué quiero”",
          text:
            "Llegas a la sesión sin una idea clara y el fotógrafo decide por ti. El resultado puede verse bien, pero no habla de ti.",
        },
        {
          title: "La imagen no coincide contigo",
          text:
            "Guardaste referencias bonitas, pero en la foto final sigues sintiéndote ajena. Hay estilo, pero no está tu identidad.",
        },
        {
          title: "La sesión no funciona",
          text:
            "Invertiste tiempo y dinero, pero el contenido no comunica quién eres ni qué haces.",
        },
        {
          title: "Otra decepción",
          text:
            "Después de otra sesión sientes que todavía no es eso. El mismo círculo de iteraciones sin un resultado real.",
        },
      ],
    },
    steps: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos hacia una sesión que habla de ti",
      text:
        "Sin tablas ni plantillas. Solo un diálogo — y claridad sobre quién quieres ser en la imagen.",
      items: [
        {
          title: "La IA hace preguntas",
          text:
            "El bot de Telegram te guía con preguntas inteligentes sobre personalidad, objetivos e imagen. Si dudas, te muestra ejemplos.",
        },
        {
          title: "Un perfil sin máscaras",
          text:
            "La IA conserva tu identidad: sin tendencias impuestas. El perfil se construye alrededor de quien eres, no de quien deberías parecer.",
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
      textSecondary:
        "Tu identidad es la base. El estilo es la herramienta que la expresa.",
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
        "Trabajo con branding visual y ayudo a las personas a encontrar un estilo que realmente les pertenece — no prestado, no dictado por tendencias, sino propio. Una sesión es una herramienta. Sin comprensión de una misma, no funciona.",
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
      title: "Un formato — todo incluido",
      text:
        "Sin pagos ocultos. Pagas una vez y recibes acceso inmediato al bot de Telegram y a la ruta de preparación.",
      badge: "La opción más elegida",
      name: "StyleSelf — acceso completo",
      subtitle: "Pago único, sin suscripción",
      price: "2999",
      oldPrice: "5990",
      discount: "−50%",
      features: [
        "Diálogo con IA para descubrir tu estilo",
        "Perfil de identidad visual que conserva quién eres",
        "Plan listo para la sesión: looks, locaciones y mood",
        "Recomendaciones de vestuario y props",
        "Guía para elegir al fotógrafo adecuado para tu estilo",
        "30 días de acceso al bot",
      ],
      cta: "Obtener acceso por 2999",
      telegram: "Escribir en Telegram",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cómo recibo acceso después del pago?",
          a: "Justo después del pago pasas al siguiente paso y recibes acceso al material y al enlace del bot de Telegram.",
        },
        {
          q: "¿Cuánto tiempo lleva completar el proceso?",
          a: "Puedes obtener tu primer resultado claro en una sola tarde. Sin onboarding pesado ni preparación larga.",
        },
        {
          q: "¿Sirve para marca personal?",
          a: "Sí. La metodología funciona para expertos, sesiones de contenido y sesiones personales sin un objetivo comercial.",
        },
        {
          q: "¿Y si no me gusta el resultado?",
          a: "Todo está construido paso a paso: desde comprenderte hasta definir la dirección de la sesión, no hacia imágenes aleatorias.",
        },
        {
          q: "¿Es una app?",
          a: "No. El flujo principal funciona a través de la web y Telegram, sin una app separada ni un registro complicado.",
        },
        {
          q: "¿Y si no sé nada de estilo?",
          a: "Precisamente para eso existe el bot: hace preguntas, muestra ejemplos y te ayuda a llegar a una imagen coherente sin experiencia previa en estilismo.",
        },
      ],
    },
    cta: {
      title: "Tu sesión empieza contigo — no con la cámara",
      text:
        "Descubre tu estilo ahora. Llega a la sesión con una imagen que realmente se sienta tuya.",
      primary: "Obtener acceso por 2999",
      meta: "Garantía de devolución de 7 días • Un solo pago • Sin suscripción",
    },
    footer: {
      how: "Cómo funciona",
      access: "Acceso",
      copy: "© 2026 StyleSelf",
    },
  },
};

const problemIcons = [
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9.2 9a3 3 0 1 1 5.8 1c0 2-3 3-3 3"></path>
      <path d="M12 17h.01"></path>
    </svg>
  `,
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 3h5v5"></path>
      <path d="M4 20l6-6"></path>
      <path d="M20 4l-6 6"></path>
      <path d="M15 15l5 5"></path>
      <path d="M4 4l5 5"></path>
    </svg>
  `,
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  `,
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M8 15s1.5-2 4-2 4 2 4 2"></path>
      <path d="M9 9h.01"></path>
      <path d="M15 9h.01"></path>
    </svg>
  `,
];

const stepIcons = [
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <path d="M9 9h6"></path>
      <path d="M9 13h4"></path>
    </svg>
  `,
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4"></path>
      <path d="M12 18v4"></path>
      <path d="M4.93 4.93l2.83 2.83"></path>
      <path d="M16.24 16.24l2.83 2.83"></path>
      <path d="M2 12h4"></path>
      <path d="M18 12h4"></path>
      <path d="M4.93 19.07l2.83-2.83"></path>
      <path d="M16.24 7.76l2.83-2.83"></path>
    </svg>
  `,
  `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  `,
];

const interactiveButtons = [".header-cta", ".btn-primary", ".btn-cta"];
let currentLocale = "ru";

function setButtonLabel(element, label) {
  if (!element) return;
  const hasArrow = interactiveButtons.some((selector) => element.matches(selector));
  if (hasArrow) {
    element.innerHTML = `<span>${label}</span><span class="button-arrow" aria-hidden="true">→</span>`;
    return;
  }

  element.textContent = label;
}

function getByPath(source, path) {
  return path.split(".").reduce((accumulator, part) => accumulator?.[part], source);
}

function renderProblemCards(locale) {
  const grid = document.getElementById("problemGrid");
  const cards = translations[locale].problem.cards;

  grid.innerHTML = cards
    .map(
      (card, index) => `
        <article class="problem-card reveal">
          <div class="problem-icon">${problemIcons[index] || problemIcons[0]}</div>
          <h3 class="problem-title">${card.title}</h3>
          <p class="problem-copy">${card.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderSteps(locale) {
  const grid = document.getElementById("stepsGrid");
  const items = translations[locale].steps.items;

  grid.innerHTML = items
    .map(
      (item, index) => `
        <article class="step-card reveal">
          <div class="step-icon">${stepIcons[index] || stepIcons[0]}</div>
          <h3 class="step-title">${item.title}</h3>
          <p class="step-copy">${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderList(targetId, items, className = "bullet") {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `<li class="${className}">${item}</li>`).join("");
}

function renderParagraphs(locale) {
  const container = document.getElementById("authorParagraphs");
  container.innerHTML = translations[locale].author.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function renderFaq(locale) {
  const target = document.getElementById("faqList");
  const items = translations[locale].faq.items;

  target.innerHTML = items
    .map(
      (item, index) => `
        <div class="faq-item${index === 0 ? " is-open" : ""}">
          <button class="faq-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span class="faq-question">${item.q}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-panel">
            <div class="faq-panel-inner">
              <p class="faq-answer">${item.a}</p>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  target.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const expanded = item.classList.contains("is-open");

      target.querySelectorAll(".faq-item").forEach((node) => {
        node.classList.remove("is-open");
        node.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
      });

      if (!expanded) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function renderLocale(locale) {
  currentLocale = locale in translations ? locale : "ru";
  const content = translations[currentLocale];

  document.documentElement.lang = currentLocale;
  document.title =
    currentLocale === "ru"
      ? "StyleSelf — AI-гайд для фотосессии"
      : currentLocale === "uk"
        ? "StyleSelf — AI-гайд для фотосесії"
        : currentLocale === "en"
          ? "StyleSelf — AI guide for your photoshoot"
          : "StyleSelf — Guía AI para tu sesión";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getByPath(content, node.dataset.i18n);
    if (typeof value !== "string") return;
    setButtonLabel(node, value);
  });

  renderProblemCards(currentLocale);
  renderSteps(currentLocale);
  renderList("identityBullets", content.identity.bullets);
  renderParagraphs(currentLocale);
  renderList("authorBullets", content.author.bullets);
  renderList("pricingFeatures", content.pricing.features);
  renderFaq(currentLocale);
  updateLocaleButtons();
  hydrateReveal();

  const url = new URL(window.location.href);
  url.searchParams.set("lang", currentLocale);
  window.history.replaceState({}, "", url);
  localStorage.setItem("styleself-locale", currentLocale);
}

function updateLocaleButtons() {
  document.querySelectorAll(".locale-pill").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.locale === currentLocale);
  });
}

function initLocale() {
  const urlLocale = new URLSearchParams(window.location.search).get("lang");
  const savedLocale = localStorage.getItem("styleself-locale");
  const locale = urlLocale || savedLocale || "ru";
  renderLocale(locale);

  document.querySelectorAll(".locale-pill").forEach((button) => {
    button.addEventListener("click", () => {
      renderLocale(button.dataset.locale);
    });
  });
}

function handleHeader() {
  const header = document.getElementById("siteHeader");
  const toggle = () => header.classList.toggle("is-scrolled", window.scrollY > 40);

  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

function hydrateReveal() {
  const nodes = document.querySelectorAll(".reveal");

  window.setTimeout(() => {
    nodes.forEach((node) => node.classList.add("reveal-visible"));
  }, 1200);

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  nodes.forEach((node) => {
    if (node.classList.contains("reveal-visible")) return;
    observer.observe(node);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  handleHeader();
  initLocale();
});
