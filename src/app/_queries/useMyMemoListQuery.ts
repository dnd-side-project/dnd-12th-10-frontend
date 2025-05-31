import { useQuery } from '@tanstack/react-query'
import { getMyMemoList } from '@/app/_lib'

const useMyMemoListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyMemoList'],
    queryFn: getMyMemoList,
  })

  return { myMemoList: data, isMyMemoListFetching: isFetching }
}

export default useMyMemoListQuery
