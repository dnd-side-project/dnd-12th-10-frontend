import { Retrospect } from '@/app/_types'
import RetrospectCard from './RetrospectCard'

interface RetrospectListProps {
  myRetrospectList: Retrospect[]
}

const RetrospectList = ({ myRetrospectList }: RetrospectListProps) => {
  return (
    <div className='flex gap-4 flex-wrap h-[186px] overflow-hidden'>
      {myRetrospectList.map((props) => (
        <RetrospectCard
          key={`retrospects-${props.retrospectId}`}
          retrospectId={props.retrospectId}
          title={props.title}
          content={props.content}
        />
      ))}
    </div>
  )
}

export default RetrospectList
