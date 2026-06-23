import { NextResponse } from 'next/server';
import { SMTPClient } from 'emailjs';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO } = process.env;

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
            return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
        }

        const port = Number(SMTP_PORT) || 465;

        const client = new SMTPClient({
            user: SMTP_USER,
            password: SMTP_PASSWORD,
            host: SMTP_HOST,
            port,
            ssl: port === 465,
            tls: port !== 465,
        });

        await client.sendAsync({
            from: `Portfolio Contact <${SMTP_USER}>`,
            to: CONTACT_TO || SMTP_USER,
            'reply-to': `${name} <${email}>`,
            subject: `New portfolio message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }
}
