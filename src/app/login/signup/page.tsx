'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import SelectBox from '@/components/SelectBox'
import ChipButton from '@/components/ChipButton'
import LimitedInput from '@/components/LimitedInput'
import FiledWrap from './components/FiledWrap'

import { JOB_LIST } from './consts/jobList'
import { Keyword_List } from './consts/keywordList'
import { ALERT_MESSAGE } from './consts/inputAlertMessage'

type AlertMessageKey = keyof typeof ALERT_MESSAGE
const MAX_LENGTH = 10

const OnboardingPage = () => {
  const [alertMessage, setAlertMessage] = useState<AlertMessageKey>('NONE')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, MAX_LENGTH)
    e.target.value = value
    setAlertMessage(value.length === MAX_LENGTH ? 'EXCEEDS_MAX_LENGTH' : 'NONE')
  }

  return (
    <div
      className={cn(
        'flex',
        'flex-col',
        'w-full h-full',
        'mt-10',
        'overflow-auto',
      )}
    >
      <div className='text-title01 mb-10'>
        <div>name님! 안녕하세요.</div>
        <div>마지막으로 추가 정보 입력을 부탁드려요!</div>
      </div>
      <div
        className={cn(
          'flex',
          'flex-col',
          'gap-10',
          'mb-[40px]',
          'overflow-auto',
          'pr-3',
        )}
      >
        <FiledWrap
          filedTitle='리브에서 사용하실 닉네임을 입력해주세요.'
          required={true}
        >
          <LimitedInput
            multiline={false}
            maxLength={MAX_LENGTH}
            placeholder='닉네임을 입력해주세요.'
            onChange={handleInput}
            onMaxLength={() => {}}
            alertMessage={ALERT_MESSAGE[alertMessage]}
          />
        </FiledWrap>
        <FiledWrap filedTitle='현재 어떤 직무이신가요?' required={true}>
          <SelectBox options={JOB_LIST} placeholder='직무를 선택해주세요.' />
        </FiledWrap>
        <FiledWrap
          filedTitle='관심있는 키워드를 선택해주세요.'
          required={false}
        >
          <div className='flex flex-wrap gap-2 pb-[2px]'>
            {Keyword_List.map((keyword) => (
              <ChipButton label={keyword} key={keyword} />
            ))}
          </div>
        </FiledWrap>
      </div>
      <Button
        color='primary'
        variant='filled'
        size='medium'
        style={{ width: '100%', marginTop: 'auto' }}
      >
        가입 완료
      </Button>
    </div>
  )
}
export default OnboardingPage
