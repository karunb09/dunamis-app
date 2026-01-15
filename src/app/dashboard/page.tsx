import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";

export default async function DashboardRedirect() {
  const token = (await cookies()).get("token")?.value;

  if (!token) redirect("/auth/login");

  const payload = verifyToken(token) as { role: string } | null;

  if (!payload) redirect("/auth/login");

  if (payload.role === "ADMIN") redirect("/dashboard/admin");
  if (payload.role === "INSTRUCTOR") redirect("/dashboard/instructor");

  redirect("/dashboard/student");
}
