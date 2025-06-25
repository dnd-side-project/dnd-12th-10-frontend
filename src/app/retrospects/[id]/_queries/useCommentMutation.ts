import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentCreateForm } from '../../_types'
import { postComment } from '../../_lib'

/** 댓글 생성 */
const useCommentMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CommentCreateForm) => await postComment(data),
    onSuccess: () => {
      // 댓글 업데이트
      queryClient.invalidateQueries({
        queryKey: ['getCommentList'],
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

export default useCommentMutation
