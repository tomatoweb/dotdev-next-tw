"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  
  {
    id: 6,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/chat-app-react.png",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/eshop-next-tw.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/immo-react-vite-sass.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/social-react-mui.png",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/dotdev-next-tw.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 5,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/sidebar-next-mui.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
];

const Slider = () => {

  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev=>(prev === slides.length-1 ? 0 : prev + 1))
      console.log(current)
    }, 3000);
    return () => clearInterval(interval);
  })

  return (
    <>
    <div className=''>

      {/* WRAPPER */}
      <div className='h-full flex justify-center gap-24 ml-[155vw]'>
        {slides.map((slide, index)=> (
        <div className="" key={slide.id}>
          <div className={`relative  w-[43vw] transition-all ease-in-out duration-1000 ${current === index ? "-mt-8" : ""} `} style={{transform: `translateX(-${current*49}vw)`}}>
            <Image src={slide.img} alt='' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="rounded-3xl object-cover"/>
          </div>
        </div>
        ))}
        
      </div>   

    </div>
    {/* DOTS SELECT */}
    <div className='absolute left-1/2 bottom-8 flex gap-4'>
        {slides.map((slide, index) => (
        <div className={`w-3 h-3 rounded-full ring-1 ring-gray-500 cursor-pointer flex items-center justify-center ${
          current === index ? "scale-150" : ""}`}
          key={slide.id}
          onClick={()=>setCurrent(index)}
        >
          {current === index && <div className='w-[6px] h-[6px] rounded-full bg-gray-600'></div> }
        </div>
        ))}
      </div>
    </>
  )
}

export default Slider