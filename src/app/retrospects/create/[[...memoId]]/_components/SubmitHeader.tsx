import { RefObject, useRef } from 'react'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useRouter } from 'next/navigation'
import useRetrospectCreateMutation from '../_queries/useRetrospectCreateMutation'
import useMemoCreateMutation from '../_queries/useMemoCreateMutation'
import type {
  MemoCreateForm,
  MutationResponseUnion,
  RetrospectCreateForm,
} from '../_types/retrospect'
import { URL_PATH } from '@/consts/urls'
import useDeleteMemoMutation from '@/app/_queries/useDeleteMemoMutation'
import useMemoUpdateMutation from '@/app/retrospects/create/[[...memoId]]/_queries/useMemoUpdateMutation'
import openCustomToast from '@/utils/openCustomToast'
import anyTrue from '@/utils/anyTrue'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

const SubmitHeader = ({
  title,
  groupId,
  templateId,
  initMemoId,
}: {
  title: RetrospectCreateForm['title']
  groupId: RetrospectCreateForm['groupId']
  templateId: MemoCreateForm['templateId']
  initMemoId: number | null
}) => {
  const [editor] = useLexicalComposerContext()
  const memoId = useRef(initMemoId)
  const { back, replace } = useRouter()
  const invalidateQueries = useInvalidateQueries()
  const { mutate: retrospectMutate, isPending: retrospectIsPending } =
    useRetrospectCreateMutation()
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

  const memoMutationOnSuccess = (
    memoId: RefObject<number | null>,
    data: MutationResponseUnion,
  ) => {
    if ('memoId' in data) {
      memoId.current = data.memoId
      invalidateQueries(['MyMemoList'])
      invalidateQueries(['memo', data.memoId])
    }
    openCustomToast('임시저장 되었습니다.', true)
  }

  const handleSubmit = (
    mutateFn: ReturnType<
      | typeof useRetrospectCreateMutation
      | typeof useMemoCreateMutation
      | typeof useMemoUpdateMutation
    >['mutate'],
    isPending: boolean,
  ) => {
    if (!title.trim() || isPending) return

    const htmlResult = editor
      .getEditorState()
      .read(() => $generateHtmlFromNodes(editor, null))

    mutateFn(
      {
        title,
        content: htmlResult,
        templateId, // 임시저장 시에만 사용
        memoId: memoId.current || 0, // 임시저장 수정 시에만 사용
        ...(groupId ? { groupId } : {}),
      },
      {
        onSuccess: (data: MutationResponseUnion) => {
          if (mutateFn === retrospectMutate) retrospectMutationOnSuccess(data)
          else memoMutationOnSuccess(memoId, data)
        },
      },
    )
  }

  const handleRetrospectSubmit = () => {
    handleSubmit(retrospectMutate, retrospectIsPending)
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
          disabled={!title || retrospectIsPending}
          onClick={handleRetrospectSubmit}
        >
          발행하기
        </Button>
      </div>
    </div>
  )
}

export default SubmitHeader
