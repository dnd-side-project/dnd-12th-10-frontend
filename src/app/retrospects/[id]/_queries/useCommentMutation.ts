import { useMutation } from '@tanstack/react-query'
import { CommentCreateForm } from '../../_types'
import { postComment } from '../../_lib'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

/** 댓글 생성 */
const useCommentMutation = () => {
  const invalidateQueries = useInvalidateQueries()

  return useMutation({
    mutationFn: async (data: CommentCreateForm) => await postComment(data),
    onSuccess: () => {
      invalidateQueries(['getCommentList']) // 댓글 업데이트
      invalidateQueries(['getRetrospect']) // 회고 내의 댓글 개수 업데이트
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useCommentMutation
