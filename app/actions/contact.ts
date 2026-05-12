"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: Record<string, string[]> }
  | { status: "server-error"; message: string };

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = schema.safeParse(raw);
  if (!result.success) {
    return {
      status: "error",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, message } = result.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Rohan Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_RECIPIENT ?? "rsrofficial99.work@gmail.com",
      replyTo: email,
      subject: `Personal Portfolio — Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:monospace;max-width:600px">
          <h2 style="border-bottom:2px solid #0a0a0a;padding-bottom:8px">New message from ${name}</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border:1px solid #eee;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });
    return { status: "success" };
  } catch {
    return { status: "server-error", message: "Failed to send message. Please try again." };
  }
}
