import { Toast, toast } from 'react-hot-toast'
import ToastContent from './ToastContent'

const Index = (message: string, isShowCloseButton: boolean) => {
  toast(
    (t: Toast) => (
      <ToastContent
        message={message}
        isShowCloseButton={isShowCloseButton}
        toastId={t.id}
      />
    ),
    {
      style: {
        borderRadius: '4px',
        padding: '12px 16px',
        background: '#303030',
        color: '#fff',
      },
    },
  )
}

export default Index

// 사용법 예시
// onClick={() => {
//   OpenCustomToast('Success', true)
// }}
