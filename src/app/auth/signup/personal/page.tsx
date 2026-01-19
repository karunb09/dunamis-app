"use client";

import SignupLayout from "@/components/signup/SignupLayout";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SignupPersonalPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("signup_email");
    if (!email) {
      router.replace("/auth/signup/account");
      return;
    } else {
      setEmail(email);
    }
  }, [router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/auth/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        firstName: form.firstName,
        lastName: form.lastName,
        age: Number(form.age),
        mobile: form.mobile,
      }),
    });

    router.push("/auth/signup/verify");
  }

  return (
    <SignupLayout step={2} title="Personal Information" backTo="/auth/signup/account">
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
      {/* <h1 className="text-2xl font-bold">Personal Information</h1> */}

      <input
        placeholder="First name"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />

      <input
        placeholder="Last name"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />

      <input
        placeholder="Age"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <input
        placeholder="Mobile number"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
      />

      <button className="custom-transition bg-orange-500 text-white px-6 py-2 rounded">
        Continue
      </button>
    </form>
    </SignupLayout>
  );
}
