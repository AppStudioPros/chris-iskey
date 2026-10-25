import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, topic, message } = await req.json() as {
      name?: string; email?: string; phone?: string; topic?: string; message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const from = process.env.RESEND_FROM || 'Christopher Key <noreply@mail.christiskey.life>';
    const to = process.env.CONTACT_TO || 'vaccinepolice@protonmail.com';

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name} — ${topic || 'General question'}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#f8f9fd;">
          <h2 style="font-size:28px;letter-spacing:-1px;margin:0 0 24px;color:#111d35;">New contact form submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:13px;color:#576070;width:120px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:15px;color:#111827;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:13px;color:#576070;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:15px;color:#111827;"><a href="mailto:${email}" style="color:#8b2c3e;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:13px;color:#576070;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:15px;color:#111827;">${phone}</td></tr>` : ''}
            <tr><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:13px;color:#576070;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Topic</td><td style="padding:10px 0;border-bottom:1px solid #e0e3d8;font-size:15px;color:#111827;">${topic || 'General question'}</td></tr>
          </table>
          <div style="margin-top:24px;">
            <p style="font-size:13px;color:#576070;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 10px;">Message</p>
            <p style="font-size:15px;color:#111827;line-height:1.8;white-space:pre-wrap;margin:0;">${message}</p>
          </div>
          <p style="margin-top:32px;font-size:12px;color:#9ba297;">Sent via christiskey.life contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ accepted: true });
  } catch (e) {
    console.error('contact_error', e);
    return NextResponse.json({ error: 'Unable to send your message right now. Please try again.' }, { status: 500 });
  }
}
