import { z } from 'zod'
import React, { SetStateAction } from 'react'

export type StepType = 'TEMPLATE' | 'EDITOR'
export type SetStep = React.Dispatch<React.SetStateAction<StepType>>
export type setRetrospectInfo = React.Dispatch<
  SetStateAction<RetrospectInfoForm>
>

export const retrospectInfoForm = z.object({
  retrospectType: z.enum(['GROUP', 'PERSONAL']),
  templateId: z.number().nullable(),
  groupId: z.string().nullish(),
})

export const retrospectCreateForm = z.object({
  groupId: z.number().optional(),
  title: z.string(),
  content: z.string(),
})

export const retrospectUpdateForm = retrospectCreateForm.extend({
  retrospectId: z.number(),
})

export const retrospectCreateResponse = z.object({
  retrospectId: z.number(),
})

export const memoCreateForm = retrospectCreateForm.extend({
  templateId: z.number(),
})

export const memoUpdateForm = memoCreateForm.extend({
  memoId: z.number(),
})

export const memoMutationResponse = z.object({
  memoId: z.number(),
})

export type RetrospectInfoForm = z.infer<typeof retrospectInfoForm>
export type RetrospectCreateForm = z.infer<typeof retrospectCreateForm>
export type RetrospectUpdateForm = z.infer<typeof retrospectUpdateForm>
export type RetrospectCreateResponse = z.infer<typeof retrospectCreateResponse>
export type MemoCreateForm = z.infer<typeof memoCreateForm>
export type MemoUpdateForm = z.infer<typeof memoUpdateForm>
export type MemoMutationResponse = z.infer<typeof memoMutationResponse>
export type MutationResponseUnion =
  | MemoMutationResponse
  | RetrospectCreateResponse
