'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import SelectBox from '@/components/SelectBox'
import FormField from '@/components/FormField'
import { RetrospectInfoForm } from '../_types/retrospect'
import { INITIAL_RETROSPECT_INFO, RETROSPECT_TYPE_OPTIONS } from '../_consts'
import RetrospectTypeRadioButton from './RetrospectTypeRadioButton'
import TemplateRadioButton from './TemplateRadioButton'
import React, { SetStateAction } from 'react'
import useGetTemplateList from '../_queries/useGetTemplateList'
import useGetMyGroupList from '../_queries/useGetMyGroupList'

/** 회고 유형 선택하는 화면 */
const TemplateSelect = ({
  setRetrospectInfo,
}: {
  setRetrospectInfo: React.Dispatch<SetStateAction<RetrospectInfoForm>>
}) => {
  const { back } = useRouter()
  const { data: templateList } = useGetTemplateList()
  const { data: myGroupList } = useGetMyGroupList()

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<RetrospectInfoForm>({
    defaultValues: INITIAL_RETROSPECT_INFO,
  })

  const { retrospectType } = watch()

  const onSubmit = (data: RetrospectInfoForm) => {
    setRetrospectInfo(data)
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
          {RETROSPECT_TYPE_OPTIONS.map(({ value, label, image }) => (
            <Controller
              key={`retrospect-type-${value}`}
              name='retrospectType'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <RetrospectTypeRadioButton
                  label={label}
                  image={image}
                  {...field}
                  value={value}
                  onChange={() => {
                    // '개인' 모임 시에는 선택했던 group을 초기화
                    // TODO: enum 사용
                    if (value === 'PERSONAL') setValue('groupId', null)
                    field.onChange(value)
                  }}
                />
              )}
            />
          ))}
        </div>

        {/* 회고 작성할 모임 선택 영역 ('모임' 회고일 때만 노출) */}
        {retrospectType === 'GROUP' && (
          <FormField
            fieldTitle='회고 글을 작성할 모임을 선택해주세요.'
            required
          >
            <div className='w-[392px]'>
              <Controller
                control={control}
                name='groupId'
                rules={{ required: retrospectType === 'GROUP' }}
                render={({ field: { onChange } }) => (
                  <SelectBox
                    options={
                      myGroupList?.map(({ groupId, groupName }) => ({
                        key: String(groupId),
                        label: groupName,
                      })) ?? []
                    }
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
          {templateList?.map(({ templateId, templateName, content }) => (
            <Controller
              key={`template-${templateId}`}
              control={control}
              name='templateId'
              rules={{ required: true }}
              render={({ field }) => (
                <TemplateRadioButton
                  templateName={templateName}
                  templateContent={content}
                  {...field}
                  value={templateId}
                />
              )}
            />
          ))}
        </div>
      </div>
    </form>
  )
}

export default TemplateSelect
