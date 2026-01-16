import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const token = (await cookies()).get("token")?.value;
  if (!token) return Response.json(null);

  const payload = verifyToken(token) as { id: string } | null;
  if (!payload) return Response.json(null);

  const user = await prisma.user.findUnique({
    where: { id: payload.id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
    },
  });

  return Response.json(user);
}
