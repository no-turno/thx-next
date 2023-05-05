import "@app/globals.css"
import { signUpLayoutMetadata } from "@root/lib/meta"
import { withFontVariable } from "@root/lib/fonts"

export const metadata = signUpLayoutMetadata

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={withFontVariable(["bg-white"])}>{children}</body>
    </html>
  )
}
