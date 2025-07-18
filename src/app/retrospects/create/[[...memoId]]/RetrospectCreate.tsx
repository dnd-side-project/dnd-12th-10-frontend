'use client'

import { useState, useEffect, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import useGetMemo from './_queries/useGetMemo'
import { INITIAL_RETROSPECT_INFO } from './_consts'
import type { RetrospectInfoForm, StepType } from './_types/retrospect'
import Editor from './_components/Editor'
import RetrospectInfoSelect from './_components/RetrospectInfoSelect'
import useGetRetrospect from '@/app/groups/[id]/_queries/useGetRetrospect'

const RetrospectCreate = ({ memoId }: { memoId: number | null }) => {
  const searchParams = useSearchParams()
  const isRetrospectUpdate = searchParams.get('isRetrospectUpdate') === 'true'

  const { data: memo, isSuccess: memoIsSuccess } = useGetMemo(
    memoId,
    !isRetrospectUpdate,
  )
  const { data: retrospect, isSuccess: retrospectIsSuccess } = useGetRetrospect(
    String(memoId),
    isRetrospectUpdate,
  )
  const data = isRetrospectUpdate ? retrospect : memo
  const isSuccess = isRetrospectUpdate ? retrospectIsSuccess : memoIsSuccess

  const [step, setStep] = useState<StepType>('TEMPLATE')
  const [retrospectInfo, setRetrospectInfo] = useState<RetrospectInfoForm>(
    INITIAL_RETROSPECT_INFO,
  )

  useEffect(() => {
    if (!isSuccess || !data) return

    const { groupId, templateId } = data
    setRetrospectInfo({
      retrospectType: groupId ? 'GROUP' : 'PERSONAL',
      templateId: templateId,
      groupId: groupId ? String(groupId) : null,
    })
    setStep('EDITOR')
  }, [isSuccess, data])

  // 초기 진입 시에는 템플릿 선택 화면 노출
  return (
    <>
      <Step step={step} name={'TEMPLATE'}>
        <RetrospectInfoSelect
          setRetrospectInfo={setRetrospectInfo}
          setStep={setStep}
        />
      </Step>
      <Step step={step} name={'EDITOR'}>
        <Editor
          retrospectInfo={retrospectInfo}
          memoId={memoId || null}
          initialTitle={data?.title || ''}
          initialContent={data?.content || ''}
          isRetrospectUpdate={isRetrospectUpdate}
        />
      </Step>
    </>
  )
}

export default RetrospectCreate

const Step = ({
  step,
  name,
  children,
}: {
  step: StepType
  name: StepType | StepType[]
  children: ReactNode
}) => {
  const names = Array.isArray(name) ? name : [name]
  return names.includes(step) ? children : null
}
