/** 홈 페이지 각 섹션의 타이틀 영역 */
const SectionHeader = ({
  title,
  description,
}: {
  title: string
  description?: string
}) => {
  return (
    <div className='mb-6'>
      <h2 className='text-title01 text-gray-800'>{title}</h2>
      {description && (
        <p className='mt-1 text-gray-700 text-body01'>{description}</p>
      )}
    </div>
  )
}

export default SectionHeader
