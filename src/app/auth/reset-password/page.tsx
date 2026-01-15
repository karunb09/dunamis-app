"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get("token") || "";
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    if (!res.ok) {
      setError("Invalid or expired link");
      return;
    }

    router.push("/auth/login");
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-xl font-bold mb-4">Reset Password</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          type="password"
          className="w-full border p-2"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-black text-white py-2">
          Reset Password
        </button>
      </form>
    </div>
  );
}
