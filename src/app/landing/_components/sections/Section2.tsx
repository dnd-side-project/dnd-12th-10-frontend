import { Icon, IconName } from '@/components/Icon'

const Section2 = () => {
  return (
    <section className='flex justify-center pt-20 pb-[74px]'>
      <Icon name='thumbs-up' size={43} className='stroke-0 mt-[252px]' />
      <Icon name='plus' size={33} className='mt-[86px] mr-[31px] ml-[27px]' />
      <div className='flex flex-col gap-16'>
        <div className='flex gap-10'>
          <CharacterWrap
            content={'회고를 작성하고 싶은데\n어떻게 해야할지 모르겠어요!'}
            iconName='landing-blue-character'
            width={162}
            height={140}
          />
          <CharacterWrap
            content={'다른 사람들은 회고를 어떻게\n하고 있는지 궁금해요!'}
            iconName='landing-group-character'
            width={156}
            height={124}
          />
          <CharacterWrap
            content={'시작은 했지만 작성을\n꾸준히 유지하는게 어려워요!'}
            iconName='landing-red-character'
            width={135}
            height={97}
          />
        </div>
        <p className='text-2xl font-medium text-center leading-[140%]'>
          회고 작성하면서 이런 고민을 해보셨다면
          <br />
          리브를 사용해보세요!
        </p>
      </div>
      <div className='flex flex-col gap-16 ml-[29px]'>
        <Icon name='polygon' size={27} className='ml-2 mt-[120px]' />
        <Icon name='group' width={90} height={50} className='mt-[44px]' />
      </div>
    </section>
  )
}

export default Section2

const CharacterWrap = ({
  content,
  iconName,
  width,
  height,
}: {
  content: string
  iconName: IconName
  width: number
  height: number
}) => {
  return (
    <div>
      <SpeechBubble content={content} />
      <div className='mx-auto mt-1 bg-black rounded-full w-[168px] h-[168px] flex justify-center items-center'>
        <Icon
          name={iconName}
          width={width}
          height={height}
          className='stroke-0'
        />
      </div>
    </div>
  )
}

const SpeechBubble = ({ content }: { content: string }) => {
  return (
    <>
      <div className='bg-blue-500 text-body03 text-white rounded-full py-4 px-[28px] whitespace-pre-line text-center'>
        {content}
      </div>
      <div
        className='mx-auto mt-[-10px] mb-[14px] bg-blue-500 [border-top-right-radius:5px] w-[20px] h-[20px]'
        style={{
          transform: 'rotate(120deg) skewX(-30deg) scaleY(0.866)',
        }}
      />
    </>
  )
}
