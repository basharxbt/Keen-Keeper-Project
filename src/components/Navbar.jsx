"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImHome } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";

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
        <Link href="/timeline">
          <IoMdTime />
          Timeline
        </Link>
      </li>
      <li
        className={`rounded-sm ${pathName === "/stats" ? "bg-green-900 text-white" : ""}`}
      >
        <Link href="/stats">
          <TfiStatsUp />
          Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-15 flex gap-2 flex-col md:flex-row ">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-3xl">
          KeenKeeper
        </Link>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
