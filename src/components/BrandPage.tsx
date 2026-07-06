import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgePercent,
  Check,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { waLink } from "@/lib/site";

export type BrandPageData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  heroTags: string[];
  /** Короткий адрес /go/..., ведущий на реферальную ссылку или в чат */
  goHref: string;
  waMessage: string;
  /** Подписи кнопок (по умолчанию — «каталожные») */
  ctaLabel?: string;
  bestsellerCta?: string;
  bestsellersNote?: string;
  clubCta?: string;
  categories: { icon: LucideIcon; title: string; text: string }[];
  bestsellers: { name: string; note: string; tag: string }[];
  /** Блок «О производителе» — сдержанный рассказ о компании */
  aboutBrand: {
    heading: string;
    paragraphs: string[];
    facts: string[];
  };
  /** Тёмный блок с клубной ценой */
  club: {
    badge: string;
    heading: string;
    text: string;
  };
  perks: string[];
  /** Сдержанное упоминание производителя внизу страницы */
  brandNote: string;
};

export function BrandPage({ data }: { data: BrandPageData }) {
  const ctaLabel = data.ctaLabel ?? "Открыть каталог со скидкой";
  const bestsellerCta = data.bestsellerCta ?? "Смотреть в каталоге";
  const bestsellersNote =
    data.bestsellersNote ??
    "Актуальные цены — в каталоге: по ссылке они откроются сразу клубными.";
  const clubCta = data.clubCta ?? "Перейти в каталог";
  return (
    <>
      {/* Хиро направления */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:pb-24 md:pt-44">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 size-[28rem] rounded-full bg-sage/30 blur-3xl animate-blob" />
          <div className="absolute bottom-0 -left-32 size-[26rem] rounded-full bg-gold-soft/60 blur-3xl animate-blob-slow" />
        </div>

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-forest"
            >
              <ArrowLeft className="size-4" />
              На главную
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {data.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-forest md:text-6xl">
              {data.title}{" "}
              <span className="italic text-gold">{data.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {data.intro}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={data.goHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-cream transition-all duration-300 hover:bg-forest-deep hover:shadow-xl hover:shadow-forest/25"
              >
                <ShoppingBag className="size-5" />
                {ctaLabel}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={waLink(data.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-7 py-3.5 font-semibold text-forest transition-all duration-300 hover:border-forest hover:bg-forest/5"
              >
                <MessageCircle className="size-5" />
                Подобрать со мной
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Категории */}
      <section className="bg-paper px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl text-forest md:text-4xl">
              Что внутри направления
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.categories.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-3xl border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10">
                  <span className="grid size-11 place-items-center rounded-xl bg-sage-soft text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-gold">
                    <cat.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-forest">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cat.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Бестселлеры */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-forest md:text-4xl">
              С чего чаще всего начинают
            </h2>
            <p className="max-w-sm text-sm text-ink-soft">{bestsellersNote}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.bestsellers.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <a
                  href={data.goHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
                >
                  <span className="self-start rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-snug text-forest">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.note}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    {bestsellerCta}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* О производителе */}
      <section className="bg-paper px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                О производителе
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest md:text-4xl">
                {data.aboutBrand.heading}
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {data.aboutBrand.facts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-gold/40 bg-gold-soft/40 px-4 py-1.5 text-sm font-medium text-forest"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="space-y-4">
                {data.aboutBrand.paragraphs.map((text) => (
                  <p key={text} className="leading-relaxed text-ink-soft">
                    {text}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Клубная цена */}
      <section className="px-5 py-16 md:py-20">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 md:px-14 md:py-16">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 size-80 rounded-full bg-gold/15 blur-3xl animate-blob"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-sm font-medium text-gold">
                <BadgePercent className="size-4" />
                {data.club.badge}
              </p>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream md:text-4xl">
                {data.club.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-cream/70">{data.club.text}</p>
              <a
                href={data.goHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-deep transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/25"
              >
                <ShoppingBag className="size-5" />
                {clubCta}
              </a>
            </div>
            <ul className="space-y-4">
              {data.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-cream/85">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                    <Check className="size-3.5" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-6xl">
          <p className="text-center text-xs leading-relaxed text-ink-soft/50">
            {data.brandNote}
          </p>
        </Reveal>
      </section>

      <CtaSection
        title="Сомневаетесь, что выбрать?"
        subtitle="Напишите мне пару слов о задаче — подскажу, с чего начать именно вам, и соберу корзину со скидкой."
      />
    </>
  );
}
