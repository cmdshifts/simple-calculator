import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils'
import { type IconType } from 'react-icons'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary'
  Icon?: IconType
}

export const Button = ({ styleType, Icon, ...props }: ButtonProps) => {
  const { className, onClick, children } = props

  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className={cn(
          className,
          `h-[40px] min-w-[40px] rounded-full font-bold shadow-md transition-all ease-in-out duration-150 select-none ${
            styleType === 'secondary'
              ? 'bg-slate-100 text-zinc-900 hover:bg-slate-100/80'
              : 'bg-zinc-900 text-slate-100 hover:bg-zinc-900/80'
          } ${Icon ? 'p-2' : 'px-4 py-2'}`,
        )}
      >
        {Icon ? (
          <React.Fragment>
            <Icon className="m-auto" />
            {children}
          </React.Fragment>
        ) : (
          <React.Fragment>{children}</React.Fragment>
        )}
      </button>
    </React.Fragment>
  )
}
