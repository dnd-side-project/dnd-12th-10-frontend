'use client'

import { useState } from 'react'
import TemplateSelect from './_components/TemplateSelect'
import Editor from './_components/Editor'
import { RetrospectInfoForm } from './_types/retrospect'
import { INITIAL_RETROSPECT_INFO } from './_consts'
import useGetMemo from './_queries/useGetMemo'

const RetrospectCreate = ({ memoId }: { memoId: number | null }) => {
  const { data } = useGetMemo(memoId)
  const [retrospectInfo, setRetrospectInfo] = useState<RetrospectInfoForm>(
    memoId
      ? {
          retrospectType: data?.groupId ? 'GROUP' : 'PERSONAL',
          templateId: data?.templateId || 1,
          groupId: String(data?.groupId),
        }
      : INITIAL_RETROSPECT_INFO,
  )

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
