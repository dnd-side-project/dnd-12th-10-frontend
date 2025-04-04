const ERROR_MESSAGE = {
  title: '요청하신 페이지를 찾을 수 없습니다.',
  content: `입력하신 주소가 정확한지 다시 한번 확인해 주세요.`,
}

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <h2 className='text-display01 text-blue-500'>404</h2>
      <div className='flex flex-col items-center w-full'>
        <p className='text-title02'>{ERROR_MESSAGE.title}</p>
        <p className='text-body02'>{ERROR_MESSAGE.content}</p>
      </div>
    </div>
  )
}

export default NotFound
