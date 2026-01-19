"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //user auth context
  const { user, setUser, loading } = useAuth();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  }

  if (loading) return null;
  //end user auth context

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          DUNAMIS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className={
              isActive("/")
                ? "border px-1 py-1 rounded-full bg-color-orange-500 text-orange-500 font-medium"
                : "transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:border px-1 py-1 rounded-full hover:text-orange-500"
            }
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={
              isActive("/courses")
                ? "border px-1 py-1 rounded-full bg-color-orange-500 text-orange-500 font-medium"
                : "transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:border px-1 py-1 rounded-full hover:text-orange-500"
            }
          >
            Courses
          </Link>
          <Link
            href="/offline-centres"
            className={
              isActive("/offline-centres")
                ? "border px-1 py-1 rounded-full bg-color-orange-500 text-orange-500 font-medium"
                : "transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:border px-1 py-1 rounded-full hover:text-orange-500"
            }
          >
            Offline Centres
          </Link>
          <Link
            href="/store"
            className={
              isActive("/store")
                ? "border px-1 py-1 rounded-full bg-color-orange-500 text-orange-500 font-medium"
                : "transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:border px-1 py-1 rounded-full hover:text-orange-500"
            }
          >
            Store
          </Link>

          {/* More Dropdown */}
          {/* <div className="relative group cursor-pointer">
            <span className="hover:text-orange-500">More ▾</span>
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>
              <Link
                href="/testimonials"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Testimonials
              </Link>
              <Link
                href="/success-stories"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div> */}
          <div ref={ref} className="relative group cursor-pointer">
            <button
              onClick={() => setOpen(!open)}
              className="transition hover:-translate-y-[1px] hover:shadow-md hover:border px-1 py-1 rounded-full active:scale-[0.98] hover:text-orange-500"
            >
              More ▾
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50">
                <Link
                  href="/about"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:text-orange-500 hover:shadow-md block px-2 py-3 text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/testimonials"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:text-orange-500 hover:shadow-md block px-2 py-3 text-sm"
                >
                  Testimonials
                </Link>
                <Link
                  href="/success-stories"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:text-orange-500 hover:shadow-md block px-2 py-3 text-sm"
                >
                  Success Stories
                </Link>
                <Link
                  href="/contact"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] hover:text-orange-500 hover:shadow-md block px-2 py-3 text-sm"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
          
          {/* Login, signup and dashboard Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <div className="flex gap-4">
                <Link
                  href="/auth/login"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] border px-4 py-2 rounded-full text-sm hover:text-orange-500"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup/account"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                <span>{user.name}</span>
                <Link
                  href="/dashboard"
                  className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] border px-4 py-2 rounded-full text-sm hover:text-orange-500"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="transition hover:-translate-y-[1px] hover:shadow-md hover:border px-1 py-1 rounded-full active:scale-[0.98] hover:text-orange-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-b px-6 py-4 space-y-4">
          <Link href="/courses" className="block">
            Courses
          </Link>
          <Link href="/offline-centres" className="block">
            Offline Centres
          </Link>
          <Link href="/store" className="block">
            Store
          </Link>
          <Link href="/about" className="block">
            About Us
          </Link>
          <Link href="/contact" className="block">
            Contact Us
          </Link>
          {!user ? (
            <>
              <Link href="/auth/login" className="block">
                Login
              </Link>
              <Link
                href="/signup/account"
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span>{user.name}</span>
              <Link href="/dashboard" className="pt-4 block">
                Dashboard
              </Link>
              <button onClick={logout} className="block">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
