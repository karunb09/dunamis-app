import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return Response.json({ error: "User already exists" }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      verificationCode,
    },
  });

  await sendVerificationEmail(email, verificationCode);

  return Response.json({ success: true });
}
