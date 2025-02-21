import { useQuery } from '@tanstack/react-query'
import { getPopularGroupList } from '@/app/_lib'

const usePopularGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['PopularGroup'],
    queryFn: getPopularGroupList,
  })

  return { popularGroupList: data, isPopularGroupListFetching: isFetching }
}

export default usePopularGroupListQuery
