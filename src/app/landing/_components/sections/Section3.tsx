import SectionTitleChip from '../SectionTitleChip'
import { JOB_LIST, TEMPLATE_LIST } from '@/app/landing/_consts'
import { cn } from '@/utils/cn'
import Description from '../Description'

const Section3 = () => {
  return (
    <section className='bg-blue-50 pt-[72px] pb-[94px] px-[252px]'>
      <SectionTitleChip label='회고 템플릿 제공' />
      <Description
        description={
          '방식별, 직무별 회고 템플릿 제공으로 \n 누구나 쉽게 회고 작성 가능'
        }
      />
      <ul className='grid grid-cols-3 gap-3 mt-9'>
        {TEMPLATE_LIST.map((item, i) => (
          <ListItem
            key={item.title + i}
            title={item.title}
            description={item.description}
          />
        ))}
        {JOB_LIST.map((item, i) => (
          <ListItem key={item + i} title={item} />
        ))}
      </ul>
    </section>
  )
}

export default Section3

const ListItem = ({
  title,
  description,
}: {
  title: string
  description?: string
}) => {
  return (
    <li
      className={cn(
        'bg-white',
        'px-6',
        description ? 'py-5' : 'py-8',
        'border border-gray-100 rounded-lg',
      )}
    >
      <span className='text-title02 text-gray-900'>{title}</span>
      {description && <p className='text-gray-600 text-sm'>{description}</p>}
    </li>
  )
}
