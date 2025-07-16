'use client'
import { useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import {
  RetrospectInfoForm,
  setRetrospectInfo,
  SetStep,
} from '../../_types/retrospect'
import { INITIAL_RETROSPECT_INFO } from '../../_consts'
import RetrospectTypeSelector from './RetrospectTypeSelector'
import TemplateUsageSelector from './TemplateUsageSelector'
import TemplateSelector from './TemplateSelector'

/** 회고 유형 선택하는 화면 */
const RetrospectInfoSelect = ({
  setRetrospectInfo,
  setStep,
}: {
  setRetrospectInfo: setRetrospectInfo
  setStep: SetStep
}) => {
  const { back } = useRouter()
  const [useTemplate, setUseTemplate] = useState(false)

  const {
    control,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm<RetrospectInfoForm>({
    defaultValues: INITIAL_RETROSPECT_INFO,
  })

  const onSubmit = (data: RetrospectInfoForm) => {
    const processedData = {
      ...data,
      templateId: useTemplate ? data.templateId : null,
      groupId: data.retrospectType === 'PERSONAL' ? null : data.groupId,
    }

    setRetrospectInfo(processedData)
    setStep('EDITOR')
  }

  return (
    <form className='w-[1016px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
      {/* Header 영역 */}
      <button
        type='button'
        onClick={back}
        className='text-title01 flex items-center gap-x-1 mt-14 mb-[46px]'
      >
        <Icon name='line-arrow-left' size={20} className='stroke-gray-600' />
        템플릿 선택
      </button>
      <div className=' p-10 bg-white rounded-md'>
        <RetrospectTypeSelector watch={watch} control={control} />
        <TemplateUsageSelector setUseTemplate={setUseTemplate} />
        {useTemplate && <TemplateSelector control={control} />}
      </div>
      <div className='flex justify-center my-10'>
        <Button
          type='submit'
          color='primary'
          variant='filled'
          size='medium'
          disabled={!isValid}
          style={{ padding: '13px 34px' }}
        >
          <Icon
            name='edit'
            className='mr-2 stroke-white group-disabled:stroke-gray-400'
          />
          회고 작성하기
        </Button>
      </div>
    </form>
  )
}

export default RetrospectInfoSelect

export const RadioGridWrap = ({ children }: { children: ReactNode }) => {
  return <div className='grid grid-cols-3 gap-4 mt-5'>{children}</div>
}
