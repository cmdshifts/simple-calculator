import React from 'react'
import { cn } from '../lib/utils'
import { DisplayProps } from '../lib/interfaces'

export const Display = ({ displayType, ...props }: DisplayProps) => {
  const { children, className } = props

  return (
    <div
      className={cn(
        `w-full text-right ${
          displayType === 'total'
            ? 'text-zinc-500 text-base font-bold'
            : 'text-4xl font-bold'
        }`,
        className,
      )}
    >
      {children}
    </div>
  )
}
