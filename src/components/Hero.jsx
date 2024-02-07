import React from 'react'
import HeroForm from './HeroForm'
import Image from 'next/image'
import Button from './Button'
import { FaChevronRight } from "react-icons/fa";
function Hero() {
  return (
    <section id='home' className='flex justify-around mt-[200px]'>
      <div className='left-hero flex flex-col gap-2 items-start '>
        <h1 className='text-6xl font-bold'>Explore Kashmir</h1>
        <div className='flex text-4xl items-center gap-4'>
          Pleasure Travel and Tour
        </div>
        <p className='text-slate-700'>We Curate Packages That Suits you the Best and Some of them are listed Below.</p>
        <Button className="flex items-center justify-center gap-2">Explore <FaChevronRight /></Button>
      </div>
      <div className='right-hero w-[20%]'>
        <HeroForm />
      </div>
    </section>
  )
}

export default Hero