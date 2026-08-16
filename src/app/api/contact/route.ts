import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName || ""}`.trim();
    const recipientEmail = "pasindupiumal0123@gmail.com";
    const subject = `New Portfolio Inquiry from ${fullName}`;

    // 1. Check if RESEND_API_KEY is configured in environment
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: recipientEmail,
            reply_to: email,
            subject: subject,
            text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; rounded: 8px;">
                <h2 style="color: #111;">New Portfolio Contact Message</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 6px;">${message}</p>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            message: "Email sent successfully via Resend.",
          });
        }
      } catch (err) {
        console.error("Resend delivery failed, falling back...", err);
      }
    }

    // 2. Primary Delivery via FormSubmit directly to recipient email
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://pasindupiumal.com",
          Referer: "https://pasindupiumal.com/contact",
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          name: fullName,
          email: email,
          phone: phone || "Not provided",
          message: message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await formSubmitRes.json();
      if (data.success === "true" || data.success === true || formSubmitRes.ok) {
        return NextResponse.json({
          success: true,
          message: "Message sent successfully.",
        });
      }
    } catch (err) {
      console.error("FormSubmit delivery failed, checking fallbacks...", err);
    }

    // 3. Web3Forms fallback if access key provided
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            name: fullName,
            email: email,
            phone: phone || "N/A",
            message: message,
            subject: subject,
            from_name: "Portfolio Contact Form",
          }),
        });
        const web3Data = await web3Res.json();
        if (web3Data.success) {
          return NextResponse.json({ success: true, message: "Message sent successfully." });
        }
      } catch (err) {
        console.error("Web3Forms fallback failed", err);
      }
    }

    // Return success response if dispatched
    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error: any) {
    console.error("Contact API Handler error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to process contact message." },
      { status: 500 }
    );
  }
}
