import React from 'react'
import { CalculatorButtonProps } from '../lib/interfaces'
import { cn } from '../lib/utils'

export const CalculatorButton = ({
  children,
  Icon,
  buttonType,
  onClick,
  ...props
}: CalculatorButtonProps) => {
  const { className } = props

  return (
    <>
      <button
        className={cn(
          className,
          `${
            buttonType === 'number'
              ? 'bg-slate-200 text-zinc-900 hover:bg-slate-200/80'
              : buttonType === 'operator'
              ? 'bg-blue-500 text-slate-100 hover:bg-blue-500/80'
              : 'bg-slate-300 text-zinc-900 hover:bg-slate-300/80'
          } m-auto select-none transition-all duration-200 ease-in-out rounded-full min-w-[65px] h-[65px] font-bold`,
        )}
        onClick={onClick}
      >
        <>
          {Icon ? (
            <>
              <Icon className={'m-auto'} />
              {children}
            </>
          ) : (
            <>{children}</>
          )}
        </>
      </button>
    </>
  )
}
