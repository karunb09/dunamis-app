import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.emailVerified) {
    return Response.json({ success: true }); // prevent email enumeration
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.user.update({
    where: { email },
    data: {
      verificationCode: code,
      verificationExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  await sendVerificationEmail(email, code);

  return Response.json({ success: true });
}
