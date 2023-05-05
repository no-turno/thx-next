"use client"

export default function RegistrationError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong at /registration!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
