import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentUpdateForm } from '../types'
import { updateComment } from '../../_lib'

/** 회고 댓글 수정 */
const useUpdateCommentMutation = (retrospectId: string) => {
  const queryClient = useQueryClient()

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
      queryClient.invalidateQueries({
        queryKey: ['getCommentList', { retrospectId }],
      })
    },
  })
}

export default useUpdateCommentMutation
