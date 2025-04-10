import { Icon } from '@/components/Icon'
import Button from '@/components/Button'
import { cn } from '@/utils/cn'

const LandingPage = () => {
  return (
    <>
      <header
        className={cn(
          'flex',
          'items-center',
          'justify-between',
          'px-40',
          'py-4',
          'bg-gray-900',
        )}
      >
        <Icon name='logo' width={100} height={30} className='fill-white' />
        <Button color='primary' variant='filled' size='medium'>
          시작하기
        </Button>
      </header>
      <main></main>
    </>
  )
}
export default LandingPage
