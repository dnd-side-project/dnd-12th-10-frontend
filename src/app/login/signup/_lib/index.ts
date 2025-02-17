import { axiosInstance } from '@/lib/axios'
import { API_PATH } from '@/consts/urls'
import { UserCreateForm as UserCreateFormType } from '@/app/login/signup/_types'

export const signup = async (data: UserCreateFormType) => {
  try {
    const response = await axiosInstance.patch(API_PATH.Signup, data)
    return response.status === 200
  } catch (error) {
    console.error('Error during token reissue:', error)
    throw error
  }
}
