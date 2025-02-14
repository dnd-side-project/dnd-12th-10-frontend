import type { AuthorInfoProps } from './index'

export const AUTHOR_INFO_IMG_SIZE: { [k in AuthorInfoProps['size']]: number } =
  {
    medium: 22,
    large: 32,
  }

export const AUTHOR_INFO_TEXT_SIZE: { [k in AuthorInfoProps['size']]: string } =
  {
    medium: 'text-body02',
    large: 'text-body01',
  }
