import Image from 'next/image'
import KakaoLoginButton from '@/assets/images/kakao-login.jpg'

const LoginPage = () => {
  return (
    <>
      <div className='text-display01 mt-8'>
        <div>개인과 모임이 성찰을 통해</div>
        <div>함께 성장하는 회고 서비스</div>
      </div>
      <button className='my-[52px]'>
        <Image src={KakaoLoginButton} alt={'login'} />
      </button>
      <div className='flex flex-col items-center text-body02 font-normal'>
        <div> 로그인 시 서비스 약관에 동의하고</div>
        <div> 개인정보처리방침에 동의하는 것으로 간주합니다.</div>
      </div>
    </>
  )
}
export default LoginPage
