import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";
import { env } from "~/env.mjs";

sendgrid.setApiKey(env.SENDGRID_API_KEY);

interface ContactFormData extends NextApiRequest {
  body: {
    name: string;
    email: string;
    subject?: string;
    message: string;
  };
}

async function sendEmail(req: ContactFormData, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: env.SENDGRID_TO_EMAIL,
      from: env.SENDGRID_FROM_EMAIL,
      subject: "Portfolio Contact Form Submission",
      text: `
                Name: ${req.body.name}
                Email: ${req.body.email}
                Subject: ${req.body.subject}
                Message: ${req.body.message}
                `,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }

  console.log("Email sent successfully");
  res.status(200).json({ message: "Email sent successfully" });
}

export default async function handler(
  req: ContactFormData,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await sendEmail(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
