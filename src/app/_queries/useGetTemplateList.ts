import { useQuery } from '@tanstack/react-query'
import { getTemplateList } from '../_lib'
import { TemplateType, TemplateTypeKey } from '@/app/_types/template'

/** 템플릿 목록 조회 */
const useGetTemplateList = (type: TemplateTypeKey) => {
  const { data, isFetching } = useQuery({
    queryKey: ['getTemplateList', TemplateType[type]],
    queryFn: () => getTemplateList(TemplateType[type]),
  })

  return { templateList: data, isTemplateListFetching: isFetching }
}

export default useGetTemplateList
