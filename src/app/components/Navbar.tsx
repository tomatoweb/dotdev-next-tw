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
                          <Link href="/" className="flex">
                              Demo                              
                          </Link>
                      </li>
                      <li>
                          <Link href="/" className="flex">
                              <span>Features</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="/" className="flex">
                              <span>Why Us</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="/" className="flex">
                              <span>Documentation</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="/" className="flex">
                              <span>Support Ticket</span>
                          </Link>
                      </li>
                  </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="">
                
                        <Link href="/" className="flex axil-btn btn-fill-primary w-32 h-14 justify-center">
                            Buy Now
                        </Link>
                    
                {/* <MobileMenu/> */}
            </div>
        </div>

  )
}

export default Navbar