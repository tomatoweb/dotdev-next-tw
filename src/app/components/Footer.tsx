import Image from 'next/image'
import React from 'react'
import Nextjs from '../svg/Nextjs'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Footer = () => {
    return (

        <div className="bg-[#27272e] relative">
            <div className='max-w-[70%] m-auto'>
                <div className='flex flex-col md:flex-row justify-evenly gap-10 pt-20'>
                    <div className='text-white text-[69px] font-[400] tracking-tighter leading-snug'>
                        <div >We use Impressive technologies</div>
                    </div>
                    <div className='text-white text-[25px] font-[600] tracking-tighter text-center leading-snug'>
                        <div >Discover all of the amazing features in our self-made Apps and Templates</div>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-12 text-white text-xs md:text-lg">
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div className='flex'>
                            <div>
                                <Image alt='' className="mb-3" src={"/react.png"} width={50} height={50} />
                            </div>
                            <Nextjs width={77} height={77} className='text-gray-300 ml-4' />
                        </div>
                        Powered by React NextJS
                        Our Apps are Perfect for all devices.
                        It is made by React Structure. React JS was designed to provide high performance in mind.
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/sass.png"} width={48} height={48} />
                        Sass-SCSS is more stable, powerful, and elegant because it is an extension of CSS.
                        So, it is easy for designers and developers to work more efficiently and quickly.
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/responsive.png"} width={50} height={50} />
                        Responsive: All the pages of our Apps are responsive.
                        We used the Tailwind, MUI and Bootstrap frameworks to build the website.
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/code-2.png"} width={45} height={45} />
                        Reusable Components:
                        All the Components of our Apps are reusable.
                        We made Dotdev using functional components. We can reuse any components
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/mobile.png"} width={40} height={40} />
                        Mobile Optimized:
                        All the pages of our Apps are Mobile optimized.
                        We used the most performant frontend frameworks to build the website
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/icon-13.png"} width={55} height={55} />
                        Modern Design:
                        Dotdev is a modern creative design for Creative, Digital, Corporates and small business
                        Dotdev is a perfect solution for your organisation
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/php.png"} width={55} height={55} />
                        PHP powers some of the most successful websites on the internet today.
                        Developers use this server-side scripting language to create dynamic and scalable websites

                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/symfony.svg"} width={55} height={55} />
                        Symfony Framework:
                        The leading PHP framework to create websites and web applications. Built on top of the Symfony Components
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <Image alt='' className="mb-3" src={"/laravel.svg"} width={45} height={45} />
                        Laravel the PHP Framework for Web Artisans.
                        Laravel is a web application framework with expressive, elegant syntax
                    </div>
                </div>
            </div>
            <div className="absolute top-10 right-0">
                <Image alt="" src={"/circle-1.png"} width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }} />
            </div>
        </div>

    )
}

export default Footer