import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/lib/site";

/**
 * Короткие реферальные адреса: /go/siberian и /go/greenleaf.
 * Сами ссылки задаются в src/lib/site.ts — здесь ничего менять не нужно.
 */
const targets: Record<string, string> = {
  siberian: site.referral.siberian,
  greenleaf: site.referral.greenleaf,
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ brand: string }> }
) {
  const { brand } = await params;
  const target = targets[brand];
  return NextResponse.redirect(target ?? new URL("/", request.url), 307);
}
