import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key_for_build");

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    // Max 5 submissions per hour
    return false;
  }

  limit.count++;
  return true;
}

// Validation helpers
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name: string): boolean {
  return name.length >= 2 && name.length <= 80 && /^[a-zA-Z\s\u0600-\u06FF]+$/.test(name);
}

function validateOrganization(org: string): boolean {
  return org.length >= 2 && org.length <= 120;
}

function validateMessage(message: string): boolean {
  return message.length >= 20 && message.length <= 2000;
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "dummy_key_for_build") {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 503 }
      );
    }

    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, organization, phone, projectType, message, consent } = body;

    // Validate required fields
    if (!name || !email || !organization || !message || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate field formats
    if (!validateName(name)) {
      return NextResponse.json(
        { error: "Invalid name format" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!validateOrganization(organization)) {
      return NextResponse.json(
        { error: "Invalid organization format" },
        { status: 400 }
      );
    }

    if (!validateMessage(message)) {
      return NextResponse.json(
        { error: "Message must be between 20 and 2000 characters" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      organization: sanitizeInput(organization),
      phone: phone ? sanitizeInput(phone) : "Not provided",
      projectType: projectType || "Not specified",
      message: sanitizeInput(message),
    };

    // Generate reference ID
    const referenceId = `REF-${Date.now().toString(36).toUpperCase()}`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Cordoba AI Contact Form <noreply@cordoba-ai.com>",
      to: ["info@cordoba-ai.com"],
      replyTo: sanitizedData.email,
      subject: `New Contact Form Submission - ${sanitizedData.projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #4B5563; margin-bottom: 5px; }
              .value { color: #1F2937; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center; color: #6B7280; font-size: 14px; }
              .reference { background: #EEF2FF; padding: 10px; border-radius: 5px; font-family: monospace; font-weight: 600; color: #4F46E5; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Reference ID: <span class="reference">${referenceId}</span></p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${sanitizedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Organization:</div>
                  <div class="value">${sanitizedData.organization}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${sanitizedData.phone}</div>
                </div>
                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${sanitizedData.projectType}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  <p>This email was sent from the Cordoba AI contact form.</p>
                  <p>IP Address: ${ip}</p>
                  <p>Timestamp: ${new Date().toISOString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Email send error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    // Return success with reference ID
    return NextResponse.json({
      success: true,
      referenceId,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
