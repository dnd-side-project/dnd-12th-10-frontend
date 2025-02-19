import { useQuery } from '@tanstack/react-query'
import { getTemplateList } from '../_lib'

/** 템플릿 목록 조회 */
const useGetTemplateList = () => {
  return useQuery({
    queryKey: ['getTemplateList'],
    queryFn: async () => {
      const response = await getTemplateList()
      return response.data
    },
  })
}

export default useGetTemplateList
