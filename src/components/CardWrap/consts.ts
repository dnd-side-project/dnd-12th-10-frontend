import { CardWrapProps } from './index'

export const CARD_WRAP_SIZE: { [k in CardWrapProps['size']]: string } = {
  medium: 'min-w-[242px] w-[242px]',
  large: 'min-w-[328px] w-[328px]',
}
