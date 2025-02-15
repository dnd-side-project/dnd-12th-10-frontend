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

const theme = {
  code: 'editor-code',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    p: 'editor-paragraph',
  },
  image: 'editor-image',
  link: 'editor-link',
  list: {
    listitem: 'editor-listitem',
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
  },
  ltr: 'ltr',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  rtl: 'rtl',
  text: {
    bold: 'editor-text-bold',
    code: 'editor-text-code',
    italic: 'editor-text-italic',
    strikethrough: 'editor-text-strikethrough',
    underline: 'editor-text-underline',
  },
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: unknown) {
  console.error(error)
}

const LexicalEditor = () => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [HeadingNode, QuoteNode, LinkNode, ListNode, ListItemNode],
  }

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable className='border border-gray-100 border-t-0 outline-none min-h-[591px] bg-white p-6' />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <HTMLToLexicalPlugin />
        <ListPlugin />
      </LexicalComposer>
    </>
  )
}

export default LexicalEditor
