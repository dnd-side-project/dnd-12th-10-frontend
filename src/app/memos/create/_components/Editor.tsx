import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import LexicalEditor from './LexicalEditor'

const TEMPLATE_NAME = 'KPT 템플릿'

const Editor = () => {
  return (
    <>
      {/* Header 영역 */}
      <div
        className={cn(
          'bg-[#FEFCF9]',
          'shadow-gray',
          'h-20',
          'px-[88px]',
          'flex',
          'items-center',
          'justify-between',
        )}
      >
        <button type='button' className='flex items-center gap-x-1'>
          <Icon name='line-arrow-left' size={20} className='stroke-gray-600' />
          나가기
        </button>
        <Button type='submit' color='primary' variant='filled' size='medium'>
          발행하기
        </Button>
      </div>

      <div className='max-w-[1016px] mx-auto mt-[50px] mb-28'>
        <input
          type='text'
          className='text-display01 w-full placeholder:text-gray-400 bg-[inherit] outline-none'
          placeholder='제목을 입력해주세요.'
        />

        <div className='bg-white rounded-sm px-2 flex gap-x-3 items-center h-12 my-6'>
          <span className='text-gray-800 text-body02 font-normal'>템플릿</span>
          <span className='text-body02'>{TEMPLATE_NAME}</span>
          <Button
            color='primary'
            variant='subtle'
            size='small'
            style={{ minWidth: 79 }}
          >
            <span className='text-title03 font-semibold'>예시보기</span>
          </Button>
        </div>

        <LexicalEditor />
      </div>
    </>
  )
}

export default Editor
