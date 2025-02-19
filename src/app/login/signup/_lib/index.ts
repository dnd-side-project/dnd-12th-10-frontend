import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { UserCreateForm as UserCreateFormType } from '@/app/login/signup/_types'

export const signup = async (data: UserCreateFormType) => {
  return await axiosInstance.patch(API_PATH.Signup, data)
}
