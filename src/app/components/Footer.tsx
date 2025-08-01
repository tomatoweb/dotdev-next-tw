import Image from 'next/image'
import React from 'react'
import Nextjs from '../svg/Nextjs'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const date = new Date();

const Footer = () => {
    return (

        <div className="bg-[#27272e] relative">
            <div className='max-w-[70%] m-auto'>
                <div className='flex flex-col md:flex-row justify-evenly gap-10 pt-20'>
                    <div className='text-white text-[50px] font-[400] tracking-tighter leading-snug mb-8'>
                        <div >Modern Impressive technologies</div>
                    </div>
                    <div className='text-white text-[25px] font-[600] tracking-tighter text-center leading-snug'>
                        <div >Discover the amazing features in self-made Apps and Templates</div>
                    </div>
                </div>
                <div className="mt-8 gri grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 text-white text-xs md:text-lg">
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div className='flex'>
                            <div>
                                <Image alt='' className="mb-3" src={"/react-full.png"} width={120} height={120} />
                            </div>
                        </div>
                        Powered by React NextJS (SSR)
                        Perfect for all devices.
                        It is made by React Structure. React JS was designed to provide high performance in mind.
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/responsive.png"} width={50} height={50} />
                        Responsive: All the pages of the Apps are responsive.
                        Used Tailwind, MUI and Bootstrap frameworks to style the apps.
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/code-2.png"} width={45} height={45} />
                        Reusable Components:
                        All the Components of the Apps are reusable.
                        Using functional components, can reuse any components
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/mobile.png"} width={40} height={40} />
                        Mobile Optimized:
                        All the pages of the Apps are Mobile optimized.
                        We used the most performant frontend frameworks to build the website
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/icon-13.png"} width={55} height={55} />
                        Modern Design:
                        Modern creative design for Creative, Digital, Corporates and small business
                        A perfect solution for your organisation
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/php.png"} width={55} height={55} />
                        PHP powers some of the most successful websites on the internet today.
                        Use this server-side scripting language to create dynamic and scalable websites

                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/symfony.svg"} width={55} height={55} />
                        Symfony Framework:
                        The leading PHP framework to create websites and web applications. Built on top of the Symfony Components
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <Image alt='' className="mb-3" src={"/laravel.svg"} width={45} height={45} />
                        Laravel the PHP Framework for Web Artisans.
                        Laravel is a web application framework with expressive, elegant syntax
                    </div>
                </div>
            </div>
            <div className='mt-12 p-4 bg-gray-800 text-gray-500 text-center '> Made with 💓 and Next.js in {date.getFullYear()} by Mathias Appelmans</div>
            <div className="absolute top-10 right-0">
                <Image alt="" src={"/circle-1.png"} width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} />
            </div>
        </div>

    )
}

export default Footer