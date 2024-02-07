import React from 'react'
import Input from './Input'
import Button from './Button'

function HeroForm() {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label htmlFor="name" className='font-bold'>Enter your name</label>
        <Input type="text" name="name" id="name" placeholder="Enter your name" required />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="email" className='font-bold'>Enter your email</label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" required />
      </div>
      <div>
        <Button>Submit</Button>
      </div>
    </form>
  )
}

export default HeroForm