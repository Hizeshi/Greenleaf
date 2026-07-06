"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Марина",
    city: "Новосибирск",
    text: "Просила «что-нибудь от усталости» — вместо этого получила понятные вопросы про сон и питание, а уже потом список из трёх продуктов. Через месяц реально другое самочувствие.",
  },
  {
    name: "Алексей",
    city: "Казань",
    text: "Заказываю бытовую химию для дома: у ребёнка аллергия, обычные порошки не подходили. Здесь подобрали серию без отдушек — проблема ушла, а расход у концентратов заметно меньше.",
  },
  {
    name: "Ольга",
    city: "Санкт-Петербург",
    text: "Ценю, что никто не навязывает «каталог целиком». Написала в WhatsApp, обсудили задачу, оформила заказ по ссылке со скидкой — всё заняло минут пятнадцать.",
  },
  {
    name: "Дина",
    city: "Алматы",
    text: "Взяла уходовую косметику и чай. Понравилось, что после заказа со мной остались на связи: подсказали, как правильно вводить средства, чтобы кожа не отреагировала.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const review = reviews[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="absolute -top-8 left-0 size-16 text-gold/25" aria-hidden />
      <div className="min-h-[13rem] md:min-h-[10rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.21, 0.6, 0.35, 1] }}
            className="text-center"
          >
            <p className="font-display text-xl leading-relaxed text-forest md:text-2xl">
              «{review.text}»
            </p>
            <footer className="mt-6 text-sm font-medium uppercase tracking-wider text-ink-soft">
              {review.name} · {review.city}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Отзыв ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-2 bg-line hover:bg-sage"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
