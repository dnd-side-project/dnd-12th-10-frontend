const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('클립보드에 복사되었습니다.')
  } catch (err) {
    console.error('클립보드 복사 실패:', err)
  }
}

export default copyToClipboard
