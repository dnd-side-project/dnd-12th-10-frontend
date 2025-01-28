import React, { PropsWithChildren } from 'react'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'filled' | 'outlined' | 'subtle' | 'text'
  size: 'small' | 'medium' | 'large'
}

const SIZE: { [k in Props['size']]: string } = {
  small: 'py-[5px]',
  medium: 'py-[13px]',
  large: 'py-[21px]',
}

const VARIANT: { [k in Props['variant']]: string } = {
  filled: 'bg-[#3881F1] text-white', // TODO: 컬러시스템 적용
  outlined: 'bg-white border border-[#3881F1] text-[#3881F1] ',
  subtle: 'bg-[#F0F8FF] text-[#3881F1]',
  text: 'bg-white text-[#3881F1]',
}

const Button = ({
  variant,
  size,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      type='button'
      className={`rounded-3xl px-3 flex items-center ${SIZE[size]} ${VARIANT[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
