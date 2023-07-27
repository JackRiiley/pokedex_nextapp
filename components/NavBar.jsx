import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function NavBar () {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='pt-16'>
  <nav className='w-full bg-red-400 fixed top-0 left-0 right-0 z-10'>
    <div className='flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:px-8'>
      {/* Home Button */}
      <div className="order-first">
        <Link href="/">
          <Image src="/HomeIcon.svg" width={40} height={40} alt="logo" />
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <Image src="/CloseIcon.svg" width={20} height={20} alt="logo" />
          ) : (
            <Image
              src="/MenuIcon.svg"
              width={20}
              height={20}
              alt="logo"
              className="focus:border-none active:border-none"
            />
          )}
        </button>
      </div>
      {/* Empty space for center alignment */}
      <div className="hidden md:flex-1"></div>
      {/* Navigation options */}
      <div className={`flex items-center md:block ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
        <ul className='h-screen md:h-auto items:center justify-center md:flex'>
          <li className='pb-6 text-xl text-gray-900 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-white border-white md:hover:text-white md:hover:bg-transparent'>
            <Link href="/pokemon" onClick={() => setNavbar(!navbar)}>
              Pokemon
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    )
}

export default NavBar;