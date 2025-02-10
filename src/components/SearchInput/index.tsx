import { cn } from '@/utils/cn'
import Button from '../Button'
import { Icon } from '../Icon'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 검색하기 버튼 노출 여부 */
  showSearchButton?: boolean
  /** 검색 수행하는 함수 */
  onSearch: () => void
}

/**
 * 검색창 컴포넌트로, enter 키로도 검색할 수 있다.
 */
const SearchInput = ({
  showSearchButton = true,
  onSearch,
  ...restProps
}: Props) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글의 경우, composing 단계를 거치므로 이벤트가 두 번 발생한다.
    if (event.nativeEvent.isComposing) return
    if (event.key === 'Enter') onSearch()
  }

  return (
    <div className='flex gap-x-4 w-full'>
      <div
        className={cn(
          'bg-blue-50',
          'rounded-xl',
          'h-12',
          'flex',
          'items-center',
          'gap-x-2',
          'px-4',
          'flex-1',
          'hover:bg-[#0000000D]',
        )}
      >
        <Icon name='search' className='stroke-gray-500 shrink-0' />
        <input
          type='text'
          className={cn(
            'outline-none',
            'text-gray-900',
            'text-body02',
            'placeholder-gray-500',
            'bg-[transparent]',
            'w-full',
          )}
          onKeyDown={handleKeyDown}
          {...restProps}
        />
      </div>

      {showSearchButton && (
        <Button
          type='button'
          color='primary'
          size='medium'
          variant='filled'
          onClick={onSearch}
        >
          검색하기
        </Button>
      )}
    </div>
  )
}

export default SearchInput
