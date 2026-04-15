import { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const FriendsData = async () => {
      const res = await fetch("http://localhost:3000/data.json");
      const data = await res.json();
      setFriends(data);
      console.log(data);
    };
    FriendsData();
  }, []);
  return { friends, setFriends };
};

export default useFriendsData;
