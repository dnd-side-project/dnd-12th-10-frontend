'use client'

import { useState } from 'react'
import TemplateSelect from './_components/TemplateSelect'
import Editor from './_components/Editor'
import { RetrospectInfoForm } from './_types/retrospect'
import { INITIAL_RETROSPECT_INFO } from './_consts'

const RetrospectCreate = () => {
  const [retrospectInfo, setRetrospectInfo] = useState<RetrospectInfoForm>(
    INITIAL_RETROSPECT_INFO,
  )

  // 초기 진입 시에는 템플릿 선택 화면 노출
  if (!retrospectInfo.retrospectType)
    return <TemplateSelect setRetrospectInfo={setRetrospectInfo} />

  return <Editor retrospectInfo={retrospectInfo} />
}

export default RetrospectCreate
