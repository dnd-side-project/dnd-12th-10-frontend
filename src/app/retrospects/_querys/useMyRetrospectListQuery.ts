import { useQuery } from '@tanstack/react-query'
import { getMyRetrospectList } from '@/app/retrospects/_lib'

const useMyRetrospectListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyRetrospect'],
    queryFn: getMyRetrospectList,
  })

  return { myRetrospectList: data, isMyRetrospectListFetching: isFetching }
}

export default useMyRetrospectListQuery
