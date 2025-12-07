// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return NextResponse.redirect(new URL("/?error=1", request.url));
  }

  // TODO: Integrate with your email provider (Mailchimp, ConvertKit, Supabase, etc.)
  console.log("New early access signup:", email);

  return NextResponse.redirect(new URL("/?subscribed=1", request.url));
}