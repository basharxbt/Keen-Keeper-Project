import { HashLoader } from "react-spinners";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="text-5xl flex items-center my-10 justify-center text-green-950 ">
      {" "}
      <HashLoader />
    </div>
  );
}
