"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <main className="min-h-screen bg-[#F4EDD0] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 shadow-sm w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image src="/logo.png" alt="Bright Beams Academy" width={180} height={56} className="w-auto h-14" />
          </Link>
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-1 text-center">Admin Portal</h1>
        <p className="text-gray-400 text-sm mb-6 text-center">Bright Beams Academy</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#4A90D9]"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#4A90D9] text-white py-2.5 rounded-full font-semibold hover:bg-[#2d6fa8] transition-colors disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Log In"}
          </button>
        </form>
      </div>
    </main>
  );
}
