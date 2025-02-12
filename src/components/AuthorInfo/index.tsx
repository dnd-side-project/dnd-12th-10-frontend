import Image from 'next/image'
import UserThumb from '@/assets/images/user-thumb.png'
import { AUTHOR_INFO_IMG_SIZE, AUTHOR_INFO_TEXT_SIZE } from './consts'

export interface AuthorInfoProps {
  size: 'medium' | 'large'
  author: string
  latestUpdateTime: string
}

const AuthorInfo = ({ size, author, latestUpdateTime }: AuthorInfoProps) => {
  return (
    <div className='flex items-center'>
      <Image
        src={UserThumb}
        alt=''
        width={AUTHOR_INFO_IMG_SIZE[size]}
        height={AUTHOR_INFO_IMG_SIZE[size]}
      />
      <span className={`${AUTHOR_INFO_TEXT_SIZE[size]} text-gray-700 ml-1.5`}>
        {author}
      </span>
      <span className='mx-2 text-body03'>·</span>
      <span
        className={`${AUTHOR_INFO_TEXT_SIZE[size]} text-gray-400 font-normal`}
      >
        {latestUpdateTime}
      </span>
    </div>
  )
}

export default AuthorInfo
