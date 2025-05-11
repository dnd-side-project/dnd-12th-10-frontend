import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useRouter } from 'next/navigation'
import useRetrospectCreateMutation from '../_queries/useRetrospectCreateMutation'
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
  const { mutate, isPending } = useRetrospectCreateMutation()
  const [editor] = useLexicalComposerContext()

  const handleSubmit = () => {
    // 에디터에 작성한 내용을 html 형식으로 반환
    const htmlResult = editor
      .getEditorState()
      .read(() => $generateHtmlFromNodes(editor, null))

    // 모임 id가 존재하는 경우에만 groupId 전달
    if (title.trim()) {
      mutate(
        { title, content: htmlResult, ...(groupId ? { groupId } : {}) },
        {
          onSuccess: (data) => {
            replace(`${URL_PATH.Retrospects}/${data.retrospectId}`)
          },
        },
      )
    }
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
          onClick={handleSubmit}
        >
          <Icon name='document-download' size={20} className='stroke-0 mr-1' />
          임시저장
        </Button>
        <Button
          type='button'
          color='primary'
          variant='filled'
          size='medium'
          disabled={!title || isPending}
          onClick={handleSubmit}
        >
          발행하기
        </Button>
      </div>
    </div>
  )
}

export default SubmitHeader
