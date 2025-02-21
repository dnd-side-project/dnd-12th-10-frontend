import { useQuery } from '@tanstack/react-query'
import { getCommentList } from '../_lib'

/** 회고글에 해당하는 댓글 목록 조회 */
const useGetCommentList = (retrospectId: string) => {
  return useQuery({
    queryKey: ['getCommentList'],
    queryFn: async () => await getCommentList(retrospectId),
  })
}

export default useGetCommentList
