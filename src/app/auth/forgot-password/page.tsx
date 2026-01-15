"use client";

import { useState } from "react";
import { useLoading } from "@/context/LoadingContext";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { start, stop } = useLoading();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    start();
    try {
      await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSent(true);
    } finally {
      stop();
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-xl font-bold mb-4">Forgot Password</h1>

      {sent ? (
        <p>If an account exists, a reset link has been sent.</p>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full border p-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-black text-white py-2">
            Send reset link
          </button>
        </form>
      )}
    </div>
  );
}
