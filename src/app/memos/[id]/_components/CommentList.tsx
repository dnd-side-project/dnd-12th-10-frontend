import CommentItem from './CommentItem'
import type { CommentItemProps } from './CommentItem'

interface CommentListProps {
  commentList: CommentItemProps[]
}

/** 댓글 리스트 컴포넌트 */
const CommentList = ({ commentList }: CommentListProps) => {
  return (
    <ul className='mt-4 flex flex-col gap-10'>
      {commentList.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </ul>
  )
}
export default CommentList
