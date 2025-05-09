import { Icon } from '@/components/Icon'
import Button from '@/components/Button'
import { cn } from '@/utils/cn'
import Section1 from './_components/sections/Section1'
import Section2 from './_components/sections/Section2'
import Section3 from './_components/sections/Section3'
import Section4 from './_components/sections/Section4'
import Section5 from './_components/sections/Section5'
import Section6 from './_components/sections/Section6'
import Section7 from './_components/sections/Section7'

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
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
    </>
  )
}
export default LandingPage
