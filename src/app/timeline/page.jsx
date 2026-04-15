"use client";

import { TimeLine } from "@/contextApi/TimelineContext";
import { useContext, useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { PiChatCircleText } from "react-icons/pi";

const Timeline = () => {
  const { contact, setContact } = useContext(TimeLine);
  const [types, setTypes] = useState([]);

  const callInfo = contact.find((friend) => friend.action === "call");
  if (callInfo) setContact([...contact, callInfo]);

  // useEffect(()=>{
  //   if()

  // },[])

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

  console.log(formatted);
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h1 className="text-3xl font-bold">Timeline</h1>
        <fieldset className="fieldset my-5">
          <select defaultValue="Pick a browser" className="select">
            <option onClick={() => filterContact("call")} disabled={true}>
              Select Contact Type
            </option>
            <option>Call</option>
            <option>Text</option>
            <option>Video Call</option>
          </select>
        </fieldset>

        <div className="flex flex-col-reverse gap-5 mt-10">
          {contact.map((friend, index) => {
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
                  <p>{friend.name}</p>

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
