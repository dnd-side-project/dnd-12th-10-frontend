import { useQuery } from '@tanstack/react-query'
import { getRetrospect } from '../_lib'

/** 개별 회고 조회 */
const useGetRetrospect = (retrospectId: string) => {
  return useQuery({
    queryKey: ['getRetrospect'],
    queryFn: async () => await getRetrospect(retrospectId),
  })
}

export default useGetRetrospect
