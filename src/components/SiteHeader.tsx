"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

const nav = [
  { href: "/#about", label: "Обо мне" },
  { href: "/#directions", label: "Направления" },
  { href: "/#how", label: "Как заказать" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#faq", label: "Вопросы" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      {/* Индикатор прочтения страницы */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold"
        style={{ scaleX: progress }}
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-forest md:text-2xl"
          onClick={() => setOpen(false)}
        >
          точка<span className="text-gold">·</span>баланса
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-forest"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/25"
          >
            <MessageCircle className="size-4" />
            Написать мне
          </a>
        </nav>

        <button
          className="text-forest md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-cream/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-sage-soft"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
              >
                <MessageCircle className="size-4" />
                Написать мне
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
