import { useQuery } from '@tanstack/react-query'
import { getMyGroupList } from '../_lib'

/** 내가 속한 모임 리스트 조회 */
const useGetMyGroupList = () => {
  return useQuery({
    queryKey: ['getMyGroupList'],
    queryFn: async () => {
      const response = await getMyGroupList()
      return response.data
    },
  })
}

export default useGetMyGroupList
