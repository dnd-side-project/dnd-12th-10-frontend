import { useMutation } from '@tanstack/react-query'
import { CommentUpdateForm } from '../types'
import { updateComment } from '../../_lib'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

/** 회고 댓글 수정 */
const useUpdateCommentMutation = (retrospectId: string) => {
  const invalidateQueries = useInvalidateQueries()

  return useMutation({
    mutationFn: async ({
      commentId,
      data,
    }: {
      commentId: string
      data: CommentUpdateForm
    }) => {
      await updateComment(commentId, data)
    },
    onSuccess: () => {
      // 댓글 데이터 업데이트
      invalidateQueries(['getCommentList', retrospectId])
    },
  })
}

export default useUpdateCommentMutation
