import { MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TikTokIcon } from "@/components/TikTokIcon";
import { site, tgLink, waLink } from "@/lib/site";

/** Финальный тёмный блок с призывом написать в мессенджер */
export function CtaSection({
  title = "Не знаете, с чего начать?",
  subtitle = "Напишите пару слов о своей задаче — отвечу, что подойдёт именно вам, без обязательств и рассылок.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-5 py-20 md:py-28">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-forest-deep px-6 py-16 text-center md:px-16 md:py-20">
        {/* Свечение внутри блока */}
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl animate-blob"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-16 size-80 rounded-full bg-sage/20 blur-3xl animate-blob-slow"
        />

        <div className="relative">
          <h2 className="font-display text-3xl text-cream md:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle className="size-5" />
              Написать в WhatsApp
            </a>
            <a
              href={tgLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2aabee] px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              <Send className="size-5" />
              Написать в Telegram
            </a>
            <a
              href={site.contacts.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#010101] px-7 py-3.5 font-semibold text-white ring-1 ring-[#25f4ee]/40 transition-transform duration-300 hover:scale-105"
            >
              <TikTokIcon className="size-5" />
              Мой TikTok
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/50">
            Обычно отвечаю в течение часа
          </p>
        </div>
      </Reveal>
    </section>
  );
}
