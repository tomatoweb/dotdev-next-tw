'use client'
import Link from "next/link"
import Image from "next/image"
import Github from '../svg/Github'
import Marquee from "../components/Marquee";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

	const ref = useRef<HTMLDivElement>(null);

	// close CV pdf link on click outside 
	useEffect(() => {
		const handleOutSideClick = (event: any) => {
			if (!ref.current?.contains(event.target)) {
				setOpen(false)
			}
		};

		window.addEventListener("mousedown", handleOutSideClick);

		return () => {
			window.removeEventListener("mousedown", handleOutSideClick);
		};
	}, [ref]);

	const [open, setOpen] = useState(false);

	return (
		<div ref={ref} className="flex justify-between" >

			<div className="flex flex-col -mt-6 mr-2 -ml-6">
				<button onClick={() => setOpen(!open)}>
					<Image alt="" src="/mathias.png" width={100} height={100} />
				</button>
				{open && (
					<Link href="/Mathias_Appelmans_2025.pdf" className="flex flex-col justify-center items-center gap-2 ml-9 mr-4 bg-opacity-10 bg-slate-800 px-2 pt-1 rounded" target="_blank">
						<div className="text-xs">CV</div>
						<Image alt='' className="mb-3" src={"/pdf.svg"} width={30} height={30} />
					</Link>
				)}
			</div>

			<div className="w-3/4 sm:w-[89%]">
				<Marquee play={true} pauseOnHover={true} />
			</div>
			{/* <div className="grid grid-cols-4 md:grid-cols-8 gap-2 lg:gap-6" style={{ zIndex: 10 }}>
                {slides.map((slide) => (
                    <Link key={slide.id} className="flex flex-col items-center" href={slide.url} target="_blank">
                        <div style={{ backgroundImage: `url(${slide.imgsmall})` }} className={`h-14 w-14 sm:h-24 sm:w-24 md:h-16 md:w-16 lg:h-24 lg:w-24 bg-cover bg-center bg-no-repeat size-18 rounded-full hover:scale-125 transition-all duration-300 shadow-xl`}></div>
                        <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800 hidden">
                            slide.title
                        </div>
                    </Link>
                ))}
            </div> */}
			<Link className="bg-[#238636] text-white rounded-lg h-fit z-50 ml-2 -mr-1 p-2 -mt-6"
				href="https://github.com/tomatoweb/dotdev-next-tw" target="_blank">
				<span className="ml-2 mr-1 font-thin tracking-normal text-xs hidden">
					My GitHub
				</span>
				<div className='has-tooltip'>
					<span className='tooltip rounded-lg shadow-lg p-2 bg-[#238636] text-white text-sm mt-10 -ml-14'>My GitHub</span>
					<Github className="m-auto" />
				</div>
			</Link>
		</div>
	)
}

export default Navbar