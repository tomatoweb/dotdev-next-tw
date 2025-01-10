"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const slides = [
  {
    id: 1,
    title: "E-shop",
    img: "/eshop-next-tw.png",
    url: "https://e-shop.dotdev.be",
  },
  {
    id: 2,
    title: "Dashboard",
    img: "/dashboard-next-mui.png",
    url: "https://dashboard.dotdev.be",
  },
  {
    id: 3,
    title: "Immo",
    img: "/immo-react-vite-sass.png",
    url: "https://agency.dotdev.be",
  },
  {
    id: 4,
    title: "Social",
    img: "/social-react-mui.png",
    url: "https://social.dotdev.be",
  },
  {
    id: 5,
    title: "Real Estate with Symfony",
    img: "/symfony-app.png",
    url: "https://symfony.dotdev.be",
  },
  {
    id: 6,
    title: "Docs DotDev nextjs",
    img: "/dotdev-next-tw-mui.png",
    url: "https://doc.dotdev.be",
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

  const ref =
  useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <>
      <div
        onMouseEnter={() => setInterruptInterval(true)}
        onMouseLeave={() => setInterruptInterval(false)}
        className='flex flex-col items-center mx-10'
      >
        {/* DOTS SELECT */}
        <div className='flex gap-4 mt-10 mb-16'>
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
        <div className='h-full flex gap-24 ml-[175vw]'>
          <div className="flex gap-24 h-[80%]" {...events} ref={ref} >
          {slides.map((slide, index)=> (        
            <div
              key={slide.id}
              className={`relative w-[30vw] transition-all ease-in-out duration-1000 ${current === index ? "-mt-8" : ""} `}
              style={{transform: `translateX(-${current*35}vw)`}}
            >
              <a href={slide.url} target="_blank">
                <Image src={slide.img} alt='' width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto' }} className="rounded-xl object-cover"/>
              </a>
            </div> 
          ))}
          </div>       
        </div>
      </div>

      {/* DRAGGABLE */}
      <nav
        style={{ backgroundImage: `url(${"/line-4.png"})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
        className="flex space-x-6 pb-16 pt-10 md:pt-48 overflow-x-scroll scrollbar-hide my-36"
        {...events}
        ref={ref} // add reference and events to the wrapping div
      >
        <div className="flex gap-4">
        {slides.map((slide, index)=> (
          <div
            key={index}
            className="flex-none rounded-lg"
            style={{
              marginTop: 15,
              backgroundImage: `url(${slide.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 40px 0 rgba(0, 0, 0, 0.19)',
              width: '27vw',
              paddingTop: '9.04%',
              height: 0,
            }}
          >
          </div>        
        ))}

        </div>
      </nav>
    </>
  )
}

export default Slider