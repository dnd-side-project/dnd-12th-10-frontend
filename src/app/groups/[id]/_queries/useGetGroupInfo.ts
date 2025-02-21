import { useQuery } from '@tanstack/react-query'
import { getGroupInfo } from '../_lib'

/** 템플릿 개별 조회 */
const useGetGroupInfo = (groupId: string) => {
  return useQuery({
    queryKey: ['getGroupInfo', { groupId }],
    queryFn: async () => await getGroupInfo(groupId),
  })
}

export default useGetGroupInfo
