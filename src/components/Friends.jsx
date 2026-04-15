"use client";

import React, { Suspense } from "react";
// import friendsData from "@/data.json";
import Friend from "./Friend";
import UseFriendsData from "@/fetchook/UseFriendsData";
import useFriendsData from "@/fetchook/UseFriendsData";

const Friends = () => {
  // const res = await fetch("http://localhost:3000/data.json");
  // const friends = await res.json();

  const { friends, setFriends } = useFriendsData();
  console.log(friends);

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl">Your Friends</h2>
      <div className="grid grid-cols-4 gap-8 my-10 ">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend}></Friend>;
        })}
      </div>
    </div>
  );
};

export default Friends;
