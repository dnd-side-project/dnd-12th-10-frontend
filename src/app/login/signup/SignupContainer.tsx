'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import SelectBox from '@/components/SelectBox'
import ChipButton from '@/components/ChipButton'
import LimitedInput from '@/components/LimitedInput'
import { KEYWORD_LIST } from '@/consts/keywordList'
import FormField from './_components/FormField'

import { JOB_LIST } from './_consts/jobList'
import { ALERT_MESSAGE } from './_consts/inputAlertMessage'

type AlertMessageKey = keyof typeof ALERT_MESSAGE
const MAX_LENGTH = 10

const SignupContainer = () => {
  const [alertMessage, setAlertMessage] = useState<AlertMessageKey>('NONE')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.length > MAX_LENGTH) {
      e.target.value = value.slice(0, MAX_LENGTH)
      setAlertMessage('EXCEEDS_MAX_LENGTH')
    } else {
      setAlertMessage('NONE')
    }
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
        <FormField
          fieldTitle='리브에서 사용하실 닉네임을 입력해주세요.'
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
        </FormField>
        <FormField fieldTitle='현재 어떤 직무이신가요?' required={true}>
          <SelectBox
            options={JOB_LIST}
            placeholder='직무를 선택해주세요.'
            onChange={() => {}}
          />
        </FormField>
        <FormField
          fieldTitle='관심있는 키워드를 선택해주세요.'
          required={false}
        >
          <div className='flex flex-wrap gap-2 pb-[2px]'>
            {KEYWORD_LIST.map((keyword) => (
              <ChipButton label={keyword} key={keyword} />
            ))}
          </div>
        </FormField>
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

export default SignupContainer
