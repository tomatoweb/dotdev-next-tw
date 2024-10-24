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
      <div className="py-9 md:py-14 px-1 md:px-20 lg:px-7">
        <h1 className="text-[39px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-[700] tracking-tighter text-dark text-center leading-snug">
          Creative Development, Corporate and Portfolio 
          <span className="text-rose"> React JS</span>
          <span className="text-tahiti"> Tailwind</span>
          {' '}
          <span className="text-blue-700">PHP</span> 
        </h1>
        <div className="py-9 flex justify-center gap-20 text-sm">
          <div>
            <span className="whitespace-nowrap">
            Demo Website (More Coming)
            </span>            
            <div className="flex justify-center items-center my-14">
              <div>                
                  <span className="text-[50px] lg:text-[80px] font-semibold text-primary poppins tracking-tighter">5+</span>                
              </div>
            </div>
          </div>
          <div className="text-center">
            <span>
            Inner Page
            </span>
            <div className="flex justify-center items-center my-14">
              <div>                
                  <span className="text-[50px] lg:text-[80px] font-semibold text-primary poppins tracking-tighter">30+</span>                
              </div>
            </div>
          </div>
          <div className="text-center">
            <span>
            Elements
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