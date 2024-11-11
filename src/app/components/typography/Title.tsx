import { robotoCondense } from "../fonts"

export default function Title({ children }) {
  return (
    <h1 className={`text-7xl font-bold tracking-tight ${robotoCondense.className}`}>{ children }</h1>
  )
}