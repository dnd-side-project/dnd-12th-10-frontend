import { HandleSubmitParams } from './types'

const handleSubmit = (params: HandleSubmitParams) => {
  if (params.disabled) return

  switch (params.mutationType) {
    case 'retrospectCreate':
      params.mutateFn(params.basePayload, { onSuccess: params.onSuccess })
      break

    case 'retrospectUpdate':
      params.mutateFn(
        { ...params.basePayload, retrospectId: params.memoId },
        { onSuccess: params.onSuccess },
      )
      break

    case 'memoCreate':
      params.mutateFn(
        { ...params.basePayload, templateId: params.templateId },
        { onSuccess: params.onSuccess },
      )
      break

    case 'memoUpdate':
      params.mutateFn(
        {
          ...params.basePayload,
          templateId: params.templateId,
          memoId: params.memoId,
        },
        { onSuccess: params.onSuccess },
      )
      break
  }
}

export default handleSubmit
