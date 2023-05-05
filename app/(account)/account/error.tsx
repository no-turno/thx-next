"use client"

export default function AccountError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong at /account!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
