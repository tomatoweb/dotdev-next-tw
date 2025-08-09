import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Nextjs from "../svg/Nextjs";

interface AppProps {
    play: boolean, pauseOnHover	: boolean;
}

const App: React.FC<AppProps> = ({ play, pauseOnHover }) => (
    <Marquee play={true} pauseOnHover={pauseOnHover} className="overflow-x-visible -mt-5">
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-6 sm:h-10" src={"/laravel.png"} width={100} height={100} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-5 sm:h-10" src={"/mobile.png"} width={100} height={100} />
            <span className="ml-1 text-[#5856e5]">Mobile Optimized</span>
        </div>
        <div className='flex justify-center items-center ml-2'>
            <Image alt='' className="w-auto h-6 sm:h-10" src={"/react-full.png"} width={100} height={100} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-5 sm:h-10" src={"/symfony.png"} width={100} height={100} />
            <Image alt='' className="w-auto h-4 sm:h-5 ml-1" src={"/symfonytxt.png"} width={100} height={100} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-4 sm:h-10" src={"/tailwind.png"} width={100} height={100} />
            <span className="text-[#34dbeb] ml-1">Tailwind</span>
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-5 sm:h-10" src={"/code-2.png"} width={100} height={100} />
            <span className="ml-1 text-[#ecb9c2]">Components</span>
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-5 sm:h-10" src={"/php.png"} width={100} height={100} />
            <Image alt='' className="w-auto h-8 sm:h-10 mt-1" src={"/php8.png"} width={100} height={100} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-5 sm:h-10" src={"/responsive.png"} width={100} height={100} />
            <span className="ml-1 text-[#56b2c0]">Responsive</span>
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-3 sm:h-5" src={"/next.png"} width={100} height={100} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="w-auto h-5 sm:h-10" src={"/icon-13.png"} width={100} height={100} />
            <span className="ml-1 text-[#d19aa1]">Modern Design</span>
        </div>
    </Marquee>
);

export default App;