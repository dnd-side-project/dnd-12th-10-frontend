import { useRouter } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import ChipButton from '@/components/ChipButton'

const Section7 = () => {
  const { push } = useRouter()

  const handleClickHome = () => {
    push(URL_PATH.Home)
  }

  return (
    <section className='pt-[72px] bg-blue-50'>
      <p className='mx-auto w-fit text-[32px] font-semibold leading-[130%]'>
        리브와 함께 쉽고 꾸준히 회고를 작성해보세요!
      </p>
      <div className='mt-6 flex flex-col items-center justify-center'>
        <Button
          color='primary'
          variant='filled'
          size='medium'
          onClick={handleClickHome}
        >
          시작하기
        </Button>
      </div>
      <div className='mt-16 flex flex-col items-center justify-center gap-[44px] relative pb-[101px]'>
        <div className='relative w-fit'>
          <Icon name='review' width={477} height={105} />
          <ChipButtonWrap label={'PM'} top='45%' left='30%' />
          <ChipButtonWrap label={'MARKETER'} top='45%' left='70%' />
        </div>
        <div className='relative w-fit ml-40'>
          <Icon name='rethink' width={511} height={105} />
          <ChipButtonWrap label={'DESIGNER'} top='45%' left='30%' />
        </div>
        <div className='relative w-fit'>
          <Icon name='rebuild' width={466} height={105} />
          <ChipButtonWrap label={'FRONT-END'} top='45%' left='20%' />
          <ChipButtonWrap label={'BACK-END'} top='45%' left='64%' />
        </div>
        <Icon
          name='basic-blue-character'
          height={223}
          width={315}
          className='stroke-0 opacity-50 absolute top-[120px] left-[220px]'
        />
        <Icon
          name='landing-red-character'
          height={223}
          width={315}
          className='stroke-0 opacity-50 absolute bottom-0 right-[160px]'
        />
      </div>
      <Footer />
    </section>
  )
}

export default Section7

const ChipButtonWrap = ({
  label,
  top,
  left,
}: {
  label: string
  top: string
  left: string
}) => {
  return (
    <div
      className='absolute'
      style={{
        top,
        left,
      }}
    >
      <ChipButton label={label} disabled={true} />
    </div>
  )
}

const Footer = () => {
  return (
    <footer
      className={cn(
        'w-[960px]',
        'mt-[167px]',
        'mx-auto',
        'bg-gray-900',
        'rounded-tl-[45px] rounded-tr-[45px]',
        'px-14 pt-[58px] pb-12',
      )}
    >
      <div className='flex justify-between mb-6'>
        <Icon name='logo' width={92} height={30} className='fill-white' />
        <div className='flex gap-5'>
          <div className='w-fit p-2 bg-white rounded-full'>
            <Icon name='sms' size={24} />
          </div>
          <div className='w-fit p-2 bg-white rounded-full'>
            <Icon name='insta' size={24} className='stroke-0' />
          </div>
        </div>
      </div>
      <p className='text-white text-body01 pb-12 border-b-[1px] border-white'>
        개인과 모임이 성찰을 통해 함께 성장하는 회고 서비스
      </p>
      <div className='flex gap-10 text-body02 text-white mt-10'>
        <p>© 2025 Reev. All Rights Reserved.</p>
        <p>이용약관 및 개인정보 취급방침 </p>
      </div>
    </footer>
  )
}
