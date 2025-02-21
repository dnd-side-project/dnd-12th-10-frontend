import { useQuery } from '@tanstack/react-query'
import { getMyGroupList } from '@/app/_lib'

const useMyGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyGroup'],
    queryFn: getMyGroupList,
  })

  return { myGroupList: data, isMyGroupListFetching: isFetching }
}

export default useMyGroupListQuery
