import Image from "next/image"
import Slider from "./components/Slider"
import { Button, SvgIcon } from "@mui/material"
import Products from "./components/Products"

const Homepage = () => {
    return (
        <div className=''>
            <div className="splash">
                <Image src="/bubble-36.png" alt="" width={530} height={300} className="bubble36" />
                <Image alt="" src="/bubble-14.png" width={200} height={200} className="bubble1" />
                <Image alt="" src="/bubble-37.png" width={200} height={200} className="bubble2" />
                <Image alt="" src="/bubble-31.png" width={200} height={200} className="bubble3" />
            </div>
            <div className="md:pt-10px-1 md:px-20 lg:px-7">
                <h1 className=" flex flex-col text-[39px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-[700] tracking-tighter text-dark text-center leading-snug">
                    <div>Looking for a Web Developer ?</div>
                    <div className="text-[19px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-[700] tracking-tighter text-dark text-center leading-snug">
                        My expertise spans the entire stack, designing and managing scalable back-end systems with 
                    </div>
                    <div className="text-[19px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-[700] tracking-tighter text-dark text-center leading-snug">
                    Symfony and Laravel and creating responsive front-end interfaces using React and Next.js.
                    </div>
                    <div>
                        <span className="text-blue-700">PHP</span>
                        <span className="text-yellow-400"> JS</span>
                        <span className="text-rose"> React</span>
                        <span className="text-tahiti"> Tailwind</span>
                        <span className="text-bubble-gum"> MySQL</span>
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