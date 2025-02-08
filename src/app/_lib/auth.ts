import { axiosInstance, setAccessToken } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

export const reissueToken = async () => {
  try {
    const response = await axiosInstance.get(API_PATH.ReissueToken, {
      withCredentials: true,
    })

    if (response.status === 200) {
      let newAccessToken = response.headers['authorization']
      if (newAccessToken?.startsWith('Bearer ')) {
        newAccessToken = newAccessToken.substring(7)
      }
      setAccessToken(newAccessToken)
      return newAccessToken
    }

    throw new Error('Failed to reissue token')
  } catch (error) {
    console.error('Error during token reissue:', error)
    throw error
  }
}
