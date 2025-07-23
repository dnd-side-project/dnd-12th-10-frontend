import Button from '@/components/Button'
import anyTrue from '@/utils/anyTrue'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import type { MutationResponseUnion } from '@/app/retrospects/create/[[...memoId]]/_types/retrospect'
import openCustomToast from '@/utils/openCustomToast'
import handleSubmit from './handleSubmit'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'
import { BasePayload } from './types'
import useMemoCreateMutation from '@/app/retrospects/create/[[...memoId]]/_queries/useMemoCreateMutation'
import useMemoUpdateMutation from '@/app/retrospects/create/[[...memoId]]/_queries/useMemoUpdateMutation'
import { RefObject } from 'react'

interface MemoSaveButtonProps {
  hasTitle: boolean
  memoId: RefObject<number | null>
  basePayload: () => BasePayload
  templateId: number
}

const MemoSaveButton = ({
  hasTitle,
  memoId,
  basePayload,
  templateId,
}: MemoSaveButtonProps) => {
  const invalidateQueries = useInvalidateQueries()
  const { mutate: memoMutate, isPending: memoCreateIsPending } =
    useMemoCreateMutation()
  const { mutate: memoUpdate, isPending: memoUpdateIsPending } =
    useMemoUpdateMutation()

  const isDisabled = anyTrue(hasTitle, memoCreateIsPending, memoUpdateIsPending)
  const handleMemoSubmit = () => {
    const memoMutationOnSuccess = async (data: MutationResponseUnion) => {
      if ('memoId' in data) {
        memoId.current = data.memoId
        await invalidateQueries(['MyMemoList'])
        await invalidateQueries(['memo', data.memoId])
      }
      openCustomToast('임시저장 되었습니다.', true)
    }

    if (memoId.current) {
      handleSubmit({
        disabled: isDisabled,
        basePayload: basePayload(),
        mutateFn: memoUpdate,
        mutationType: 'memoUpdate',
        memoId: memoId.current || 0,
        onSuccess: memoMutationOnSuccess,
        templateId,
      })
    } else
      handleSubmit({
        disabled: isDisabled,
        basePayload: basePayload(),
        mutateFn: memoMutate,
        mutationType: 'memoCreate',
        onSuccess: memoMutationOnSuccess,
        templateId,
      })
  }

  return (
    <Button
      type='button'
      color='primary'
      variant='outlined'
      size='medium'
      disabled={isDisabled}
      onClick={handleMemoSubmit}
    >
      <Icon
        name='document-download'
        size={20}
        className={cn(
          'stroke-0 mr-1',
          isDisabled ? 'fill-gray-500' : 'fill-blue-500',
        )}
      />
      임시저장
    </Button>
  )
}

export default MemoSaveButton
