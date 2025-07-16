import React from 'react'
import { RadioGridWrap } from '.'
import RadioButton from '../RadioButton'

/**
 * 회고 템플릿 사용 유뮤 선택 영역
 */
const TemplateUsageSelector = ({
  setUseTemplate,
}: {
  setUseTemplate: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <>
      <h2 className='text-title01 mt-12'>작성 방식을 선택해주세요.</h2>
      <RadioGridWrap>
        <RadioButton
          name='useTemplate'
          title={'빈 템플릿으로 작성'}
          size={'small'}
          onClick={() => setUseTemplate(false)}
        />
        <RadioButton
          name='useTemplate'
          title={'템플릿으로 작성'}
          size={'small'}
          onClick={() => setUseTemplate(true)}
        />
      </RadioGridWrap>
    </>
  )
}
export default TemplateUsageSelector
