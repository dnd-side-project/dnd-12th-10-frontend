import { getMemo } from '../_lib'
import { useQuery } from '@tanstack/react-query'

const useGetMemo = (memoId: number | null, isRetrospect = false) => {
  return useQuery({
    queryKey: ['memo', memoId],
    queryFn: async () => {
      if (!memoId) return null
      const { data } = await getMemo(memoId)
      return data
    },
    enabled: !!memoId && isRetrospect,
  })
}

export default useGetMemo
