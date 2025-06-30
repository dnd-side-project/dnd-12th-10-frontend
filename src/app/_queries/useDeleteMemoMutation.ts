import { useMutation } from '@tanstack/react-query'
import { deleteMemo } from '@/app/_lib'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

const useDeleteMemoMutation = () => {
  const invalidateQueries = useInvalidateQueries()

  return useMutation({
    mutationFn: async (memoId: number) => await deleteMemo(memoId),
    onSuccess: () => {
      invalidateQueries(['MyMemoList'])
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useDeleteMemoMutation
