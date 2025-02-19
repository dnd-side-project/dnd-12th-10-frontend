import { useMutation } from '@tanstack/react-query'
import { GroupCreateForm, GroupCreateResponse } from '../_types'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

/** 모임 생성 */
const useGroupCreateMutation = () => {
  return useMutation({
    mutationFn: async (data: GroupCreateForm) => {
      const response = await axiosInstance.post<GroupCreateResponse>(
        API_PATH.GroupCreate,
        data,
      )
      return response.data
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useGroupCreateMutation
