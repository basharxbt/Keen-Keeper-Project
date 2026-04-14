import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friend = ({ friend }) => {
  return (
    <Link href={`/friend/${friend.id}`}>
      <div>
        <div className="space-y-3 flex flex-col items-center  justify-center text-center p-15 border border-white bg-white shadow rounded-md ">
          <Image
            height={100}
            width={100}
            src={friend.picture}
            alt={friend.name}
            className="rounded-full"
          ></Image>
          <h3>{friend.name}</h3>
          <p>{friend.days_since_contact} Days Ago</p>
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
        </div>
      </div>
    </Link>
  );
};

export default Friend;
