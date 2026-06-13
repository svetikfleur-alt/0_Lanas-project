export const supportedLocales = ["ru", "uk", "en", "es"];

const localeNames = {
  ru: "русском",
  uk: "українською",
  en: "English",
  es: "español",
};

export const languageKeyboard = {
  keyboard: [[{ text: "RU" }, { text: "UK" }, { text: "EN" }, { text: "ES" }]],
  resize_keyboard: true,
  one_time_keyboard: true,
  selective: true,
};

export const interviewQuestions = [
  {
    key: "shoot_context",
    labels: {
      ru: "Контекст съёмки",
      uk: "Контекст зйомки",
      en: "Shoot context",
      es: "Contexto de la sesión",
    },
    prompts: {
      ru: "1/7. Для чего тебе сейчас нужна фотосессия? Где эти кадры будут жить: личный бренд, соцсети, сайт, знакомство, просто для себя?",
      uk: "1/7. Для чого тобі зараз потрібна фотосесія? Де житимуть ці кадри: особистий бренд, соцмережі, сайт, знайомства чи просто для себе?",
      en: "1/7. Why do you need this photoshoot right now? Where will the images live: personal brand, social media, website, dating, or just for yourself?",
      es: "1/7. ¿Para qué necesitas esta sesión ahora mismo? ¿Dónde vivirán esas fotos: marca personal, redes, web, citas o simplemente para ti?",
    },
  },
  {
    key: "identity_read",
    labels: {
      ru: "Как тебя должны считывать",
      uk: "Як тебе мають зчитувати",
      en: "How you want to be perceived",
      es: "Cómo quieres que te perciban",
    },
    prompts: {
      ru: "2/7. Кто ты сейчас и как хочешь, чтобы тебя считывали с первого взгляда? Можешь описать себя 3-5 словами.",
      uk: "2/7. Хто ти зараз і як хочеш, щоб тебе зчитували з першого погляду? Можеш описати себе 3-5 словами.",
      en: "2/7. Who are you right now and how do you want people to read you at first glance? You can describe yourself in 3-5 words.",
      es: "2/7. ¿Quién eres ahora mismo y cómo quieres que te lean a primera vista? Puedes describirte en 3-5 palabras.",
    },
  },
  {
    key: "desired_feeling",
    labels: {
      ru: "Как ты хочешь себя чувствовать",
      uk: "Як ти хочеш себе відчувати",
      en: "How you want to feel",
      es: "Cómo quieres sentirte",
    },
    prompts: {
      ru: "3/7. Как ты хочешь чувствовать себя в кадре? Например: спокойно, дорого, мягко, смело, собранно, сексуально, интеллектуально.",
      uk: "3/7. Як ти хочеш себе відчувати в кадрі? Наприклад: спокійно, дорого, м’яко, сміливо, зібрано, сексуально, інтелектуально.",
      en: "3/7. How do you want to feel in the frame? For example: calm, expensive, soft, bold, composed, sensual, intelligent.",
      es: "3/7. ¿Cómo quieres sentirte en la imagen? Por ejemplo: tranquila, premium, suave, atrevida, segura, sensual, intelectual.",
    },
  },
  {
    key: "not_you",
    labels: {
      ru: "Что точно не твоё",
      uk: "Що точно не твоє",
      en: "What is definitely not you",
      es: "Qué definitivamente no eres tú",
    },
    prompts: {
      ru: "4/7. Что в визуале точно не твоё? Какие образы, стили, позы или настроения ты не хочешь видеть у себя?",
      uk: "4/7. Що у візуалі точно не твоє? Які образи, стилі, пози чи настрої ти не хочеш бачити у себе?",
      en: "4/7. What in visual language is definitely not you? Which looks, styles, poses, or moods do you want to avoid?",
      es: "4/7. ¿Qué en lo visual definitivamente no es lo tuyo? ¿Qué looks, estilos, poses o moods quieres evitar?",
    },
  },
  {
    key: "signature_details",
    labels: {
      ru: "Что уже ощущается как «ты»",
      uk: "Що вже відчувається як «ти»",
      en: "What already feels like you",
      es: "Qué ya se siente como tú",
    },
    prompts: {
      ru: "5/7. Какие вещи, детали, цвета, ткани, аксессуары, привычки или черты уже ощущаются как «ты»?",
      uk: "5/7. Які речі, деталі, кольори, тканини, аксесуари, звички чи риси вже відчуваються як «ти»?",
      en: "5/7. Which pieces, details, colors, fabrics, accessories, habits, or traits already feel like you?",
      es: "5/7. ¿Qué prendas, detalles, colores, telas, accesorios, hábitos o rasgos ya se sienten como tú?",
    },
  },
  {
    key: "constraints",
    labels: {
      ru: "Практические рамки",
      uk: "Практичні рамки",
      en: "Practical constraints",
      es: "Límites prácticos",
    },
    prompts: {
      ru: "6/7. Есть ли практические рамки? Город, сезон, помещение или улица, бюджет, дресс-код, что уже есть в гардеробе.",
      uk: "6/7. Чи є практичні рамки? Місто, сезон, студія чи вулиця, бюджет, дрес-код, що вже є в гардеробі.",
      en: "6/7. Do you have practical constraints? City, season, studio or street, budget, dress code, or what is already in your wardrobe.",
      es: "6/7. ¿Hay límites prácticos? Ciudad, temporada, estudio o calle, presupuesto, dress code o qué ya tienes en el armario.",
    },
  },
  {
    key: "dream_result",
    labels: {
      ru: "Идеальный результат",
      uk: "Ідеальний результат",
      en: "Ideal result",
      es: "Resultado ideal",
    },
    prompts: {
      ru: "7/7. Какой результат после съёмки заставит тебя сказать: «да, это я»? Опиши лучший сценарий.",
      uk: "7/7. Який результат після зйомки змусить тебе сказати: «так, це я»? Опиши найкращий сценарій.",
      en: "7/7. What result after the shoot would make you say, “yes, this is me”? Describe the best-case outcome.",
      es: "7/7. ¿Qué resultado después de la sesión te haría decir «sí, esta soy yo»? Describe el mejor escenario.",
    },
  },
];

export const botCopy = {
  ru: {
    welcome:
      "Привет. Я проведу короткое style-интервью и соберу базовый бриф для твоей фотосессии.",
    languagePrompt:
      "Выбери язык. Если ты пришла с лендинга, я могу продолжить сразу в нужной локали.",
    languageConfirmed: "Язык сохранён. Идём по шагам.",
    invalidLanguage: "Напиши RU, UK, EN или ES.",
    help:
      "Команды:\n/start — начать заново\n/reset — очистить ответы\n/summary — показать последний результат\n/help — подсказка",
    generating:
      "Собираю твой brief. Обычно это занимает до 20 секунд. Если LM Studio недоступен, я всё равно верну fallback-версию.",
    summaryReady:
      "Готово. Ниже твой первый рабочий brief для съёмки.",
    summaryMissing:
      "Пока нет сохранённого результата. Сначала пройди интервью через /start.",
    resetDone: "Ответы очищены. Отправь /start, чтобы пройти заново.",
    restartHint:
      "Если хочешь новый проход или уточнённую версию, отправь /start.",
    busy: "Сейчас собираю результат по твоим ответам. Подожди ещё немного.",
    fallbackTag: "LM Studio сейчас недоступен, поэтому ниже fallback-версия brief.",
  },
  uk: {
    welcome:
      "Привіт. Я проведу коротке style-інтерв’ю й зберу базовий brief для твоєї фотосесії.",
    languagePrompt:
      "Обери мову. Якщо ти прийшла з лендингу, я можу одразу продовжити у потрібній локалі.",
    languageConfirmed: "Мову збережено. Рухаємось крок за кроком.",
    invalidLanguage: "Напиши RU, UK, EN або ES.",
    help:
      "Команди:\n/start — почати спочатку\n/reset — очистити відповіді\n/summary — показати останній результат\n/help — підказка",
    generating:
      "Збираю твій brief. Зазвичай це займає до 20 секунд. Якщо LM Studio недоступний, я все одно поверну fallback-версію.",
    summaryReady:
      "Готово. Нижче твій перший робочий brief для зйомки.",
    summaryMissing:
      "Поки немає збереженого результату. Спочатку пройди інтерв’ю через /start.",
    resetDone: "Відповіді очищено. Надішли /start, щоб пройти знову.",
    restartHint:
      "Якщо хочеш новий прохід або точнішу версію, надішли /start.",
    busy: "Зараз збираю результат за твоїми відповідями. Зачекай ще трохи.",
    fallbackTag: "LM Studio зараз недоступний, тому нижче fallback-версія brief.",
  },
  en: {
    welcome:
      "Hi. I’ll run a short style interview and build a first working photoshoot brief for you.",
    languagePrompt:
      "Choose your language. If you came from the landing page, I can continue in the matching locale right away.",
    languageConfirmed: "Language saved. Let’s go step by step.",
    invalidLanguage: "Reply with RU, UK, EN, or ES.",
    help:
      "Commands:\n/start — restart the flow\n/reset — clear answers\n/summary — show the last result\n/help — help",
    generating:
      "Building your brief now. This usually takes up to 20 seconds. If LM Studio is unavailable, I will still return a fallback brief.",
    summaryReady:
      "Done. Below is your first working photoshoot brief.",
    summaryMissing:
      "There is no saved result yet. Complete the interview first via /start.",
    resetDone: "Answers cleared. Send /start to begin again.",
    restartHint:
      "If you want a fresh pass or a tighter version, send /start.",
    busy: "I’m generating your result from the current answers. Give me a moment.",
    fallbackTag: "LM Studio is unavailable right now, so the brief below is a fallback version.",
  },
  es: {
    welcome:
      "Hola. Haré una entrevista corta de estilo y te devolveré un primer brief útil para tu sesión.",
    languagePrompt:
      "Elige tu idioma. Si llegaste desde el landing, puedo seguir directamente en la misma localización.",
    languageConfirmed: "Idioma guardado. Vamos paso a paso.",
    invalidLanguage: "Responde con RU, UK, EN o ES.",
    help:
      "Comandos:\n/start — empezar de nuevo\n/reset — borrar respuestas\n/summary — mostrar el último resultado\n/help — ayuda",
    generating:
      "Estoy construyendo tu brief. Normalmente tarda hasta 20 segundos. Si LM Studio no está disponible, igual te devolveré una versión fallback.",
    summaryReady:
      "Listo. Abajo tienes tu primer brief funcional para la sesión.",
    summaryMissing:
      "Todavía no hay un resultado guardado. Primero completa la entrevista con /start.",
    resetDone: "Respuestas borradas. Envía /start para comenzar otra vez.",
    restartHint:
      "Si quieres un nuevo recorrido o una versión más precisa, envía /start.",
    busy: "Estoy generando tu resultado con las respuestas actuales. Espera un momento.",
    fallbackTag: "LM Studio no está disponible ahora mismo, así que abajo va una versión fallback del brief.",
  },
};

export function getLocaleName(locale) {
  return localeNames[locale] || localeNames.ru;
}

export function resolveLocale(input) {
  if (!input) return null;
  const normalized = input.trim().toLowerCase();

  if (["ru", "рус", "русский", "russian"].includes(normalized)) return "ru";
  if (["uk", "ua", "укр", "українська", "ukrainian"].includes(normalized)) return "uk";
  if (["en", "eng", "english"].includes(normalized)) return "en";
  if (["es", "esp", "español", "espanol", "spanish"].includes(normalized)) return "es";

  return null;
}
