const items = [
  "натуральные составы",
  "клубные цены",
  "доставка по всей стране",
  "личный подбор",
  "проверено на себе",
  "сопровождение после заказа",
];

/** Бегущая строка-разделитель */
export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-ink-soft"
          >
            {text}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
