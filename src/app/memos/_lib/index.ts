import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { Retrospect } from '@/app/_types'

export const getMyMemoList = async (): Promise<Retrospect[]> => {
  const response = await axiosInstance.get(API_PATH.GetRetrospects)
  return response.data
}
