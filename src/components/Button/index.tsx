import { cn } from '@/utils/cn'
import React, { PropsWithChildren } from 'react'
import { BUTTON_SIZE, BUTTON_STYLE } from './consts'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color: 'primary' | 'secondary'
  variant: 'filled' | 'outlined' | 'subtle' | 'text'
  size: 'small' | 'medium' | 'large'
}

const Button = ({
  color,
  variant,
  size,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type='button'
      className={cn(
        'px-3',
        'flex',
        'items-center',
        'justify-center',
        'rounded-[999px]',
        'min-w-[140px]',
        'text-title03',
        'font-semibold',
        BUTTON_SIZE[size],
        BUTTON_STYLE[color][variant],
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
