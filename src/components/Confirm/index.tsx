import Portal from '../Potal'
import Button from '@/components/Button'
import { cn } from '@/utils/cn'

interface ConfirmProps {
  isOpen: boolean
  title: string
  message: string
  returnTrue: VoidFunction
  returnFalse: VoidFunction
}

const Confirm = ({
  isOpen,
  title,
  message,
  returnTrue,
  returnFalse,
}: ConfirmProps) => {
  return (
    <Portal isOpen={isOpen}>
      <div className='fixed flex inset-0 pt-4 justify-center '>
        <div
          className={cn(
            'h-fit',
            'bg-white',
            'px-6 py-4',
            'rounded-md',
            'shadow-modal',
          )}
        >
          <div className='text-gray-900 text-body02'>{title}</div>
          <p className='text-gray-700 text-body03'>{message}</p>
          <div className='mt-4 flex justify-end gap-2'>
            <Button
              style={{
                minWidth: '72px',
              }}
              color='primary'
              variant='subtle'
              size='small'
              onClick={returnFalse}
            >
              취소
            </Button>
            <Button
              style={{
                minWidth: '72px',
              }}
              color='primary'
              variant='filled'
              size='small'
              onClick={returnTrue}
            >
              확인
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Confirm
