import HeroTitle from "./components/heroTitle/HeroTitle";
import Navbar from "./components/navbar/Navbar";
import HeroImage from "./components/heroImage/HeroImage";

export default function Home() {
  
  return (
    <main className="bg-primaryBackground min-h-screen min-w-full justify-center">
      <Navbar />
      <HeroTitle />
      <HeroImage/>
      
    </main>
  );
}
