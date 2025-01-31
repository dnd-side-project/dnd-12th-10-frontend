import Search from '@/assets/icons/sidebar/search.svg'
import { cn } from '@/utils/cn'
import Link from 'next/link'

const SearchButton = () => {
  return (
    <Link
      href={'/'}
      className={cn(
        'flex items-center gap-2',
        'mt-[20px] mb-[40px] py-[5px] px-[8px]',
        'text-body03',
        'border-solid border-b-[1px] border-blue-400',
      )}
    >
      <Search />
      <span className='text-white'>검색</span>
    </Link>
  )
}

export default SearchButton
