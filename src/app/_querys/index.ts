import { useQuery } from '@tanstack/react-query'

import {
  getMyGroupList,
  getPopularGroupList,
  getPublicTemplateList,
  getRecommendGroupList,
} from '@/app/_lib'

export const useMyGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['MyGroup'],
    queryFn: getMyGroupList,
  })

  return { myGroupList: data, isMyGroupListFetching: isFetching }
}

export const usePopularGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['PopularGroup'],
    queryFn: getPopularGroupList,
  })

  return { popularGroupList: data, isPopularGroupListFetching: isFetching }
}

export const useRecommendGroupListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['RecommendGroup'],
    queryFn: getRecommendGroupList,
  })

  return { recommendGroupList: data, isRecommendGroupListFetching: isFetching }
}

export const usePublicTemplateListQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['PublicTemplate'],
    queryFn: getPublicTemplateList,
  })

  return { publicTemplateList: data, isPublicTemplateListFetching: isFetching }
}
