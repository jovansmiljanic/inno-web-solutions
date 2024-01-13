"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND);

export const contactUs = async (formData: FormData) => {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const message = formData.get("message");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "smiljanicjovan9@gmail.com",
    subject: "Inno Web Contact Us",
    text: `Hello, ${fullName} has requested a quotation! \n\n  Email: ${email} \n Message: ${message} `,
  });
};
