import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fedakardigital@gmail.com', // Kendi mail adresin
        pass: 'toihcdfcotkwfahy', // Az önce oluşturduğun 16 haneli şifre
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'fedakardigital@gmail.com',
      subject: 'Yeni Teklif İsteği - Fedakar Digital',
      text: `Gönderen: ${email}\n\nMesaj: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}