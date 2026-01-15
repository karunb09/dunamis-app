"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyPage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") || "";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    if (!res.ok) {
      setError("Invalid code");
      return;
    }

    router.push("/auth/login");
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-xl font-bold mb-4">Verify Email</h1>
      <p className="mb-4">Code sent to {email}</p>

      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="6-digit code"
          className="w-full border p-2"
          onChange={(e) => setCode(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-black text-white py-2">Verify</button>
      </form>
    </div>
  );
}
