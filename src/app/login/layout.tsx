import { cn } from '@/utils/cn'
import LogoIcon from '@/assets/icons/logo.svg'
import BasicBlueCharacterIcon from '@/assets/icons/character/basic-blue.svg'

const LonginLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={cn('h-full', 'flex', 'py-[52px] px-[80px]', 'bg-gray-900')}>
      <div
        className={cn(
          'w-1/2',
          'flex flex-col items-center justify-center',
          'text-gray-50',
        )}
      >
        <BasicBlueCharacterIcon />
        <div
          className={cn(
            'flex flex-col items-center',
            'mt-[12px]',
            'text-[56px] font-semibold',
          )}
        >
          <span>Review,</span>
          <span>Rethink,</span>
          <span>Rebuild</span>
        </div>
        <div className='text-body02 mt-[38px]'>
          <p>개인과 모임이 성찰을 통해</p>
          <p> 함께 성장하는 회고 서비스</p>
        </div>
      </div>
      <div
        className={cn(
          'w-1/2',
          'flex flex-col items-center justify-center',
          'py-[48px] px-[72px]',
          'bg-white',
          'rounded-lg',
        )}
      >
        <LogoIcon fill='black' width='160' />
        {children}
      </div>
    </div>
  )
}

export default LonginLayout
