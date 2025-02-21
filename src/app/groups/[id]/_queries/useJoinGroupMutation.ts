import { useMutation } from '@tanstack/react-query'
import { GroupJoin } from '../_types'
import { postGroupJoin } from '../_lib'

/** 모임 가입 */
const useJoinGroupMutation = () => {
  return useMutation({
    mutationFn: async (data: GroupJoin) => await postGroupJoin(data),

    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useJoinGroupMutation
