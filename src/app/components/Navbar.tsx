import Link from "next/link"
import Image from "next/image"
import Github from '../svg/Github'

const Navbar = () => {

    return (
        <div className="navbar flex justify-between items-center">
            <div>
                <div className="flex items-center">
                    <Link className="xl:flex text-2xl md:text-3xl font-bold tracking-tighter" href="/">
                        <Image alt="" src="/mathias.png" width={100} height={100} />
                    </Link>
                </div>
            </div>
            <div>
                <div className="text-md items-center justify-end hidden lg:flex">
                    {/* LINKS */}
                    <div className="flex text-gray-700 mainmenu">
                        <li>
                            <a href="https://symfony.dotdev.be" target="_blank" className="flex">
                                <button className="text-sm w-[100px] leading-normal mt-2 text-blue-800">
                                    eCommerce with Symfony
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="https://dashboard.dotdev.be" target="_blank" className="flex">
                                <button className="text-sm w-[80px] leading-normal mt-2 text-blue-800">Dashboard with NextJS</button>
                            </a>
                        </li>
                        <li>
                            <a href="https://social.dotdev.be" target="_blank" className="flex">
                                <button className="text-sm w-[80px] leading-normal mt-2 text-blue-800">Social with ReactJS</button>
                            </a>
                        </li>
                        <li>
                            <a href="https://doc.dotdev.be" target="_blank" className="flex">
                                <button className="text-sm w-[80px] leading-normal mt-2 text-blue-800">Docs with NextJS</button>
                            </a>
                        </li>
                        <li>
                            <a href="https://e-shop.dotdev.be" target="_blank" className="flex">
                                <button className="text-sm w-[80px] leading-normal mt-2 text-blue-800">eShopping with NextJS</button>
                            </a>
                        </li>
                        <li>
                            <a href="https://laravel.dotdev.be" target="_blank" className="flex">
                                <button className="text-sm w-[100px] leading-normal mt-2 text-blue-800">
                                    eCommerce with Laravel
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="/Mathias_Appelmans_2025.pdf" target="_blank" className="flex">
                                <button className="text-sm w-[80px] leading-normal mt-2 text-blue-800">Curriculum Vitæ</button>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div>
                <Link
                    href="https://github.com/tomatoweb/dotdev-next-tw"
                    target="_blank"
                    className="flex axil-btn btn-fill-primary h-10 justify-center">
                    <span className="text-xl flex">
                        <Image alt='' className="mt-4" src={"/DoubleChevron.svg"} width={30} height={30} />
                    </span>
                    <span className="mr-3">
                        My GitHub
                    </span>
                    <Github />
                </Link>
            </div>
        </div>
    )
}

export default Navbar