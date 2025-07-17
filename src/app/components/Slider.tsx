"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import ContactForm from "./ContactForm";

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
        icon: "/react-full.png",
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
        icon: "/react-full.png",
    },
];

const Slider = ({ children }: { children: React.ReactNode }) => {

    const [current, setCurrent] = useState(1);
    const [interruptInterval, setInterruptInterval] = useState(false);

    useEffect(() => {
        if (!interruptInterval) {
            const interval = setInterval(() => {
                setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
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
                        <div className={`w-3 h-3 rounded-full bg-primary bg-opacity-20 cursor-pointer flex items-center justify-center ${current === index ? "scale-150 bg-primary bg-opacity-95" : ""}`}
                            key={slide.id}
                            onClick={() => setCurrent(index)}
                        >
                        </div>
                    ))}
                </div>

                {/* SLIDER */}
                <div className='h-full flex gap-24 ml-[175vw]'>
                    <div className="flex gap-24 h-[80%]" {...events} ref={ref} >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`relative w-[30vw] transition-all ease-in-out duration-1000 ${current === index ? "-mt-8" : ""} `}
                                style={{ transform: `translateX(-${current * 35}vw)` }}
                            >
                                <a href={slide.url} target="_blank">
                                    <Image src={slide.img} alt='' width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto' }} className="rounded-xl object-cover" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className="text-3xl font-bold mt-20">Portfolio</div>
                <div className="text-xl text-blue-900">28+ projects realized</div>
            </div>

            {/* CARDS */}
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 p-4 rounded-lg mt-4">
                {slides.map((slide, index) => (
                    <div key={index} className="rounded-xl bg-gray-100">

                        <a href={slide.url} target="_blank">
                            <Image src={slide.img} alt='' width={0} height={0} sizes="50w" style={{ width: '100%', height: 'auto' }} className="rounded-t-lg" />
                        </a>

                        <div className="p-5 flex flex-col gap-8 justify-between items-center">
                            <a href="#" className="flex">
                                <h5 className="flex mt-2 ml-4 text-2xl font-medium tracking-tight text-gray-900">
                                    <span>{slide.title}</span>
                                </h5>
                            </a>
                            <a href={slide.url} target="_blank"
                               className="mx-10 px-3 py-1 text-sm font-medium text-center align-middle text-orange-500 hover:bg-orange-50 rounded focus:outline- border border-orange-500">
                               <span>SHOW ME !</span>
                            </a>                                
                        </div>

                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-6 text-xl mx-8 mt-8 font-bold text-green-900 animate-pulse">
                Find out more...                 
            </div>
            <ContactForm />

            {/* DRAGGABLE */}
            {/* <nav
                style={{ backgroundImage: `url(${"/line-4.png"})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                className="flex space-x-6 pb-16 pt-10 md:pt-48 overflow-x-scroll scrollbar-hide my-20"
                {...events}
                ref={ref} // add reference and events to the wrapping div
            >
                <div className="flex gap-4">
                    {slides.map((slide, index) => (
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
            </nav> */}
        </>
    )
}

export default Slider