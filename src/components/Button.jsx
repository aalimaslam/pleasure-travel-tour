import React from 'react'

function Button({ children, className, type = 'submit' }) {
  return (
    <button className={`px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 ${className}`} type={type}>{children}</button>
  )
}

export default Button