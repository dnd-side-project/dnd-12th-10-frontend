'use client'

import { Controller, useForm } from 'react-hook-form'
import FormField from '@/app/login/signup/_components/FormField'
import { cn } from '@/utils/cn'
import Button from '@/components/Button'
import LimitedInput from '@/components/LimitedInput'
import ChipButton from '@/components/ChipButton'
import { KEYWORD_LIST } from '@/consts/keywordList'
import { GroupCreateForm as GroupCreateFormType } from './_types'
import { PUBLIC_CHECKBOX_OPTIONS } from './_consts'
import Checkbox from './_components/Checkbox'
import NumberInput from './_components/NumberInput'

const MAX_GROUP_NAME_LENGTH = 10
const MAX_INTRO_LENGTH = 70
const MAX_DESCRIPTION_LENGTH = 100

const GroupCreateForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
    setValue,
  } = useForm<GroupCreateFormType>({
    defaultValues: {
      groupName: '',
      introduction: '',
      description: '',
      isPublic: true,
      numOfMembers: 10,
      tags: [],
    },
  })

  const onSubmit = (data: GroupCreateFormType) => {
    // TODO: 추후 api 연결
    console.log('data', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'bg-white',
        'border border-gray-100',
        'p-12',
        'rounded-[12px]',
        'flex flex-col',
        'gap-y-12',
      )}
    >
      <FormField fieldTitle='모임 이름' required>
        <LimitedInput
          maxLength={MAX_GROUP_NAME_LENGTH}
          multiline={false}
          placeholder='모임 이름을 입력해주세요.'
          {...register('groupName', {
            required: true,
            maxLength: MAX_GROUP_NAME_LENGTH,
            onChange: (e) => {
              if (e.target.value.length > MAX_GROUP_NAME_LENGTH)
                setValue(
                  'groupName',
                  e.target.value.slice(0, MAX_GROUP_NAME_LENGTH),
                )
            },
          })}
        />
      </FormField>

      <FormField fieldTitle='한 줄 소개' required>
        <LimitedInput
          maxLength={MAX_INTRO_LENGTH}
          multiline={false}
          placeholder='이 모임을 한 줄로 간단히 소개해주세요!'
          {...register('introduction', {
            required: true,
            maxLength: MAX_INTRO_LENGTH,
            onChange: (e) => {
              if (e.target.value.length > MAX_INTRO_LENGTH)
                setValue('groupName', e.target.value.slice(0, MAX_INTRO_LENGTH))
            },
          })}
        />
      </FormField>

      <FormField fieldTitle='모임 소개'>
        {/* TODO: 에디터로 변경 필요 */}
        <LimitedInput
          maxLength={MAX_DESCRIPTION_LENGTH}
          multiline
          placeholder='모임 소개글을 작성해주세요! 이 모임의 주제, 활동 내용, 그리고 기대하는 참여자에 대해 소개해 보세요. 이미지와 함께 소개하면 더 좋은 인상을 줄 수 있어요!'
          {...register('description', {
            maxLength: MAX_DESCRIPTION_LENGTH,
            onChange: (e) => {
              if (e.target.value.length > MAX_DESCRIPTION_LENGTH)
                setValue(
                  'groupName',
                  e.target.value.slice(0, MAX_DESCRIPTION_LENGTH),
                )
            },
          })}
        />
      </FormField>

      <FormField fieldTitle='모임 공개 설정'>
        <div
          className={cn(
            'flex',
            'justify-between',
            'border border-gray-900',
            'px-[134px]',
            'py-[26px]',
            'gap-x-[90px]',
            'shadow-black',
            'rounded-[10px]',
          )}
        >
          {PUBLIC_CHECKBOX_OPTIONS.map(
            ({ label, description, value }, index) => (
              <Controller
                control={control}
                name='isPublic'
                key={`public-check-${index}`}
                render={({ field }) => (
                  <Checkbox
                    label={label}
                    description={description}
                    checked={field.value === value}
                    onChange={() => field.onChange(value)}
                  />
                )}
              />
            ),
          )}
        </div>
      </FormField>

      <FormField fieldTitle='참여 인원 제한'>
        <Controller
          control={control}
          name='numOfMembers'
          render={({ field: { value, onChange } }) => (
            <NumberInput value={value} onChange={onChange} />
          )}
        />
      </FormField>

      <FormField fieldTitle='태그 추가'>
        <div className='flex flex-wrap gap-2'>
          {KEYWORD_LIST.map((keyword, index) => (
            <ChipButton
              key={`tag-${index}`}
              label={keyword}
              {...register('tags')}
              value={keyword}
            />
          ))}
        </div>
      </FormField>

      <div className='mx-auto mt-2'>
        <Button
          type='submit'
          color='primary'
          size='medium'
          variant='filled'
          disabled={!isValid}
        >
          모임 만들기
        </Button>
      </div>
    </form>
  )
}

export default GroupCreateForm
