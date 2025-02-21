import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'

export interface getUserDataResponse {
  userId: string
  nickname: string
  profileUrl: string
  featureKeywordList: string[]
}

export const getUserData = async (): Promise<getUserDataResponse> => {
  const response = await axiosInstance.get(API_PATH.User)
  return response.data
}
