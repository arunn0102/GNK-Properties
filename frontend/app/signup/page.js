// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const router = useRouter();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // For now, just mock signup (later we’ll send this to backend)
//     if (!email || !password || !name) {
//       setError("All fields are required");
//       return;
//     }

//     // Simulate saving user
//     const res = await fetch("/api/signup", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name, email, password }),
// });

// const data = await res.json();
// if (res.ok) {
//   setSuccess(true);
//   setError("");
//   setTimeout(() => router.push("/login"), 1500);
// } else {
//   setError(data.error || "Something went wrong");
// }


//     // redirect after short delay
//     setTimeout(() => {
//       router.push("/login");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
//       <form
//         onSubmit={handleSignup}
//         className="p-10 rounded-3xl shadow-2xl bg-white max-w-sm w-full border border-amber-100"
//       >
//         <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
//           Create an Account
//         </h2>

//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}
//         {success && (
//           <p className="text-green-600 text-center mb-4">
//             Account created! Redirecting...
//           </p>
//         )}

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Create Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full py-2 rounded-lg bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white font-medium shadow-md hover:scale-105 transition"
//         >
//           Sign Up
//         </button>

//         <p className="text-sm text-gray-500 mt-4 text-center">
//           Already have an account?{" "}
//           <a href="/login" className="text-red-800 font-medium hover:underline">
//             Login here
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setError("");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white px-4">
      <form
        onSubmit={handleSignup}
        className="p-10 rounded-3xl shadow-2xl bg-white max-w-sm w-full border border-amber-100"
      >
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
          Create an Account
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-600 text-center mb-4">
            Account created! Redirecting...
          </p>
        )}

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          required
        />

        {/* Mobile Number */}
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          required
        />

        {/* Email Address */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:border-red-700 placeholder:text-gray-600 font-semibold text-gray-800"
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white font-medium shadow-md hover:scale-105 transition-all duration-300"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-red-800 font-semibold hover:underline"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}
