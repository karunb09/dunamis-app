"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Signup failed");
      return;
    }

    router.push(`/auth/verify?email=${form.email}`);
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="Name"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-black text-white py-2">
          Create Account
        </button>
      </form>
    </div>
  );
}
