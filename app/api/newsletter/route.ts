import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Christopher Key Site <noreply@mail.christiskey.life>",
      to: ["vaccinepolice@protonmail.com"],
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #f8f6f1; border-radius: 10px;">
          <h2 style="color: #14213d; margin-bottom: 8px;">New Newsletter Subscriber</h2>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">Someone signed up via christiskey.life</p>
          <div style="background: #fff; border-radius: 8px; padding: 20px 24px; border: 1px solid #e2ddd5;">
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #14213d;">${email}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">christiskey.life</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
