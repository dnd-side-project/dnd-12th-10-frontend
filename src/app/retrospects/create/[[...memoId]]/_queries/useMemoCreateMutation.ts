import { useMutation } from '@tanstack/react-query'
import { createMemo } from '@/app/retrospects/create/[[...memoId]]/_lib'
import { MemoCreateForm } from '@/app/retrospects/create/[[...memoId]]/_types/retrospect'

/** 임시저장 생성 */
const useMemoCreateMutation = () => {
  return useMutation({
    mutationFn: async (data: MemoCreateForm) => {
      const response = await createMemo(data)
      return response.data
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useMemoCreateMutation
