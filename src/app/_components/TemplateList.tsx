'use client'

import CardWrap from '@/components/CardWrap'
import Chip from '@/components/Chip'
import SectionHeader from './SectionHeader'

import { Template } from '../_types'
import DOMPurify from 'isomorphic-dompurify'

import { usePublicTemplateListQuery } from '@/app/_querys/usePublicTemplateListQuery'
import SliderContainer from '@/app/_components/SliderContainer'
import { URL_PATH } from '@/consts/urls'

/** 템플릿 영역 */
const TemplateList = () => {
  const { publicTemplateList = [] } = usePublicTemplateListQuery()

  return (
    <section>
      <SectionHeader
        title='📌 무엇을 써야 할지 고민이라면? 템플릿으로 쉽게 시작하세요!'
        description='자유 템플릿을 포함한 12개의 템플릿의 예시를 보고 바로 회고를 시작할 수 있어요!'
      />
      <SliderContainer mediumDeviceSlidesToShow={4} largeDeviceSlidesToShow={5}>
        {publicTemplateList.map((template) => (
          <TemplateCard key={`template-${template.templateId}`} {...template} />
        ))}
      </SliderContainer>
    </section>
  )
}

export default TemplateList

const TemplateCard = ({
  templateId,
  templateName,
  content,
  categories,
}: Template) => {
  return (
    <CardWrap
      path={`${URL_PATH.TemplateDetail}/${templateId}`}
      height={182}
      size='medium'
    >
      <div className='flex flex-col justify-between overflow-hidden'>
        <div>
          <h4 className='text-body01 font-semibold mb-2'>{templateName}</h4>
          <div
            className='text-gray-700 text-body03 font-normal line-clamp-3 whitespace-pre-wrap'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content),
            }}
          />
        </div>
        <div className='flex gap-1 text-body03 overflow-auto pb-1'>
          {categories.map((tag, index) => (
            <Chip key={`tag-${index}`} size='small' color='gray' label={tag} />
          ))}
        </div>
      </div>
    </CardWrap>
  )
}
