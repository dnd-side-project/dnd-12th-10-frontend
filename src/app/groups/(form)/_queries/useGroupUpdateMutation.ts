import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GroupCreateForm, GroupCreateResponse } from '../_types'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

/** 모임 수정 */
const useGroupUpdateMutation = (groupId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      groupId,
      data,
    }: {
      groupId: string
      data: GroupCreateForm
    }) => {
      const response = await axiosInstance.patch<GroupCreateResponse>(
        `${API_PATH.Group}/${groupId}`,
        data,
      )
      return response.data
    },
    onSuccess: () => {
      // 모임 정보 업데이트
      queryClient.invalidateQueries({
        queryKey: ['getGroupInfo', { groupId }],
      })
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useGroupUpdateMutation
