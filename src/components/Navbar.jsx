"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImHome } from "react-icons/im";

const Navbar = () => {
  const pathName = usePathname();

  const navLinks = (
    <>
      <li
        className={`rounded-sm ${pathName === "/" ? "bg-green-900 text-white" : ""}`}
      >
        <Link href="/">
          <ImHome />
          Home
        </Link>
      </li>
      <li
        className={`rounded-sm ${pathName === "/timeline" ? "bg-green-900 text-white" : ""}`}
      >
        <Link href="/timeline">Timeline</Link>
      </li>
      <li
        className={`rounded-sm ${pathName === "/stats" ? "bg-green-900 text-white" : ""}`}
      >
        <Link href="/stats">Stats</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-15">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-3xl">
          KeenKeeper
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
