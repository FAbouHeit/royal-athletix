import HeroTitle from "./components/heroTitle/HeroTitle";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-primaryBackground min-h-screen min-w-full justify-center">
      <Navbar />
      <HeroTitle />
      <div className="flex items-center justify-center">
        <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center mt-36">
          Athlete-Approved Nutrition
        </h2>
      </div>
    </main>
  );
}
