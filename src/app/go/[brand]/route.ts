import { NextResponse, type NextRequest } from "next/server";
import { site, waLink } from "@/lib/site";

/**
 * Короткие адреса: /go/siberian и /go/greenleaf.
 * siberian — реферальная регистрация Привилегированного клиента;
 * greenleaf — личный чат WhatsApp (у компании нет реферальных ссылок).
 * Сами ссылки задаются в src/lib/site.ts — здесь ничего менять не нужно.
 */
function targets(): Record<string, string> {
  return {
    siberian: site.referral.siberian,
    greenleaf: waLink(site.greenleafPreset),
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ brand: string }> }
) {
  const { brand } = await params;
  const target = targets()[brand];
  return NextResponse.redirect(target ?? new URL("/", request.url), 307);
}
