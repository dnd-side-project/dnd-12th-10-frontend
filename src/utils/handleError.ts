import { AxiosError } from 'axios'
import { clearLocalStorage } from './storage'
import { z } from 'zod'

const errorResponseSchema = z.object({
  code: z.string(),
  message: z.string(),
})

const getErrorMessage = async (response: AxiosError['response']) => {
  try {
    const parsedResponse = errorResponseSchema.parse(response?.data)
    return parsedResponse.message
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * HTTP 요청에 실패했을 때 던져지는 에러인지의 여부를 반환한다.
 * 네트워크 실패, CORS 오류, 타임아웃, 잘못된 요청 형식, 브라우저 자체 에러 등
 * @param error
 */
const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError)?.response?.status !== undefined
}

export const handleError = async (error: unknown) => {
  if (!isAxiosError(error)) {
    console.error(error)
    return
  }

  const { status, message, response } = error
  const errorMessage = (await getErrorMessage(response)) || message

  switch (status) {
    case 401:
      // 로그아웃 처리
      clearLocalStorage()
      window.location.href = '/'
      return

    case 404:
      window.location.href = '/404'
      break

    case 500:
      window.location.href = '/error'
      break

    // TODO: 디자인시스템의 modal 사용
    default:
      alert(errorMessage)
  }
}
