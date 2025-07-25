import { Toast, toast } from 'react-hot-toast'
import CustomToast from '@/components/CustomToast'

const openCustomToast = (
  message: string,
  isShowCloseButton: boolean,
  icon?: string,
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right' = 'top-center',
) => {
  toast(
    (t: Toast) => CustomToast({ message, isShowCloseButton, toastId: t.id }),
    {
      position,
      icon: icon,
      style: {
        borderRadius: '4px',
        padding: '12px 16px',
        background: '#303030',
        color: '#fff',
      },
    },
  )
}

export default openCustomToast

// 사용법 예시
// onClick={() => {
//   OpenCustomToast('Success', true)
// }}
