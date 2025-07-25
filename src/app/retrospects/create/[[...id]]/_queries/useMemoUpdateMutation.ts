import { useMutation } from '@tanstack/react-query'
import { updateMemo } from '../_lib'
import { MemoUpdateForm } from '../_types/retrospect'

/** 임시저장 수정 */
const useMemoUpdateMutation = () => {
  return useMutation({
    mutationFn: async (data: MemoUpdateForm) => {
      const response = await updateMemo(data)
      return response.data
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useMemoUpdateMutation
