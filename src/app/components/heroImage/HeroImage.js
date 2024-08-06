"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CtaButton from "../ctaButton/CtaButton";

export default function HeroImage() {
  const [mouseOverImage, setMouseOverImage] = useState(false);
  const [mouseOverCTA, setMouseOverCTA] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [flipper, setFlipper] = useState(false);
  let timer

  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({
    width: 800,
    height: 500,
  });
  const [ctaDimensions, setCtaDimensions] = useState({
    x: null,
    y: null,
  });

  const imageRef = useRef(null);

  useEffect(() => {
    if (mouseOverImage) {
      const timer = setInterval(() => {
        setFlipper((prevFlipper) => !prevFlipper);
      }, 100);

      return () => clearInterval(timer);
    }
  }, [mouseOverImage]);
  //get image position
  useEffect(() => {
    const updatePosition = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setImagePosition({
          x: rect.left,
          y: rect.top,
        });
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [scrollY]);

  //get pointer position
  useEffect(() => {
    if (mouseOverImage) {
      const handleMouseMove = (event) => {
        setPointerPosition({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [flipper]);

  //get scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollY(position);
      if (
        imageDimensions.width <= window.innerWidth &&
        imageDimensions.width <= 800
      ) {
        setImageDimensions({
          width: position * 1.5 + 800,
          height: (position * 1.5 + 800) * 0.623,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let calculateLineLength = (a,b,i,j) =>{
    let length = Math.sqrt((a-i)**2 + (b-j)**2)
    return length
  }


  //set CTA Button position
  useEffect(() => {
    let radius = window.screen.width * 0.1;
    let centerX = window.screen.width * 0.5;
    let centerY = Math.floor(imageDimensions.height / 2);
    let totalDistance = calculateLineLength(pointerPosition.x, pointerPosition.y, centerX,centerY)

    let provX = centerX + radius*(pointerPosition.x - centerX) / totalDistance
    let provY = centerY + radius*(pointerPosition.y - centerY) / totalDistance

    if(totalDistance > radius){
      console.log("greater than the radius " + totalDistance)
      // setCtaDimensions({
      //   //need to set max and min
      //   x: provX,
      //   y: provY,
      // });
    } else {
      console.log("within radius: " + radius)
    }

    // let x = Math.max(
    //   centerX - radius,
    //   Math.min(pointerPosition.x, centerX + radius)
    // );
    // let y = Math.max(
    //   centerY - Math.sqrt(Math.max(0, radius ** 2 - (x - centerX) ** 2)),
    //   Math.min(
    //     pointerPosition.y - imagePosition.y,
    //     centerY + Math.sqrt(Math.max(0, radius ** 2 - (x - centerX) ** 2))
    //   )
    // );

    let defaultX = pointerPosition.x;
    let defaultY = pointerPosition.y - imagePosition.y;

    if (mouseOverImage) {
      //if within radius
      if (totalDistance < radius){
      setCtaDimensions({
        //need to set max and min
        x: defaultX,
        y: defaultY,
      });
    }else{
      // circular dimensions
      setCtaDimensions({
        //need to set max and min
        x: provX,
        y: provY,
      });
      }
    } else {
      // setCtaDimensions({
      //   x: window.screen.width / 2,
      //   y: Math.floor(imageDimensions.height / 2),
      // });

      const timer = setInterval(() => {
        // if(!mouseOverImage && !mouseOverCTA){
        console.log("after a sec mouse over image? " + mouseOverImage);
        setCtaDimensions({
          x: window.screen.width / 2,
          y: Math.floor(imageDimensions.height / 2),
        });
        // }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [flipper]);
  // }, [pointerPosition, imageDimensions]);

  useEffect(() => {
    clearInterval(timer);
      timer = setInterval(() => {
        console.log("after a sec mouse over image? " + mouseOverImage);
        if (!mouseOverImage && !mouseOverCTA) {

        setCtaDimensions({
          x: window.screen.width / 2,
          y: Math.floor(imageDimensions.height / 2),
        });
      }
      }, 1000);
      return () => clearInterval(timer);
    
  }, [mouseOverImage]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
        Athlete-Approved Nutrition
      </h2>
      <div className="relative w-full mt-24">
        <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src={"/staticImages/roundToken.png"}
            width={200}
            height={200}
            className="animate-spin z-99"
            onMouseEnter={()=> setMouseOverCTA(true)}
            onMouseLeave={()=> {setMouseOverCTA(false); console.log("mouse just left image: " + mouseOverImage + "and cta")}}
          />
        </div>
        <Image
          ref={imageRef}
          src="/staticImages/homeimage.jpeg"
          width={imageDimensions.width || 0}
          height={imageDimensions.height || 0}
          className={`block mx-auto`}
          onMouseEnter={() => setMouseOverImage(true)}
          onMouseLeave={() => setMouseOverImage(false)}
        />
        <CtaButton ctaDimensions={ctaDimensions} />
      </div>
      <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
        Athlete-Approved Nutrition
      </h2>

      <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
        Athlete-Approved Nutrition
      </h2>

      <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
        Athlete-Approved Nutrition
      </h2>

      <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
        Athlete-Approved Nutrition
      </h2>
    </div>
  );
}
