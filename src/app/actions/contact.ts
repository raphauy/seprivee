"use server";

import { Resend } from "resend";
import ContactNotificationEmail from "@/components/emails/contact-notification-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  city: string;
  date?: string;
  guests: string;
  experienceType?: string;
  dietaryRestrictions?: string;
  message?: string;
};

export type ContactFormResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResult> {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.city || !data.guests) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    // Send email using Resend with React Email template
    const fromEmail = process.env.EMAIL_FROM || "noreply@seprivee.com";
    const { error } = await resend.emails.send({
      from: `SePrivée <${fromEmail}>`,
      //to: ["hello@seprivee.com"],
      to: ["alesotohof@gmail.com"],
      //cc: ["alesotohof@gmail.com"],
      bcc: ["rapha.uy@rapha.uy"],
      replyTo: data.email,
      subject: `Nueva Consulta: ${data.experienceType || "General"} - ${data.name}`,
      react: ContactNotificationEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        date: data.date,
        guests: data.guests,
        experienceType: data.experienceType,
        dietaryRestrictions: data.dietaryRestrictions,
        message: data.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Failed to send message. Please try again or contact us directly via WhatsApp.",
      };
    }

    return {
      success: true,
      message: "Thank you for your inquiry! We'll be in touch within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again or contact us directly via WhatsApp.",
    };
  }
}
