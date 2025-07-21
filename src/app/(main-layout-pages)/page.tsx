import Image from "next/image"
import Slider from "@/app/components/Slider"
import { Button, SvgIcon } from "@mui/material"
import Products from "@/app/components/Products"

const Homepage = () => {
    return (
        <div className=''>
            <Image alt='' className="absolute top-0 right-0 mt-[-20rem] w-52" src={"/bubble-35.png"} width={250} height={200} />
            <div className="splash">
                <Image src="/bubble-36.png" alt="" width={530} height={300} className="bubble36" />
                <Image alt="" src="/bubble-14.png" width={200} height={200} className="bubble1" />
                <Image alt="" src="/bubble-37.png" width={200} height={200} className="bubble2" />
                <Image alt="" src="/bubble-31.png" width={200} height={200} className="bubble3" />
            </div>
            <div className="md:pt-10px md:px-20 lg:px-7 -mt-3">
                <h1 className=" flex flex-col text-[39px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-[700] tracking-tighter text-dark text-center leading-snug">
                    <div>Web Developer</div>
                    <div className="text-[19px] md:text-[28px] lg:text-[29px] xl:text-[30px] font-[700] tracking-tighter text-blue-800 text-center leading-snug">
                    I design, build, manage and optimise your app/website
                    </div>
                    <div className="text-[19px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-[700] tracking-tighter text-dark text-center leading-snug">
                    in a professional way, using the best and most modern tools.
                    I modernise the look of your pages and optimise Google referencing.
                    Improve speed and user experience.
                    </div>
                    <div>
                        <span className="text-blue-700 sm:text-6xl">Fast</span>
                        <span className="text-yellow-400 sm:text-6xl"> Dynamic</span>
                        <span className="text-rose sm:text-6xl"> Reactive</span>
                        <span className="text-tahiti sm:text-6xl"> Styled</span>
                        <span className="text-bubble-gum sm:text-6xl"> Secure</span>
                        {' '}
                    </div>
                </h1>
            </div>
            <Slider>
                <Products />
                </Slider>
        </div>
    )
}

export default Homepage