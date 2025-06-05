import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMemo } from '@/app/_lib'
import OpenCustomToast from '@/utils/openCustomToast'

const useDeleteMemoMutation = (memoId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => deleteMemo(memoId),
    onSuccess: () => {
      OpenCustomToast('해당 글을 삭제했습니다', true, '✅')
      queryClient.invalidateQueries({ queryKey: ['MyMemoList'] })
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useDeleteMemoMutation
