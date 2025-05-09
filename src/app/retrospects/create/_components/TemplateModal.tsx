import { Icon } from '@/components/Icon'
import Modal from '@/components/Modal'
import { Template } from '../_types/template'
import DOMPurify from 'isomorphic-dompurify'

interface Props {
  isOpen: boolean
  closeModal: () => void
  templateName: Template['templateName']
  content: Template['content']
}

// TODO: 나중에 Modal을 하나의 공통 훅으로 띄울 수 있도록 리팩토링
/** 템플릿 미리보기 모달 */
const TemplateModal = ({
  isOpen,
  closeModal,
  templateName,
  content,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='max-w-[720px] flex flex-col gap-y-6'>
        <div className='w-full flex justify-between items-center text-title01'>
          {templateName}
          <button type='button' onClick={closeModal}>
            <Icon name='close' size={24} />
          </button>
        </div>
        <div
          className='bg-gray-50 rounded-sm p-5 whitespace-pre-wrap'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        />
      </div>
    </Modal>
  )
}

export default TemplateModal
