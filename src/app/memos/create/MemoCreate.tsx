'use client'

import { useState } from 'react'
import TemplateSelect from './_components/TemplateSelect'
import Editor from './_components/Editor'
import { MemoInfoForm } from './_types/memo'
import { INITIAL_MEMO_INFO } from './_consts'

const MemoCreate = () => {
  const [memoInfo, setMemoInfo] = useState<MemoInfoForm>(INITIAL_MEMO_INFO)

  // 초기 진입 시에는 템플릿 선택 화면 노출
  if (!memoInfo.memoType) return <TemplateSelect setMemoInfo={setMemoInfo} />

  return <Editor memoInfo={memoInfo} />
}

export default MemoCreate
