import { useMemoListModalStore } from '@/store/memoListModal'
import Button, { ButtonProps } from '@/components/Button'
import { PropsWithChildren } from 'react'

/** 임시저장 리스트 모달을 여는 버튼 */

const OpenMemoListModalButton = ({
  color,
  variant,
  size,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const { openModal } = useMemoListModalStore()

  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      onClick={openModal}
      {...props}
    >
      {children}
    </Button>
  )
}

export default OpenMemoListModalButton
