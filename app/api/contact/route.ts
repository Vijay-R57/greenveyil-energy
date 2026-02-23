import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const {
            serviceType,
            fullName,
            companyName,
            city,
            pinCode,
            whatsapp,
            electricityBill
        } = await req.json();

        // Create a transporter. 
        // For this to actually send emails, you need to configure valid SMTP credentials in your .env.local file
        // Example: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.zoho.in',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // Needs an app password if using Gmail
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER || '"Solar Consultation" <noreply@greenveyil.com>',
            to: 'Ram@greenveyil.com',
            subject: `New Solar Consultation Request: ${serviceType}`,
            html: `
        <h2>New Consultation Request</h2>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        ${companyName ? `<p><strong>Company/Society Name:</strong> ${companyName}</p>` : ''}
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Pin Code:</strong> ${pinCode}</p>
        <p><strong>WhatsApp Number:</strong> ${whatsapp}</p>
        <p><strong>Average Monthly Electricity Bill:</strong> ${electricityBill} INR</p>
      `,
        };

        // If SMTP_USER is not provided, we simulate a successful response
        // so the frontend works without crashing during development.
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn("SMTP credentials not provided. Simulating email send:");
            console.log(mailOptions);
            return NextResponse.json({ message: 'Email simulated successfully' }, { status: 200 });
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {
                message: 'Failed to send email',
                errorDetail: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}
