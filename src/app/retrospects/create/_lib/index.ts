import { API_PATH } from '@/consts/urls'
import { axiosInstance } from '@/lib/axios'
import { Template, TemplateList } from '../_types/template'
import { MyGroupList } from '../_types/group'

export const getTemplateList = async () =>
  await axiosInstance.get<TemplateList>(API_PATH.TemplateList)

export const getTemplate = async (templateId: number) =>
  await axiosInstance.get<Template>(`${API_PATH.Template}/${templateId}`)

export const getMyGroupList = async () =>
  await axiosInstance.get<MyGroupList>(API_PATH.GetMyGroupList)
