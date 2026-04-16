"use client";

import { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const FriendsData = async () => {
      const res = await fetch(
        "https://build-keen-keeper-app.vercel.app/data.json",
      );
      const data = await res.json();
      setFriends(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    FriendsData();
  }, []);
  return { friends, setFriends, loading, setLoading };
};

export default useFriendsData;
