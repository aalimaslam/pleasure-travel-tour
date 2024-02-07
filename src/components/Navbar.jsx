'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
function Navbar() {
  let [open, setOpen] = React.useState(false);
  return (
    <nav className='flex justify-between px-10 py-3 items-center fixed w-[80%] top-7 left-[10%] bg-slate-800 rounded-xl'>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" height={50} width={50} />
        </Link>
      </div>
      <div className='nav-links'>
        <ul className='flex items-center gap-7 text-white'>
          <li>
            <Link href='#home' className='hover:text-slate-200'>Home</Link>
          </li>
          <li>
            <Link href='#about' className='hover:text-slate-200'>About</Link>
          </li>
          <li>
            <Link href='#packages' className='hover:text-slate-200'>Packages</Link>
          </li>
          <li>
            <Link href='#contact' className='hover:text-slate-200'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='hamburger sm:hidden block'>
        <div className='hover:bg-slate-200 p-4 cursor-pointer rounded-lg'>
          {
            !open ? (
              <RiMenu3Line className='text-2xl' onClick={() => setOpen(!open)} />
            ) : (
              <IoClose className='text-2xl' onClick={() => setOpen(!open)} />
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar