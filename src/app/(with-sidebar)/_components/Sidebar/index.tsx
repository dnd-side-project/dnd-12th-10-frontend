import { cn } from '@/utils/cn'
import LogoIcon from '@/assets/icons/logo.svg'
import LogoutButton from '@/app/(with-sidebar)/_components/SidebarItem/LogoutButton'
import NavigateList from '@/app/(with-sidebar)/_components/NavigateList'
const Sidebar = () => {
  return (
    <aside
      className={cn(
        'flex flex-col',
        'w-[248px]',
        'px-[24px] py-[40px]',
        'bg-gray-900',
      )}
    >
      <LogoIcon className='mb-[40px]' />
      <NavigateList />
      <LogoutButton />
    </aside>
  )
}

export default Sidebar
