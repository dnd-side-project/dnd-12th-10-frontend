import React from 'react'
import { cn } from '@/utils/cn'

interface CommentInputProps {
  value: string
  setValue: (value: React.SetStateAction<string>) => void
  nickname: string
}

/** 댓글, 답글 인풋창 컴포넌트 */
const Textarea = ({ value, setValue, nickname }: CommentInputProps) => {
  return (
    <textarea
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
      className={cn(
        'w-full max-h-[200px]',
        'mt-6 py-4 px-6 ',
        'bg-gray-50',
        'rounded-md',
        'text-body01 ',
        'outline-none',
      )}
      style={{
        // 86px 기본 높이를 위해 62를 더해줌
        // 24는 text height
        height: `${value.split('\n').length * 24 + 62}px`,
      }}
      placeholder={`${nickname}님의 생각을 자유롭게 나눠보세요`}
    />
  )
}
export default Textarea
