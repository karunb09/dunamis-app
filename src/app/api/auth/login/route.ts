import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.emailVerified) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({
    id: user.id,
    role: user.role,
  });

  return new Response(
    JSON.stringify({
      id: user.id,
      name: user.name,
      role: user.role,
    }),
    {
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=604800`,
      },
    }
  );
}