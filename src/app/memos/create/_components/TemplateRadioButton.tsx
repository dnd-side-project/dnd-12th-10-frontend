import Button from '@/components/Button'
import { cn } from '@/utils/cn'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  templateName: string
  templateDetail: string
}

/** 회고 템플릿을 선택하는 radio 성격의 버튼 */
const TemplateRadioButton = ({
  templateName,
  templateDetail,
  ...props
}: Props) => {
  const showTemplateModal = () => {
    // TODO: 모달 띄우기
    alert(templateDetail)
  }

  return (
    <label className='cursor-pointer group'>
      <div
        className={cn(
          'bg-white',
          'border',
          'border-gray-100',
          'p-5',
          'rounded-lg',
          'text-body01',
          'font-semibold',
          'cursor-pointer',
          'flex',
          'flex-col',
          'group-has-[:checked]:border-blue-500',
        )}
      >
        <input type='radio' className='hidden' {...props} />
        <p>{templateName}</p>
        <div className='flex justify-end mt-2'>
          <Button
            color='primary'
            variant='subtle'
            size='small'
            style={{ minWidth: 72 }}
            onClick={showTemplateModal}
          >
            <span className='text-body03 font-semibold'>미리보기</span>
          </Button>
        </div>
      </div>
    </label>
  )
}

export default TemplateRadioButton
