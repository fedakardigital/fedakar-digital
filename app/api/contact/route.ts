import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

xport async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    // 1. E-posta ve mesaj kontrolü (Basit @ doğrulaması)
    if (!email || !email.includes('@') || !message || message.trim() === "") {
      return NextResponse.json(
        { error: "Lütfen geçerli bir e-posta adresi ve mesaj giriniz." },
        { status: 400 }
      );
    }

    // 2. IP bazlı rate limit kontrolü (Upstash)
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const today = new Date().toISOString().split('T')[0];
    const ipKey = `limit:${today}:${ip}`;

    const count = (await redis.get<number>(ipKey)) || 0;
    if (count >= 3) {
      return NextResponse.json(
        { error: "Bugünlük mesaj limitinize (3 mesaj) ulaştınız." },
        { status: 429 }
      );
    }

    // ... nodemailer ve diğer işlemler buraya ...

    await transporter.sendMail({
      from: email,
      to: 'fedakardigital@gmail.com',
      subject: 'Yeni Teklif İsteği - Fedakar Digital',
      text: `Gönderen: ${email}\n\nMesaj: ${message}`,
    });

    await redis.set(ipKey, count + 1, { ex: 86400 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}