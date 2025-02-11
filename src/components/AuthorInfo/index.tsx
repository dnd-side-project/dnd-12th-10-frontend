import Image from 'next/image'
import UserThumb from '@/assets/images/user-thumb.png'

interface AuthorInfoProps {
  author: string
  latestUpdateTime: string
}

const AuthorInfo = ({ author, latestUpdateTime }: AuthorInfoProps) => {
  return (
    <div className='flex items-center'>
      <Image src={UserThumb} alt='' width={22} height={22} />
      <span className='text-gray-700 text-body02 ml-1.5'>{author}</span>
      <span className='mx-2'>·</span>
      <span className='text-gray-400 text-body02 font-normal'>
        {latestUpdateTime}
      </span>
    </div>
  )
}

export default AuthorInfo
