import { useMutation } from '@tanstack/react-query'
import {
  RetrospectCreateResponse,
  RetrospectUpdateForm,
} from '../_types/retrospect'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

/** 회고 수정 */
const useRetrospectUpdateMutation = () => {
  return useMutation({
    mutationFn: async (data: RetrospectUpdateForm) => {
      const response = await axiosInstance.patch<RetrospectCreateResponse>(
        API_PATH.Retrospect,
        data,
      )
      return response.data
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useRetrospectUpdateMutation
