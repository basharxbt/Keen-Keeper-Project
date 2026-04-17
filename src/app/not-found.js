"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-800 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold tracking-widest text-slate-900">
          404
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl border border-slate-400 hover:bg-slate-200 transition"
          >
            Go Back
          </button>
        </div>

        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-blue-300/30 blur-3xl rounded-full" />
        </div>
      </div>
    </div>
  );
}
