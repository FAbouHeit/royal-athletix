'use client'
import Image from "next/image";
import HeroTitle from "./components/heroTitle/HeroTitle";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

export default function Home() {
  const [imageWidth, setImageWidth] = useState(800) 
  return (
    <main className="bg-primaryBackground min-h-screen min-w-full justify-center">
      <Navbar />
      <HeroTitle />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
          Athlete-Approved Nutrition
        </h2>
        <div className="mt-24 relative w-[80%] h-[400px] bg-red-500">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src={"/staticImages/roundToken.png"}
              width={200}
              height={200}
              className="animate-spin"
            />
          </div>
          <div className="">
            <Image src="/staticImages/sheFighter.jpg" width={imageWidth} height={imageWidth}/>
          </div>
        </div>
      </div>
    </main>
  );
}
