import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  const { email, firstName, lastName, age, mobile } = await req.json();

  if (!email) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  await prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName,
      age,
      mobile,
    },
  });

  return Response.json({ success: true });
}
