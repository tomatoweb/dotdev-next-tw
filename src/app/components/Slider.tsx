"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "E-shop",
    img: "/eshop-next-tw.png",
    url: "http://e-shop.dotdev.be",
  },
  {
    id: 2,
    title: "Immo",
    img: "/immo-react-vite-sass.png",
    url: "http://immo.dotdev.be",
  },
  {
    id: 3,
    title: "Social",
    img: "/social-react-mui.png",
    url: "http://social.dotdev.be",
  },
  {
    id: 4,
    title: "Dashboard",
    img: "/dashboard-next-mui.png",
    url: "http://dashboard.dotdev.be",
  },
  {
    id: 5,
    title: "Real Estate with Symfony",
    img: "/agency-symfony4.png",
    url: "http://agency.dotdev.be",
  },
  {
    id: 6,
    title: "Sidebar Next MUI",
    img: "/sidebar-next-mui.png",
    url: "/",
  },
];

const Slider = () => {

  const [current, setCurrent] = useState(1);
  const [interruptInterval, setInterruptInterval] = useState(false);

  useEffect(() => {
    if (!interruptInterval) {
      const interval = setInterval(() => {
        setCurrent(prev=>(prev === slides.length-1 ? 0 : prev + 1));
      }, 2000);
      return () => clearInterval(interval);
    } else {

    }
  }, [interruptInterval])

  return (
    <div className='flex flex-col items-center'>
      {/* DOTS SELECT */}
      <div className='flex gap-4 my-16'>
          {slides.map((slide, index) => (
          <div className={`w-3 h-3 rounded-full bg-primary bg-opacity-20 cursor-pointer flex items-center justify-center ${
            current === index ? "scale-150 bg-primary bg-opacity-95" : ""}`}
            key={slide.id}
            onClick={()=>setCurrent(index)}
          >            
          </div>
          ))}
      </div>
      {/* SLIDER */}
      <div onMouseEnter={() => setInterruptInterval(true)} onMouseLeave={() => setInterruptInterval(false)} className='h-full flex justify-center gap-24 ml-[245vw]'>
        {slides.map((slide, index)=> (
        <div className="" key={slide.id}>
          <div className={`relative  w-[43vw] transition-all ease-in-out duration-1000 ${current === index ? "-mt-8" : ""} `} style={{transform: `translateX(-${current*49}vw)`}}>
            <a href={slide.url} target="_blank">
              <Image src={slide.img} alt='' width={0} height={0} sizes="100vw" style={{ width: '100%', maxHeight: '28rem', height: 'auto' }} className="rounded-xl object-cover"/>
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Slider