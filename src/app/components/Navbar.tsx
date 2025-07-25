import Link from "next/link"
import Image from "next/image"
import Github from '../svg/Github'
import Marquee from "../components/Marquee";
import { slides } from "@/lib/slides";

const Navbar = () => {

    return (
        <div className="flex justify-between">
            <Link className="-mt-6 mr-2 -ml-6" href="/">
                <Image alt="" src="/mathias.png" width={100} height={100} />
            </Link>
            <Marquee play={true} pauseOnHover={true} />
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