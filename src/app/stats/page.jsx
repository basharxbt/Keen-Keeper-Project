"use client";
import StatChart from "@/components/StatChart";
import { TimeLine } from "@/contextApi/TimelineContext";
import StatsNotFound from "@/ui/StatsNotFound";
import { useContext } from "react";

const Stats = () => {
  const { contact, setContact } = useContext(TimeLine);
  if (contact.length === 0) return <StatsNotFound></StatsNotFound>;
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold">Friendship Analytics</h1>
      <div className="bg-white shadow-md rounded-sm p-5 my-10 ">
        <h4 className="font-semibold text-3xl mb-10 text-neutral/70 ">
          By Interaction Type
        </h4>
        <StatChart></StatChart>
      </div>
    </div>
  );
};

export default Stats;
