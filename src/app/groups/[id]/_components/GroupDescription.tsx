export interface GroupDescriptionProps {
  description: string
}

// Todo: 모임 생성 기능에서 에디터 사용 시 해당 부분도 변경 필요 및 더보기 버튼 추가
const GroupDescription = ({ description }: GroupDescriptionProps) => {
  return (
    <div
      className={
        'text-body02 text-gray-800 bg-gray-50 whitespace-pre-wrap rounded-lg'
      }
    >
      {description}
    </div>
  )
}

export default GroupDescription
