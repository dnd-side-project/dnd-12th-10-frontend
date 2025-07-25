import { Spinner } from '@heroui/spinner'

const Loading = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Spinner size='lg' />
    </div>
  )
}

export default Loading
