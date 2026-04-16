import { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const FriendsData = async () => {
      const res = await fetch("http://localhost:3000/data.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };
    FriendsData();
  }, []);
  return { friends, setFriends, loading, setLoading };
};

export default useFriendsData;
