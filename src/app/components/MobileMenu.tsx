"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-4">        
        <div className="hidden rounded-full shadow border border-gray-200 size-fit px-1 py-1 bg-white cursor-pointer" onClick={()=>setIsOpen(prev=>!prev)}>
            <div className="flex flex-col gap-[3px] cursor-pointer items-center p-2 justify-center  ">
                <div className="bg-gray-600 w-4 h-[2px]"></div>
                <div className="bg-gray-600 w-4 h-[2px]"></div>
                <div className="bg-gray-600 w-4 h-[2px]"></div>
            </div>
            <Image alt="" src="/people-fade.png" width={30} height={10} className=""/>
        </div>
        { isOpen && (
          <div className="absolute bg-white top-24 left-0 w-full h-[calc(100vh-96px)] flex flex-col justify-center items-center gap-8 font-medium text-lg z-10-">
            <Link href="/">Home</Link>
            <Link href="/">Friends</Link>
            <Link href="/">Groups</Link>
            <Link href="/">Stories</Link>
            <Link href="/">Login</Link> 
          </div>
        )}
    </div>
  )
}

export default MobileMenu