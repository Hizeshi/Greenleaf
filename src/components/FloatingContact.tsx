"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Send, X } from "lucide-react";
import { TikTokIcon } from "@/components/TikTokIcon";
import { site, tgLink, waLink } from "@/lib/site";

/** Плавающая кнопка связи: раскрывается в WhatsApp и Telegram */
export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-[#25d366] py-2.5 pl-4 pr-5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>
            <a
              href={tgLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-[#2aabee] py-2.5 pl-4 pr-5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <Send className="size-5" />
              Telegram
            </a>
            <a
              href={site.contacts.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-[#010101] py-2.5 pl-4 pr-5 text-sm font-semibold text-white shadow-lg shadow-[#25f4ee]/20 ring-1 ring-[#25f4ee]/40 transition-transform hover:scale-105"
            >
              <TikTokIcon className="size-5" />
              TikTok
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Скрыть контакты" : "Показать контакты"}
        className="relative grid size-14 place-items-center rounded-full bg-forest text-cream shadow-xl shadow-forest/30 transition-colors hover:bg-forest-deep"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-forest animate-pulse-ring" />
        )}
        <motion.span
          key={open ? "close" : "chat"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
        </motion.span>
      </button>
    </div>
  );
}
