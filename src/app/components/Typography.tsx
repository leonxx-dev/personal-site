import { ReactNode } from "react"
import { robotoCondense } from "../fonts"

interface TypographyProps {
  type?: "title" | "subtitle" | "text"
  children?: ReactNode
}

export default function Typography({ children, type }: TypographyProps) {
  if (type === "title") return (
    <h1 className={`text-7xl font-bold tracking-tight ${robotoCondense.className}`}>{ children }</h1>
  )

  if (type === "subtitle") return (
    <h2 className={`text-2xl uppercase tracking-widest ${robotoCondense.className}`}>{ children }</h2>
  )

  return (
    <p className={`text-base ${robotoCondense.className}`}>{ children }</p>
  )
}