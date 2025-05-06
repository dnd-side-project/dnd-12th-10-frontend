'use client'

import React, { useState } from 'react'
import { Icon } from '@/components/Icon'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/utils/cn'

const Section6 = () => {
  return (
    <section className='flex flex-col items-center mt-[72px] mb-20'>
      <span className='text-3xl font-semibold leading-[130%] mb-8'>FAQ</span>
      <ul className='flex flex-col gap-4 '>
        <FaqItem
          question={'회고템플릿은 주기적으로 업로드되나요?'}
          answer={
            '직무별 템플릿은 현재 직무 외에 다양한 직무가 추가될 예정입니다.\n' +
            '회고 방식별 템플릿은 원하시는 템플릿 요청이 많을 시 추가될 수 있습니다.'
          }
        />
        <FaqItem
          question={'나만의 템플릿을 직접 만들고 공유할 수 있나요?'}
          answer={
            '현재는 불가능하지만 추후 나만의 템플릿을 직접 만들 수 있는 “맞춤 템플릿” 기능이 추가될 예정입니다.'
          }
        />
        <FaqItem
          question={'내가 작성한 회고들을 정리해주나요?'}
          answer={
            '개인적으로 작성한 회고와 모임에서 작성한 회고의 통계를 보여주는 기능이 추가될 예정입니다.\n' +
            '통계에서는 내가 무슨 요일에 많이 작성했고, 몇 자 작성했는지 등의 정보가 들어갑니다.'
          }
        />
      </ul>
    </section>
  )
}

export default Section6

const FaqItem = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <li
      className={cn(
        'w-[640px]',
        'flex',
        'flex-col',
        'px-10 py-[14px]',
        'rounded-[12px]',
        'border border-gray-600',
        'shadow-[0px_4px_0px_0px_#000000]',
      )}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className='flex justify-between items-center'>
        <p className='text-title02 text-gray-900'>{question}</p>
        <motion.button
          className='h-fit w-fit flex items-center justify-center'
          animate={{ rotate: showAnswer ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name='arrow-down' className='stroke-gray-700' />
        </motion.button>
      </div>
      <AnimatePresence mode='wait'>
        {showAnswer && (
          <motion.div
            className='text-body01 text-gray-700 whitespace-pre-line'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.4, delay: 0.1 },
              },
            }}
            transition={{
              opacity: { duration: 0.2, delay: 0.2 },
              height: { duration: 0.5 },
            }}
          >
            <br />
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
