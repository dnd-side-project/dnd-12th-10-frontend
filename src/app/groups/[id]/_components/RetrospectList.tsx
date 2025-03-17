import Link from 'next/link'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import Dropdown from '@/components/Dropdown'
import AuthorInfo from '@/components/AuthorInfo'
import IconWithButton from '@/app/retrospects/[id]/_components/IconWithButton'
import { RetrospectList } from '../_types'
import { URL_PATH } from '@/consts/urls'
import { useRouter } from 'next/navigation'
import DOMPurify from 'dompurify'

const RetrospectList = ({
  retrospectList,
}: {
  retrospectList: RetrospectList
}) => {
  const { push } = useRouter()

  return (
    <>
      <div className='flex flex-row-reverse mt-16'>
        <Dropdown options={['최신순', '좋아요순']} />
      </div>
      <ul
        className={cn(
          'flex flex-col gap-[64px]',
          'mt-4',
          'px-[56px] py-[52px]',
          'bg-white ',
          'rounded-lg',
          'border-1 border-gray-100',
        )}
      >
        {retrospectList.map((retrospect, index) => (
          <RetrospectListItem key={index} {...retrospect} />
        ))}
        <li className='flex flex-col items-center'>
          <p className='text-title02 text-gray-500'>
            모든 회고를 확인했습니다!
          </p>
          <p className='text-body02 text-gray-500 font-normal mb-6'>
            이제 당신의 이야기를 들려주세요. ✍️
          </p>
          <Button
            color='primary'
            variant='subtle'
            size='medium'
            onClick={() => push(URL_PATH.RetrospectsCreate)}
          >
            <Icon name='edit' className='stroke-blue-500 mr-2' size={20} />
            글쓰기
          </Button>
        </li>
      </ul>
    </>
  )
}
export default RetrospectList

const RetrospectListItem = ({
  retrospectId,
  title,
  userName,
  timeString,
  content,
  // likeCount,
  commentCount,
}: RetrospectList[0]) => {
  const { push } = useRouter()

  return (
    <li className='border-b-1 border-gray-100 pb-[64px]'>
      <article>
        <Link
          href={`${URL_PATH.Retrospects}/${retrospectId}`}
          className='block mb-2'
        >
          <h3 className='text-title01'>{title}</h3>
        </Link>
        <AuthorInfo
          size='medium'
          author={userName}
          latestUpdateTime={timeString}
        />
        <div
          className='mt-10 text-body02 text-gray-700 whitespace-pre-wrap'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
        <Link
          href={`${URL_PATH.Retrospects}/${retrospectId}`}
          className='text-body02 text-blue-500 mt-4'
        >
          더보기
        </Link>
        {/* TODO: 태그 */}
        {/* <div className='flex gap-2.5 mt-8 text-body03'>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} color='gray' size='small' />
          ))}
        </div> */}
        <div
          className={cn(
            'mt-8',
            'flex gap-6',
            'text-title03 text-gray-400 font-semibold',
          )}
        >
          {/*<IconWithButton iconName='like' count={likeCount} />*/}
          <IconWithButton
            iconName='message'
            text='댓글'
            count={commentCount}
            countColor='blue'
            onClick={() => push(`${URL_PATH.Retrospects}/${retrospectId}`)}
          />
          {/*Todo:공유하기 기능은 후 순위로 판단해 주석 처리*/}
          {/*<button className='ml-auto'>*/}
          {/*  <MoreIcon width={22} height={22} className='fill-gray-400' />*/}
          {/*</button>*/}
        </div>
      </article>
    </li>
  )
}
