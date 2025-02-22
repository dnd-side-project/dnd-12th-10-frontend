import { useQuery } from '@tanstack/react-query'
import { getRetrospectList } from '../_lib'

/** 모임에 해당하는 회고목록 조회 */
const useGetRetrospectList = (groupId: string) => {
  return useQuery({
    queryKey: ['getRetrospectiveList', groupId],
    queryFn: async () => await getRetrospectList(groupId),
  })
}

export default useGetRetrospectList
