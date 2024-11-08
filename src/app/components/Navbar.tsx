import Link from "next/link"
import Image from "next/image"

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
                          <a href="/" target="_blank" className="flex">
                              Demo                              
                          </a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="flex">
                              <span>Features</span>
                          </a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="flex">
                              <span>Why Us</span>
                          </a>
                      </li>
                      <li>
                          <a href="http://doc.dotdev.be" target="_blank" className="flex">
                              <span>Documentation</span>
                          </a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="flex">
                              <span>Support</span>
                          </a>
                      </li>
                  </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="">
                
                        <Link href="/" className="flex axil-btn btn-fill-primary w-32 h-14 justify-center">
                            Explore
                        </Link>
                    
                {/* <MobileMenu/> */}
            </div>
        </div>

  )
}

export default Navbar