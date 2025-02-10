export interface GroupDescriptionProps {
  description: string
}

// Todo: 모임 생성 기능에서 에디터 사용 시 해당 부분도 변경 필요
const GroupDescription = ({ description }: GroupDescriptionProps) => {
  return (
    <>
      <div className='mt-14 text-title01 text-gray-800'>소개</div>
      <div
        className={`mt-6 p-6
         ${description ? 'text-body02 text-gray-800' : 'text-title02 text-gray-500 text-center'}
         bg-gray-50 whitespace-pre-wrap rounded-lg`}
      >
        {description || '아직 작성된 모임 소개글이 없습니다.'}
      </div>
    </>
  )
}

export default GroupDescription
