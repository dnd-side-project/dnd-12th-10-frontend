import { useMutation } from '@tanstack/react-query'
import { leaveGroup } from '@/app/groups/[id]/_lib'
import { useRouter } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'
import OpenCustomToast from '@/utils/openCustomToast'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'

const useLeaveGroupMutation = (groupId: string) => {
  const invalidateQueries = useInvalidateQueries()
  const { replace } = useRouter()

  return useMutation({
    mutationFn: async () => await leaveGroup(groupId),
    onSuccess: () => {
      OpenCustomToast('모임에 탈퇴했습니다', true, '✅')
      invalidateQueries(['MyGroup'])
      invalidateQueries(['getGroupInfo', groupId])
      replace(URL_PATH.GroupList)
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useLeaveGroupMutation
