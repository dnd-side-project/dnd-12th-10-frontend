import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { reissueToken } from './auth'
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

export const { getAccessToken, setAccessToken } = (() => {
  let accessToken: string | null = null
  const getAccessToken = () => accessToken
  const setAccessToken = (token: string | null) => {
    accessToken = token
  }
  return { getAccessToken, setAccessToken }
})()

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Todo: instance.interceptors.response 로직 작성 예정

// 요청 인터셉터: 토큰이 있다면 헤더에 추가
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response
  },
  async (error: AxiosError): Promise<AxiosResponse | AxiosError> => {
    const originalRequest = error.config as InternalAxiosRequestConfig

    if (error.response?.status === 401) {
      try {
        await reissueToken()

        if (originalRequest.headers) {
          const newToken = getAccessToken()
          originalRequest.headers.Authorization = newToken
            ? `Bearer ${newToken}`
            : ''
        }

        return await axiosInstance(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)
