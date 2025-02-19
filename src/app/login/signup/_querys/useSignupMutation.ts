import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { URL_PATH } from '@/consts/urls'
import openCustomToast from '@/utils/openCustomToast'
import { signup } from '../_lib'

const useSignupMutation = () => {
  const { replace } = useRouter()

  const { mutate: signupMutation, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      openCustomToast('회원가입 성공', true, '✅')
      replace(URL_PATH.Home)
    },
    onError: () => openCustomToast('회원가입 실패', true, '❌'),
  })

  return { signupMutation, isPending }
}

export default useSignupMutation
