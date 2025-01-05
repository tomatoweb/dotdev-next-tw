import Image from "next/image"
import Slider from "./components/Slider"
import { Button, SvgIcon } from "@mui/material"

const Homepage = () => {
  return (
    <div className=''>
      <div className="splash">
        <Image src="/bubble-36.png" alt="" width={530} height={300} className="bubble36"/>
        <Image alt="" src="/bubble-14.png" width={200} height={200} className="bubble1" />
        <Image alt="" src="/bubble-37.png" width={200} height={200} className="bubble2" />
        <Image alt="" src="/bubble-31.png" width={200} height={200} className="bubble3" />
      </div>
      <div className="pt-9 md:pt-14 px-1 md:px-20 lg:px-7">
        <h1 className=" flex flex-col text-[39px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-[700] tracking-tighter text-dark text-center leading-snug">
          <div>Creative Web Development</div>
          <div className="text-[29px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-[700] tracking-tighter text-dark text-center leading-snug">Business & Corporate</div>
          <div>
            <span className="text-blue-700">PHP</span>
            <span className="text-rose"> React</span>
            <span className="text-tahiti"> Tailwind</span>
            <span className="text-bubble-gum"> MUI</span>
            {' '}
          </div>
        </h1>
        <div className="pt-9 flex justify-center gap-20 text-sm">
          <div>
            <span className="whitespace-nowrap">
            Demo Apps (More Coming)
            </span>            
            <div className="flex justify-center items-center my-14">
              <div>                
                  <span className="text-[50px] lg:text-[80px] font-semibold text-primary poppins tracking-tighter">6+</span>                
              </div>
            </div>
          </div>
          <div className="text-center">
            <span>
            Dev Technos
            </span>
            <div className="flex justify-center items-center my-14">
              <div>                
                  <span className="text-[50px] lg:text-[80px] font-semibold text-primary poppins tracking-tighter">20+</span>                
              </div>
            </div>
          </div>
          <div className="text-center">
            <span>
            Docs
            </span>
            <div className="flex justify-center items-center my-14">
              <div>                
                  <span className="text-[50px] lg:text-[80px] font-semibold text-primary poppins tracking-tighter">30+</span>                
              </div>
            </div>
          </div>                    
        </div>
      </div>
      <Slider />
    </div>
  )
}

export default Homepage