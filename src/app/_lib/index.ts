import { API_PATH } from '@/consts/urls'
import { axiosInstance } from '@/lib/axios'
import { Group, PopularGroup, Template } from '@/app/_types'

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
