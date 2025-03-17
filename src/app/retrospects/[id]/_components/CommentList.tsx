import { CommentList as CommentListType } from '@/app/groups/[id]/_types'
import CommentItem from './CommentItem'

/** 댓글 리스트 컴포넌트 */
const CommentList = ({ commentList }: { commentList: CommentListType }) => {
  return (
    <ul className='mt-4 flex flex-col gap-10'>
      {commentList.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))}
    </ul>
  )
}
export default CommentList
