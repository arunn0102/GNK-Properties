"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic"; // 🚀 prevent static prerender errors

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("next") || "/services";

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push(redirect);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white px-4">
      <form
        onSubmit={handleLogin}
        className="p-10 rounded-3xl shadow-2xl bg-white max-w-sm w-full border border-amber-100"
      >
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
          Login to Continue
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white font-medium shadow-md hover:scale-105 transition-all duration-300"
        >
          Login
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Demo: <b>demo@user.com</b> / <b>demo123</b>
        </p>
      </form>
    </div>
  );
}

// ✨ Elegant shimmer loader
function LoadingFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin mb-6"></div>
      <div className="text-lg font-medium text-gray-700 animate-pulse">
        Preparing your experience...
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoginForm />
    </Suspense>
  );
}
