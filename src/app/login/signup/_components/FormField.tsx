import { PropsWithChildren } from 'react'

interface FormFieldProps {
  fieldTitle: string
  required?: boolean
}

const FormField = ({
  fieldTitle,
  required = false,
  children,
}: PropsWithChildren<FormFieldProps>) => {
  return (
    <div>
      <div className='text-title03 mb-3'>
        {fieldTitle} {required && <span className='text-orange-500'>*</span>}
      </div>
      {children}
    </div>
  )
}

export default FormField
