import { IoMenuOutline } from "react-icons/io5";

export default function HeroTitle() {
  return (
    <div className="text-white flex justify-between relative p-12">
      
      <div className="text-4xl border-2 rounded-full p-2 text-accentGray opacity-50 flex-grow-0 basis-0">
        <IoMenuOutline />
      </div>

      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="text-3xl">Royal Athletix</p>
      </div>
      
      <div className="bg-accentGray rounded-full flex items-center text-nowrap flex-grow-0 basis-0 px-2">
        <p className="text-black px-4">Schedule 4 Free</p>
      </div>

    </div>
  );
}
