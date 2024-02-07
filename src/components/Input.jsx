import React from 'react'

export default function Input({ type, className, ...props }) {
  return (
    <input type={type} className={`p-2 outline-none bg-white border rounded-md focus:border-2  ${className}`} {...props} />
  )
}
