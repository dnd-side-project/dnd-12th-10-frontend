import Chip from '@/components/Chip'
import AuthorInfo from '@/components/AuthorInfo'

interface MemoHeadingProps {
  title: string
  tags: string[]
  author: string
  latestUpdateTime: string
}

/** 회고록 상단 (제목, 태그, 작성 정보) 영역 */
const MemoHeading = ({
  title,
  tags,
  author,
  latestUpdateTime,
}: MemoHeadingProps) => {
  return (
    <>
      <h1 className='text-display01'>{title}</h1>
      <div className='mt-2 mb-10 flex gap-2.5 text-body03'>
        {tags.map((tag) => (
          <Chip key={`tag-${tag}`} label={tag} color='gray' size='small' />
        ))}
      </div>
      <AuthorInfo
        size='medium'
        author={author}
        latestUpdateTime={latestUpdateTime}
      />
    </>
  )
}

export default MemoHeading
