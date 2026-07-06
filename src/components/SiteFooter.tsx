import Link from "next/link";
import { site, tgLink, waLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">
              точка<span className="text-gold">·</span>баланса
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Натуральные продукты для здоровья, красоты и дома — с личным
              подбором и сопровождением.
            </p>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-semibold uppercase tracking-wider text-cream/40">
              Навигация
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-cream/70 transition-colors hover:text-gold">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link href="/beauty-health" className="text-cream/70 transition-colors hover:text-gold">
                  Здоровье и красота
                </Link>
              </li>
              <li>
                <Link href="/eco-home" className="text-cream/70 transition-colors hover:text-gold">
                  Экологичный дом
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-cream/70 transition-colors hover:text-gold">
                  Частые вопросы
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-semibold uppercase tracking-wider text-cream/40">
              Связаться
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={tgLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 transition-colors hover:text-gold"
                >
                  Telegram
                </a>
              </li>
            </ul>
            <p className="mt-4 text-cream/50">Отвечаю обычно в течение часа.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs leading-relaxed text-cream/35">
          <p>
            © {new Date().getFullYear()} {site.brand}. Сайт независимого
            консультанта; не является официальным сайтом компаний-производителей.
            Информация не является публичной офертой и медицинской рекомендацией.
          </p>
        </div>
      </div>
    </footer>
  );
}
