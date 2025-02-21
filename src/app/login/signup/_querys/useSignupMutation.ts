import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { URL_PATH } from '@/consts/urls'
import openCustomToast from '@/utils/openCustomToast'
import { signup } from '../_lib'
import { AxiosError } from 'axios'

interface ErrorResponse {
  code: string
}

const useSignupMutation = () => {
  const { replace } = useRouter()
  const queryClient = useQueryClient()

  const { mutate: signupMutation, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      openCustomToast('회원가입 성공', true, '✅')
      queryClient.invalidateQueries({ queryKey: ['UserData'] })
      replace(URL_PATH.Home)
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      if (error.response?.data?.code === '409') {
        return openCustomToast('닉네임이 중복되었습니다.', true, '❌')
      }

      openCustomToast('회원가입 실패', true, '❌')
    },
  })

  return { signupMutation, isPending }
}

export default useSignupMutation
