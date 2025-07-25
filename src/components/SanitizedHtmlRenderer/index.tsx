import DOMPurify from 'isomorphic-dompurify'
import './index.css'

const SanitizedHtmlRenderer = ({
  content,
  className = '',
  useStyle = true,
}: {
  content: string
  className?: string
  useStyle?: boolean
}) => {
  return (
    <div
      className={className + ' whitespace-pre-wrap break-words'}
      id={useStyle ? 'article-content' : ''}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  )
}

export default SanitizedHtmlRenderer
