import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { Retrospect } from '@/app/_types'
import { CommentCreateForm, CommentCreateResponse } from '../_types'

export const getMyRetrospectList = async (): Promise<Retrospect[]> => {
  const response = await axiosInstance.get(API_PATH.GetRetrospects)
  return response.data
}

export const postComment = async (data: CommentCreateForm) => {
  const reponse = await axiosInstance.post<CommentCreateResponse>(
    API_PATH.Comment,
    data,
  )
  return reponse.data
}

export const postReply = async (data: CommentCreateForm, commentId: number) => {
  const reponse = await axiosInstance.post<CommentCreateResponse>(
    `${API_PATH.Comment}/${commentId}`,
    data,
  )
  return reponse.data
}
