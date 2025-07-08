import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Nextjs from "../svg/Nextjs";

interface AppProps {
    play: boolean, pauseOnHover	: boolean;
}

const App: React.FC<AppProps> = ({ play, pauseOnHover }) => (
    <Marquee play={play} pauseOnHover={pauseOnHover}>
        <div className='flex justify-center items-center mx-3'>
            <Image alt='' className="" src={"/laravel.png"} width={120} height={120} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="" src={"/mobile.png"} width={22} height={22} />
            <span className="ml-2 text-[#5856e5] text-lg">Mobile Optimized</span>
        </div>
        <div className='flex justify-center items-center ml-2'>
            <Image alt='' className="" src={"/react.png"} width={110} height={110} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="" src={"/symfony.svg"} width={45} height={45} />
            <Image alt='' className="" src={"/symfonytxt.png"} width={85} height={85} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="" src={"/tailwind.png"} width={40} height={40} />
            <span className="text-[#34dbeb] ml-1 text-[22px]">Tailwind</span>
        </div>
        <div className='flex justify-center items-center mx-3'>
            <Image alt='' className="" src={"/code-2.png"} width={32} height={32} />
            <span className="ml-2 text-[#ecb9c2] text-xl">Components</span>
        </div>
        <div className='flex justify-center items-center mx-3'>
            <Image alt='' className="mb-2" src={"/php.png"} width={48} height={48} />
            <Image alt='' className="mt-1" src={"/php8.png"} width={65} height={65} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="" src={"/responsive.png"} width={50} height={50} />
            <span className="ml-1 text-[#56b2c0] text-xl">Responsive</span>
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="" src={"/next.png"} width={110} height={110} />
        </div>
        <div className='flex justify-center items-center mx-2'>
            <Image alt='' className="" src={"/icon-13.png"} width={42} height={42} />
            <span className="ml-2 text-[#d19aa1] text-lg">Modern Design</span>
        </div>
    </Marquee>
);

export default App;