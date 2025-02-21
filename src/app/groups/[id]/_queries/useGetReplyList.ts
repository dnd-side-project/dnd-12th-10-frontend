import { useQuery } from '@tanstack/react-query'
import { getReplyList } from '../_lib'

/** 댓글에 해당하는 답글 목록 조회 */
const useGetReplyList = (retrospectId: string, commentId: string) => {
  return useQuery({
    queryKey: ['getReplyList'],
    queryFn: async () => await getReplyList(retrospectId, commentId),
  })
}

export default useGetReplyList
