import { useQuery } from '@tanstack/react-query'
import { getMyMemoList } from '@/app/memos/_lib'

const useMyGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyMemo'],
    queryFn: getMyMemoList,
  })

  return { myMemoList: data, isMyMemoListFetching: isFetching }
}

export default useMyGroupListQuery
