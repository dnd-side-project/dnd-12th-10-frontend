import { useRef } from 'react'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useRouter } from 'next/navigation'
import type {
  MemoCreateForm,
  RetrospectCreateForm,
} from '../../_types/retrospect'
import MemoSaveButton from './MemoSaveButton'
import RetrospectSubmitButton from './RetrospectSubmitButton'

interface Props {
  title: RetrospectCreateForm['title']
  groupId: RetrospectCreateForm['groupId']
  templateId: MemoCreateForm['templateId']
  initMemoId: number | null
  isRetrospectUpdate: boolean
}

const SubmitHeader = ({
  title,
  groupId,
  templateId,
  initMemoId,
  isRetrospectUpdate,
}: Props) => {
  const [editor] = useLexicalComposerContext()
  const memoId = useRef(initMemoId)
  const { back } = useRouter()
  const hasTitle = !(title.trim().length > 0)
  const basePayload = {
    title,
    content: editor
      .getEditorState()
      .read(() => $generateHtmlFromNodes(editor, null)),
    ...(groupId ? { groupId } : {}),
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
        <MemoSaveButton
          memoId={memoId}
          templateId={templateId}
          basePayload={basePayload}
          hasTitle={hasTitle}
        />
        <RetrospectSubmitButton
          retrospectId={memoId.current}
          templateId={templateId}
          basePayload={basePayload}
          hasTitle={hasTitle}
          isUpdating={isRetrospectUpdate}
        />
      </div>
    </div>
  )
}

export default SubmitHeader
