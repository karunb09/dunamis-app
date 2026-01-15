"use client";

import { useLoading } from "@/context/LoadingContext";

export default function LoadingBar() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 z-50 h-[3px] w-full overflow-hidden">
      <div className="h-full w-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-loading-bar" />
    </div>
  );
}
