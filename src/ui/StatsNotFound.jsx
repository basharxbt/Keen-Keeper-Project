import Link from "next/link";
import React from "react";

const StatsNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 px-4">
      <div className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-slate-800">
          No Contact Stats Found
        </h1>

        <p className="mt-3 text-slate-600">
          Connect with some friends and get back here to see your stats.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition"
          >
            Connect With Friends
          </Link>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatsNotFound;
