"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useLoading } from "@/context/LoadingContext";

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth();
  const { start, stop } = useLoading();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    start();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Invalid credentials");
        return;
      }

      const user = await res.json();
      setUser(user);
      router.push("/");
    } finally {
      stop();
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="Email"
          className="w-full border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-black text-white py-2">
          Login
        </button>

        {/* 👇 Add this */}
        <div className="text-right">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
}
