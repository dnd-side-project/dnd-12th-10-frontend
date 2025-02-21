import Link from 'next/link'
import Chip from '@/components/Chip'
import Button from '@/components/Button'
import { Icon } from '@/components/Icon'
import { URL_PATH } from '@/consts/urls'
import { Group } from '../_types'

interface Props {
  groupName: Group['groupName']
  introduction: Group['introduction']
  categoryNames: Group['categoryNames']
  role: Group['role']
}

const GroupHeading = ({
  groupName,
  introduction,
  categoryNames,
  role,
}: Props) => {
  return (
    <>
      <div className='flex justify-between mb-6'>
        <h2 className='text-display01'>{groupName}</h2>
        {role ? <WriteButton /> : <JoinButton />}
      </div>
      <div className='flex gap-2 text-body03 text-gray-800 mb-2'>
        {categoryNames?.map((tag) => (
          <Chip key={tag} label={tag} color='gray' size='small' />
        ))}
        {/* TODO: 초대하기는 후순위 */}
        {/* {role === 'LEADER' && <InviteButton />} */}
      </div>
      <p className='text-body03 text-gray-700 mb-6'>{introduction}</p>
    </>
  )
}
export default GroupHeading

const WriteButton = () => (
  <Link href={URL_PATH.MemosCreate}>
    <Button color='primary' variant='filled' size='medium'>
      <Icon name='edit' className='stroke-white mr-2' size={20} />
      글쓰기
    </Button>
  </Link>
)

const JoinButton = () => (
  <Button color='primary' variant='filled' size='medium'>
    <Icon name='profile-add' className='stroke-white mr-2' size={20} />
    모임 가입하기
  </Button>
)

// const InviteButton = () => {
//   return (
//     <div className='flex gap-1 items-center'>
//       <Icon name='add-square-filled' className='fill-orange-500' size={20} />
//       <span className='text-title03 text-orange-500'>초대하기</span>
//     </div>
//   )
// }
