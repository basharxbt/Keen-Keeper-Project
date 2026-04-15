import FriendInfoDetails from "@/components/FriendInfoDetails";

const FriendInfo = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch(`http://localhost:3000/data.json`);
  const friends = await res.json();

  const friend = friends.find((friend) => friend.id === Number(friendId));

  return (
    <div className="container mx-auto">
      <FriendInfoDetails friend={friend}></FriendInfoDetails>
    </div>
  );
};

export default FriendInfo;
