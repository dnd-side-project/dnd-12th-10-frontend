'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { URL_PATH } from '@/consts/urls'
import { TEMPLATE_LIST } from '@/app/_consts'
import { useRouter } from 'next/navigation'

const TemplatePage = () => {
  // Todo: api 연결 필요
  const template = TEMPLATE_LIST[0]
  const { back } = useRouter()
  return (
    <>
      <button
        className='flex items-center my-3 mx-4 text-body03 text-gray-900'
        onClick={() => {
          back()
        }}
      >
        <Icon
          name='line-arrow-left'
          className='stroke-gray-600 mr-2'
          size={20}
        />
        {/*Todo: 이후, 홈에서 입장 시 회고스페이스가 아닌 홈으로 보이는지 확인 필요*/}
        회고스페이스 / {template.title}
      </button>
      <div className='flex flex-col gap-6 py-[70px] px-[88px]'>
        <div className='flex justify-between'>
          <h1 className='text-display01'>{template.title}</h1>
          <Link href={URL_PATH.MemosCreate}>
            <Button color='primary' variant='filled' size='medium'>
              <Icon name='edit' size={20} className='stroke-white mr-2' />
              글쓰기
            </Button>
          </Link>
        </div>
        <div className='bg-gray-50 rounded-sm p-10'>{template.description}</div>
      </div>
    </>
  )
}

export default TemplatePage
