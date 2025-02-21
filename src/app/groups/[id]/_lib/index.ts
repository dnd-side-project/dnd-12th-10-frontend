import { API_PATH } from '@/consts/urls'
import { axiosInstance } from '@/lib/axios'
import {
  CommentList,
  Group,
  GroupJoin,
  GroupJoinResponse,
  ReplyList,
  Retrospect,
  RetrospectList,
} from '../_types'

export const getGroupInfo = async (groupId: string) => {
  const response = await axiosInstance.get<Group>(
    `${API_PATH.Group}/${groupId}`,
  )
  return response.data
}

export const getRetrospectList = async (groupId: string) => {
  const response = await axiosInstance.get<RetrospectList>(
    `${API_PATH.RetrospectList}?groupId=${groupId}`,
  )

  return response.data
}

export const getCommentList = async (retrospectId: string) => {
  const response = await axiosInstance.get<CommentList>(
    `${API_PATH.Comment}/${retrospectId}`,
  )
  return response.data
}

export const getRetrospect = async (retrospectId: string) => {
  const response = await axiosInstance.get<Retrospect>(
    `${API_PATH.Retrospect}/${retrospectId}`,
  )
  return response.data
}

export const getReplyList = async (retrospectId: string, commentId: string) => {
  const response = await axiosInstance.get<ReplyList>(
    `${API_PATH.Comment}/${retrospectId}/${commentId}`,
  )
  return response.data
}

export const postGroupJoin = async (data: GroupJoin) => {
  const response = await axiosInstance.post<GroupJoinResponse>(
    `${API_PATH.GroupJoin}`,
    data,
  )
  return response.data
}
