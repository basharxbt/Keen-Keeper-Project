import FriendInfoDetails from "@/components/FriendInfoDetails";

const FriendInfo = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch(`https://build-keen-keeper-app.vercel.app/data.json`);
  const friends = await res.json();

  const friend = friends.find((friend) => friend.id === Number(friendId));

  return (
    <div className="container mx-auto min-h-screen">
      <FriendInfoDetails friend={friend}></FriendInfoDetails>
    </div>
  );
};

export default FriendInfo;
