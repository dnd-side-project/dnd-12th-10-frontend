import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useRouter } from 'next/navigation'
import useMemoCreateMutation from '../_queries/useMemoCreateMutation'
import { MemoCreateForm } from '../_types/memo'

const SubmitHeader = ({ title }: { title: MemoCreateForm['title'] }) => {
  const { back } = useRouter()
  const { mutate } = useMemoCreateMutation()
  const [editor] = useLexicalComposerContext()

  const handleSubmit = () => {
    // 에디터에 작성한 내용을 html 형식으로 반환
    const htmlResult = editor
      .getEditorState()
      .read(() => $generateHtmlFromNodes(editor, null))

    // TODO: 모임 회고도 구현 필요 (groupId 전달)
    mutate({ title, content: htmlResult })
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
      <Button
        type='button'
        color='primary'
        variant='filled'
        size='medium'
        onClick={handleSubmit}
      >
        발행하기
      </Button>
    </div>
  )
}

export default SubmitHeader
