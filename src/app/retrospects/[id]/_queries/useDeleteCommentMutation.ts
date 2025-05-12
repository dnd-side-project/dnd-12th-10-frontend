import { useMutation, useQueryClient } from '@tanstack/react-query'
import openCustomToast from '@/utils/openCustomToast'

import { deleteComment } from '../../_lib'

const useDeleteCommentMutation = (commentId: string, retrospectId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => await deleteComment(commentId),
    onSuccess: () => {
      openCustomToast('댓글이 삭제되었습니다', true, '✅')

      queryClient.invalidateQueries({
        queryKey: ['getCommentList', { retrospectId }],
      })
    },
  })
}

export default useDeleteCommentMutation
