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
import { Template } from '@/app/_types/template'
import { editorTheme } from '../_consts'
import TemplateModal from './TemplateModal'
import useGetTemplate from '@/app/_queries/useGetTemplate'

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
  id,
  retrospectInfo,
  initialTitle,
  initialContent,
  isRetrospectUpdate,
}: {
  id: number | null
  retrospectInfo: RetrospectInfoForm
  initialTitle: string
  initialContent: string
  isRetrospectUpdate: boolean
}) => {
  // TODO: templateId 타입 수정할 것! (nullable 불가능하게)
  const {
    template = { templateName: '', content: '', preset: '' },
    isTemplateFetching,
  } = useGetTemplate(retrospectInfo.templateId)
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  if (isTemplateFetching) return null

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className='max-w-[1016px] mx-auto mb-8 mt-[56px]'>
        <SubmitHeader
          title={title}
          groupId={Number(retrospectInfo.groupId)}
          templateId={retrospectInfo.templateId ?? 0}
          initMemoId={isRetrospectUpdate ? null : id}
          isRetrospectUpdate={isRetrospectUpdate}
        />
        <div className='bg-white py-6 px-10 rounded-md'>
          {template.templateName && (
            <TemplateInfo
              templateName={template.templateName}
              content={template?.content}
            />
          )}
          <input
            type='text'
            className={cn(
              'text-title01',
              'w-full',
              'mt-4 mb-6',
              'px-4 py-[11px]',
              'placeholder:text-gray-400',
              'outline-none',
              'border border-gray-100',
              'rounded-sm',
            )}
            value={title}
            placeholder='제목을 입력해주세요.'
            onChange={(e) => setTitle(e.target.value)}
          />

          <ToolbarPlugin />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className='border border-gray-100 border-t-0 outline-none min-h-[591px] bg-white p-6' />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <HTMLToLexicalPlugin preset={initialContent || template.preset} />
          <ListPlugin />
        </div>
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
      <div className='bg-white rounded-sm px-2 flex gap-x-3 items-center h-12'>
        <span className='text-gray-800 text-body02 font-normal'>템플릿</span>
        <span className='text-body02'>{templateName}</span>
        <Button
          color='primary'
          variant='subtle'
          size='small'
          style={{ minWidth: 79 }}
          onClick={openModal}
        >
          <span className='text-title03 font-semibold'>가이드 보기</span>
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
