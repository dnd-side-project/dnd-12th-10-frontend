import { useRouter } from 'next/navigation'
import { BasePayload } from './types'
import handleSubmit from './handleSubmit'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'
import useRetrospectCreateMutation from '../../_queries/useRetrospectCreateMutation'
import useRetrospectUpdateMutation from '../../_queries/useRetrospectUpdateMutation'
import useDeleteMemoMutation from '@/app/_queries/useDeleteMemoMutation'
import Button from '@/components/Button'
import type { MutationResponseUnion } from '../../_types/retrospect'
import { URL_PATH } from '@/consts/urls'

interface RetrospectSubmitButtonProps {
  isUpdating: boolean
  hasTitle: boolean
  retrospectId: number | null
  basePayload: () => BasePayload
  templateId: number
}

const RetrospectSubmitButton = ({
  isUpdating,
  hasTitle,
  basePayload,
  retrospectId,
}: RetrospectSubmitButtonProps) => {
  const { replace } = useRouter()
  const invalidateQueries = useInvalidateQueries()
  const { mutate: retrospectMutate, isPending: retrospectCreateIsPending } =
    useRetrospectCreateMutation()
  const { mutate: retrospectUpdate, isPending: retrospectUpdateIsPending } =
    useRetrospectUpdateMutation()
  const { mutate: deleteMemo } = useDeleteMemoMutation()

  const isDisabled =
    hasTitle || retrospectCreateIsPending || retrospectUpdateIsPending

  const handleRetrospectSubmit = () => {
    const retrospectMutationOnSuccess = (data: MutationResponseUnion) => {
      if (retrospectId) deleteMemo(retrospectId)
      if ('retrospectId' in data)
        replace(`${URL_PATH.Retrospects}/${data.retrospectId}`)
    }

    handleSubmit({
      disabled: hasTitle || retrospectCreateIsPending,
      basePayload: basePayload(),
      mutateFn: retrospectMutate,
      mutationType: 'retrospectCreate',
      onSuccess: retrospectMutationOnSuccess,
    })
  }

  const handleRetrospectUpdateSubmit = () => {
    const retrospectUpdateOnSuccess = async (data: MutationResponseUnion) => {
      if ('retrospectId' in data) {
        await invalidateQueries(['getRetrospect', String(data.retrospectId)])
        await invalidateQueries(['MyRetrospect'])
        replace(`${URL_PATH.Retrospects}/${data.retrospectId}`)
      }
    }

    handleSubmit({
      disabled: hasTitle || retrospectUpdateIsPending,
      basePayload: basePayload(),
      mutateFn: retrospectUpdate,
      mutationType: 'retrospectUpdate',
      memoId: retrospectId || 0,
      onSuccess: retrospectUpdateOnSuccess,
    })
  }

  return (
    <Button
      type='button'
      color='primary'
      variant='filled'
      size='medium'
      disabled={isDisabled}
      onClick={
        isUpdating ? handleRetrospectUpdateSubmit : handleRetrospectSubmit
      }
    >
      {isUpdating ? '수정하기' : '발행하기'}
    </Button>
  )
}

export default RetrospectSubmitButton
