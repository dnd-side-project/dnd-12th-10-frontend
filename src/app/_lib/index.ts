import { API_PATH } from '@/consts/urls'
import { axiosInstance } from '@/lib/axios'
import { Group, PopularGroup, Template } from '@/app/_types'

export const getMyGroupList = async (): Promise<Group[]> => {
  try {
    const response = await axiosInstance.get<Group[]>(API_PATH.GetMyGroupList)

    if (response.status === 200) {
      return response.data
    }
    return []
  } catch (error) {
    console.error('Error during token reissue:', error)
    throw error
  }
}

export const getPopularGroupList = async (): Promise<PopularGroup[]> => {
  const response = await axiosInstance.get<PopularGroup[]>(
    API_PATH.GetPopularGroupList,
  )

  if (response.status === 200) {
    return response.data
  }

  return []
}

export const getRecommendGroupList = async (): Promise<Group[]> => {
  const response = await axiosInstance.get<Group[]>(
    API_PATH.GetRecommendGroupList,
  )

  if (response.status === 200) {
    return response.data
  }

  return []
}

export const getPublicTemplateList = async (): Promise<Template[]> => {
  const response = await axiosInstance.get<Template[]>(
    API_PATH.GetPublicTemplate,
  )

  if (response.status === 200) {
    return response.data
  }

  return []
}
