'use client'
import React from 'react'
import { cn } from '@/utils/cn'
import { Controller, useForm } from 'react-hook-form'
import useSignupMutation from './_querys/useSignupMutation'
import { UserCreateForm as UserCreateFormType } from './_types'

import Button from '@/components/Button'
import FormField from '@/components/FormField'
import SelectBox from '@/components/SelectBox'
import ChipButton from '@/components/ChipButton'
import LimitedInput from '@/components/LimitedInput'
import { JOB_LIST } from './_consts/jobList'
import { KEYWORD_LIST } from '@/consts/keywordList'
import useUserDataQuery from '@/querys/useUserDataQuery'

const MAX_LENGTH = 10

const SignupContainer = () => {
  const { userData } = useUserDataQuery()

  const { signupMutation, isPending } = useSignupMutation()
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm<UserCreateFormType>({
    defaultValues: {
      nickname: '',
      job: '',
      featureKeywordList: [],
    },
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value.length > MAX_LENGTH) {
      setValue('nickname', value.slice(0, MAX_LENGTH))
    }
  }

  const onSubmit = async (data: UserCreateFormType) => {
    signupMutation(data)
  }

  return (
    <div className={cn('flex', 'flex-col', 'w-full h-full', 'overflow-auto')}>
      <div className='text-title01 mb-10'>
        <div>{userData?.nickname}님! 안녕하세요.</div>
        <div>마지막으로 추가 정보 입력을 부탁드려요!</div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          'h-full',
          'flex',
          'flex-col',
          'gap-10',
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
            {...register('nickname', {
              required: true,
              maxLength: MAX_LENGTH,
              onChange: handleInput,
            })}
          />
        </FormField>
        <FormField fieldTitle='현재 어떤 직무이신가요?' required={true}>
          <Controller
            control={control}
            name='job'
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <SelectBox
                options={JOB_LIST}
                placeholder='직무를 선택해주세요.'
                onChange={onChange}
              />
            )}
          />
        </FormField>
        <FormField
          fieldTitle='관심있는 키워드를 선택해주세요.'
          required={false}
        >
          <div className='flex flex-wrap gap-2 pb-[2px]'>
            <div className='flex flex-wrap gap-2'>
              {KEYWORD_LIST.map((keyword, index) => (
                <ChipButton
                  key={`tag-${index}`}
                  label={keyword}
                  {...register('featureKeywordList')}
                  value={keyword}
                />
              ))}
            </div>
          </div>
        </FormField>
        <Button
          type='submit'
          color='primary'
          variant='filled'
          size='large'
          disabled={!isValid || isPending}
          style={{ marginTop: 'auto' }}
        >
          {isPending ? '요청 중..' : ' 가입 완료'}
        </Button>
      </form>
    </div>
  )
}

export default SignupContainer
