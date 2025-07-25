import { Retrospect } from '@/app/_types'
import AuthorInfo from '@/components/AuthorInfo'
import Link from 'next/link'
import { URL_PATH } from '@/consts/urls'
import { Icon } from '@/components/Icon'
import SanitizedHtmlRenderer from '@/components/SanitizedHtmlRenderer'

const PopularRetrospectCard = ({
  groupId,
  title,
  content,
  userName,
  timeString,
}: { groupId: number } & Retrospect) => {
  return (
    <div className='bg-white rounded-md p-6 w-full h-[344px] flex flex-col'>
      <div className='flex items-center justify-between'>
        <h4 className='text-title01 mb-2'>{title}</h4>
        <AuthorInfo
          size='medium'
          author={userName}
          latestUpdateTime={timeString}
        />
      </div>
      <SanitizedHtmlRenderer
        content={content}
        className='text-gray-700 text-body02 font-normal mt-6 line-clamp-5'
      />
      <Link
        href={`${URL_PATH.GroupList}/${groupId}`}
        className='flex text-blue-500 text-body02 mt-auto ml-auto'
      >
        모임구경하기
        <Icon name='arrow-right' size={23} />
      </Link>
    </div>
  )
}

export default PopularRetrospectCard
