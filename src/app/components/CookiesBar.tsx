'use client'
import Cookies from '@/app/svg/Cookies'
import { useState } from 'react';

const CookiesBar = () => {

  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  return (
    <>
        <div className={`bg-gray-100 fixed left-5 h-auto z-50 items-center rounded-2xl flex flex-col justify-center text-2xl font-bold cursor-pointer transition-all delay-75 duration-1000 shadow-2xl ${!cookiesAccepted ? 'bottom-20' : '-bottom-[18rem]'}`}>
          <div
            className='h-[80px] w-[300px] bg-cover bg-center bg-no-repeat rounded-t-2xl '
            style={{ backgroundImage: `url(/cookies.jpg)` }}
          >
          </div>
          <div className='w-[16rem] flex flex-wrap justify-between max-w-screen-2xl m-0 p-2'>
            <div className='text-left'>
              <div className='text-[1.2rem] tracking-tight'>
                This website uses cookies
              </div>
              <div className='text-xs font-thin tracking-tight text-wrap'>
                Nous utilisons des cookies afin de vous offrir une expérience utilisateur optimale.
              </div>
              <div className='text-xs font-thin tracking-tight text-wrap'>
                Vous pouvez choisir les cookies que vous souhaitez autoriser et revenir sur vos choix à tout moment.
              </div>
              <div className='flex justify-left gap-4 my-4 text-sm '>
                <button onClick={() => setCookiesAccepted(!cookiesAccepted)} className="bg-black text-white tracking-tighter font-bold pb-3 pt-2 px-4 rounded-full">
                  Accept
                </button>
                <button onClick={() => setCookiesAccepted(!cookiesAccepted)} className=' tracking-tighter underline p-1'>
                  Parameters
                </button>
              </div>
            </div>
          </div>
        </div>
      <div className='fixed bottom-3 left-3 z-50'>
        <button onClick={() => setCookiesAccepted(!cookiesAccepted)} className="bg-black text-white p-1 rounded-full">
          <Cookies />
        </button>
      </div>
    </>
  )
}

export default CookiesBar