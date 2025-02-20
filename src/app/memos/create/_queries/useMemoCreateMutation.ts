import { useMutation } from '@tanstack/react-query'
import { MemoCreateForm, MemoCreateResponse } from '../_types/memo'
import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

/** 회고 생성 */
const useMemoCreateMutation = () => {
  return useMutation({
    mutationFn: async (data: MemoCreateForm) => {
      const response = await axiosInstance.post<MemoCreateResponse>(
        API_PATH.RetrospectCreate,
        data,
      )
      return response.data
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useMemoCreateMutation
