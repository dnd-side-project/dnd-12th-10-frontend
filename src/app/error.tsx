'use client'

import ErrorComponent from '@/components/Error'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <ErrorComponent errorMessage={error.message} onReset={reset} />
}
