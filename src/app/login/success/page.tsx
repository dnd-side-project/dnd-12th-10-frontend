import { Suspense } from 'react'
import LoginSuccess from './LoginSuccess'

const SuccessPage = () => {
  return (
    <Suspense>
      <LoginSuccess />
    </Suspense>
  )
}

export default SuccessPage
