import { useMutation } from '@tanstack/react-query'
import { GroupJoin } from '../_types'
import { postGroupJoin } from '../_lib'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

/** 모임 가입 */
const useJoinGroupMutation = () => {
  const invalidateQueries = useInvalidateQueries()

  return useMutation({
    mutationFn: async (data: GroupJoin) => await postGroupJoin(data),
    onSuccess: () => invalidateQueries(['getGroupInfo']),
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useJoinGroupMutation
