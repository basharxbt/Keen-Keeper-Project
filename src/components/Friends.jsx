"use client";

import React, { Suspense } from "react";
// import friendsData from "@/data.json";
import Friend from "./Friend";
import UseFriendsData from "@/fetchook/UseFriendsData";
import useFriendsData from "@/fetchook/UseFriendsData";
import { HashLoader } from "react-spinners";

const Friends = () => {
  const { friends, loading } = useFriendsData();

  if (loading) {
    return (
      <div className="text-5xl flex items-center my-10 justify-center text-green-950 h-screen">
        <HashLoader />
      </div>
    );
  }
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
