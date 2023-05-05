import clsx, { ClassValue } from "clsx"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { Inter } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const withFontVariable = (
  [...className]: ClassValue[],
  options?: {
    rewrite: {
      defaultFont: NextFontWithVariable
    }
  }
) => {
  const rewrite = options?.rewrite

  if (rewrite?.defaultFont) {
    return clsx([rewrite.defaultFont.variable], className)
  }

  return clsx([inter.variable], className)
}
