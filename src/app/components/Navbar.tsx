import Link from "next/link"
import Image from "next/image"
import Github from '../svg/Github'

const Navbar = () => {

    return (
        <div className="navbar flex justify-between items-center relative" style={{zIndex: 1000}}>
            <div>
                <div className="flex items-center">
                    <Link className="lg:-mt-20 md:-ml-9 w-20 lg:w-15 xl:flex text-2xl md:text-3xl font-bold tracking-tighter" href="/">
                        <Image alt="" src="/mathias.png" width={100} height={100} />
                    </Link>
                </div>
            </div>
            <div>
                <div className="text-md items-center justify-end hidden lg:flex">
                    {/* LINKS */}
                    <div className="flex gap-4 text-gray-700">
                        <div>
                            <Link className="flex flex-col items-center" href="https://mathiasappelmans.be/geo" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300 w-20 lg:w-32 max-h-[5.5rem]" alt="" src="/geo.png" width={100} height={100} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                    React Leaflet
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex flex-col items-center" href="https://symfony.dotdev.be" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300  w-20 lg:w-32  max-h-[5.5rem]" alt="" src="/symfony-app-small.png" width={100} height={0} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                eShop Symfony
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex flex-col items-center" href="https://social.dotdev.be" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300  w-20 lg:w-32  max-h-[5.5rem]" alt="" src="/social-react-small.png" width={100} height={0} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                Social React
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex flex-col items-center" href="https://dashboard.dotdev.be" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300  w-20 lg:w-32  max-h-[5.5rem]" alt="" src="/dashboard-next-small.png" width={100} height={0} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                Dashboard Nextjs
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex flex-col items-center" href="https://e-shop.dotdev.be" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300  w-20 lg:w-32  max-h-[5.5rem]" alt="" src="/eshop-next-small.png" width={100} height={0} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                eShop React
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex flex-col items-center" href="https://doc.dotdev.be" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300  w-20 lg:w-32  max-h-[5.5rem]" alt="" src="/dotdev-next-small.png" width={100} height={0} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                Admin Nextjs
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex flex-col items-center" href="https://laravel.dotdev.be" target="_blank">
                                <Image className="rounded-2xl hover:scale-125 transition-all duration-300  w-20 lg:w-32  max-h-[5.5rem]" alt="" src="/eshop-laravel-small.png" width={100} height={0} />
                                <div className="text-sm text-center font-thin tracking-normal w-[100px] leading-normal mt-2 text-blue-800">
                                eShop Laravel
                                </div>
                            </Link>
                        </div>
                        {/* <div>
                            <a href="/Mathias_Appelmans_2025.pdf" target="_blank" className="flex">
                                <button className="text-sm w-[80px] leading-normal mt-2 text-blue-800">Curriculum Vitæ</button>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="lg:ml-1 lg:-mt-24 w-20 ml-[1%]">
                <Link
                    href="https://github.com/tomatoweb/dotdev-next-tw"
                    target="_blank"
                    className="flex axil-btn btn-fill-primary h-10 justify-center mr-[3px]">
                    <span className="ml-2 mr-1 font-thin tracking-normal text-xs">
                        My GitHub
                    </span>
                    <Github className="-mr-1" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar