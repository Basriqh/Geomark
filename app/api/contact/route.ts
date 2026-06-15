import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectLocation: string;
  projectDescription: string;
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 2000);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const payload = body as Partial<ContactPayload>;

  const fullName = sanitize(payload.fullName);
  const companyName = sanitize(payload.companyName);
  const email = sanitize(payload.email);
  const phone = sanitize(payload.phone);
  const serviceRequired = sanitize(payload.serviceRequired);
  const projectLocation = sanitize(payload.projectLocation);
  const projectDescription = sanitize(payload.projectDescription);

  if (!fullName || !companyName || !email || !phone || !projectLocation || !projectDescription) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 422 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '587', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail = process.env.CONTACT_EMAIL ?? 'info@geomark.so';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn('[contact] SMTP not configured — logging inquiry instead');
    console.log('[contact-inquiry]', { fullName, companyName, email, phone, serviceRequired, projectLocation, projectDescription });
    return NextResponse.json({ success: true });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const e = {
    fullName: escapeHtml(fullName),
    companyName: escapeHtml(companyName),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    serviceRequired: escapeHtml(serviceRequired),
    projectLocation: escapeHtml(projectLocation),
    projectDescription: escapeHtml(projectDescription),
  };

  const html = `
    <h2>New Inquiry — GEOMARK Engineering Consultants</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${e.fullName}</td></tr>
      <tr><td><strong>Company</strong></td><td>${e.companyName}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${e.email}">${e.email}</a></td></tr>
      <tr><td><strong>Phone</strong></td><td>${e.phone}</td></tr>
      <tr><td><strong>Service</strong></td><td>${e.serviceRequired}</td></tr>
      <tr><td><strong>Location</strong></td><td>${e.projectLocation}</td></tr>
      <tr><td><strong>Description</strong></td><td style="max-width:500px;white-space:pre-wrap">${e.projectDescription}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"GEOMARK Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Project Inquiry from ${fullName} (${companyName})`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Email send failed:', err);
    return NextResponse.json({ error: 'Failed to send inquiry. Please try again.' }, { status: 500 });
  }
}
