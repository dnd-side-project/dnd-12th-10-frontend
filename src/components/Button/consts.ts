import { ButtonProps } from '.'

type ButtonVariantStyle = Record<ButtonProps['variant'], string>

export const BUTTON_SIZE: { [k in ButtonProps['size']]: string } = {
  small: 'h-8',
  medium: 'h-12',
  large: 'h-16',
}

export const BUTTON_STYLE: {
  [k in ButtonProps['color']]: ButtonVariantStyle
} = {
  primary: {
    filled: [
      'bg-[#3881F1]',
      'text-white',
      'hover:bg-[#2562CC]',
      'disabled:bg-[#DCDCDC] disabled:text-[#9B9B9B]',
    ].join(' '),
    outlined: [
      'bg-white',
      'border border-[2px] border-[#3881F1]',
      'text-[#3881F1]',
      'hover:bg-[#F0F8FF]',
      'disabled:bg-[#F7F7F7] disabled:text-[#9B9B9B] disabled:border-[#B0B0B0]',
    ].join(' '),
    subtle: [
      'bg-[#F0F8FF]',
      'text-[#3881F1]',
      'hover:bg-[#DEF0FF]',
      'disabled:bg-[#F7F7F7] disabled:text-[#9B9B9B]',
    ].join(' '),
    text: [
      'bg-white',
      'text-[#3881F1]',
      'hover:bg-[#F0F8FF]',
      'disabled:text-[#9B9B9B]',
    ].join(' '),
  },
  secondary: {
    filled: [
      'bg-[#FF530A]',
      'text-white',
      'hover:bg-[#FF530A]',
      'disabled:bg-[#FF530A] disabled:text-[#FF530A]', // TODO: 확인 필요
    ].join(' '),
    outlined: '', // secondary 색상은 현재 해당 variant 존재하지 않음
    subtle: '',
    text: '',
  },
}
