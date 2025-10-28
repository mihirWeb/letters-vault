"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      Cookies.set("auth_user", "true", {
        expires: 1,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      router.push("/vault");
    } else {
      setError("Incorrect password. Access denied to the castle.");
      setPassword("");
    }

    setIsLoading(false);
  };

  return (
    <div className="login-bg-container">
      <form
        onSubmit={handleSubmit}
        className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-96 h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6 shadow-lg top-60"
      >
        {/* Decorative elements */}
        <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-red-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-red-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
          <span className="font-extrabold text-2xl text-red-600">
            🏰 Enter the Castle
          </span>
          <p className="text-neutral-700 text-sm">
            Password required to access your secure vault
          </p>
        </div>

        <div className="flex gap-2">
          <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-red-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-red-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
              className="relative z-20 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-red-700 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition-all duration-200"
              required
              disabled={isLoading}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-neutral-50 px-4 py-2 rounded-lg hover:bg-red-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
            disabled={isLoading}
          >
            {isLoading ? "..." : "Enter"}
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-xs text-center bg-red-100 p-2 rounded border border-red-300 mt-1">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
