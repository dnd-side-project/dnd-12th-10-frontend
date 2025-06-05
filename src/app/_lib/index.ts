import { API_PATH } from '@/consts/urls'
import { axiosInstance } from '@/lib/axios'
import { Group, Memo, PopularGroup, Template } from '@/app/_types'

export const getMyGroupList = async (): Promise<Group[]> => {
  const response = await axiosInstance.get<Group[]>(API_PATH.GetMyGroupList)
  return response.data
}

export const getPopularGroupList = async (): Promise<PopularGroup[]> => {
  const response = await axiosInstance.get<PopularGroup[]>(
    API_PATH.GetPopularGroupList,
  )
  return response.data
}

export const getRecommendGroupList = async (): Promise<Group[]> => {
  const response = await axiosInstance.get<Group[]>(
    API_PATH.GetRecommendGroupList,
  )
  return response.data
}

export const getPublicTemplateList = async (): Promise<Template[]> => {
  const response = await axiosInstance.get<Template[]>(
    API_PATH.GetPublicTemplate,
  )
  return response.data
}

export const getMyMemoList = async (): Promise<Memo[]> => {
  const response = await axiosInstance.get<Memo[]>(API_PATH.GetMyMemoList)
  return response.data
}

export const deleteMemo = async (memoId: number): Promise<void> => {
  const response = await axiosInstance.delete(
    `${API_PATH.DeleteMemo}/${memoId}`,
  )
  return response.data
}
