import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { nanoid } from "nanoid";

type Section = "blog" | "gallery" | "faculty" | "events";

function isValid(s: string | null): s is Section {
  return ["blog", "gallery", "faculty", "events"].includes(s ?? "");
}

export async function GET(req: NextRequest) {
  const section = req.nextUrl.searchParams.get("section");
  if (!isValid(section)) return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  const items = (await redis.get<any[]>(section)) ?? [];
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const { section, item } = await req.json();
  if (!isValid(section)) return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  const items = (await redis.get<any[]>(section)) ?? [];
  const newItem = { ...item, id: nanoid() };
  await redis.set(section, [...items, newItem]);
  return NextResponse.json(newItem);
}

export async function DELETE(req: NextRequest) {
  const { section, id } = await req.json();
  if (!isValid(section)) return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  const items = (await redis.get<any[]>(section)) ?? [];
  await redis.set(section, items.filter((i: any) => i.id !== id));
  return NextResponse.json({ success: true });
}
