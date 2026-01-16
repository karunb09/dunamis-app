import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, code } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (
    !user ||
    user.verificationCode !== code ||
    !user.verificationExpiresAt ||
    user.verificationExpiresAt < new Date()
  ) {
    return Response.json(
      { error: "Invalid or expired code" },
      { status: 400 }
    );
  }

  await prisma.user.update({
    where: { email },
    data: {
      emailVerified: true,
      verificationCode: null,
      verificationExpiresAt: null,
    },
  });

  return Response.json({ success: true });
}
