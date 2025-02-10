import { ButtonProps } from '.'

type ButtonVariantStyle = Record<ButtonProps['variant'], string>

export const BUTTON_SIZE: { [k in ButtonProps['size']]: string } = {
  small: 'h-8 min-h-8',
  medium: 'h-12 min-h-12',
  large: 'h-16 min-h-16',
}

export const BUTTON_STYLE: {
  [k in ButtonProps['color']]: ButtonVariantStyle
} = {
  primary: {
    filled: [
      'bg-blue-500',
      'text-white',
      'hover:bg-blue-600',
      'disabled:bg-gray-100 disabled:text-gray-400',
    ].join(' '),
    outlined: [
      'bg-white',
      'border border-[2px] border-blue-500',
      'text-blue-500',
      'hover:bg-blue-50',
      'disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-300',
    ].join(' '),
    subtle: [
      'bg-blue-50',
      'text-blue-500',
      'hover:bg-blue-100',
      'disabled:bg-gray-50 disabled:text-gray-400',
    ].join(' '),
    text: [
      'bg-white',
      'text-blue-500',
      'hover:bg-blue-50',
      'disabled:text-gray-400',
    ].join(' '),
  },
  secondary: {
    filled: [
      'bg-orange-500',
      'text-white',
      'hover:bg-orange-600',
      'disabled:bg-gray-100 disabled:text-gray-400',
    ].join(' '),
    outlined: '', // secondary 색상은 현재 해당 variant 존재하지 않음
    subtle: '',
    text: '',
  },
}
