'use client'

import SearchInput from '@/components/SearchInput'
import useAllGroupListQuery from '@/app/groups/_queries/useAllGroupListQuery'
import { RecommendedGroupCard } from '@/app/_components/RecommendedGroupList'
import { useEffect, useState } from 'react'
import { Group } from '@/app/_types'

const GroupSearch = () => {
  const { allGroupList = [], isAllGroupListFetching } = useAllGroupListQuery()
  const [searchInput, setSearchInput] = useState('')
  const [filterData, setFilterData] = useState<Group[]>([])

  useEffect(() => {
    if (!isAllGroupListFetching) {
      setFilterData(allGroupList.reverse())
    }
  }, [allGroupList, isAllGroupListFetching])

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      return setFilterData(allGroupList)
    }
    let result = allGroupList
    const term = value.trim().toLowerCase()
    result = result.filter((group) =>
      group.groupName.toLowerCase().includes(term),
    )
    setFilterData(result)
  }

  return (
    <div>
      <h3 className='text-title01 text-gray-800 mb-6'>모임 탐색</h3>
      <SearchInput
        onChange={(event) => {
          setSearchInput(event.target.value)
        }}
        value={searchInput}
        onSearch={() => {
          handleSearch(searchInput)
        }}
        placeholder='어떤 모임을 찾고 계신가요?'
      />
      <div className='mx-auto mt-6 flex gap-4 flex-wrap'>
        {filterData.map((props) => (
          <RecommendedGroupCard key={`group-${props.groupId}`} {...props} />
        ))}
      </div>
    </div>
  )
}
export default GroupSearch
