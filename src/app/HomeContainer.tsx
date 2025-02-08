'use client'

import Banner from './_components/Banner'
import MyGroupList from './_components/MyGroupList'
import PopularGroupList from './_components/PopularGroupList'
import RecommendedGroupList from './_components/RecommendedGroupList'
import TemplateList from './_components/TemplateList'

const HomeContainer = () => {
  return (
    <div className='py-[72px] px-[88px]'>
      <Banner />
      <MyGroupList />
      <PopularGroupList />
      <RecommendedGroupList />
      <TemplateList />
    </div>
  )
}

export default HomeContainer
