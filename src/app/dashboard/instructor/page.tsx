import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";

export default async function InstructorDashboard() {
  const token = (await cookies()).get("token")?.value;
  const payload = verifyToken(token!) as { role: string };

  if (payload.role !== "INSTRUCTOR") redirect("/dashboard");

  return <h1>Instructor Dashboard</h1>;
}
