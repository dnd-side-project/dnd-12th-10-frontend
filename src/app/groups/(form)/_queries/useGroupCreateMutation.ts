import { useMutation } from '@tanstack/react-query'
import { GroupCreateForm, GroupCreateResponse } from '../_types'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

/** 모임 생성 */
const useGroupCreateMutation = () => {
  const invalidateQueries = useInvalidateQueries()
  return useMutation({
    mutationFn: async (data: GroupCreateForm) => {
      const response = await axiosInstance.post<GroupCreateResponse>(
        API_PATH.Group,
        data,
      )
      return response.data
    },
    onSuccess: () => invalidateQueries(['MyGroup']), // 모임 정보 업데이트
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useGroupCreateMutation
