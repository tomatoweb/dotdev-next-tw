import Link from "next/link"
import Image from "next/image"
import Github from '../svg/Github'

const Navbar = () => {
  return (
        <div className="navbar flex justify-between items-center">
            {/* LEFT */}
            <div>
              <div className="flex gap-5 items-center">
                  <Image alt="" src="/dotdev-logo.png" width={60} height={60}/>
                  <Link className="text-2xl md:text-3xl font-bold tracking-tighter" href="/">Dotdev</Link>
              </div>
            </div>
            {/* CENTER */}
            <div>
              <div className="text-md items-center justify-end hidden lg:flex">
                  {/* LINKS */}
                  <div className="flex text-gray-700 mainmenu">
                      <li>
                          <a href="https://dashboard.dotdev.be" target="_blank" className="flex">
                          <span>Dashboard</span>                              
                          </a>
                      </li>
                      <li>
                          <a href="https://symfony.dotdev.be" target="_blank" className="flex">
                              <span>eCommerce</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://social.dotdev.be" target="_blank" className="flex">
                              <span>Social</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://doc.dotdev.be" target="_blank" className="flex">
                              <span>Documentation</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://e-shop.dotdev.be" target="_blank" className="flex">
                              <span>eShopping</span>
                          </a>
                      </li>
                      <li>
                          <a href="/Mathias_Appelmans_2025.pdf" target="_blank" className="flex">
                              <span>CV</span>
                          </a>
                      </li>
                  </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="">
                
                        <Link href="https://github.com/tomatoweb/dotdev-next-tw" target="_blank" className="flex axil-btn btn-fill-primary h-14 justify-center">
                          <Github />
                          <span className="ml-3">
                              Source code
                          </span>
                        </Link>
                    
                {/* <MobileMenu/> */}
            </div>
        </div>

  )
}

export default Navbar