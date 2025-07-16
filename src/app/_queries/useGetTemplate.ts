import { useQuery } from '@tanstack/react-query'
import { getTemplate } from '@/app/_lib'

/** 템플릿 개별 조회 */
const useGetTemplate = (templateId: number | null) => {
  const { data, isFetching } = useQuery({
    queryKey: ['getTemplate', templateId],
    queryFn: () => getTemplate(templateId),
    enabled: !!templateId,
  })

  return { template: data, isTemplateFetching: isFetching }
}

export default useGetTemplate
