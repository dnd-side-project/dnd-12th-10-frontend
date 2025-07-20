// components/AuthGuard.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getAccessToken } from '@/utils/auth'

interface Props {
  children: React.ReactNode
}

export default function AuthGuard({ children }: Props) {
  const router = useRouter()
  const [checked, setChecked] = useState(false) // localStorage 확인 완료 여부

  useEffect(() => {
    const token = getAccessToken()

    if (!token) {
      router.replace('/login') // 로그인 안 되어 있으면 로그인 페이지로 이동
    } else {
      setChecked(true) // 토큰이 있다면 렌더링 허용
    }
  }, [])

  if (!checked) return null // 확인 전에는 아무 것도 렌더링하지 않음

  return <>{children}</>
}
