import Link from 'next/link'
import { API_PATH } from '@/consts/urls'
import { BASE_URL } from '@/lib/axios'
import KakaoLogoIcon from '@/assets/icons/kakao-logo.svg'

const LoginPage = () => {
  return (
    <>
      <div className='text-display01 mt-8'>
        <div>개인과 모임이 성찰을 통해</div>
        <div>함께 성장하는 회고 서비스</div>
      </div>
      <Link
        href={`${BASE_URL}${API_PATH.Login}`}
        className='w-full max-w-[480px] flex items-center bg-[#FEE500] px-[28px] py-[22px] my-[52px] rounded-[12px]'
      >
        <KakaoLogoIcon />
        <span className='mx-auto text-[30px] font-semibold'>카카오 로그인</span>
      </Link>
      <div className='flex flex-col items-center text-body02 font-normal'>
        <div> 로그인 시 서비스 약관에 동의하고</div>
        <div> 개인정보처리방침에 동의하는 것으로 간주합니다.</div>
      </div>
    </>
  )
}
export default LoginPage
