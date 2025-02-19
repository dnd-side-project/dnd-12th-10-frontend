import { useQuery } from '@tanstack/react-query'
import { getTemplate } from '../_lib'

/** 템플릿 개별 조회 */
const useGetTemplate = (templateId: number) => {
  return useQuery({
    queryKey: ['getTemplate'],
    queryFn: async () => {
      const response = await getTemplate(templateId)
      return response.data
    },
  })
}

export default useGetTemplate
