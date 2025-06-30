import { useMutation } from '@tanstack/react-query'
import { GroupCreateForm, GroupCreateResponse } from '../_types'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

/** 모임 수정 */
const useGroupUpdateMutation = (groupId: string) => {
  const invalidateQueries = useInvalidateQueries()

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
      invalidateQueries(['getGroupInfo', groupId])
      invalidateQueries(['MyGroup'])
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useGroupUpdateMutation
