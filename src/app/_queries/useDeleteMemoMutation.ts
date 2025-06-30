import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMemo } from '@/app/_lib'

const useDeleteMemoMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (memoId: number) => await deleteMemo(memoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['MyMemoList'] })
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useDeleteMemoMutation
