import { robotoCondense } from "../fonts"

export default function SubTitle({ children }) {
  return (
    <h1 className={`text-2xl uppercase tracking-widest ${robotoCondense.className}`}>{ children }</h1>
  )
}