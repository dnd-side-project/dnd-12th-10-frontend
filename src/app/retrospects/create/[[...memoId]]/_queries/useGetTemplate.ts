import { useQuery } from '@tanstack/react-query'
import { getTemplate } from '../_lib'

/** 템플릿 개별 조회 */
const useGetTemplate = (templateId: number | null) => {
  return useQuery({
    queryKey: ['getTemplate', templateId],
    queryFn: async () => {
      if (!templateId) return
      const response = await getTemplate(templateId)
      return response.data
    },
    enabled: !!templateId,
  })
}

export default useGetTemplate
