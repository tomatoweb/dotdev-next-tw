import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#27272e] h-[60rem] relative  px-64 py-36">
      <div className='flex justify-evenly gap-10 mb-20'>
        <div className='text-white text-[69px] font-[400] tracking-tighter leading-snug'>
          <div >We have Impressive Features</div>
        </div>
        <div className='text-white text-[25px] font-[600] tracking-tighter text-center leading-snug'>
          <div >You will love all of the features in our template. 100% guaranteed satisfaction.</div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 grid-rows-3 gap-12 text-white">
        <div className='text-center flex flex-col justify-center items-center'>
          <Image alt='' src={"/react.png"} width={50} height={50} />
          Powered by React
          Our Template is Perfect for all devices. 
          It is made by React Structure. React JS was designed to provide high performance in mind.
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <Image alt='' src={"/sass.png"} width={48} height={48} />
          Sass Available
          Sass is more stable, powerful, and elegant because it is an extension of CSS. 
          So, it is easy for designers and developers to work more efficiently and quickly.
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <Image alt='' src={"/responsive.png"} width={50} height={50} />
          Fully Responsive Layout
          All the pages of this template are responsive. 
          We used the Bootstrap framework to build the website. It’s the best in class.
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <Image alt='' src={"/code-2.png"} width={45} height={45} />
          Reusable Components
          All the Components of this template are reusable. 
          We made abstrak using functional components. You can reuse any components
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <Image alt='' src={"/mobile.png"} width={40} height={40} />
          Mobile Optimized
          All the pages of this template are optimized. 
          We used the Bootstrap framework to build the website. It’s the best in class.
        </div>    
        <div className='text-center flex flex-col justify-center items-center'>
          <Image alt='' src={"/icon-13.png"} width={55} height={55} />
          Modern Design
          Abstrak is a modern creative design for Creative, Digital, Corporate agencies, etc. 
          Abstrak is a perfect solution for your digital agency
        </div>
    </div>    
      <div className="absolute top-10 right-0">
        <Image alt="" src={"/circle-1.png"} width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }}/>
      </div>
    </div>

  )
}

export default Footer