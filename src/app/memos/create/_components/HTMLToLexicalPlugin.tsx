import { useEffect, useRef } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot, $insertNodes } from 'lexical'
import { $generateNodesFromDOM } from '@lexical/html'

/** HTML을 lexical 에디터에 적용하는 플러그인 */
const HTMLToLexicalPlugin = ({ preset }: { preset: string }) => {
  const [editor] = useLexicalComposerContext()
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) return

    editor.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(preset, 'text/html')

      const nodes = $generateNodesFromDOM(editor, dom)

      $getRoot().select()
      $insertNodes(nodes)
    })

    isMounted.current = true
  }, [editor, preset])

  return null
}

export default HTMLToLexicalPlugin
