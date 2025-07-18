import SectionTitleChip from '@/app/landing/_components/SectionTitleChip'
import Description from '@/app/landing/_components/Description'
import { RetrospectListItem } from '@/app/groups/[id]/_components/RetrospectList'
import AuthorInfo from '@/components/AuthorInfo'
import { cn } from '@/utils/cn'

const Section5 = () => {
  return (
    <section className='bg-green-50 pt-[72px] pb-[96px] px-[212px]'>
      <SectionTitleChip label='회고 모임 피드를 통한 글 공유' />
      <Description
        description={
          '다른 사람들의 회고를 참고하고\n상호 피드백을 통해 동기부여 충족'
        }
      />
      <ul
        className={cn(
          'w-[840px]',
          'bg-white',
          'rounded-lg',
          'border-1 border-gray-100',
          'mt-8 mx-auto',
          'px-[56px] pt-[52px]',
          'shadow-[0px_0px_20px_0px_#00000014]',
          'z-10',
          'relative',
        )}
      >
        <RetrospectListItem
          retrospectId={0}
          title={'채팅 전송정책 고도화 회고'}
          content={
            '✔ Keep\n회사 직원용 메신저를 혼자 개발하면서 사용자 피드백을 적극 반영해 UI 개선 작업을 성공적으로 진행했고, Flutter, Node.js, MongoDB 같은 기술들을 활용하며 많은 성장을 이뤘습니다. 특히 팀원들과 협업이 잘 이루어져 프로젝트 진행이 순조로웠던 점도 큰 성과로 느껴졌습니다.\n' +
            '\n' +
            '✔ Problem\n디자인 시스템 문서화 작업이 예상보다 오래 걸려 일정이 지연되는 상황이 있었고, 모바일 최적화 과정에서 일부 레이아웃이 깨지는 문제가 발생해 ...'
          }
          userName={'김코딩'}
          timeString={'1시간 전'}
          likeCount={10}
          commentCount={5}
          groupId={0}
          groupName={'회고 모임'}
          showBorder={false}
          isAuthor={false}
          templateId={1}
        />
      </ul>
      <ul className='mt-[-20px] mx-auto w-[620px] flex flex-col gap-5'>
        <Comment
          nickName='뚜벅이'
          timeMessage='2시간 전'
          content='기술 수택 선정 과정이 흥미롭네요! 어떤 기준으로 선정하셨나요?'
          showShadow
        />
        <Comment
          nickName='뚜벅이'
          timeMessage='2시간 전'
          content='기술 수택 선정 과정이 흥미롭네요! 어떤 기준으로 선정하셨나요?'
        />
      </ul>
    </section>
  )
}

export default Section5

const Comment = ({
  nickName,
  timeMessage,
  content,
  showShadow = false,
}: {
  nickName: string
  timeMessage: string
  content: string
  showShadow?: boolean
}) => {
  return (
    <li
      className={cn('bg-white', 'p-5', 'rounded-md', {
        'shadow-[0px_0px_20px_0px_#00000014]': showShadow,
      })}
    >
      <div className='flex items-center gap-3'>
        <AuthorInfo
          size='large'
          author={nickName}
          latestUpdateTime={timeMessage}
        />
      </div>
      <div className='ml-[42px]'>
        <p className='mt-4 text-body01 font-normal'>{content}</p>
        <div className='mt-4 flex'>
          {/*<IconWithButton iconName='like' count={19} />*/}
          <button className='text-title03 text-gray-500 ml-6 hover:text-blue-400'>
            답글
          </button>
        </div>
      </div>
    </li>
  )
}
