import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-950/90">
      <div className="container mx-auto text-white">
        <div className="text-center my-10 space-y-5">
          <h2 className="text-5xl">KeenKeeper</h2>
          <p className="text-white/80">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="font-medium">Social Links</p>
          <div className="flex justify-center gap-3 items-center">
            <p className="text-2xl rounded-full  p-2 bg-white text-neutral">
              <FaInstagramSquare className="" />
            </p>
            <p className="text-2xl rounded-full  p-2 bg-white text-neutral">
              <FaFacebook />
            </p>
            <p className="text-2xl rounded-full  p-2 bg-white text-neutral">
              <FaTwitterSquare />
            </p>
          </div>
          <hr className="text-gray-600" />
          <div className="flex justify-between text-white/60">
            <p className="text-white/60">
              © 2026 KeenKeeper. All rights reserved.
            </p>
            <div className="flex gap-5">
              <p>Privacy</p>
              <p>Terms And Services</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
