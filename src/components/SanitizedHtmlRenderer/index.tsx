import DOMPurify from 'isomorphic-dompurify'
import './index.css'

const SanitizedHtmlRenderer = ({
  content,
  className = '',
}: {
  content: string
  className?: string
}) => {
  return (
    <div
      className={className}
      id='article-content'
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  )
}

export default SanitizedHtmlRenderer
