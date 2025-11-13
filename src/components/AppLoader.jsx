import { useEffect, useState } from "react";

export default function AppLoader({ progress }) {
  return (
    <div
      className="
      fixed inset-0 z-[999999]
      flex flex-col items-center justify-center
      bg-black
      text-white
      select-none
    "
    >
      {/* Loader Ring */}
      <div
        className="
        w-32 h-32 rounded-full border-4 border-purple-600
        border-t-transparent animate-spin
        shadow-[0_0_20px_rgba(120,0,255,0.6)]
      "
      />

      {/* Percentage */}
      <p
        className="mt-6 text-3xl font-extrabold tracking-widest
        text-purple-300 drop-shadow-[0_0_8px_rgba(150,0,255,0.7)]
      "
      >
        {progress}%
      </p>

      {/* Loading Text */}
      <p className="mt-3 text-sm tracking-widest text-white/70">
        Loading assets…
      </p>
    </div>
  );
}
