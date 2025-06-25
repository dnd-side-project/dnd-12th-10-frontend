import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { Retrospect } from '@/app/_types'
import type {
  Action,
  CommentCreateForm,
  CommentCreateResponse,
} from '../_types'
import { CommentUpdateForm } from '../[id]/types'

export const getMyRetrospectList = async (
  action: Action = 'all',
): Promise<Retrospect[]> => {
  const response = await axiosInstance.get(
    `${API_PATH.GetMyRetrospects}?action=${action}`,
  )
  return response.data.retrospectList
}

export const postComment = async (data: CommentCreateForm) => {
  const reponse = await axiosInstance.post<CommentCreateResponse>(
    API_PATH.Comment,
    data,
  )
  return reponse.data
}

export const updateComment = async (
  commentId: string,
  data: CommentUpdateForm,
) => {
  const reponse = await axiosInstance.patch<CommentCreateResponse>(
    `${API_PATH.Comment}/${commentId}`,
    data,
  )
  return reponse.data
}

export const deleteComment = async (commentId: string) => {
  const response = await axiosInstance.delete(
    `${API_PATH.Comment}/${commentId}`,
  )
  return response.data
}

export const postReply = async (data: CommentCreateForm, commentId: number) => {
  const reponse = await axiosInstance.post<CommentCreateResponse>(
    `${API_PATH.Comment}/${commentId}`,
    data,
  )
  return reponse.data
}
