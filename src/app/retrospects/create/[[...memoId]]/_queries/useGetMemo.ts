import { getMemo } from '@/app/retrospects/create/[[...memoId]]/_lib'
import { useQuery } from '@tanstack/react-query'

const useGetMemo = (memoId: string) => {
  return useQuery({
    queryKey: ['memo', memoId],
    queryFn: async () => {
      const { data } = await getMemo(memoId)
      return data
    },
  })
}

export default useGetMemo
