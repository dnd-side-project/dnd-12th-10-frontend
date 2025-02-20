import SectionHeader from '@/app/_components/SectionHeader'
import Link from 'next/link'
import NoMemoList from './NoMemoList'
// import MemoList from './MemoList'

const MyMemoStatus = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <SectionHeader
          title='{name}님의 회고 현황'
          description='총 0개의 회고를 작성했습니다!'
        />
        <Link href='/' className='mt-6 h-fit'>
          더보기
        </Link>
      </div>
      {/*Todo: api 연결 후 memoLength에 따라 조건부 렌더링 처리 필요 */}
      <NoMemoList />
      {/*<MemoList />*/}
    </section>
  )
}
export default MyMemoStatus
