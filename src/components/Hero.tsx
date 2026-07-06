"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Leaf, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { site, waLink } from "@/lib/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const line = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.21, 0.6, 0.35, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      {/* Живой фон: дышащие пятна цвета */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 size-[34rem] rounded-full bg-sage/40 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 size-[38rem] rounded-full bg-gold-soft/70 blur-3xl animate-blob-slow" />
        <div className="absolute -bottom-40 left-1/4 size-[30rem] rounded-full bg-sage-soft blur-3xl animate-blob" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.2fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={line}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper/70 px-4 py-1.5 text-sm font-medium text-ink-soft backdrop-blur"
          >
            <Leaf className="size-4 text-gold" />
            {site.owner.role}
          </motion.p>

          <h1 className="font-display text-5xl leading-[1.05] text-forest md:text-7xl">
            <motion.span variants={line} className="block">
              Здоровье любит
            </motion.span>
            <motion.span variants={line} className="block italic text-gold">
              осознанный выбор
            </motion.span>
          </h1>

          <motion.p
            variants={line}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Витамины и нутрицевтика, уход за собой, экологичная химия для дома —
            подбираю под вашу задачу, а не «всё подряд из каталога». Вы платите
            клубную цену, я остаюсь на связи.
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-cream transition-all duration-300 hover:bg-forest-deep hover:shadow-xl hover:shadow-forest/25"
            >
              <MessageCircle className="size-5 transition-transform group-hover:-rotate-12" />
              Подобрать со мной
            </a>
            <Link
              href="/#directions"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-7 py-3.5 font-semibold text-forest transition-all duration-300 hover:border-forest hover:bg-forest/5"
            >
              Смотреть направления
            </Link>
          </motion.div>

          <motion.div
            variants={line}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold" />
              Сертифицированные производители
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="size-4 text-gold" />
              Клубные скидки до 50%
            </span>
          </motion.div>
        </motion.div>

        {/* Правая колонка: парящие карточки */}
        <div className="relative hidden h-[26rem] lg:block" aria-hidden>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 m-auto size-72 rounded-full border border-gold/30"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="absolute inset-0 m-auto size-96 rounded-full border border-sage/40"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute left-2 top-8 animate-float"
          >
            <div className="rounded-2xl border border-line bg-paper/90 p-5 shadow-xl shadow-forest/5 backdrop-blur">
              <p className="font-display text-3xl text-forest">7+</p>
              <p className="mt-1 text-sm text-ink-soft">лет с натуральными
                <br />продуктами</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute right-0 top-1/3 animate-float-late"
          >
            <div className="rounded-2xl border border-line bg-paper/90 p-5 shadow-xl shadow-forest/5 backdrop-blur">
              <p className="font-display text-3xl text-forest">300+</p>
              <p className="mt-1 text-sm text-ink-soft">человек заказывают
                <br />со мной регулярно</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-6 left-1/4 animate-float"
          >
            <div className="rounded-2xl border border-line bg-forest p-5 text-cream shadow-xl shadow-forest/20">
              <p className="font-display text-3xl text-gold">2</p>
              <p className="mt-1 text-sm text-cream/80">направления:
                <br />для себя и для дома</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-soft"
        aria-hidden
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
