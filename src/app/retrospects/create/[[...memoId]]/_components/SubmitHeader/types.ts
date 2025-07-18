import { MutationResponseUnion } from '../../_types/retrospect'
import useRetrospectCreateMutation from '../../_queries/useRetrospectCreateMutation'
import useRetrospectUpdateMutation from '../../_queries/useRetrospectUpdateMutation'
import useMemoCreateMutation from '../../_queries/useMemoCreateMutation'
import useMemoUpdateMutation from '../../_queries/useMemoUpdateMutation'

export type BasePayload = {
  title: string
  content: string
  groupId?: number
}

interface BaseProps {
  disabled: boolean
  basePayload: BasePayload
  onSuccess: (data: MutationResponseUnion) => void
}

// 각 mutation 타입별로 별도의 인터페이스 정의
interface RetrospectCreateParams extends BaseProps {
  mutateFn: ReturnType<typeof useRetrospectCreateMutation>['mutate']
  mutationType: 'retrospectCreate'
}

interface RetrospectUpdateParams extends BaseProps {
  mutateFn: ReturnType<typeof useRetrospectUpdateMutation>['mutate']
  mutationType: 'retrospectUpdate'
  memoId: number
}

interface MemoCreateParams extends BaseProps {
  mutateFn: ReturnType<typeof useMemoCreateMutation>['mutate']
  mutationType: 'memoCreate'
  templateId: number
}

interface MemoUpdateParams extends BaseProps {
  mutateFn: ReturnType<typeof useMemoUpdateMutation>['mutate']
  mutationType: 'memoUpdate'
  memoId: number
  templateId: number
}

export type HandleSubmitParams =
  | RetrospectCreateParams
  | RetrospectUpdateParams
  | MemoCreateParams
  | MemoUpdateParams
