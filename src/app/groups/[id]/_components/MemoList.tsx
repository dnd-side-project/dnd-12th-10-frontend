import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import Chip from '@/components/Chip'
import Dropdown from '@/components/Dropdown'

//Todo: Icon컴포넌트로 변경

// import MoreIcon from '@/assets/icons/more.svg'
import LikeIcon from '@/assets/icons/like.svg'
import MessageIcon from '@/assets/icons/message.svg'
import UserThumb from '@/assets/images/user-thumb.png'

interface MemoListItemProps {
  title: string
  nickname: string
  createdAt: string
  content: string
  tags: string[]
  numOfLikes: number
  numOfComments: number
}

const MemoList = ({ memoList }: { memoList: MemoListItemProps[] }) => {
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
        {memoList.map((memo, index) => (
          <MemoListItem key={index} {...memo} />
        ))}
      </ul>
    </>
  )
}
export default MemoList

const MemoListItem = ({
  title,
  nickname,
  createdAt,
  content,
  tags,
  numOfLikes,
  numOfComments,
}: MemoListItemProps) => {
  return (
    <li className='border-b-1 border-gray-100 pb-[64px]'>
      <article>
        {/*Todo: 회고록 상세페이지로 href 변경 필요*/}
        <Link href='/'>
          <h3 className='text-title01'>{title}</h3>
        </Link>
        <div className='flex mt-2 text-body02'>
          <Image
            src={UserThumb}
            alt=''
            width={22}
            height={22}
            className='w-[22px] h-[22px]'
          />
          <span className='text-gray-700  ml-1.5'>{nickname}</span>
          <span className='mx-2 text-gray-400'>·</span>
          <span className='text-gray-400'>{createdAt}</span>
        </div>
        <div className='mt-10 text-body02 text-gray-700 whitespace-pre-wrap'>
          {content}
        </div>
        {/*Todo: 회고록 상세페이지로 href 변경 필요*/}
        <Link href='/' className='text-body02 text-blue-500 mt-4'>
          더보기
        </Link>
        <div className='flex gap-2.5 mt-8 text-body03'>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} color={'gray'} size={'small'} />
          ))}
        </div>
        <div
          className={cn(
            'mt-8',
            'flex gap-6',
            ' text-title03 text-gray-400 font-semibold',
            ' stroke-gray-400',
          )}
        >
          <div className='flex gap-1.5'>
            <button>
              <LikeIcon width={22} height={22} />
            </button>
            <span>{numOfLikes}</span>
          </div>
          <div className='flex gap-1.5'>
            <MessageIcon className='mr-1.5' width={22} height={22} />
            {/*Todo: 회고록 상세페이지로 href 변경 필요*/}
            <Link href='/'>
              댓글 <span className='text-blue-400'>{numOfComments}</span>
            </Link>
          </div>
          {/*Todo:공유하기 기능은 후 순위로 판단해 주석 처리*/}
          {/*<button className='ml-auto'>*/}
          {/*  <MoreIcon width={22} height={22} className='fill-gray-400' />*/}
          {/*</button>*/}
        </div>
      </article>
    </li>
  )
}
