import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GroupJoin } from '../_types'
import { postGroupJoin } from '../_lib'

/** 모임 가입 */
const useJoinGroupMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: GroupJoin) => await postGroupJoin(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['getGroupInfo'] }),
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useJoinGroupMutation
