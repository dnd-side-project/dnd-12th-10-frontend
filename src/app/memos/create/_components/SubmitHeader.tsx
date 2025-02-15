import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

const SubmitHeader = () => {
  const [editor] = useLexicalComposerContext()

  const handleSubmit = () => {
    // TODO: api로 결과 전송
    editor.update(() => {
      const htmlString = $generateHtmlFromNodes(editor, null)
      console.log('OUTPUT', htmlString)
    })
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
      <button type='button' className='flex items-center gap-x-1'>
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
