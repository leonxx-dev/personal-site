import { ReactNode } from "react"
import { robotoCondense } from "../fonts"

interface TitleProps {
  children?: ReactNode
}


export default function Title({ children }: TitleProps) {
  return (
    <h1 className={`text-7xl font-bold tracking-tight ${robotoCondense.className}`}>{ children }</h1>
  )
}