import { useMutation } from '@tanstack/react-query'
import {
  RetrospectCreateForm,
  RetrospectCreateResponse,
} from '../_types/retrospect'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

/** 회고 생성 */
const useMemoCreateMutation = () => {
  return useMutation({
    mutationFn: async (data: RetrospectCreateForm) => {
      const response = await axiosInstance.post<RetrospectCreateResponse>(
        API_PATH.MemoCreate,
        data,
      )
      return response.data
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useMemoCreateMutation
