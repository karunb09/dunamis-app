import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { sendResetPasswordEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  // Prevent email enumeration
  if (!user) {
    return Response.json({ success: true });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 30 * 60 * 1000); // 30 min

  await prisma.user.update({
    where: { email },
    data: {
      resetToken: token,
      resetTokenExpiresAt: expires,
    },
  });

  await sendResetPasswordEmail(email, token);

  return Response.json({ success: true });
}
