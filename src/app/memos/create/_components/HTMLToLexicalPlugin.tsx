import { useEffect, useRef } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot, $insertNodes } from 'lexical'
import { $generateNodesFromDOM } from '@lexical/html'

const INITIAL_HTML = `<h2>Keep</h2><p><br/></p><h2>Problem</h2><p></p><h2>Try</h2>`

/** HTML을 lexical 에디터에 적용하는 플러그인 */
const HTMLToLexicalPlugin = () => {
  const [editor] = useLexicalComposerContext()
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) return

    editor.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(INITIAL_HTML, 'text/html')

      const nodes = $generateNodesFromDOM(editor, dom)

      $getRoot().select()
      $insertNodes(nodes)
    })

    isMounted.current = true
  }, [editor])

  return null
}

export default HTMLToLexicalPlugin
