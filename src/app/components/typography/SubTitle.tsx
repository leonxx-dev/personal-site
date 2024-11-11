import { ReactNode } from "react"
import { robotoCondense } from "../fonts"

interface SubtitleProps {
  children?: ReactNode
}

export default function SubTitle({ children }: SubtitleProps) {
  return (
    <h2 className={`text-2xl uppercase tracking-widest ${robotoCondense.className}`}>{ children }</h2>
  )
}