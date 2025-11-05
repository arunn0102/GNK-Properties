"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("next") || "/services";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.ok) {
      router.push(redirect);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#faf5f4] via-[#fff] to-[#ffecec] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] rounded-full blur-3xl opacity-20 -top-20 -right-20"></div>

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 p-10 rounded-3xl shadow-2xl bg-white max-w-sm w-full border border-red-100"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center text-[#7a0000] mb-6"
        >
          Welcome Back
        </motion.h2>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-700 bg-red-50 border border-red-100 px-4 py-2 rounded-lg text-center mb-4"
          >
            {error}
          </motion.p>
        )}

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-900 mb-1 block">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border text-gray-800 rounded-lg focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 placeholder-gray-400 transition"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label className="text-sm font-medium text-gray-900 mb-1 block">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-lg focus:outline-none text-gray-800 placeholder-gray-400 focus:border-red-700 focus:ring-1 focus:ring-red-700 transition pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
        >
          {loading ? (
            <span className="animate-pulse">Authenticating...</span>
          ) : (
            <>
              <LogIn size={18} />
              Login
            </>
          )}
        </motion.button>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Demo Credentials:
          <br />
          <b>demo@user.com</b> / <b>demo123</b>
        </p>

        <p className="text-xs text-gray-400 mt-4 text-center">
          By logging in, you agree to our{" "}
          <a href="/terms" className="text-red-700 hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="/privacy" className="text-red-700 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </motion.form>
    </div>
  );
}
