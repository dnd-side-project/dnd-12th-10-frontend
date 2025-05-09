import { useQuery } from '@tanstack/react-query'
import { getRecommendGroupList } from '@/app/_lib'

const useRecommendGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['RecommendGroup'],
    queryFn: getRecommendGroupList,
  })

  return { recommendGroupList: data, isRecommendGroupListFetching: isFetching }
}

export default useRecommendGroupListQuery
