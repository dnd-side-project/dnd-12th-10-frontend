import { useQuery } from '@tanstack/react-query'
import { getMyMemoList } from '@/app/retrospects/_lib'

const useMyMemoListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyMemo'],
    queryFn: getMyMemoList,
  })

  return { myMemoList: data, isMyMemoListFetching: isFetching }
}

export default useMyMemoListQuery
