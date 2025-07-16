import { useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import type { RetrospectInfoForm } from '../../_types/retrospect'
import Switch from '@/components/Switch'
import { RadioGridWrap } from '.'
import RadioButton from '../RadioButton'
import useGetTemplateList from '@/app/_queries/useGetTemplateList'
import { TemplateTypeKey } from '@/app/_types/template'

interface Props {
  control: Control<RetrospectInfoForm>
}

/**
 * 회고 템플릿 선택 영역
 */
const TemplateUsageSelector = ({ control }: Props) => {
  const [currentTemplateType, setCurrentTemplateType] =
    useState<TemplateTypeKey>('METHOD')
  const { templateList = [] } = useGetTemplateList(currentTemplateType)

  const handleSelectTemplateType = (value: string) => {
    if (value === 'METHOD' || value === 'ROLE') {
      setCurrentTemplateType(value)
    }
  }

  return (
    <>
      <h2 className='mt-[50px] text-title01 mb-0.5'>템플릿을 선택해주세요.</h2>
      <Switch
        options={{ METHOD: '회고 방식별', ROLE: '직무별' }}
        onChange={handleSelectTemplateType}
        value={currentTemplateType}
      />
      <RadioGridWrap>
        {templateList.map(({ templateId, templateName, description }) => (
          <Controller
            key={`template-${templateId}`}
            control={control}
            name='templateId'
            rules={{ required: true }}
            render={({ field }) => (
              <RadioButton
                title={templateName}
                description={description}
                size={'large'}
                {...field}
                value={templateId}
              />
            )}
          />
        ))}
      </RadioGridWrap>
    </>
  )
}

export default TemplateUsageSelector
