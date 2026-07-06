/**
 * ЕДИНЫЙ КОНФИГ САЙТА.
 * Здесь меняются все контакты, реферальные ссылки и тексты-визитки.
 * Больше нигде в коде ссылки и телефоны не прописаны.
 */

export const site = {
  /** Название личного бренда (шапка, футер, метаданные) */
  brand: "Точка Баланса",

  /** Имя консультанта — показывается в блоке «Обо мне» и подписях */
  owner: {
    name: "Вероника",
    role: "Консультант по натуральным продуктам для здоровья и дома",
    /** Короткая подпись под именем в hero */
    tagline: "Помогаю выбирать работающие продукты — без лишнего и наугад",
  },

  /** Мессенджеры. Телефон в формате 7XXXXXXXXXX (без + и пробелов) */
  contacts: {
    whatsappPhone: "77057237353", // номер 8 705 723 73 53 в международном формате
    telegramUser: "love_maisan",
    tiktok: "https://www.tiktok.com/@veranika_greenleafastana",
    /** Стартовое сообщение, которое подставится в WhatsApp */
    whatsappPreset: "Здравствуйте! Пишу с сайта — хочу подобрать продукты.",
  },

  /**
   * Реферальные ссылки. Кнопки «Открыть каталог» ведут сюда.
   * Также работают короткие адреса /go/siberian и /go/greenleaf.
   * У Greenleaf реферальных ссылок нет — /go/greenleaf ведёт в личный
   * чат WhatsApp (регистрация со скидкой 50% оформляется вручную).
   */
  referral: {
    siberian:
      "https://kz.siberianwellness.com/kz-ru/registration/privileged_client?referral=2550313021",
  },
  /** Сообщение для заявок по Greenleaf (короткая ссылка /go/greenleaf) */
  greenleafPreset:
    "Здравствуйте! Хочу заказать продукцию Greenleaf со скидкой 50%.",
} as const;

export function waLink(text?: string): string {
  const base = `https://wa.me/${site.contacts.whatsappPhone}`;
  const preset = text ?? site.contacts.whatsappPreset;
  return preset ? `${base}?text=${encodeURIComponent(preset)}` : base;
}

export function tgLink(): string {
  return `https://t.me/${site.contacts.telegramUser}`;
}
