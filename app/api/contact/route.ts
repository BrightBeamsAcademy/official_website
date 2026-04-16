import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, subject, message } = await req.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Bright Beams Website <noreply@brightbeams-academy.com>",
    to: "info@brightbeams-academy.com",
    replyTo: email,
    subject: `[Contact Form] ${subject} — ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
