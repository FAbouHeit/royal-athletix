import React, { useEffect } from "react";

export default function CtaButton({ ctaDimensions }) {
  useEffect(() => {
    console.log(ctaDimensions);
  }, []);
  return (
    <div
      className={`w-24 h-24 rounded-full bg-red-300 absolute inline flex items-center justify-center translate-x-[-50%] translate-y-[-50%] transition-all ease-linear`}
      style={{ top: `${ctaDimensions.y}px`, left: `${ctaDimensions.x}px` }}
    >
      <p className="text-lg text-center">Play</p>
    </div>
  );
}
