import { useMutation } from '@tanstack/react-query'
import openCustomToast from '@/utils/openCustomToast'
import { deleteRetrospect } from '../../_lib'
import useInvalidateQueries from '@/hooks/useInvalidateQueries'
import { useRouter } from 'next/navigation'
import { URL_PATH } from '@/consts/urls'

const useDeleteRetrospectMutation = (retrospectId: string) => {
  const invalidateQueries = useInvalidateQueries()
  const { replace } = useRouter()

  return useMutation({
    mutationFn: async () => await deleteRetrospect(retrospectId),
    onSuccess: () => {
      openCustomToast('글이 삭제되었습니다', true, '✅')
      invalidateQueries(['MyRetrospect'])
      replace(URL_PATH.Retrospects)
    },
  })
}

export default useDeleteRetrospectMutation
