import { useRouter } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icon'
import Button from '@/components/Button'
import MainFullImg from '@/assets/images/landing/MainFullImg.png'
import MainNoSideImg from '@/assets/images/landing/MainNoSideImg.png'

const Section1 = () => {
  const { push } = useRouter()

  const handleClickHome = () => {
    push(URL_PATH.Home)
  }

  return (
    <section className='flex justify-around bg-blue-50 pt-[100px] pb-[140px] px-[160px]'>
      <div className='flex flex-col justify-center'>
        <p className='text-3xl font-semibold leading-[130%] text-gray-900 mb-4'>
          개인과 모임이 성찰을 통해
          <br />
          함께 성장하는 회고 서비스
        </p>
        <Icon name='logo' width={158} height={48} className='fill-black' />
        <div className='mt-12'>
          <Button
            color='primary'
            variant='filled'
            size='medium'
            onClick={handleClickHome}
          >
            시작하기
          </Button>
        </div>
      </div>
      <div className='relative flex bg-black p-2 rounded-md'>
        <Image
          width={627}
          height={446}
          src={MainFullImg}
          alt='MainFullImg'
          className='rounded-sm'
          quality={100}
          sizes='700px'
        />
        <div
          className={cn(
            'absolute top-[18px] left-[116px]',
            'h-[578px]',
            'overflow-hidden',
          )}
        >
          <Image
            width={519}
            height={400}
            src={MainNoSideImg}
            alt='MainNoSideImg'
            sizes='700px'
          />
          <div
            className={cn(
              'absolute bottom-0',
              'w-full h-32',
              'bg-gradient-to-b from-[rgba(240,248,255,0)] via-blue-50 to-blue-50',
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default Section1
