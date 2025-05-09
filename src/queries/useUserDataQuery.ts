import { useQuery } from '@tanstack/react-query'

import { getUserData } from '@/lib/user'

const useUserDataQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['UserData'],
    queryFn: getUserData,
  })

  return { userData: data, isUserDataFetching: isFetching }
}

export default useUserDataQuery
