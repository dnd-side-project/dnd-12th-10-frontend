import { useQueryClient } from '@tanstack/react-query'
import invalidateQueries from '@/utils/invalidateQueries'

const useInvalidateQueries = () => {
  const queryClient = useQueryClient()
  return (queryKeys: (string | number)[]) =>
    invalidateQueries(queryClient, queryKeys)
}

export default useInvalidateQueries
