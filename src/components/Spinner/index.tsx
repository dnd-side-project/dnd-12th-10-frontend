import Image from 'next/image'
import SpinnerImage from '@/assets/images/spinner.png'

const Spinner = () => {
  return (
    <Image
      src={SpinnerImage}
      alt=''
      width={50}
      height={50}
      className='animate-spin'
      style={{ animationDuration: '1.5s' }}
    />
  )
}

export default Spinner
