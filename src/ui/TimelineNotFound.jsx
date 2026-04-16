import Link from "next/link";
import React from "react";

const TimelineNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 px-4">
      <div className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-800">No Contact Found</h1>

        {/* Message */}
        <p className="mt-3 text-slate-600">
          Not Found Any Contact Information... Connect with some friends to get
          started.
        </p>

        {/* Action */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition"
          >
            Add Friends
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimelineNotFound;
