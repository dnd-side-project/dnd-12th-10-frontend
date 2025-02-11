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
      : '글은 멤버에게만 공개됩니다.'
  const subText = roll
    ? '회고록을 써보세요!'
    : isPublic
      ? '모임에 가입해 회고록을 써보세요!'
      : '모임에 가입해보세요!'
  const buttonText = roll ? '첫 회고록 쓰기' : '모임 가입하기'

  return (
    <div
      className={cn(
        'flex',
        'mt-[64px]',
        'px-6 py-11',
        'bg-[#FAF8F5]',
        'rounded-lg',
        'relative',
      )}
    >
      <Image
        src={SubImage}
        alt=''
        width={333}
        height={210}
        className='absolute bottom-11'
      />
      <div className='flex flex-col justify-center items-center my-[120px] mx-auto'>
        {isPublic ? (
          <Icon
            name='document-text'
            className='stroke-gray-500'
            width={68}
            height={68}
          />
        ) : (
          <Icon
            name='clipboard'
            className='stroke-gray-500'
            width={68}
            height={68}
          />
        )}
        <p className='text-title01 my-2'>{mainText}</p>
        <p className='text-title03 text-gray-500 mb-6'>{subText}</p>
        <Button color={'primary'} variant={'filled'} size={'medium'}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
export default NoMemoList
