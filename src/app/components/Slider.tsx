"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Products from "./Products";
import Nextjs from "../svg/Nextjs";

const slides = [
  {
    id: 1,
    title: "E-shop with Symfony",
    img: "/symfony-app.png",
    url: "https://symfony.dotdev.be",
    icon: "/symfony.svg",
  },
  {
    id: 2,
    title: "E-shop with Nextjs",
    img: "/eshop-next-tw.png",
    url: "https://e-shop.dotdev.be",
  },
  {
    id: 3,
    title: "Dashboard with Nextjs",
    img: "/dashboard-next-mui.png",
    url: "https://dashboard.dotdev.be",
  },
  {
    id: 4,
    title: "Immo with Native React",
    img: "/immo-react-vite-sass.png",
    url: "https://agency.dotdev.be",
    icon: "/react.png",
  },
  {
    id: 5,
    title: "Development Documentation with Nextjs",
    img: "/dotdev-next-tw-mui.png",
    url: "https://doc.dotdev.be",
  },
  {
    id: 6,
    title: "Social with Native React",
    img: "/social-react-mui.png",
    url: "https://social.dotdev.be",
    icon: "/react.png",
  },
];

const Slider = ({children}: {children: React.ReactNode}) => {

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

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-8 p-4 rounded-lg mt-40">        
        {slides.map((slide, index)=> (              
          <div key={index} className="rounded-xl bg-gray-800 h-[35rem]">
            <a href={slide.url} target="_blank">
              <Image src={slide.img} alt='' width={0} height={0} sizes="50w" style={{ width: '100%', height: 'auto' }} className="rounded-t-lg"/>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {slide.icon ? 
                    <Image alt='' className="mb-3 mr-4" src={slide.icon} width={55} height={55} /> :
                    <Nextjs width={77} height={77} className='text-gray-300 ml-4' /> 
                  }
                  <span>{slide.title}</span>
                </h5>
              </a>
              <p className="my-6 font-normal text-gray-700 dark:text-gray-400">{slide.title}</p>
              <a href={slide.url} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>   
        ))}
      </div>

      {/* DRAGGABLE */}
      <nav
        style={{ backgroundImage: `url(${"/line-4.png"})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
        className="flex space-x-6 pb-16 pt-10 md:pt-48 overflow-x-scroll scrollbar-hide my-20"
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