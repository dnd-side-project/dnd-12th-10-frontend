import { useQuery } from '@tanstack/react-query'

import { getPublicTemplateList } from '@/app/_lib'

export const usePublicTemplateListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['PublicTemplate'],
    queryFn: getPublicTemplateList,
  })

  return { publicTemplateList: data, isPublicTemplateListFetching: isFetching }
}
