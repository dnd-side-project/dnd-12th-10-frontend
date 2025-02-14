import Image from 'next/image'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import SubImage from '@/assets/images/sub-image.png'

const NoMemoList = ({
  isPublic,
  roll,
}: {
  isPublic: boolean
  roll: 'LEADER' | 'MEMBER' | null
}) => {
  const mainText = roll
    ? '아직 작성된 글이 없습니다.'
    : isPublic
      ? '아직 작성된 글이 없습니다.'
      : '비공개 모임으로\n 글은 멤버에게만 공개됩니다.'
  const subText = roll
    ? '회고록을 써보세요!'
    : isPublic
      ? '모임에 가입해 회고록을 써보세요!'
      : '모임에 가입해 다양한 인사이트를 얻고 성장해보세요!'
  const buttonText = roll ? '첫 회고록 쓰기' : '모임 가입하기'

  return (
    <div
      className={cn(
        'flex',
        'mt-[64px]',
        'px-6 py-11',
        'bg-[#FAF8F5]',
        'rounded-lg',
      )}
    >
      <div className='flex flex-col justify-center items-center my-[120px] mx-auto'>
        <Image src={SubImage} alt='' width={174} height={109} />
        <p className='text-title01 my-2 whitespace-pre-wrap text-center'>
          {mainText}
        </p>
        <p className='text-title03 text-gray-500 mb-6'>{subText}</p>
        <Button color='primary' variant='subtle' size='medium'>
          <div className='flex px-2.5'>
            <Icon
              name='profile-add'
              size={20}
              className='stroke-blue-500 mr-2.5'
            />
            {buttonText}
          </div>
        </Button>
      </div>
    </div>
  )
}
export default NoMemoList
