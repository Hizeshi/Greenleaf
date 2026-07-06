import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContact } from "@/components/FloatingContact";
import { site } from "@/lib/site";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} — натуральные продукты для здоровья, красоты и дома`,
    template: `%s — ${site.brand}`,
  },
  description:
    "Личный подбор натуральных продуктов: витамины и нутрицевтика, уход за собой, экологичные средства для дома. Заказ по клубной цене и сопровождение на связи.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
