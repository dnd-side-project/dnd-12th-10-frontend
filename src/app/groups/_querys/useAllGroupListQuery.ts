import { useQuery } from '@tanstack/react-query'
import { getAllGroupList } from '../_lib'

const useAllGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['AllGroup'],
    queryFn: getAllGroupList,
  })

  return { allGroupList: data, isAllGroupListFetching: isFetching }
}

export default useAllGroupListQuery
