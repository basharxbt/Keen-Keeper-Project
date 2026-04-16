import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friend = ({ friend }) => {
  return (
    <Link
      href={`/friend/${friend.id}`}
      className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div>
        <div className="space-y-1 flex flex-col items-center  justify-center text-center p-8 border border-white bg-white shadow rounded-2xl ">
          <Image
            height={100}
            width={100}
            src={friend.picture}
            alt={friend.name}
            className="rounded-full"
          ></Image>
          <h3 className="font-semibold text-2xl">{friend.name}</h3>
          <p className="font-semibold text-neutral/70">
            {friend.days_since_contact} Days Ago
          </p>
          <div className="space-x-4 my-3">
            {friend.tags.map((tag, index) => {
              return (
                <span
                  className="bg-gray-400 font-semibold text-black p-2 rounded-sm "
                  key={index}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <p
            className={`rounded-2xl p-2 w-max font-semibold ${
              friend.status === "ALMOST DUE"
                ? "bg-yellow-500 text-yellow-950/90"
                : friend.status === "ON-TRACK"
                  ? "bg-green-500 text-black/90"
                  : "bg-red-700 text-white/90"
            }`}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Friend;
