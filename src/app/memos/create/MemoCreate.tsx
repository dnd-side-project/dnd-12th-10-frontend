'use client'

import { useState } from 'react'
import TemplateSelect from './_components/TemplateSelect'
import Editor from './_components/Editor'

const MemoCreate = () => {
  const [step, setStep] = useState<'select' | 'editor'>('select')

  if (step === 'select')
    return <TemplateSelect setNextStep={() => setStep('editor')} />

  return <Editor />
}

export default MemoCreate
