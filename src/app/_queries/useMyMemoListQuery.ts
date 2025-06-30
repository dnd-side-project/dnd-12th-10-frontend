import { useQuery } from '@tanstack/react-query'
import { getMyMemoList } from '@/app/_lib'

const useMyMemoListQuery = (isOpen: boolean) => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyMemoList'],
    queryFn: getMyMemoList,
    enabled: isOpen,
  })

  return { myMemoList: data, isMyMemoListFetching: isFetching }
}

export default useMyMemoListQuery
