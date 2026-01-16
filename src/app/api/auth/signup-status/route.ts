import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ status: "NEW" });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return Response.json({ status: "NEW" });
  }

  if (user.emailVerified) {
    return Response.json({ status: "VERIFIED" });
  }

  const profileComplete =
    !!user.firstName &&
    !!user.lastName &&
    !!user.age &&
    !!user.mobile;

  if (!profileComplete) {
    return Response.json({ status: "PROFILE_PENDING" });
  }

  return Response.json({ status: "VERIFICATION_PENDING" });
}
