import { motion } from 'framer-motion'
import { useId } from 'react'

interface SwitchProps {
  options: Record<string, string>
  value: string
  onChange: (key: string) => void
}

const Switch = ({ options, value, onChange }: SwitchProps) => {
  const uniqueId = useId()
  const keys = Object.keys(options)

  return (
    <div className='relative flex w-fit p-1 bg-gray-50 border-1 border-gray-100 rounded-full text-body02'>
      {keys.map((type) => (
        <button
          type='button'
          key={type}
          onClick={() => onChange(type)}
          className={`relative z-10 px-4 py-1 text-sm rounded-full transition-colors duration-200 ${
            value === type ? 'text-white font-semibold' : 'text-gray-700'
          }`}
        >
          {value === type && (
            <motion.div
              layoutId={`switch-indicator-${uniqueId}`}
              className='absolute inset-0 bg-blue-500  rounded-full shadow-sm'
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className='relative z-10'>{options[type]}</span>
        </button>
      ))}
    </div>
  )
}

export default Switch
