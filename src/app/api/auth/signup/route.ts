import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing && !existing.emailVerified) {
    return Response.json({
      status: "RESUME",
      email: existing.email,
    });
  }


  if (existing && !existing.emailVerified) {
    return Response.json({
      status: "PENDING_VERIFICATION",
      email: existing.email,
    });
  }

  if (existing && existing.emailVerified) {
    return Response.json(
      { error: "Account already exists. Please login." },
      { status: 400 }
    );
  }


  const passwordHash = await bcrypt.hash(password, 12);
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.user.create({
    data: {
      email,
      passwordHash,
      verificationCode: code,
      verificationExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  await sendVerificationEmail(email, code);

  return Response.json({ success: true });
}
