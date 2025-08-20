import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [strength, setStrength] = useState<string>("");

  function validate() {
    if (!name) return "Please enter your name";
    if (!email) return "Please enter your email";
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) return "Please enter a valid email";
    if (!password) return "Please enter a password";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (password !== confirmPassword) return "Passwords do not match";
    return null;
  }

  function checkPasswordStrength(pwd: string) {
    let score = 0;
    if (pwd.length >= 6) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return "Weak";
    if (score === 2) return "Medium";
    if (score >= 3) return "Strong";
    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Register the user
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Signup failed");
      }

      // 2️⃣ Trigger OTP send
      await fetch("http://localhost:5000/api/auth/send-verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      // 3️⃣ Redirect to VerifyOtp page
      navigate("/verify-otp", { state: { userId: data.userId } });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden"
      >
        <div className="p-6 sm:p-8">
          {/* 🔹 Logo at Top */}
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%282%29-9g4laL1EiPmzEURRA8f5yfZmMIVaJ1.png"
              alt="MentorMate"
              className="h-10 w-10"
            />
            <span className="ml-2 text-2xl font-bold text-[#5c59b1]">MentorMate</span>
          </div>

          <header className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Create an account
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Join us today — it’s quick and easy
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c59b1] focus:border-[#5c59b1]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c59b1] focus:border-[#5c59b1]"
                />
              </label>

              {/* 🔹 Password Field with Strength */}
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setStrength(checkPasswordStrength(e.target.value));
                  }}
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c59b1] focus:border-[#5c59b1]"
                />
                {password && (
                  <p
                    className={`mt-1 text-sm font-medium ${
                      strength === "Weak"
                        ? "text-red-500"
                        : strength === "Medium"
                        ? "text-yellow-500"
                        : "text-green-600"
                    }`}
                  >
                    Password strength: {strength}
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Confirm Password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c59b1] focus:border-[#5c59b1]"
                />
              </label>

              {error && (
                <div role="alert" className="text-sm text-red-600 bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#5c59b1] px-4 py-2 text-white font-medium shadow-sm hover:bg-[#4a4794] focus:outline-none focus:ring-2 focus:ring-[#5c59b1]"
                aria-busy={loading}
              >
                {loading ? (
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-20"
                    />
                    <path
                      d="M4 12a8 8 0 018-8"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                  </svg>
                ) : null}
                <span>{loading ? "Signing up..." : "Sign up"}</span>
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="text-[#5c59b1] hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
