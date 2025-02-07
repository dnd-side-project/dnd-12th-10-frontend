import { PropsWithChildren } from 'react'

interface FiledWrapProps {
  filedTitle: string
  required: boolean
}

const FiledWrap = ({
  filedTitle,
  required,
  children,
}: PropsWithChildren<FiledWrapProps>) => {
  return (
    <div>
      <div className='text-title03 mb-3'>
        {filedTitle} {required && <span className='text-orange-500'>*</span>}
      </div>
      {children}
    </div>
  )
}

export default FiledWrap
