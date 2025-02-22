import { Retrospect } from '@/app/_types'
import AuthorInfo from '@/components/AuthorInfo'
import DOMPurify from 'dompurify'
import Link from 'next/link'
import { URL_PATH } from '@/consts/urls'

const PopularMemoCard = ({
  retrospectId,
  title,
  content,
  userName,
  timeString,
}: Retrospect) => {
  return (
    <div className='bg-white rounded-md p-6 relative w-full'>
      <h4 className='text-title01 mb-2'>{title}</h4>
      <AuthorInfo
        size='medium'
        author={userName}
        latestUpdateTime={timeString}
      />
      <div
        className='text-gray-700 text-body02 font-normal mt-6 whitespace-pre-wrap line-clamp-5'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
      <Link
        href={`${URL_PATH.Memos}/${retrospectId}`}
        className=' bottom-6 text-blue-500 text-body02 mt-4 block'
      >
        더보기
      </Link>
    </div>
  )
}

export default PopularMemoCard
