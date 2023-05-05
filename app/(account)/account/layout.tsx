import "@app/globals.css"
import { withFontVariable } from "@root/lib/fonts"
import { accountLayoutMetadata } from "@root/lib/meta"

export const metadata = accountLayoutMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={withFontVariable(["bg-white"])}>{children}</body>
    </html>
  )
}
