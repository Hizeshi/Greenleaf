import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  HeartHandshake,
  Home,
  Leaf,
  MessageCircle,
  PackageCheck,
  Percent,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TiltCard } from "@/components/TiltCard";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { site, waLink } from "@/lib/site";

const faq: FaqItem[] = [
  {
    q: "Как оформить заказ?",
    a: "Два пути на выбор. Быстрый: напишите мне в WhatsApp или Telegram — соберу корзину за вас и пришлю итог с клубной скидкой. Самостоятельный: перейдите в каталог по ссылке с этого сайта, зарегистрируйтесь за минуту и заказывайте по клубной цене в любое время.",
  },
  {
    q: "Почему по вашей ссылке дешевле?",
    a: "Регистрация по ссылке делает вас привилегированным клиентом производителя: цены ниже розничных до 25%, плюс накопительные бонусы на следующие заказы. Для вас это бесплатно и ни к чему не обязывает.",
  },
  {
    q: "Это точно оригинальная продукция?",
    a: "Да — заказ приходит напрямую со склада производителя, без посредников и перекупщиков. Я лишь помогаю с выбором и даю доступ к клубной цене.",
  },
  {
    q: "А если продукт не подойдёт?",
    a: "Напишите мне — разберёмся: подберём замену или подскажу, как правильно ввести продукт в рутину. Я на связи и после заказа, в этом и смысл личного консультанта.",
  },
  {
    q: "Вы отправляете в другие города и страны?",
    a: "Доставка работает по всей России и в ряд соседних стран — склады производителей есть в крупных городах, заказ обычно едет от 2 до 7 дней.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Обо мне */}
      <section id="about" className="scroll-mt-24 px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sage/40 to-gold-soft/60 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-paper p-10 text-center shadow-xl shadow-forest/5">
                <div className="mx-auto grid size-28 place-items-center rounded-full bg-forest font-display text-4xl text-gold">
                  {site.owner.name[0]}
                </div>
                <p className="mt-6 font-display text-3xl text-forest">
                  {site.owner.name}
                </p>
                <p className="mt-2 text-sm text-ink-soft">{site.owner.role}</p>
                <div className="mt-8 grid grid-cols-3 gap-2 border-t border-line pt-6">
                  <div>
                    <Counter to={7} suffix="+" className="font-display text-2xl text-forest" />
                    <p className="mt-1 text-xs text-ink-soft">лет опыта</p>
                  </div>
                  <div>
                    <Counter to={300} suffix="+" className="font-display text-2xl text-forest" />
                    <p className="mt-1 text-xs text-ink-soft">постоянных клиентов</p>
                  </div>
                  <div>
                    <Counter to={40} suffix="+" className="font-display text-2xl text-forest" />
                    <p className="mt-1 text-xs text-ink-soft">городов доставки</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Обо мне
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest md:text-5xl">
                Я не «продаю каталог» —
                <br />
                <span className="italic">я подбираю решение</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Несколько лет назад я сам искал работающие витамины и безопасную
                химию для дома — и утонул в маркетинге. С тех пор я разобрался в
                составах, перепробовал десятки продуктов и оставил в своей
                практике только те, что действительно работают.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Сегодня я помогаю людям не покупать лишнего: мы обсуждаем задачу,
                я предлагаю 2–3 варианта под бюджет, вы заказываете напрямую у
                производителя по клубной цене. И я остаюсь на связи после — это
                главное отличие от «магазина».
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-3">
                {[
                  { icon: HeartHandshake, text: "Честно скажу, если продукт вам не нужен" },
                  { icon: PackageCheck, text: "Заказ идёт напрямую со склада производителя" },
                  { icon: Percent, text: "Вы всегда платите клубную цену, не розничную" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-ink">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sage-soft text-forest">
                      <Icon className="size-4" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Направления */}
      <section id="directions" className="scroll-mt-24 bg-paper px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Направления
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-5xl">
              Два мира натуральных продуктов
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Выберите, что ближе — или напишите мне, и соберём корзину из обоих
              направлений сразу.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <TiltCard className="group h-full">
                <Link
                  href="/beauty-health"
                  className="flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-8 text-cream transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/30 md:p-10"
                >
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-cream/10 text-gold">
                      <Sparkles className="size-6" />
                    </span>
                    <h3 className="mt-6 font-display text-3xl">Здоровье и красота</h3>
                    <p className="mt-3 leading-relaxed text-cream/70">
                      Витамины, омега-3 и нутрицевтика, фиточаи и бальзамы,
                      спортивное питание, уход за кожей и волосами.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["витамины", "омега-3", "фиточаи", "косметика"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cream/20 px-3 py-1 text-xs text-cream/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-gold">
                    Смотреть направление
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.12}>
              <TiltCard className="group h-full">
                <Link
                  href="/eco-home"
                  className="flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-cream p-8 transition-shadow duration-500 hover:shadow-2xl hover:shadow-sage/40 md:p-10"
                >
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-sage-soft text-forest">
                      <Home className="size-6" />
                    </span>
                    <h3 className="mt-6 font-display text-3xl text-forest">
                      Экологичный дом
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      Концентраты для стирки и уборки без агрессивной химии,
                      средства гигиены, детская серия, уход за собой.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["стирка", "уборка", "гигиена", "детская серия"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-forest">
                    Смотреть направление
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <a
              href={waLink("Здравствуйте! Хочу индивидуальный подбор продуктов.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-dashed border-gold/50 bg-gold-soft/30 p-8 transition-colors duration-300 hover:bg-gold-soft/60 md:flex-row md:items-center md:p-10"
            >
              <div className="flex items-center gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold/20 text-forest">
                  <UserRound className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-forest">
                    Индивидуальный подбор
                  </h3>
                  <p className="mt-1 text-ink-soft">
                    Не хочется разбираться самим? Опишите задачу — соберу корзину
                    под вас.
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-cream transition-transform duration-300 group-hover:scale-105">
                <MessageCircle className="size-4" />
                Написать
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Как заказать */}
      <section id="how" className="scroll-mt-24 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Как заказать
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-5xl">
              Три простых шага
            </h2>
          </Reveal>

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-sage md:block"
            />
            {[
              {
                n: "01",
                icon: MessageCircle,
                title: "Пишете мне",
                text: "В WhatsApp или Telegram. Коротко: что беспокоит или что ищете — остальное спрошу сам.",
              },
              {
                n: "02",
                icon: Leaf,
                title: "Подбираем вместе",
                text: "Предлагаю 2–3 варианта под задачу и бюджет, объясняю составы и различия. Без навязывания.",
              },
              {
                n: "03",
                icon: PackageCheck,
                title: "Заказ со скидкой",
                text: "Оформляете по моей ссылке по клубной цене — доставка со склада производителя прямо к вам.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <div className="relative rounded-[2rem] border border-line bg-paper p-8 text-center shadow-sm">
                  <div className="relative mx-auto grid size-20 place-items-center rounded-full bg-forest text-cream">
                    <step.icon className="size-7" />
                    <span className="absolute -right-1 -top-1 grid size-8 place-items-center rounded-full bg-gold font-display text-sm text-forest-deep">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-forest">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="scroll-mt-24 bg-paper px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Отзывы
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-5xl">
              Что говорят клиенты
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-16">
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* Производители — сдержанно, без акцента */}
      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft/60">
            Работаю напрямую с производителями
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <span className="inline-flex items-center gap-2 text-ink-soft/70">
              <Droplets className="size-4" />
              <span className="font-display text-lg tracking-wide">Siberian Wellness</span>
            </span>
            <span className="inline-flex items-center gap-2 text-ink-soft/70">
              <Leaf className="size-4" />
              <span className="font-display text-lg tracking-wide">Greenleaf</span>
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-ink-soft/50">
            Продукция сертифицирована и поставляется напрямую со складов компаний.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Вопросы
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-5xl">
              Частые вопросы
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <FaqAccordion items={faq} />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
