import { ReactNode } from "react"
import { robotoCondense } from "../fonts"

interface TextProps {
  children?: ReactNode
}


export default function Text({ children }: TextProps) {
  return (
    <p className={`text-base ${robotoCondense.className}`}>{ children }</p>
  )
}