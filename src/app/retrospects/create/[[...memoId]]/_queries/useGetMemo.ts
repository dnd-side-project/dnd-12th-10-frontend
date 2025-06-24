import { getMemo } from '@/app/retrospects/create/[[...memoId]]/_lib'
import { useQuery } from '@tanstack/react-query'

const useGetMemo = (memoId: number | null) => {
  return useQuery({
    queryKey: ['memo', memoId],
    queryFn: async () => {
      if (!memoId) return null
      const { data } = await getMemo(memoId)
      return data
    },
    enabled: !!memoId,
  })
}

export default useGetMemo
