'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function HeroImage() {
    const [imageWidth, setImageWidth] = useState(800) 
    const [mouseOverImage, setMouseOverImage] = useState(false) 
    const [ctaX, setCtaX] = useState(0) 
    const [ctaY, setCtaY] = useState(0) 
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);
  
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
    
        updatePosition(); // Get position on mount
    
        window.addEventListener('resize', updatePosition); // Update position on window resize
    
        return () => {
          window.removeEventListener('resize', updatePosition); // Cleanup event listener
        };
      }, [imageWidth]);


    useEffect(() => {
      const handleMouseMove = (event) => {
        setPointerPosition({
          x: event.clientX,
          y: event.clientY
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const position = window.scrollY;
          if (imageWidth <= window.innerWidth || imageWidth <= 900) {
            setImageWidth(position + 800);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        // Clean up the event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      
      useEffect(()=>{
        // if(imageWidth >= window.screen.width){
            console.log("mouseoverimage: ", mouseOverImage)
        if(imageWidth >= 1000 && mouseOverImage){

            let x = Math.trunc(pointerPosition.x) 
            let y = Math.trunc(pointerPosition.y - imagePosition.y)

            setCtaX(x)
            setCtaY(y)
        } else if(pointerPosition.y < imagePosition.y || pointerPosition.y > (imageWidth * 1.623)){
           setCtaX(500)
           setCtaY(500)
        }
    //   },[imageWidth, pointerPosition])
    },[pointerPosition])

    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl lg:text-9xl text-white w-[80%] text-center my-36">
          Athlete-Approved Nutrition
        </h2>
        <div className="mt-24 relative w-[100%] h-[400px]">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src={"/staticImages/roundToken.png"}
              width={200}
              height={200}
              className="animate-spin"
            />
          </div>
          <div className="relative bg-yellow-300 w-full">
            <Image
              ref={imageRef}
              src="/staticImages/homeimage.jpeg"
              width={imageWidth}
              height={imageWidth * 0.623}
              className="block mx-auto transition-all"
              onMouseEnter={() => setMouseOverImage(true)}
              onMouseLeave={() => setMouseOverImage(false)}
            />
            <div
              className="w-24 h-24 rounded-full bg-red-300 absolute  flex items-center justify-center translate-x-[-50%] translate-y-[-50%] transition-all ease-linear"
              style={{ top: `${ctaY}px`, left: `${ctaX}px` }}
            >
              <p className="text-lg text-center">Play</p>
            </div>
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
      </div>
    );
}
