import { RefObject, useRef } from 'react'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useRouter } from 'next/navigation'
import useRetrospectCreateMutation from '../_queries/useRetrospectCreateMutation'
import useRetrospectUpdateMutation from '../_queries/useRetrospectUpdateMutation'
import useMemoCreateMutation from '../_queries/useMemoCreateMutation'
import useMemoUpdateMutation from '../_queries/useMemoUpdateMutation'
import useDeleteMemoMutation from '@/app/_queries/useDeleteMemoMutation'
import type {
  MemoCreateForm,
  MutationResponseUnion,
  RetrospectCreateForm,
} from '../_types/retrospect'
import { URL_PATH } from '@/consts/urls'
import openCustomToast from '@/utils/openCustomToast'
import anyTrue from '@/utils/anyTrue'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

const SubmitHeader = ({
  title,
  groupId,
  templateId,
  initMemoId,
  isRetrospectUpdate,
}: {
  title: RetrospectCreateForm['title']
  groupId: RetrospectCreateForm['groupId']
  templateId: MemoCreateForm['templateId']
  initMemoId: number | null
  isRetrospectUpdate: boolean
}) => {
  const [editor] = useLexicalComposerContext()
  const memoId = useRef(initMemoId)
  const { back, replace } = useRouter()
  const invalidateQueries = useInvalidateQueries()
  const { mutate: retrospectMutate, isPending: retrospectCreateIsPending } =
    useRetrospectCreateMutation()
  const { mutate: retrospectUpdate, isPending: retrospectUpdateIsPending } =
    useRetrospectUpdateMutation()
  const { mutate: memoMutate, isPending: memoCreateIsPending } =
    useMemoCreateMutation()
  const { mutate: memoUpdate, isPending: memoUpdateIsPending } =
    useMemoUpdateMutation()
  const { mutate: deleteMemo } = useDeleteMemoMutation()

  const retrospectMutationOnSuccess = (data: MutationResponseUnion) => {
    if (memoId.current) deleteMemo(memoId.current)
    if ('retrospectId' in data)
      replace(`${URL_PATH.Retrospects}/${data.retrospectId}`)
  }

  const retrospectUpdateOnSuccess = async (data: MutationResponseUnion) => {
    if ('retrospectId' in data) {
      await invalidateQueries(['getRetrospect', String(data.retrospectId)])
      replace(`${URL_PATH.Retrospects}/${data.retrospectId}`)
    }
  }

  const memoMutationOnSuccess = async (
    memoId: RefObject<number | null>,
    data: MutationResponseUnion,
  ) => {
    if ('memoId' in data) {
      memoId.current = data.memoId
      await invalidateQueries(['MyMemoList'])
      await invalidateQueries(['memo', data.memoId])
    }
    openCustomToast('임시저장 되었습니다.', true)
  }

  const handleSubmit = (
    mutateFn: ReturnType<
      | typeof useRetrospectCreateMutation
      | typeof useRetrospectUpdateMutation
      | typeof useMemoCreateMutation
      | typeof useMemoUpdateMutation
    >['mutate'],
    isPending: boolean,
  ) => {
    if (!title.trim() || isPending) return

    const htmlResult = editor
      .getEditorState()
      .read(() => $generateHtmlFromNodes(editor, null))

    const basePayload = {
      title,
      content: htmlResult,
      ...(groupId ? { groupId } : {}),
    }

    const onSuccessHandler = (data: MutationResponseUnion) => {
      if (mutateFn === retrospectMutate)
        return retrospectMutationOnSuccess(data)
      if (mutateFn === retrospectUpdate) return retrospectUpdateOnSuccess(data)
      return memoMutationOnSuccess(memoId, data)
    }

    if (mutateFn === retrospectMutate) {
      mutateFn(basePayload, { onSuccess: onSuccessHandler })
    }

    if (mutateFn === retrospectUpdate) {
      mutateFn(
        { ...basePayload, retrospectId: memoId.current || 0 },
        { onSuccess: onSuccessHandler },
      )
    }

    if (mutateFn === memoMutate) {
      mutateFn({ ...basePayload, templateId }, { onSuccess: onSuccessHandler })
    }

    if (mutateFn === memoUpdate) {
      mutateFn(
        {
          ...basePayload,
          templateId,
          memoId: memoId.current || 0,
        },
        { onSuccess: onSuccessHandler },
      )
    }
  }

  const handleRetrospectSubmit = () => {
    handleSubmit(retrospectMutate, retrospectCreateIsPending)
  }

  const handleRetrospectUpdateSubmit = () => {
    handleSubmit(retrospectUpdate, retrospectUpdateIsPending)
  }

  const handleMemoSubmit = () => {
    if (memoId.current) {
      handleSubmit(memoUpdate, memoCreateIsPending)
    } else handleSubmit(memoMutate, memoCreateIsPending)
  }

  return (
    <div className={cn('flex', 'items-center', 'justify-between', 'mb-8')}>
      <button
        type='button'
        onClick={back}
        className='text-title01 flex items-center gap-x-1'
      >
        <Icon name='line-arrow-left' size={20} className='stroke-gray-600' />
        회고 작성
      </button>
      <div className='flex gap-2'>
        <Button
          type='button'
          color='primary'
          variant='outlined'
          size='medium'
          disabled={anyTrue(!title, memoCreateIsPending, memoUpdateIsPending)}
          onClick={handleMemoSubmit}
        >
          <Icon
            name='document-download'
            size={20}
            className={cn(
              'stroke-0 mr-1 ',
              anyTrue(!title, memoCreateIsPending, memoUpdateIsPending)
                ? 'fill-gray-500'
                : 'fill-blue-500',
            )}
          />
          임시저장
        </Button>
        <Button
          type='button'
          color='primary'
          variant='filled'
          size='medium'
          disabled={
            !title || retrospectCreateIsPending || retrospectUpdateIsPending
          }
          onClick={
            isRetrospectUpdate
              ? handleRetrospectUpdateSubmit
              : handleRetrospectSubmit
          }
        >
          {isRetrospectUpdate ? '수정하기' : '발행하기'}
        </Button>
      </div>
    </div>
  )
}

export default SubmitHeader
