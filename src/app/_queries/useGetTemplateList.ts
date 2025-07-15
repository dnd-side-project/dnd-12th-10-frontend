import { useQuery } from '@tanstack/react-query'
import { getTemplateList } from '../_lib'
import { TemplateType } from '@/app/_types/template'

/** 템플릿 목록 조회 */
const useGetTemplateList = (type: TemplateType) => {
  const { data, isFetching } = useQuery({
    queryKey: ['getTemplateList'],
    queryFn: () => getTemplateList(type),
  })

  return { templateList: data, isTemplateListFetching: isFetching }
}

export default useGetTemplateList
