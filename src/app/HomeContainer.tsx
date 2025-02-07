'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button'
import EditIcon from '@/assets/icons/edit.svg'
import { URL_PATH } from '@/consts/urls'
import MainImage from '@/assets/images/main-image.png'
import MyGroupList from './_components/MyGroupList'
import PopularGroupList from './_components/PopularGroupList'
import RecommendedGroupList from './_components/RecommendedGroupList'
import TemplateList from './_components/TemplateList'

const HomeContainer = () => {
  const { push } = useRouter()

  return (
    <div className='py-[72px] px-[88px]'>
      <div className='bg-blue-50 py-8 pl-8 pr-14 rounded-lg flex justify-between items-center'>
        <div>
          <h3 className='text-title01 text-blue-600'>
            막막했던 회고가 특별해지는 순간 <br /> 비슷한 경험을 가진 동료들의
            인사이트를 만나보세요.
          </h3>
          <p className='mt-2 text-blue-900 text-body01 mb-[26px]'>
            인기 회고 모임을 찾거나, 나만의 모임을 만들어볼 수 있어요!
          </p>
          <Button
            color='primary'
            size='medium'
            variant='filled'
            onClick={() => push(URL_PATH.GroupCreate)}
          >
            <EditIcon className='stroke-white mr-2.5' width={20} height={20} />
            회고록 쓰기
          </Button>
        </div>
        <Image src={MainImage} alt='' width={320} height={176} />
      </div>

      <MyGroupList />
      <PopularGroupList />
      <RecommendedGroupList />
      <TemplateList />
    </div>
  )
}

export default HomeContainer
