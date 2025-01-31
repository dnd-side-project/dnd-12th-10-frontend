import Sidebar from '@/app/(with-sidebar)/_components/Sidebar'
import { ReactNode } from 'react'

const WithSidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      {children}
    </div>
  )
}

export default WithSidebarLayout
