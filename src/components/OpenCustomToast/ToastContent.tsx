import { cn } from '@/utils/cn'
import { toast } from 'react-hot-toast'
import CloseIcon from '@/assets/icons/close-circle.svg'

interface ToastContentProps {
  message: string
  isShowCloseButton: boolean
  toastId: string
}

export const ToastContent = ({
  message,
  isShowCloseButton,
  toastId,
}: ToastContentProps) => {
  return (
    <div
      className={cn('w-[240px]', 'flex', 'items-center', {
        'justify-between': isShowCloseButton,
        'justify-center': !isShowCloseButton,
      })}
    >
      {message}
      {isShowCloseButton && (
        <button onClick={() => toast.dismiss(toastId)}>
          <CloseIcon stroke='white' />
        </button>
      )}
    </div>
  )
}
export default ToastContent
