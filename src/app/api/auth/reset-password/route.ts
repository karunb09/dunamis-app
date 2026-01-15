import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpiresAt: {
        gt: new Date(),
      },
    },
  });

  if (!user) {
    return Response.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordHash,
      resetToken: null,
      resetTokenExpiresAt: null,
    },
  });

  return Response.json({ success: true });
}
