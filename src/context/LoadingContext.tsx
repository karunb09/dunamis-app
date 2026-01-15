"use client";

import { createContext, useContext, useState } from "react";

type LoadingContextType = {
  loading: boolean;
  start: () => void;
  stop: () => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        start: () => setLoading(true),
        stop: () => setLoading(false),
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) {
    throw new Error("useLoading must be used inside LoadingProvider");
  }
  return ctx;
}
