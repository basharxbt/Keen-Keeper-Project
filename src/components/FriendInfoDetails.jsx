"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaArchive } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";

import { MdDelete } from "react-icons/md";
import { PiChatCircleText } from "react-icons/pi";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { TimeLine } from "@/contextApi/TimelineContext";
import { Slide, toast } from "react-toastify";

const FriendInfoDetails = ({ friend, action }) => {
  const { contact, setContact } = useContext(TimeLine);
  const timeLineHandler = (friend, action) => {
    setContact([...contact, { ...friend, action }]);
    toast.success(`${action} with ${friend.name} is successful`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className="flex my-20 justify-between gap-10 ">
      <div>
        <div className="space-y-3 flex flex-col items-center  justify-center text-center p-5 border border-white bg-white shadow-md rounded-md ">
          <Image
            height={100}
            width={100}
            src={friend.picture}
            alt={friend.name}
            className="rounded-full"
          ></Image>
          <h3>{friend.name}</h3>
          <p
            className={`rounded-3xl p-3 w-max ${
              friend.status === "almost due"
                ? "bg-yellow-500 text-yellow-950"
                : friend.status === "on-track"
                  ? "bg-green-500 text-black"
                  : "bg-red-700 text-white"
            }`}
          >
            {friend.status}
          </p>

          <div className="space-x-4 my-5">
            {friend.tags.map((tag, index) => {
              return (
                <span
                  className="bg-purple-200 font-semibold text-black   p-3 rounded-3xl "
                  key={index}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <p className="text-neutral-600">{friend.bio}</p>
          <p className="text-neutral-600">Preferred: {friend.email}</p>
        </div>
        <div className="space-y-4 mt-5 ">
          <button className="btn w-full bg-white">
            <RiNotificationSnoozeFill /> Snooze 2 Weeks
          </button>
          <button className="btn w-full bg-white">
            <FaArchive /> Archive
          </button>
          <button className="btn w-full text-red-600 bg-white">
            <MdDelete /> Delete
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-8">
        <div className="flex flex-col justify-center items-center text-center p-5 rounded-md shadow-md ">
          <p className="text-3xl font-semibold">{friend.days_since_contact}</p>
          <p>Days Since Contact</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-5 rounded-md shadow-md ">
          <p className="text-3xl font-semibold">{friend.goal}</p>
          <p>Goal Days</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-5 rounded-md shadow-md ">
          <p className="text-3xl font-semibold">{friend.next_due_date}</p>
          <p>Next Due</p>
        </div>
        <div className=" flex justify-between items-center  p-5 rounded-md shadow-md col-span-3 w-full">
          <div className="space-y-2">
            <p className="text-3xl">Relationship Goal </p>
            <p className="text-2xl text-neutral/70">
              Connect Every{" "}
              <span className="font-bold">{friend.goal} Days</span>
            </p>
          </div>
          <button className="btn">
            <TbEdit /> Edit
          </button>
        </div>
        <div className="flex flex-col justify-center p-5 rounded-md shadow-md col-span-3">
          <p className="text-3xl font-semibold">Quick Check-IN</p>

          <div className="grid grid-cols-3 gap-5 mt-5">
            <button
              onClick={() => timeLineHandler(friend, "call")}
              className="btn text-2xl h-full flex flex-col p-5 "
            >
              <BiPhoneCall />
              <p>Call</p>
            </button>
            <button
              onClick={() => timeLineHandler(friend, "text")}
              className="btn text-2xl h-full flex flex-col p-5 "
            >
              <PiChatCircleText />
              <p>Text</p>
            </button>

            <button
              onClick={() => timeLineHandler(friend, "video")}
              className="btn text-2xl h-full flex flex-col p-5"
            >
              <FiVideo />
              <p>Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendInfoDetails;
