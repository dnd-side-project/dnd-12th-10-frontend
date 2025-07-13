import { Controller, Control, UseFormWatch } from 'react-hook-form'
import { RetrospectInfoForm } from '../../_types/retrospect'
import Switch from '@/components/Switch'
import { RadioGridWrap } from '.'
import RadioButton from '../../_components/RadioButton'
import useGetMyGroupList from '../../_queries/useGetMyGroupList'

interface Props {
  control: Control<RetrospectInfoForm>
  watch: UseFormWatch<RetrospectInfoForm>
}

/**
 * 회고 유형 선택 영역
 * @param control
 * @param watch
 */
const RetrospectTypeSelector = ({ control, watch }: Props) => {
  const { data: myGroupList } = useGetMyGroupList()
  const { retrospectType } = watch()

  return (
    <>
      {/* 회고 유형 선택 영역 */}
      <h2 className='text-title01'>작성 유형을 선택해주세요.</h2>
      <p className='text-gray-700 text-body02 font-normal mb-6'>
        모임 회고를 작성할 때는 가입한 모임 중 하나를 선택하여 진행해주세요.
      </p>
      <Controller
        render={({ field }) => (
          <Switch
            {...field}
            options={{ GROUP: '모임회고', PERSONAL: '개인회고' }}
            value={field.value}
            onChange={(value) => {
              // TODO: enum 사용
              field.onChange(value)
            }}
          />
        )}
        control={control}
        name={'retrospectType'}
      />
      {/* 회고 작성할 모임 선택 영역 ('모임' 회고일 때만 노출) */}
      {retrospectType === 'GROUP' && (
        <RadioGridWrap>
          {myGroupList?.map(({ groupId, groupName }) => (
            <Controller
              key={groupId}
              rules={{ required: retrospectType === 'GROUP' }}
              render={({ field }) => (
                <RadioButton
                  title={groupName}
                  {...field}
                  value={groupId}
                  size={'small'}
                />
              )}
              control={control}
              name='groupId'
            />
          ))}
        </RadioGridWrap>
      )}
    </>
  )
}

export default RetrospectTypeSelector
