import { useQuery } from '@tanstack/react-query'
import { getGroupInfo } from '../_lib'

/** 그룹 개별 데이터 조회 */
const useGetGroupInfo = (groupId: string) => {
  return useQuery({
    queryKey: ['getGroupInfo', groupId],
    queryFn: async () => await getGroupInfo(groupId),
    enabled: !!groupId,
  })
}

export default useGetGroupInfo
