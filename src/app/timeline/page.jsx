"use client";

import { TimeLine } from "@/contextApi/TimelineContext";
import TimelineNotFound from "@/ui/TimelineNotFound";
import { useContext, useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { PiChatCircleText } from "react-icons/pi";

const Timeline = () => {
  const { contact, setContact } = useContext(TimeLine);

  const [selectedTypes, setSelectedTypes] = useState("Filter");

  const filteredContact =
    selectedTypes === "Filter" || selectedTypes === "all"
      ? contact
      : contact.filter((c) => c.action === selectedTypes);

  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formatted = `${date} at ${time}`;

  if (contact.length === 0) {
    return <TimelineNotFound></TimelineNotFound>;
  }

  return (
    <div className="container mx-auto h-screen">
      <div className="my-10">
        <h1 className="text-5xl text-center font-bold">Friendship Analytics</h1>

        <fieldset className="fieldset my-5 flex gap-3 items-center justify-center">
          <h5 className="text-2xl font-bold text-neutral/50 text-center">
            Filter Contact:
          </h5>
          <select
            value={selectedTypes}
            onChange={(e) => setSelectedTypes(e.target.value)}
            className="select"
          >
            <option disabled value="Filter">
              Filter
            </option>
            <option value="all">All</option>
            <option value="call"> Call</option>
            <option value="text">Text</option>
            <option value="video">Video Call</option>
          </select>
        </fieldset>

        <div className="flex flex-col-reverse gap-5 mt-10">
          {filteredContact.map((friend, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-5 p-5 shadow-md bg-white rounded-sm border-3 border-red-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-4xl">
                  {" "}
                  {friend.action === "call" ? (
                    <BiPhoneCall />
                  ) : friend.action === "text" ? (
                    <PiChatCircleText />
                  ) : (
                    <FiVideo />
                  )}
                </p>
                <div>
                  <p>
                    {friend.action} with {friend.name}
                  </p>

                  <p>{formatted}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
