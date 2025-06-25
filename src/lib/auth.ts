import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { setAccessToken } from '@/utils/auth'

let tokenRefreshInProgress = false
let tokenRefreshPromise: Promise<string> | null = null

export const reissueToken = async (): Promise<string> => {
  if (tokenRefreshInProgress && tokenRefreshPromise) {
    return tokenRefreshPromise
  }

  try {
    tokenRefreshInProgress = true
    tokenRefreshPromise = (async () => {
      const response = await axiosInstance.get(API_PATH.ReissueToken)

      let newAccessToken = response.headers['authorization']
      if (newAccessToken?.startsWith('Bearer ')) {
        newAccessToken = newAccessToken.substring(7)
      }

      setAccessToken(newAccessToken)
      return newAccessToken
    })()

    return await tokenRefreshPromise
  } catch (error) {
    console.error('Error during token reissue:', error)
    throw error
  } finally {
    // 토큰 재발급이 완료되면 상태 초기화
    tokenRefreshInProgress = false
    tokenRefreshPromise = null
  }
}
