"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND);

export const newsletterEmail = async (formData: FormData) => {
  const email = formData.get("email");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dusanantonijevic2404@gmail.com",
    subject: "Medisoft newsletter",
    text: `Hello, ${email} joined your newsletter!`,
  });
};

export const quotationEmail = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dusanantonijevic2404@gmail.com",
    subject: "Medisoft Quotation",
    text: `Hello, ${firstName} has requested a quotation! \n\n Name: ${firstName} ${lastName} \n Email: ${email} \n Phone number: ${phoneNumber} `,
  });
};
