import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useRouter } from 'next/navigation'
import useRetrospectCreateMutation from '../_queries/useRetrospectCreateMutation'
import useMemoCreateMutation from '../_queries/useMemoCreateMutation'
import { RetrospectCreateForm } from '../_types/retrospect'
import { URL_PATH } from '@/consts/urls'

const SubmitHeader = ({
  title,
  groupId,
}: {
  title: RetrospectCreateForm['title']
  groupId: RetrospectCreateForm['groupId']
}) => {
  const { back, replace } = useRouter()
  const { mutate: retrospectMutate, isPending: retrospectIsPending } =
    useRetrospectCreateMutation()
  const { mutate: memoRetrospectMutate, isPending: memoIsPending } =
    useMemoCreateMutation()

  const [editor] = useLexicalComposerContext()

  const handleSubmit = (
    mutateFn: ReturnType<typeof useRetrospectCreateMutation>['mutate'],
    isPending: boolean,
  ) => {
    if (!title.trim() || isPending) return

    const htmlResult = editor
      .getEditorState()
      .read(() => $generateHtmlFromNodes(editor, null))

    mutateFn(
      { title, content: htmlResult, ...(groupId ? { groupId } : {}) },
      {
        onSuccess: (data) => {
          if (mutateFn === memoRetrospectMutate) {
            alert('임시저장 되었습니다.')
          } else {
            replace(`${URL_PATH.Retrospects}/${data.retrospectId}`)
          }
        },
      },
    )
  }

  const handleRetrospectSubmit = () => {
    handleSubmit(retrospectMutate, retrospectIsPending)
  }

  const handleMemoSubmit = () => {
    handleSubmit(memoRetrospectMutate, memoIsPending)
  }

  return (
    <div
      className={cn(
        'bg-[#FEFCF9]',
        'shadow-gray',
        'h-20',
        'px-[88px]',
        'flex',
        'items-center',
        'justify-between',
      )}
    >
      <button
        type='button'
        className='flex items-center gap-x-1'
        onClick={back}
      >
        <Icon name='line-arrow-left' size={20} className='stroke-gray-600' />
        나가기
      </button>
      <div className='flex gap-2'>
        <Button
          type='button'
          color='primary'
          variant='outlined'
          size='medium'
          disabled={!title || memoIsPending}
          onClick={handleMemoSubmit}
        >
          <Icon name='document-download' size={20} className='stroke-0 mr-1' />
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
