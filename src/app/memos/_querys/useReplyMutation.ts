import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postReply } from '../_lib'
import { CommentCreateForm } from '../_types'

/** 답글 생성 */
const useReplyMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      data,
      commentId,
    }: {
      data: CommentCreateForm
      commentId: number
    }) => await postReply(data, commentId),
    onSuccess: () => {
      // 답글 업데이트
      queryClient.invalidateQueries({
        queryKey: ['getReplyList'],
      })
      // 회고 내의 댓글 개수 업데이트
      queryClient.invalidateQueries({
        queryKey: ['getRetrospect'],
      })
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useReplyMutation
