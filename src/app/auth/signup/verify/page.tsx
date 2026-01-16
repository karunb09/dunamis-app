"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SignupVerifyPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("signup_email");
    if (!stored) router.push("/signup/account");
    else setEmail(stored);
  }, [router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    if (!res.ok) {
      setError("Invalid or expired code");
      return;
    }

    localStorage.removeItem("signup_email");
    router.push("/auth/login");
  }

  async function resend() {
    await fetch("/api/auth/resend-verification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Email Verification</h1>
      <p className="text-sm text-gray-500">
        Code sent to {email.replace(/(.{2}).+(@.+)/, "$1****$2")}
      </p>

      <input
        placeholder="6-digit code"
        className="w-full border p-2 tracking-widest text-center"
        onChange={(e) => setCode(e.target.value)}
      />

      {error && <p className="text-red-600">{error}</p>}

      <button className="bg-orange-500 text-white px-6 py-2 rounded">
        Submit
      </button>

      <button
        type="button"
        onClick={resend}
        className="text-sm text-blue-600 underline"
      >
        Resend verification code
      </button>
    </form>
  );
}
