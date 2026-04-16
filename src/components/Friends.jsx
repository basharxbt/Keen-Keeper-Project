"use client";

import React, { Suspense } from "react";

import Friend from "./Friend";

import useFriendsData from "@/fetchook/UseFriendsData";
import { HashLoader } from "react-spinners";

const Friends = () => {
  const { friends, loading } = useFriendsData();

  if (loading) {
    return (
      <div className="text-5xl flex items-center my-10 justify-center text-green-950 ">
        <HashLoader />
      </div>
    );
  }
  return (
    <div className="container mx-auto p-5 lg:p-0">
      <h2 className="font-bold text-3xl">Your Friends</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend}></Friend>;
        })}
      </div>
    </div>
  );
};

export default Friends;
