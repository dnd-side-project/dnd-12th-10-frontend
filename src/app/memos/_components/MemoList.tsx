import { Retrospect } from '@/app/_types'
import MemoCard from './MemoCard'

interface MemoListProps {
  myMemoList: Retrospect[]
}

const MemoList = ({ myMemoList }: MemoListProps) => {
  return (
    <div className='flex gap-4 flex-wrap h-[186px] overflow-hidden'>
      {myMemoList.map((props) => (
        <MemoCard
          key={`memos-${props.retrospectId}`}
          retrospectId={props.retrospectId}
          title={props.title}
          content={props.content}
        />
      ))}
    </div>
  )
}

export default MemoList
