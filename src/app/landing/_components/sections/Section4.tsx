import SectionTitleChip from '../SectionTitleChip'
import Description from '../Description'
import RetrospectCard from '../RetrospectCard'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'

const Section4 = () => {
  return (
    <section className='bg-orange-50 pt-[72px] pb-[192px] px-[212px]'>
      <SectionTitleChip label='회고 모임 생성 및 초대' />
      <Description
        description={
          '같은 관심사나 분야의 사용자들이 회고 모임을\n구성하여 자연스럽게 회고 습관화'
        }
      />
      <div className='flex justify-around mt-[102px]'>
        <RetrospectCard
          tagList={['디자이너', '프디']}
          title='프로덕트 디자이너'
          content={
            '성장의 순간을 나누고 서로의 인사이트를 빛나게 하는 디자인 회고 모임입니다'
          }
          numberOfMembers={20}
        />
        <RetrospectCard
          tagList={['개발자', '프론트엔드']}
          title='개발 회고'
          content={
            '프로젝트에서 배운 점을 되짚어 보고, 더 나은 개발자가 되는 법을 탐구합니다.'
          }
          numberOfMembers={62}
        />
        <RetrospectCard
          tagList={['디자이너']}
          title='Ctrl+Z 회고 모임'
          content={
            '돌이켜 보면 다 배움이 된다! 디자인 실수와 인사이트를 공유하는 시간'
          }
          numberOfMembers={50}
        />
      </div>
      <div className='bg-orange-300 rounded-[32px] mt-12 mx-auto px-11 py-10 w-[530px]'>
        <div className='bg-white rounded-[32px] mx-auto p-6'>
          <div className='flex items-center justify-between'>
            <p className='text-title03'>
              링크를 복사하고 멤버들을 초대해보세요!
            </p>
            <Icon name='close' size={18} />
          </div>
          <p
            className={
              'font-semibold text-body03 text-blue-500 mt-6 px-4 py-3 border-gray-900 border-1 rounded-[10px] shadow-[0px_2px_0px_0px_#000000]'
            }
          >
            https://reev.us/n/a7a5A3Pbz4t5A
          </p>
          <div
            className={cn(
              'flex',
              'items-center',
              'gap-2',
              'bg-blue-500',
              'rounded-full',
              'text-white',
              'text-[14px]',
              'font-semibold',
              'mx-auto',
              'mt-6',
              'py-3 px-7',
              'w-fit',
            )}
          >
            <Icon name='link-chain' size={18} className='stroke-white' />
            초대 링크 복사하기
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
