"use client";

import SignupLayout from "@/components/signup/SignupLayout";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SignupVerifyPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [info, setInfo] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("signup_email");
    if (!stored) router.push("/signup/account");
    else setEmail(stored);
  }, [router]);

  useEffect(() => {
    if (cooldown === 0) return;

    const timer = setInterval(() => {
      setCooldown((c) => c - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

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
    if (cooldown > 0) return;

    await fetch("/api/auth/resend-verification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setInfo("Verification code sent");
    setCooldown(30);
  }

  return (
    <SignupLayout
      step={3}
      title="Email Verification"
      backTo="/auth/signup/personal"
    >
      <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
        <p className="text-sm text-gray-500">
          Code sent to {email.replace(/(.{2}).+(@.+)/, "$1****$2")}
        </p>

        <input
          placeholder="6-digit code"
          className="w-full border p-2 tracking-widest text-center"
          onChange={(e) => setCode(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="custom-transition bg-orange-500 text-white px-6 py-2 rounded">
          Submit
        </button>

        <button
          type="button"
          onClick={resend}
          disabled={cooldown > 0}
          className={`text-sm ${
            cooldown > 0
              ? "text-sm text-gray-400 cursor-not-allowed px-2 py-2"
              : "text-sm text-blue-600 hover:underline px-2 py-2"
          }`}
        >
          {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend verification code"}
        </button>

        {cooldown == 0 ? "" : info && <p className="text-green-600 text-sm mt-2">{info}</p>}
      </form>
    </SignupLayout>
  );
}
