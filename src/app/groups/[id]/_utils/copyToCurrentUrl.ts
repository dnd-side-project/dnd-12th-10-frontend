import copyToClipboard from '@/app/groups/[id]/_utils/copyToClipboard'

const copyToCurrentUrl = () => {
  const currentUrl = window.document.location.href
  copyToClipboard(currentUrl)
}

export default copyToCurrentUrl
