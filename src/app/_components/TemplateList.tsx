import CardWrap from '@/components/CardWrap'
import Chip from '@/components/Chip'
import SectionHeader from './SectionHeader'
import { Template, TEMPLATE_LIST } from '../_consts'

/** 템플릿 영역 */
const TemplateList = () => {
  return (
    <section>
      <SectionHeader
        title='📌 무엇을 써야 할지 고민이라면? 템플릿으로 쉽게 시작하세요!'
        description='자유 템플릿을 포함한 12개의 템플릿의 예시를 보고 바로 회고를 시작할 수 있어요!'
      />
      <div className='flex gap-x-4'>
        {TEMPLATE_LIST.map((template) => (
          <TemplateCard key={`template-${template.id}`} {...template} />
        ))}
      </div>
    </section>
  )
}

export default TemplateList

const TemplateCard = ({ title, description, tags }: Template) => {
  return (
    <CardWrap path='/' height={182} size='medium'>
      <div className='flex flex-col justify-between'>
        <div>
          <h4 className='text-body01 font-semibold mb-2'>{title}</h4>
          <p className='text-gray-700 text-body03 font-normal line-clamp-3'>
            {description}
          </p>
        </div>

        <div className='flex gap-x-1'>
          {tags.map((tag, index) => (
            <Chip key={`tag-${index}`} size='small' color='gray' label={tag} />
          ))}
        </div>
      </div>
    </CardWrap>
  )
}
