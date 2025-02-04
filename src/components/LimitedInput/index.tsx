'use client'

import { cn } from '@/utils/cn'
import { useState } from 'react'

const DEFAULT_MAX_LENGTH = 10

interface BaseProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  /** 최대 제한 글자수 */
  maxLength?: number
  /** 에러 문구 */
  alertMessage?: string
  /** 글자 수 초과 시 수행할 함수 */
  onMaxLength?: () => void
}

type Props = BaseProps &
  (
    | {
        multiline: true
        onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
      }
    | {
        multiline: false
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
      }
  )

/**
 * 글자 수 제한이 있는 입력 컴포넌트로 `multiline` prop을 지정하여
 * input 또는 textfield를 사용할 수 있다.
 */
const LimitedInput = ({
  maxLength = DEFAULT_MAX_LENGTH,
  alertMessage,
  onMaxLength,
  ...props
}: Props) => {
  const [count, setCount] = useState(0)
  const { multiline, ...restProps } = props

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    props.onChange?.(e)

    if (e.target.value.length > maxLength) {
      onMaxLength?.()
      setCount(maxLength)
    } else {
      setCount(e.target.value.length)
    }
  }

  return (
    <>
      <div
        className={cn(
          'border',
          'border-gray-900',
          'shadow-black',
          'px-6 py-[19px]',
          'rounded-[10px]',
          'flex items-center',
          'justify-between',
          'gap-x-2',
          'hover:bg-[#0000000D]',
          { 'h-14': !multiline },
          { 'items-end flex-col': multiline },
        )}
      >
        {multiline ? (
          <textarea
            className={cn(
              'outline-none',
              'text-gray-900',
              'text-body02',
              'placeholder-gray-700',
              'resize-none',
              'overflow-y-auto',
              'h-[118px]',
              'bg-[transparent]',
              'w-full',
            )}
            {...restProps}
            onChange={handleChange}
          />
        ) : (
          <input
            type='text'
            className={cn(
              'outline-none',
              'text-gray-900',
              'text-body02',
              'placeholder-gray-700',
              'bg-[transparent]',
            )}
            {...restProps}
            onChange={handleChange}
          />
        )}
        <span className='text-gray-700 text-body02'>
          {count}/{maxLength}
        </span>
      </div>
      {alertMessage && (
        <span className='text-body02 text-orange-500 mt-2'>{alertMessage}</span>
      )}
    </>
  )
}

export default LimitedInput
