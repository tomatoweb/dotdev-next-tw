"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import ContactForm from "./ContactForm";
import { slides } from "@/lib/slides";
import Mouse from '@mui/icons-material/Mouse';

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

	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

	return (
		<>
			<div
				onMouseEnter={() => setInterruptInterval(true)}
				onMouseLeave={() => setInterruptInterval(false)}
				className='flex flex-col items-center mx-10'
			>
				{/* DOTS SELECT */}
				<div className='flex gap-4 mt-1 mb-16'>
					{slides.map((slide, index) => (
						<div className={`w-3 h-3 rounded-full bg-primary bg-opacity-20 cursor-pointer flex items-center justify-center ${current === index ? "scale-150 bg-primary bg-opacity-95" : ""}`}
							key={slide.id}
							onClick={() => setCurrent(index)}
						>
						</div>
					))}
				</div>

				{/* SLIDER */}
				<div className="flex gap-10 md:gap-[4.5rem] w-[0vw] -ml-[90%] lg:-ml-[33%]" {...events} ref={ref} >
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							className={`slide relative transition-all ease-in-out duration-1000 ${current === index ? "-mt-4 lg:-mt-6" : ""} `}
							style={{ transform: `translateX(-${current * 118}%)` }}
						>
							<a href={slide.url} target="_blank" >
								<div key={slide.id} className="flex flex-col items-center">
									<div style={{ backgroundImage: `url(${slide.img})` }} className={`h-32 w-56 sm:h-32 sm:w-56 md:h-32 md:w-56 lg:h-56 lg:w-96 bg-cover bg-center bg-no-repeat size-18 rounded-md hover:scale-125 transition-all duration-300 shadow-xl`}></div>
								</div>
								{/* <Image src={slide.img} alt='' width={400} height={0} className="rounded-xl object-cover" /> */}
							</a>
						</div>
					))}
				</div>
			</div>

			{/* MOUSE GO TO NEXT ANIMATION */}
			<div className="relative mt-8">
				<p className="absolute flex justify-center left-0 right-0">
					<a href="#portfolio" className="bounce">
						<Mouse fontSize="large" className="text-primary" />
					</a>
				</p>
			</div>

			{/* CARDS */}
			<div className="text-3xl font-bold mt-20 text-primary-dark" id="portfolio">Portfolio</div>
			<div className="text-xl text-primary-dark">28+ projects realized</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 rounded-lg mt-4">

				{slides.map((slide, index) => (

					<div key={index} className="relative flex flex-col items-center justify-start rounded-xl border border-slate-300 bg-gradient-to-b from-primary-light">
						
						<div className="relative flex flex-col items-center justify-end">
							<div className="w-full">
								<a href={slide.url} target="_blank">
									<Image
										className=""
										src={slide.img}
										width={0}
										height={0}
										sizes="200vw"
										style={{ width: '100%', height: 'auto' }} alt=""
									/>
								</a>
							</div>
							<div className="mt-3 flex justify-between gap-3 h-6 text-lg font-medium">
							{slide.type}
							<Image alt='techno logo' className="items-center justify-center" src={slide.icon || '/default-icon.png'} width={28} height={28} />
						</div>
							<div className="p-5 mb-8 border-t border-slate-300">								
									<div className="flex text-sm sm:text-xl lg:text-xl font-medium tracking-tight text-gray-900">
										<span className="">{slide.description}</span>
									</div>								
							</div>
						</div>
						<div className="absolute bottom-1 mb-2">
							<a href={slide.url} target="_blank"
								className="my-2 px-3 py-1 text-sm font-medium text-center align-bottom text-primary hover:bg-primary rounded focus:outline- border border-primary">
								<span>DEMO</span>
							</a>
						</div>
					</div>
				))}
			</div>

			<div className="flex flex-col justify-center items-center gap-6 text-xl mx-8 my-8 font-bold text-slate-900 animate-pulse">
				Find out more...
			</div>
			<ContactForm />
		</>
	)
}

export default Slider