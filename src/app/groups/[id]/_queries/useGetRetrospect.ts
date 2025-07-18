import { useQuery } from '@tanstack/react-query'
import { getRetrospect } from '../_lib'

/** 개별 회고 조회 */
const useGetRetrospect = (retrospectId: string, isRetrospect = true) => {
  return useQuery({
    queryKey: ['getRetrospect', retrospectId],
    queryFn: async () => await getRetrospect(retrospectId),
    enabled: !!retrospectId && isRetrospect,
  })
}

export default useGetRetrospect
