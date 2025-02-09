import SignupContainer from '@/app/login/signup/SignupContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leev | 회원가입',
}

const SignupPage = () => {
  return <SignupContainer />
}
export default SignupPage
