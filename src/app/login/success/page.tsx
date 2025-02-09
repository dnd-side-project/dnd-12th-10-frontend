'use client'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'
import { useAuthStore } from '@/store/auth'
import { setAccessToken } from '@/lib/axios'

const SuccessPage = () => {
  const { setIsLogin } = useAuthStore()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      const accessToken = searchParams.get('access_token')
      const isRegistered = searchParams.get('isRegistered')

      if (accessToken && isRegistered) {
        setAccessToken(accessToken)
        setIsLogin(true)
        router.replace(isRegistered ? URL_PATH.Home : URL_PATH.Signup)
      } else {
        toast.error('로그인에 실패했습니다')
        router.replace(URL_PATH.Login)
      }
    } catch (err) {
      console.error(err)
      toast.error('로그인에 실패했습니다')
      router.replace(URL_PATH.Login)
    }
  }, [searchParams, setAccessToken])

  return <div>Success</div>
}

export default SuccessPage
