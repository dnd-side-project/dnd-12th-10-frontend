import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { Group } from '@/app/_types'

export const getAllGroupList = async (): Promise<Group[]> => {
  const response = await axiosInstance.get(API_PATH.GroupList)
  return response.data
}
