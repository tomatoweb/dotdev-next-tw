import Link from "next/link"
import Image from "next/image"
import Github from '../svg/Github'

const Navbar = () => {
  
  return (
    <div className="navbar flex justify-between items-center">        
      <div>
        <div className="flex gap-5 items-center">
            <Image alt="" src="/dotdev-logo.png" width={60} height={60}/>
            <Link className="text-2xl md:text-3xl font-bold tracking-tighter" href="/">Dotdev</Link>
        </div>
      </div>        
      <div>
        <div className="text-md items-center justify-end hidden lg:flex">
            {/* LINKS */}
            <div className="flex text-gray-700 mainmenu">
                <li>
                    <a href="https://symfony.dotdev.be" target="_blank" className="flex">
                    <button className="w-[110px] leading-normal mt-4">eCommerce with Symfony</button>
                    </a>
                </li>
                <li>
                    <a href="https://dashboard.dotdev.be" target="_blank" className="flex">
                    <button className="w-[110px] leading-normal mt-4">Dashboard with NextJS</button>                              
                    </a>
                </li>
                <li>
                    <a href="https://social.dotdev.be" target="_blank" className="flex">
                    <button className="w-[110px] leading-normal mt-4">Social with ReactJS</button>
                    </a>
                </li>
                <li>
                    <a href="https://doc.dotdev.be" target="_blank" className="flex">
                    <button className="w-[110px] leading-normal mt-4">Documentation with NextJS</button>
                    </a>
                </li>
                <li>
                    <a href="https://e-shop.dotdev.be" target="_blank" className="flex">
                        <button className="w-[110px] leading-normal mt-4">eShopping with NextJS</button>
                    </a>
                </li>
                <li>
                    <a href="/Mathias_Appelmans_2025.pdf" target="_blank" className="flex">
                    <button className="w-[110px] leading-normal mt-4">Curriculum Vitæ</button>
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
              Code
          </span>
          <Github />
        </Link>
      </div>
    </div>
  )
}

export default Navbar