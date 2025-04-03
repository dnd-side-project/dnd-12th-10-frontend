'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'
import { useAuthStore } from '@/store/auth'
import { setAccessToken } from '@/utils/auth'
import OpenCustomToast from '@/utils/openCustomToast'

const SuccessPage = () => {
  const { setIsLogin } = useAuthStore()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      const accessToken = searchParams.get('access_token')
      const isRegistered = searchParams.get('isRegistered') !== 'false'

      if (accessToken) {
        setAccessToken(accessToken)
        router.replace(isRegistered ? URL_PATH.Signup : URL_PATH.Home)
      } else {
        OpenCustomToast('로그인에 실패했습니다', true, '❌')
        router.replace(URL_PATH.Login)
      }
    } catch (err) {
      console.error(err)
      OpenCustomToast('로그인에 실패했습니다', true, '❌')
      router.replace(URL_PATH.Login)
    }
  }, [router, searchParams, setIsLogin])

  return null
}

export default SuccessPage
