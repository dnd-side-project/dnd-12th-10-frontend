import { API_PATH } from '@/consts/urls'
import { axiosInstance } from '@/lib/axios'
import { Template, TemplateList } from '../_types/template'
import { MyGroupList } from '../_types/group'
import { Memo } from '@/app/_types'
import {
  MemoCreateForm,
  MemoUpdateForm,
  MemoMutationResponse,
} from '../_types/retrospect'

export const getTemplateList = async () =>
  await axiosInstance.get<TemplateList>(API_PATH.TemplateList)

export const getTemplate = async (templateId: number) =>
  await axiosInstance.get<Template>(`${API_PATH.Template}/${templateId}`)

export const getMyGroupList = async () =>
  await axiosInstance.get<MyGroupList>(API_PATH.GetMyGroupList)

export const getMemo = async (memoId: number) =>
  await axiosInstance.get<Memo>(`${API_PATH.GetMemo}/${memoId}`)

export const createMemo = async (memo: MemoCreateForm) =>
  await axiosInstance.post<MemoMutationResponse>(API_PATH.MemoCreate, memo)

export const updateMemo = async (memo: MemoUpdateForm) =>
  await axiosInstance.put<MemoMutationResponse>(API_PATH.UpdateMemo, memo)
