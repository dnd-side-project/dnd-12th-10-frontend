import Button from '@/components/Button'
import { cn } from '@/utils/cn'
import { useForm } from 'react-hook-form'
import { CommentUpdateForm } from '../types'
import useUpdateCommentMutation from '../_queries/useUpdateCommentMutation'
import { useParams } from 'next/navigation'

const CommentUpdate = ({
  commentId,
  initialValue,
  onCloseInput,
}: {
  commentId: string
  initialValue: string
  onCloseInput: () => void
}) => {
  const retrospectId = useParams<{ id: string }>()?.id
  const { mutate } = useUpdateCommentMutation(retrospectId)

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<CommentUpdateForm>()

  const onSubmit = (data: CommentUpdateForm) => {
    mutate({ commentId, data }, { onSuccess: onCloseInput })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        defaultValue={initialValue}
        className={cn(
          'w-full max-h-[200px]',
          'mt-6 py-4 px-6 ',
          'bg-gray-50',
          'rounded-md',
          'text-body01 ',
          'outline-none',
        )}
        {...register('content', { required: true })}
      />
      <div className='mt-4 flex justify-end gap-2'>
        <Button
          style={{
            minWidth: '72px',
          }}
          color='primary'
          variant='subtle'
          size='small'
          onClick={onCloseInput}
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
          type='submit'
          disabled={!isDirty || !isValid}
        >
          확인
        </Button>
      </div>
    </form>
  )
}

export default CommentUpdate
