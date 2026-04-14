import React, { Suspense } from "react";
// import friendsData from "@/data.json";
import Friend from "./Friend";

const Friends = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();

  console.log(friends);

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl">Your Friends</h2>
      <div className="grid grid-cols-4 gap-8 my-10">
        {friends.map((friend) => {
          return (
            <Suspense
              key={friend.id}
              fallback={
                <span className="loading loading-spinner loading-xl"></span>
              }
            >
              <Friend friend={friend}></Friend>
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
