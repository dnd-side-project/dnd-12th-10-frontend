import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { Retrospect } from '@/app/_types'
import { CommentCreateForm } from '../_types'

export const getMyMemoList = async (): Promise<Retrospect[]> => {
  const response = await axiosInstance.get(API_PATH.GetRetrospects)
  return response.data
}

export const postComment = async (data: CommentCreateForm) => {
  const reponse = await axiosInstance.post(API_PATH.Comment, data)
  return reponse.data
}
