import copyToClipboard from '@/app/groups/[id]/_utils/copyToClipboard'
import openCustomToast from '@/utils/openCustomToast'

const copyToCurrentUrl = async () => {
  const currentUrl = window.document.location.href
  await copyToClipboard(currentUrl)
  openCustomToast('주소가 복사되었습니다.', false, '', 'bottom-center')
}

export default copyToCurrentUrl
