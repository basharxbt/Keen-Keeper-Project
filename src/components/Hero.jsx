import React from "react";
import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-20 space-y-5">
        <h2 className="text-5xl font-bold text-green-950 font-bold">
          Friends to keep close in your life
        </h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>

        <button className="btn bg-green-900 text-white">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 my-20">
        <div className="p-10 text-center border border-white bg-white shadow rounded-md ">
          <p className="text-3xl text-green-950 font-semibold ">10</p>
          <span className="text-green-900/70">Total Friends</span>
        </div>
        <div className="p-10 text-center border border-white bg-white shadow rounded-md ">
          <p className="text-3xl text-green-950 font-semibold ">3</p>
          <span className="text-green-900/70">On Track</span>
        </div>
        <div className="p-10 text-center border border-white bg-white shadow rounded-md ">
          <p className="text-3xl text-green-950 font-semibold ">6</p>
          <span className="text-green-900/70">Need Attention</span>
        </div>
        <div className="p-10 text-center border border-white bg-white shadow rounded-md ">
          <p className="text-3xl text-green-950 font-semibold ">12</p>
          <span className="text-green-900/70">Interactions This Month</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
