"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SignupLayout from "@/components/signup/SignupLayout";

export default function SignupAccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("signup_email");
    if (!email) return;

    fetch("/api/auth/signup-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("signup_email", data.email);

        if (data.status === "RESUME") {
          router.push("/auth/signup/verify");
          return;
        }

        if (data.status === "PROFILE_PENDING") {
          router.replace("/auth/signup/personal");
        }

        if (data.status === "VERIFICATION_PENDING") {
          router.replace("/auth/signup/verify");
        }

        if (data.status === "VERIFIED") {
          router.replace("/auth/login");
        }
      });
  }, [router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Signup failed");
      return;
    }

    const data = await res.json();

    if (data.status === "PENDING_VERIFICATION") {
      localStorage.setItem("signup_email", data.email);
      router.push("/auth/signup/personal");
      return;
    }

    localStorage.setItem("signup_email", email);
    router.push("/auth/signup/personal");
  }

  return (
    <SignupLayout step={1} title="Account Creation">
      <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
        {/* <h1 className="text-2xl font-bold">Account Creation</h1> */}

        <input
          placeholder="Email address"
          className="w-full border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create password"
          className="w-full border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border p-2"
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="custom-transition bg-orange-500 text-white px-6 py-2 rounded">
          Continue
        </button>
      </form>
    </SignupLayout>
  );
}
