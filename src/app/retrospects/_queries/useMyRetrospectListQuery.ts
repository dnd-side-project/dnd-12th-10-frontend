import { useQuery, type QueryFunctionContext } from '@tanstack/react-query'
import { getMyRetrospectList } from '@/app/retrospects/_lib'
import { type Action } from '../_types'

const useMyRetrospectListQuery = (action: Action = 'all') => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyRetrospect', action],
    queryFn: ({ queryKey }: QueryFunctionContext<[string, Action]>) => {
      const [, action] = queryKey
      return getMyRetrospectList(action)
    },
  })

  return { myRetrospectList: data, isMyRetrospectListFetching: isFetching }
}

export default useMyRetrospectListQuery
