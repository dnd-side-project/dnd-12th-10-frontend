import Error from '@/components/Error'

const ERROR_MESSAGE = '일시적인 오류가 발생하였습니다.'

const ErrorPage = () => {
  return <Error errorMessage={ERROR_MESSAGE} />
}

export default ErrorPage
