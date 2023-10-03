import React from 'react'
import { InputProps } from '../lib/interfaces'
import { cn } from '../lib/utils'

export const Input = ({ ...props }: InputProps) => {
  const { children, className, type, ...rest } = props

  return (
    <React.Fragment>
      <input
        className={cn(
          className,
          'bg-slate-100 px-2 py-1 text-2xl rounded-sm outline outline-2 outline-blue-500 focus:outline font-bold shadow-md',
        )}
        type={type}
        {...rest}
      >
        {children}
      </input>
    </React.Fragment>
  )
}
