'use client'

import { useState, useEffect } from 'react'
import TemplateSelect from './_components/TemplateSelect'
import Editor from './_components/Editor'
import { RetrospectInfoForm } from './_types/retrospect'
import { INITIAL_RETROSPECT_INFO } from './_consts'
import useGetMemo from './_queries/useGetMemo'

const RetrospectCreate = ({ memoId }: { memoId: number | null }) => {
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
  }, [isSuccess, data])

  // 초기 진입 시에는 템플릿 선택 화면 노출
  if (!retrospectInfo.retrospectType)
    return <TemplateSelect setRetrospectInfo={setRetrospectInfo} />

  return (
    <Editor
      retrospectInfo={retrospectInfo}
      memoId={memoId || null}
      initialTitle={data?.title || ''}
      initialContent={data?.content || ''}
    />
  )
}

export default RetrospectCreate
