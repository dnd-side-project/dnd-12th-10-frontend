import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteGroup } from '@/app/groups/[id]/_lib'
import { useRouter } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'
import OpenCustomToast from '@/utils/openCustomToast'

const useDeleteGroupMutation = (groupId: string) => {
  const queryClient = useQueryClient()
  const { replace } = useRouter()

  return useMutation({
    mutationFn: async () => await deleteGroup(groupId),
    onSuccess: () => {
      OpenCustomToast('모임을 삭제했습니다', true, '✅')

      queryClient.invalidateQueries({ queryKey: ['MyGroup'] })
      replace(URL_PATH.GroupList)
    },
    // 공통 에러 처리 필요
    onError: (error) => console.error(error),
  })
}

export default useDeleteGroupMutation
