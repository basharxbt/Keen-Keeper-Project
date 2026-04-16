import Friends from "@/components/Friends";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <main>
        <Hero></Hero>

        <Friends></Friends>
      </main>
    </div>
  );
}
