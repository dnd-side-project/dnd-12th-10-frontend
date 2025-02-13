'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import MemoTypeRadioButton from './_components/MemoTypeRadioButton'
import FormField from '@/app/login/signup/_components/FormField'
import SelectBox from '@/components/SelectBox'
import { MEMO_TYPE_OPTIONS, MY_GROUPS, TEMPLATE_OPTIONS } from './_consts'
import TemplateRadioButton from './_components/TemplateRadioButton'
import { Controller, useForm } from 'react-hook-form'
import { MemoTypeSelectForm } from './_types'

const MemoCreate = () => {
  const { back } = useRouter()
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<MemoTypeSelectForm>({
    defaultValues: {
      memoType: null,
      template: '',
      group: '',
    },
  })

  const { memoType } = watch()

  const onSubmit = (data: MemoTypeSelectForm) => {
    // TODO: 글쓰기 화면으로 연결
    console.log(data)
  }

  return (
    <form className='pb-[90px]' onSubmit={handleSubmit(onSubmit)}>
      {/* Header 영역 */}
      <div
        className={cn(
          'bg-[#FEFCF9]',
          'shadow-gray',
          'h-20',
          'px-[88px]',
          'flex',
          'items-center',
          'justify-between',
        )}
      >
        <button
          type='button'
          onClick={back}
          className='flex items-center gap-x-1'
        >
          <Icon name='line-arrow-left' size={20} className='stroke-gray-600' />
          뒤로가기
        </button>
        <Button
          type='submit'
          color='primary'
          variant='filled'
          size='medium'
          disabled={!isValid}
        >
          <Icon
            name='edit'
            className='mr-2 stroke-white group-disabled:stroke-gray-400'
          />
          글쓰기
        </Button>
      </div>

      <div className='w-[800px] mx-auto pt-[72px]'>
        {/* 회고 유형 선택 영역 */}
        <h2 className='text-title01 mb-6'>회고 유형을 선택해주세요.</h2>
        <div className='flex gap-x-4 mb-4'>
          {MEMO_TYPE_OPTIONS.map(({ value, label, image }) => (
            <Controller
              key={`memo-type-${value}`}
              name='memoType'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <MemoTypeRadioButton
                  label={label}
                  image={image}
                  {...field}
                  value={value}
                  onChange={() => {
                    // '개인' 모임 시에는 선택했던 group을 초기화
                    // TODO: enum 사용
                    if (value === 'PERSONAL') setValue('group', '')
                    field.onChange(value)
                  }}
                />
              )}
            />
          ))}
        </div>

        {/* 회고 작성할 모임 선택 영역 ('모임' 회고일 때만 노출) */}
        {memoType === 'GROUP' && (
          <FormField
            fieldTitle='회고 글을 작성할 모임을 선택해주세요.'
            required
          >
            <div className='w-[392px]'>
              <Controller
                control={control}
                name='group'
                rules={{ required: memoType === 'GROUP' }}
                render={({ field: { onChange } }) => (
                  <SelectBox
                    options={MY_GROUPS}
                    placeholder='모임을 선택해주세요.'
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </FormField>
        )}

        {/* 회고 템플릿 선택 영역 */}
        <h2 className='mt-[50px] text-title01 mb-0.5'>
          템플릿을 선택해주세요.
        </h2>
        <p className='text-gray-700 text-body03 font-normal mb-6'>
          미리보기를 통해 어떤 템플릿인지 확인할 수 있습니다.
        </p>

        <div className='grid grid-cols-3 gap-4'>
          {TEMPLATE_OPTIONS.map(({ key, templateName, templateDetail }) => (
            <Controller
              key={`template-${key}`}
              control={control}
              name='template'
              rules={{ required: true }}
              render={({ field }) => (
                <TemplateRadioButton
                  templateName={templateName}
                  templateDetail={templateDetail}
                  {...field}
                  value={key}
                />
              )}
            />
          ))}
        </div>
      </div>
    </form>
  )
}

export default MemoCreate
