import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import useModal from '@/hooks/useModal'
import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import HTMLToLexicalPlugin from './HTMLToLexicalPlugin'
import ToolbarPlugin from './ToolbarPlugin'

import '../_styles/index.css'
import Button from '@/components/Button'
import SubmitHeader from './SubmitHeader'
import { RetrospectInfoForm } from '../_types/retrospect'
import { Template } from '../_types/template'
import { editorTheme } from '../_consts'
import TemplateModal from './TemplateModal'
import useGetTemplate from '../_queries/useGetTemplate'

const initialConfig = {
  namespace: 'MyEditor',
  theme: editorTheme,
  onError,
  nodes: [HeadingNode, QuoteNode, LinkNode, ListNode, ListItemNode],
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: unknown) {
  console.error(error)
}

const Editor = ({
  memoId,
  retrospectInfo,
  initialTitle,
  initialContent,
}: {
  memoId: number | null
  retrospectInfo: RetrospectInfoForm
  initialTitle: string
  initialContent: string
}) => {
  // TODO: templateId 타입 수정할 것! (nullable 불가능하게)
  const { data } = useGetTemplate(retrospectInfo.templateId ?? 0)
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  // ESLint로 인한 console.log
  console.log(memoId)

  if (!data) return null

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SubmitHeader
        title={title}
        groupId={Number(retrospectInfo.groupId)}
        templateId={retrospectInfo.templateId ?? 0}
        initMemoId={memoId}
      />
      <div className='max-w-[1016px] mx-auto mt-[50px] mb-28'>
        <input
          type='text'
          className={cn(
            'text-display01',
            'w-full',
            'placeholder:text-gray-400',
            'bg-[inherit]',
            'outline-none',
          )}
          value={title}
          placeholder='제목을 입력해주세요.'
          onChange={(e) => setTitle(e.target.value)}
        />
        <TemplateInfo templateName={data.templateName} content={data.content} />
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable className='border border-gray-100 border-t-0 outline-none min-h-[591px] bg-white p-6' />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <HTMLToLexicalPlugin preset={initialContent || data.preset} />
        <ListPlugin />
      </div>
    </LexicalComposer>
  )
}

export default Editor

const TemplateInfo = ({
  templateName,
  content,
}: Pick<Template, 'templateName' | 'content'>) => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div className='bg-white rounded-sm px-2 flex gap-x-3 items-center h-12 my-6'>
        <span className='text-gray-800 text-body02 font-normal'>템플릿</span>
        <span className='text-body02'>{templateName}</span>
        <Button
          color='primary'
          variant='subtle'
          size='small'
          style={{ minWidth: 79 }}
          onClick={openModal}
        >
          <span className='text-title03 font-semibold'>예시보기</span>
        </Button>
      </div>
      <TemplateModal
        isOpen={isOpen}
        closeModal={closeModal}
        templateName={templateName}
        content={content}
      />
    </>
  )
}
