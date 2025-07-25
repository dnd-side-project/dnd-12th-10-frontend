import CardWrap from '@/components/CardWrap'
import { URL_PATH } from '@/consts/urls'
// import Chip from '@/components/Chip'
import { Retrospect } from '@/app/_types'
import SanitizedHtmlRenderer from '@/components/SanitizedHtmlRenderer'

const RetrospectCard = ({
  retrospectId,
  title,
  content,
}: Pick<Retrospect, 'retrospectId' | 'title' | 'content'>) => {
  return (
    <CardWrap
      path={`${URL_PATH.Retrospects}/${retrospectId}`}
      size='medium'
      height={182}
    >
      <div className='overflow-hidden'>
        {/*태그 기능  후순위*/}
        {/*<div className='flex gap-x-1 mb-2 text-body03'>*/}
        {/*  {categoryNames.map((tag, index) => (*/}
        {/*    <Chip*/}
        {/*      key={`group-tag-${index}`}*/}
        {/*      size='small'*/}
        {/*      label={tag}*/}
        {/*      color='gray'*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <h4 className='text-body01 font-semibold mb-2 line-clamp-1'>{title}</h4>
        <SanitizedHtmlRenderer
          content={content}
          className='text-body03 font-normal text-gray-600 line-clamp-4'
          useStyle={false}
        />
      </div>
    </CardWrap>
  )
}

export default RetrospectCard
