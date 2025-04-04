import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { setAccessToken } from '@/utils/auth'

export const reissueToken = async (): Promise<string> => {
  try {
    const response = await axiosInstance.get(API_PATH.ReissueToken)

    let newAccessToken = response.headers['authorization']
    if (newAccessToken?.startsWith('Bearer ')) {
      newAccessToken = newAccessToken.substring(7)
    }

    setAccessToken(newAccessToken)
    return newAccessToken
  } catch (error) {
    console.error('Error during token reissue:', error)
    throw error
  }
}
