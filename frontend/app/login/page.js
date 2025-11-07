// "use client";

// import { useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { signIn } from "next-auth/react";

// // 🔥 Prevent static pre-rendering on Vercel
// export const dynamic = "force-dynamic";

// function LoginContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirect = searchParams.get("next") || "/";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//    const res = await fetch("/api/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ email, password }),
// });

// const data = await res.json();

// if (res.ok) {
//   router.push("/");
// } else {
//   setError(data.error || "Invalid credentials");
// }


//     if (res?.ok) router.push(redirect);
//     else setError("Invalid credentials, please try again.");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="p-10 rounded-3xl shadow-2xl bg-white max-w-sm w-full border border-amber-100"
//       >
//         <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
//           Welcome Back
//         </h2>

//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email Address"
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full py-2 rounded-lg bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white font-medium shadow-md hover:scale-105 transition-all duration-300"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// // ✅ Suspense wrapper prevents the CSR bailout error
// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white">
//           <div className="w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin mb-6"></div>
//           <div className="text-lg font-medium text-gray-700 animate-pulse">
//             Loading login page...
//           </div>
//         </div>
//       }
//     >
//       <LoginContent />
//     </Suspense>
//   );
// }


"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

// 🔥 Prevent static pre-rendering on Vercel
export const dynamic = "force-dynamic";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("next") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false); // 👈 toggle between Login & Signup

  // ✅ handle login
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
      setError("Invalid credentials, please try again.");
    }
  };

  // ✅ handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // auto-login after signup
        await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        router.push("/");
      } else {
        setError(data.error || "Signup failed. Try again.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white px-4">
      <form
        onSubmit={isSignup ? handleSignup : handleLogin}
        className="p-10 rounded-3xl shadow-2xl bg-white max-w-sm w-full border border-amber-100"
      >
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white font-medium shadow-md hover:scale-105 transition-all duration-300"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* Toggle login/signup */}
        <p className="text-center text-gray-700 mt-6">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="text-red-700 font-semibold hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
  type="button"
  onClick={() => router.push("/signup")}
  className="text-red-700 font-semibold hover:underline"
>
  Sign up
</button>

            </>
          )}
        </p>
      </form>
    </div>
  );
}

// ✅ Suspense wrapper prevents CSR bailout error
export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white">
          <div className="w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin mb-6"></div>
          <div className="text-lg font-medium text-gray-700 animate-pulse">
            Loading login page...
          </div>
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
