import { useMutation } from '@tanstack/react-query'
import { postReply } from '../../_lib'
import { CommentCreateForm } from '../../_types'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

/** 답글 생성 */
const useReplyMutation = () => {
  const invalidateQueries = useInvalidateQueries()

  return useMutation({
    mutationFn: async ({
      data,
      commentId,
    }: {
      data: CommentCreateForm
      commentId: number
    }) => await postReply(data, commentId),
    onSuccess: () => {
      invalidateQueries(['getReplyList']) // 답글 업데이트
      invalidateQueries(['getRetrospect']) // 회고 내의 댓글 개수 업데이트
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useReplyMutation
