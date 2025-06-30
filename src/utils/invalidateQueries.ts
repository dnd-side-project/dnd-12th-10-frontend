import { QueryClient } from '@tanstack/react-query'

const invalidateQueries = (
  queryClient: QueryClient,
  queryKeys: (string | number)[],
) => {
  return queryClient.invalidateQueries({
    queryKey: queryKeys,
  })
}
export default invalidateQueries
