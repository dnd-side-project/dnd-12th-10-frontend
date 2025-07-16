'use client'

import { useState, useEffect, ReactNode } from 'react'
import useGetMemo from './_queries/useGetMemo'
import { INITIAL_RETROSPECT_INFO } from './_consts'
import type { RetrospectInfoForm, StepType } from './_types/retrospect'
import Editor from './_components/Editor'
import RetrospectInfoSelect from './_components/RetrospectInfoSelect'

const RetrospectCreate = ({ memoId }: { memoId: number | null }) => {
  const [step, setStep] = useState<StepType>('TEMPLATE')
  const { data, isSuccess } = useGetMemo(memoId)
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
