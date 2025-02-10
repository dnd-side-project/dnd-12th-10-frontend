import { cn } from '@/utils/cn'
import Image from 'next/image'
import Button from '@/components/Button'
//Todo: Icon컴포넌트로 변경
import SubImage from '@/assets/images/sub-image.png'
import ClipBoard from '@/assets/icons/clipboard-export.svg'
import DocumentText from '@/assets/icons/document-text.svg'

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
  const ButtonText = roll ? '첫회고록 쓰기' : '모임 가입하기'

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
          <DocumentText className='stroke-gray-500' width={68} height={68} />
        ) : (
          <ClipBoard className='stroke-gray-500' width={68} height={68} />
        )}
        <p className='text-title01 my-2'>{mainText}</p>
        <p className='text-title03 text-gray-500 mb-6'>{subText}</p>
        <Button color={'primary'} variant={'filled'} size={'medium'}>
          {ButtonText}
        </Button>
      </div>
    </div>
  )
}
export default NoMemoList
