import React from 'react'
import { Control, Controller } from 'react-hook-form'
import type { RetrospectInfoForm } from '../../_types/retrospect'
import Switch from '@/components/Switch'
import { RadioGridWrap } from '.'
import RadioButton from '../RadioButton'
import useGetTemplateList from '../../_queries/useGetTemplateList'

interface Props {
  control: Control<RetrospectInfoForm>
  templateCategory: 'METHOD' | 'ROLE'
  setTemplateCategory: React.Dispatch<React.SetStateAction<'METHOD' | 'ROLE'>>
}

/**
 * 회고 템플릿 선택 영역
 */
const TemplateUsageSelector = ({
  control,
  templateCategory,
  setTemplateCategory,
}: Props) => {
  const { data: templateList } = useGetTemplateList()

  return (
    <>
      <h2 className='mt-[50px] text-title01 mb-0.5'>템플릿을 선택해주세요.</h2>
      <Switch
        options={{ METHOD: '회고 방식별', ROLE: '직무별' }}
        onChange={(value) => {
          if (value === 'METHOD' || value === 'ROLE') {
            setTemplateCategory(value)
          }
        }}
        value={templateCategory}
      />
      <RadioGridWrap>
        {templateList?.map(({ templateId, templateName, preset }) => (
          <Controller
            key={`template-${templateId}`}
            control={control}
            name='templateId'
            rules={{ required: true }}
            render={({ field }) => (
              <RadioButton
                title={templateName}
                description={preset}
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
