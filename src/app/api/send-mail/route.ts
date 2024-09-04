import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handler function for sending email
export async function POST(req: Request) {
  try {
    const { fullName, email, phone, message } = await req.json();

    // Validate incoming data
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Use true for port 465
      auth: {
        user: process.env.SMTP_USER, // SMTP email
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${fullName}" <${email}>`, // sender address
      to: "your_email@example.com", // receiver's email
      subject: "New Contact Form Submission", // Subject line
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ message: "Error sending email." }, { status: 500 });
  }
}
